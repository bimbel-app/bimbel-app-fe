import axios from "axios"
import { MDBIcon } from "mdb-react-ui-kit"
import { useState, useEffect } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { SuccessDeleteModal } from "../../component/Dashboard/SuccessDeleteModal"

export const MataPelajaran = ()=>{
    const url = "http://127.0.0.1:8000/api/mapel/index"
    const urlEdit = `http://127.0.0.1:8000/api/mapel/edit`
    const urlDelete = `http://127.0.0.1:8000/api/mapel/delete`
    
    const [mapel, setMapel] = useState([])
    const [mapelModal, setMapelModal] = useState([])

    const [namaMapel, setNamaMapel] = useState("")

    const [showEdit, setShowEdit] = useState(false)
    const [showDelete, setShowDelete] = useState(false)
    const [showState, setShowState] = useState(false)

    const formData = new FormData()
    const handleShowEdit = async (id)=> {
      try {
        setShowEdit(true)
        const response = await axios.get(`${url}/${id}`)
        setMapelModal(response.data)
        console.log(mapel);
      } catch (error) {
        console.error()
      }
    }
    const handleCloseEdit = ()=> setShowEdit(false)

    const handleShowDelete = async (id)=> {
      try {
      setShowDelete(true)
      const response = await axios.get(`${url}/${id}`)
      setMapelModal(response.data)
      setNamaMapel(response.data.nama_mapel)
      console.log({id:id, "mapel_id":mapelModal.id_mapel});
    } catch (error) {
      console.error()
    }

    }
    const handleCloseDelete = ()=> setShowDelete(false)

    const editHandler = async ()=>{
      const {id_mapel, nama_mapel} = mapelModal
      try {
        formData.append("nama_mapel", namaMapel) //m emanggil nilai state  yang akan di kirim ke back end
        const response = await axios.post(`${urlEdit}/${id_mapel}`, formData)
        setShowState(true)
      } catch (error) {
        console.log({id:id_mapel, mapel:nama_mapel, fd:formData.getAll("nama_mapel")});
        console.error(error);
      }

    }
    
    const deleteHandler = async ()=>{
      try{
        const id = mapelModal.id_mapel
        await axios.delete(`${urlDelete}/${id}`)
        setShowState(true)
        setShowDelete(false)
      }catch(error){

        console.error()
      }
    }
    useEffect(()=>{
        
        const getMapel = async ()=>{
            try {
            const res = await axios.get(url)
            setMapel(res.data);
            // console.log(res.data);
            } catch (error) {
                console.error()
            }
        }
        
        getMapel();
    }, [])
    

    return(
        <>
        {showState && <SuccessDeleteModal isShow={showState}/>}
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
                <Form.Control type="text" placeholder="Nama mata pleajaran" value={namaMapel} onChange={(e)=>setNamaMapel(e.target.value)} />
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
            <Modal.Title>Hapus</Modal.Title>
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
          <h3 class="card-title">Data Mapel</h3>
        </div>

        <div class="card-body">
          <div id="example1_wrapper" class="dataTables_wrapper dt-bootstrap4">
            <div class="row">
              <div class="col-sm-12 col-md-6">
                <div class="dt-buttons btn-group flex-wrap">
                  {" "}
                  <NavLink 
                    to="/dashboard/data_mapel/add" 
                    className="btn btn-primary p-2"
                    tabindex="0"
                    aria-controls="example1"
                    type="button"
                  >
                    <span>Tambah Mata pelajaran</span>
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
                        Nama Mapel
                      </th>
                      <th
                        class="sorting sorting_asc"
                        tabindex="0"
                        aria-controls="example1"
                        rowspan="1"
                        colspan="1"
                        aria-sort="ascending"
                        aria-label="Rendering engine: activate to sort column descending"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {mapel &&
                      mapel.map((i) => {
                        return (
                          <tr key={i.id_mapel}>
                            <td>{i.nama_mapel}</td>
                            <td>
                              <Button variant="warning" onClick={()=>handleShowEdit(i.id_mapel)}>
                                <MDBIcon far icon="edit" />
                              </Button>

                              <Button variant="danger" onClick={()=>handleShowDelete(i.id_mapel)}>
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
      </div></>
    )
}