import axios from "axios"
import { MDBIcon } from "mdb-react-ui-kit"
import { useState, useEffect } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import { NavLink } from "react-bootstrap"

export const Tentor = ()=>{
    const url = "http://127.0.0.1:8000/api/tentor/index"
    const urlEdit = `http://127.0.0.1:8000/api/tentor/edit`
    const urlDelete = `http://127.0.0.1:8000/api/tentor/delete`
    
    const [tentor, setTentor] = useState([]);
    const [tentorModal, setTentorModal] = useState() //menampung data tentor untuk edit dan delete

    const [showEdit, setShowEdit] = useState(false)
    const [showDelete, setShowDelete] = useState(false)


    const [nama, setNama] = useState()
    const [asalSekolah, setAsalSekolah] = useState("")
    const [alamat, setAlamat] = useState("")
    const [pendidikan, setPendidikan] = useState("")
    const [pengalaman, setPengalaman] = useState("")
    const [keterangan, setKeterangan] = useState("")
    
    const handleShowEdit = async (id)=> { 
      try {
        setShowEdit(true)
        const response = await axios.get(`${url}/${id}`) //melakukan request 
        setTentorModal(response.data) // set data pada response ke state siswaEdit
        setNama(response.data.nama) 
        setAsalSekolah(response.data.asal_sekolah)             
        setAlamat(response.data.alamat)          
        setPendidikan(response.data.pendidikan)             
        setPengalaman(response.data.pengalaman)             
        setKeterangan(response.data.keterangan)             
      } catch (error) {
        console.error(error)
      }
    }

    const handleShowDelete = async (id)=> {
      try {
        setShowDelete(true)
        const response = await axios.get(`${url}/${id}`)
        setTentorModal(response.data)
        // console.log(tentorModal.id_tentor);
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
        formData.append("alamat", alamat)
        formData.append("pendidikan", pendidikan)
        formData.append("pengalaman", pengalaman)
        formData.append("keterangan", keterangan)
        const id = tentorModal.id_tentor
        await axios.post(`${urlEdit}/${id}`, formData)
      } catch (error) {
        console.error(error);
      }

    }

    const deleteHandler = async ()=>{
      try{
        const {id_tentor} = tentorModal
        await axios.delete(`${urlDelete}/${id_tentor}`)
      }catch(error){
        console.error(error)
      }
    }
    

    useEffect(()=>{
      const getTentor = async ()=>{
          try {
          const res = await axios.get(url)
          setTentor(res.data);
          // console.log(res.data);
          } catch (error) {
              console.error(error)
          }
      }
      
      getTentor();
  }, [])
    return (
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
                <Form.Label>Nama</Form.Label>
                <Form.Control type="text" defaultValue={nama} />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Asal Sekolah</Form.Label>
                <Form.Control type="text" defaultValue={asalSekolah} />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Pendidikan</Form.Label>
                <Form.Control type="text" placeholder="1 SD" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Alamat</Form.Label>
                <Form.Control type="text" placeholder="Purbalingga" />
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
          <h3 class="card-title">Data Tentor</h3>
        </div>

        <div class="card-body">
          <div id="example1_wrapper" class="dataTables_wrapper dt-bootstrap4">
            <div class="row">
              <div class="col-sm-12 col-md-6">
                <div class="dt-buttons btn-group flex-wrap">
                  {" "}
                  <NavLink
                    href="/dashboard/data_tentor/add"
                    className="btn btn-primary p-2"
                    tabindex="0"
                    aria-controls="example1"
                    type="button"
                    
                  >
                    <span>Tambah Tentor</span>
                  </NavLink>{" "}
          
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
                        Keterangan
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
                    {tentor &&
                      tentor.map((i) => {
                        return (
                          <tr key={i.id_tentor}>
                            <td>{i.nama}</td>
                            <td>{i.asal_sekolah}</td>
                            <td>{i.alamat}</td>
                            <td>{i.pendidikan}</td>
                            <td>{i.pengalaman}</td>
                            <td>{i.keterangan}</td>

                            <td>
                              <Button
                                variant="warning"
                                onClick={()=>handleShowEdit(i.id_tentor)}
                              >
                                <MDBIcon far icon="edit" />
                              </Button>

                              <Button
                                variant="danger"
                                onClick={()=>handleShowDelete(i.id_tentor)}
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
    );
}