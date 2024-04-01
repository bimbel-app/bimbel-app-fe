import axios from "axios"
import { MDBIcon } from "mdb-react-ui-kit"
import { useState, useEffect } from "react"
import { Button, Form, Modal, NavLink } from "react-bootstrap"
import { useParams } from "react-router-dom"

export const Siswa = ()=>{
  
    const url = "http://127.0.0.1:8000/api/siswa/index"
    const urlEdit = `http://127.0.0.1:8000/api/siswa/edit`
    const urlDelete = `http://127.0.0.1:8000/api/siswa/delete`
    
    const [siswa, setSiswa] = useState([])
    const [siswaEdit, setSiswaEdit] = useState()
    
    const [showEdit, setShowEdit] = useState(false)
    const [showDelete, setShowDelete] = useState(false)

    const [nama, setNama] = useState()
    const [pendidikan, setPendidikan] = useState("")
    const [asalSekolah, setAsalSekolah] = useState("")
    const [alamat, setAlamat] = useState("")
    
    const handleShowEdit = async (id)=> { 
      try {
        setShowEdit(true)
        const response = await axios.get(`${url}/${id}`) //melakukan request 
        setSiswaEdit(response.data) // set data pada response ke state siswaEdit
        setNama(response.data.nama) 
        setPendidikan(response.data.pendidikan)             
        setAsalSekolah(response.data.asal_sekolah)             
        setAlamat(response.data.alamat)          
      } catch (error) {
        console.error(error)
      }
    }

    const handleShowDelete = async (id)=> {
      try {
        setShowDelete(true)
        const response = await axios.get(`${url}/${id}`)
        console.log(siswaEdit);
        setSiswaEdit(response.data)
      } catch (error) {
        console.error(error)
      }
      
    }

    const handleCloseEdit = ()=> setShowEdit(false)
    const handleCloseDelete = ()=> setShowDelete(false)
    
    const formData = new FormData()

    const editHandler = async ()=>{
      try {
        formData.append("nama", nama)
        formData.append("asal_sekolah", asalSekolah)
        formData.append("pendidikan", pendidikan)
        formData.append("alamat", alamat)
        const id = siswaEdit.id_siswa
        const response = await axios.post(`${urlEdit}/${id}`, formData)
      } catch (error) {
        console.error(error);
      }

    }

    const deleteHandler = async ()=>{
      try{
        const id = siswaEdit.id_siswa
        await axios.delete(`${urlDelete}/${id}`)
      }catch(error){
        console.error(error)
      }
    }
    useEffect(()=>{
        
        const getSiswa = async ()=>{
            try {
            const res = await axios.get(url)
            setSiswa(res.data);
            } catch (error) {
                console.error(error)
            }
        }
        
        getSiswa();
    }, [])
    return (
      <div class="card">
        {siswaEdit && (
          <Modal key={siswaEdit.id_siswa} show={showEdit} onHide={handleCloseEdit}>
          <Modal.Header closeButton>
            <Modal.Title>Edit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Nama</Form.Label>
                <Form.Control type="text" defaultValue={siswaEdit.nama}  onChange={(e)=>e.target.value === "" ? setNama(siswaEdit.nama) : setNama(e.target.value)}/>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Asal Sekolah</Form.Label>
                <Form.Control type="text" defaultValue={siswaEdit.asal_sekolah || asalSekolah} onChange={(e)=>setAsalSekolah(e.target.value)}/>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Pendidikan</Form.Label>
                <Form.Control type="text" defaultValue={siswaEdit.pendidikan || pendidikan} onChange={(e)=>setPendidikan(e.target.value)}/>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Alamat</Form.Label>
                <Form.Control type="text" defaultValue={siswaEdit.alamat || alamat} onChange={(e)=>setAlamat(e.target.value)}/>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseEdit}>
              Close
            </Button>
            <Button type="submit" variant="primary" onClick={editHandler}>
              Simpan
            </Button>
            
          </Modal.Footer>
        </Modal>
        )}
        

        <Modal show={showDelete} onHide={handleCloseDelete}>
          <Modal.Header closeButton>
            <Modal.Title>Edit</Modal.Title>
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
          <h3 class="card-title">Data Siswa</h3>
        </div>

        <div class="card-body">
          <div id="example1_wrapper" class="dataTables_wrapper dt-bootstrap4">
            <div class="row">
              <div class="col-sm-12 col-md-6">
                <div class="dt-buttons btn-group flex-wrap">
                  {" "}
                  <NavLink href="/dashboard/data_siswa/add" className="btn btn-secondary buttons-copy buttons-html5"
                    tabindex="0"
                    aria-controls="example1"
                    type="button"
                  >
                    <span>Tambah Siswa</span>
                  </NavLink>{" "}
                  <button
                    class="btn btn-secondary buttons-csv buttons-html5"
                    tabindex="0"
                    aria-controls="example1"
                    type="button"
                  >
                    <span>CSV</span>
                  </button>{" "}
                  <button
                    class="btn btn-secondary buttons-excel buttons-html5"
                    tabindex="0"
                    aria-controls="example1"
                    type="button"
                  >
                    <span>Excel</span>
                  </button>{" "}
                  <button
                    class="btn btn-secondary buttons-pdf buttons-html5"
                    tabindex="0"
                    aria-controls="example1"
                    type="button"
                  >
                    <span>PDF</span>
                  </button>{" "}
                  <button
                    class="btn btn-secondary buttons-print"
                    tabindex="0"
                    aria-controls="example1"
                    type="button"
                  >
                    <span>Print</span>
                  </button>{" "}
                  <div class="btn-group">
                    <button
                      class="btn btn-secondary buttons-collection dropdown-toggle buttons-colvis"
                      tabindex="0"
                      aria-controls="example1"
                      type="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span>Column visibility</span>
                      <span class="dt-down-arrow"></span>
                    </button>
                  </div>{" "}
                </div>
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
                        Nama
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example1"
                        rowspan="1"
                        colspan="1"
                        aria-label="Browser: activate to sort column ascending"
                      >
                        Asal Sekolah
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example1"
                        rowspan="1"
                        colspan="1"
                        aria-label="Platform(s): activate to sort column ascending"
                      >
                        Pendidikan
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example1"
                        rowspan="1"
                        colspan="1"
                        aria-label="Engine version: activate to sort column ascending"
                      >
                        Alamat
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example1"
                        rowspan="1"
                        colspan="1"
                        aria-label="CSS grade: activate to sort column ascending"
                      >
                        CSS grade
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {siswa &&
                      siswa.map((i) => {
                        return (
                          <tr key={i.id_siswa}>
                            <td className="dtr-control sorting_1" tabindex="0">
                              {i.nama}
                            </td>
                            <td>{i.asal_sekolah}</td>
                            <td>{i.pendidikan}</td>
                            <td>{i.alamat}</td>
                            <td>
                              <Button variant="warning" onClick={()=>handleShowEdit(i.id_siswa)}>
                                <MDBIcon far icon="edit" />
                              </Button>

                              <Button variant="danger" onClick={()=>handleShowDelete(i.id_siswa)}>
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
    );
}