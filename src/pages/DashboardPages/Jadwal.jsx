import { useState, useEffect } from "react";
import { Button, Form, Modal, NavLink } from "react-bootstrap";
import axios from "axios"
import { MDBIcon } from "mdb-react-ui-kit";
import { SuccessDeleteModal } from "../../component/Dashboard/SuccessDeleteModal";

export const Jadwal = ()=>{
    const url = "http://127.0.0.1:8000/api/jadwal/index"
    const urlEdit = `http://127.0.0.1:8000/api/jadwal/edit`
    const urlDelete = `http://127.0.0.1:8000/api/jadwal/delete`
    const days = ["Senin", "Selasa","Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"]
    
    const [jadwal, setJadwal] = useState([])
    const [jadwalModal, setJadwalModal] = useState() //menampung data tentor untuk edit dan delete 
    
    const [showEdit, setShowEdit] = useState(false)
    const [showDelete, setShowDelete] = useState(false)
    const [showState, setShowState] = useState(false)
    const [tanggal, setTanggal] = useState()
    const [waktu, setWaktu] = useState("")
    const [hari, setHari] = useState("")
    
    const date = new Date(tanggal)
    const dateFormat = date.toLocaleString('id-ID', {day:'numeric', month:'long', year:'numeric'})

    const handleShowEdit = async (id)=> { 
      try {
        setShowEdit(true)
        const response = await axios.get(`${url}/${id}`) //melakukan request 
        setJadwalModal(response.data) // set data pada response ke state tentorModal
        setTanggal(response.data.nama) 
        setWaktu(response.data.waktu)             
        setHari(response.data.hari)             
        console.log(response.data.id_jadwal);
      } catch (error) {
        console.error(error)
      }
    }

    const handleShowDelete = async (id)=> {
      try {
        setShowDelete(true)
        const response = await axios.get(`${url}/${id}`)
        setJadwalModal(response.data)
      } catch (error) {
        console.error(error)
      }
      
    }

    const handleCloseEdit = ()=> setShowEdit(false)
    const handleCloseDelete = ()=> setShowDelete(false)
    
    const formData = new FormData()
    
    const editHandler = async ()=>{
      try {
        formData.append("tanggal", dateFormat) //m emanggil nilai state  yang akan di kirim ke back end
        formData.append("waktu", waktu)
        formData.append("hari", hari)

        const id = jadwalModal.id_jadwal

        const response = await axios.post(`${urlEdit}/${id}`, formData)
        console.log(response);
      } catch (error) {
        console.error(error);
      }

    }

    const deleteHandler = async ()=>{
      try{
        const id = jadwalModal.id_jadwal
        await axios.delete(`${urlDelete}/${id}`)
        setShowState(true)
        setShowDelete(false)
      }catch(error){
        console.error(error)
      }
    }

    useEffect(()=>{
        const getTentor = async ()=>{
            try {
            const res = await axios.get(url)
            setJadwal(res.data);
            console.log(res.data);
            } catch (error) {
                console.error(error)
            }
        }
        
        getTentor();
    }, [])
    
    return(
<>        {showState && <SucessEditModal/>}
          {showState && <SuccessDeleteModal/>}
      <div class="card">
        <Modal show={showEdit} onHide={handleCloseEdit}>
          <Modal.Header closeButton>
            <Modal.Title>Edit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Tanggal</Form.Label>
                <Form.Control type="date" defaultValue={tanggal} onChange={(e)=>setTanggal(e.target.value)}/>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Waktu</Form.Label>
                <Form.Control type="text" defaultValue={waktu} onChange={(e)=>setWaktu(e.target.value)} />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Hari</Form.Label>
                <Form.Select id="select" value={hari} onChange={(e)=>setHari(e.target.value)} >
                {days.map((day)=>{
                console.log();
                return(
                  <option value={day}>{day}</option>
                )
                })
              }
                </Form.Select>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseEdit}>
              Close
            </Button>
            <Button variant="primary" onClick={editHandler}>
              Simpan
            </Button>
          </Modal.Footer>
        </Modal>
              
        <Modal show={showDelete} onHide={handleCloseDelete}>
          <Modal.Header closeButton>
            <Modal.Title>EditHapus</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Anda yakin ingin menghapus data ini?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseDelete}>
              Close
            </Button>
            <Button variant="danger" onClick={deleteHandler}>
              Hapus
            </Button>
          </Modal.Footer>
        </Modal>
        <div class="card-header">
          <h3 class="card-title">Data Jadwal</h3>
        </div>

        <div class="card-body">
          <div id="example1_wrapper" class="dataTables_wrapper dt-bootstrap4">
            <div class="row">
              <div class="col-sm-12 col-md-6">
                
                  {" "}
                  <NavLink
                    class="btn btn-primary p-2 my-1"
                    tabindex="0"
                    aria-controls="example1"
                    type="button"
                    href="/dashboard/data_jadwal/add"
                    
                  >
                    <span>Tambah Jadwal</span>
                  </NavLink>{" "}
                  
                
              </div>
              <div class="col-sm-12 col-md-6">
                <div id="example1_filter" class="dataTables_filter">
                  <label>
                    Search:
                    <input
                      type="search"
                      class="form-control form-control-sm"
                      placeholder=""
                      aria-controls="example1"
                    />
                  </label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <table
                  id="example1"
                  class="table table-bordered table-striped dataTable dtr-inline"
                  aria-describedby="example1_info"
                >
                  <thead>
                    <tr>
                      <th
                        class="sorting sorting_asc"
                        tabindex="0"
                        aria-controls="example1"
                        rowspan="1"
                        colspan="1"
                        aria-sort="ascending"
                        aria-label="Rendering engine: activate to sort column descending"
                      >
                        Tanggal
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example1"
                        rowspan="1"
                        colspan="1"
                        aria-label="Browser: activate to sort column ascending"
                      >
                        Waktu
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example1"
                        rowspan="1"
                        colspan="1"
                        aria-label="Platform(s): activate to sort column ascending"
                      >
                        Hari
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example1"
                        rowspan="1"
                        colspan="1"
                        aria-label="CSS grade: activate to sort column ascending"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {jadwal &&
                      jadwal.map((i) => {
                        return (
                          <tr key={i.id_jadwal}>
                            <td>{i.tanggal}</td>
                            <td>{i.waktu}</td>
                            <td>{i.hari}</td>
                            <td>
                              <Button
                                variant="warning"
                                onClick={()=>handleShowEdit(i.id_jadwal)}
                              >
                                <MDBIcon far icon="edit" />
                              </Button>

                              <Button
                                variant="danger"
                                onClick={()=>handleShowDelete(i.id_jadwal)}
                              >
                                <MDBIcon fas icon="trash" />
                              </Button>
                            </td>
                          </tr>
                        );
                      })}
                    {/* <tr >
                    <td class="dtr-control sorting_1" tabindex="0">
                      Gecko
                    </td>
                    <td>Firefox 1.0</td>
                    <td>Win 98+ / OSX.2+</td>
                    <td>1.7</td>
                    <td>A</td>
                  </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}