import axios from "axios"
import { MDBIcon } from "mdb-react-ui-kit"
import { useState, useEffect } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import { NavLink } from "react-router-dom"

export const MataPelajaran = ()=>{
    const url = "http://127.0.0.1:8000/api/mapel/index"
    const [mapel, setMapel] = useState([])
    const [showEdit, setShowEdit] = useState(false)
    const [showDelete, setShowDelete] = useState(false)

    const handleShowEdit = ()=> setShowEdit(true)
    const handleCloseEdit = ()=> setShowEdit(false)

    const handleShowDelete = ()=> setShowDelete(true)
    const handleCloseDelete = ()=> setShowDelete(false)
    
    useEffect(()=>{
        
        const getMapel = async ()=>{
            try {
            const res = await axios.get(url)
            setMapel(res.data);
            console.log(res.data);
            } catch (error) {
                console.error(error)
            }
        }
        
        getMapel();
    }, [])
    

    return(
        <><div class="card">
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
                <Form.Control type="text" placeholder="Fikri Dudung" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Asal Sekolah</Form.Label>
                <Form.Control type="text" placeholder="SMA 1 Kanagawa" />
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
            <Button variant="primary">
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
            <Button variant="danger">
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
                    className="btn btn-secondary buttons-copy buttons-html5"
                    tabindex="0"
                    aria-controls="example1"
                    type="button"
                  >
                    <span>Copy</span>
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
                              <Button variant="warning" onClick={handleShowEdit}>
                                <MDBIcon far icon="edit" />
                              </Button>

                              <Button variant="danger" onClick={handleShowDelete}>
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