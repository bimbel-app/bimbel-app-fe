import axios from "axios"
import { MDBIcon } from "mdb-react-ui-kit"
import { useState, useEffect } from "react"
import { Button, Form, Modal, NavLink } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { SuccessEditModal } from "../../component/Dashboard/SuccessEditModal"
import { SuccessDeleteModal } from "../../component/Dashboard/SuccessDeleteModal"

export const Siswa = ()=>{
  
    const url = `http://localhost:8080/api/siswa/index`
    const urlEdit = `http://127.0.0.1:8080/api/siswa/edit`
    const urlDelete = `http://127.0.0.1:8080/api/siswa/delete`
    
    const [siswa, setSiswa] = useState()
    const [siswaEdit, setSiswaEdit] = useState({})
    
    const [showEdit, setShowEdit] = useState(false)
    const [showDelete, setShowDelete] = useState(false)
    const [showState, setShowState] = useState(false)
    
    const [nama, setNama] = useState("")
    const [ttl, setTtl] = useState("")
    const [jk, setJk] = useState("")
    const [alamat, setalamat] = useState("")
    const [nama_sekolah, setnama_sekolah] = useState("")
    const [jenjang, setJenjang] = useState("")
    const [sekolah, setAsalSekolah] = useState("")
    const [kelas, setkelas] = useState("")
    const [nama_ortu, setnama_ortu] = useState("")
    const [no_hp, setno_hp] = useState("")
    const [kekurangan, setkekurangan] = useState("")
    const [catatan, setcatatan] = useState("")
    
    const jenisKelamin = ["Laki-laki", "Perempuan"]
    // console.log(siswa);
    
    const handleShowEdit = async (id)=> { 
      try {
        setShowEdit(true)
        const response = await axios.get(`${url}/${id}`) //melakukan request 
        setSiswaEdit(response.data)
         // set data pada response ke state siswaEdit
        //  const {
        //   nama,
        //   ttl,
        //   jk,
        //   alamat,
        //   nama_sekolah,
        //   jenjang,
        //   kelas,
        //   nama_ortu,
        //   no_hp,
        //   kekurangan,
        //   catatan 
        //  } = siswaEdit
        setNama(response.data.nama)
        setTtl(response.data.ttl) 
        setJk(response.data.jk)
        setalamat(response.data.alamat)          
        setnama_sekolah(response.data.nama_sekolah)             
        setJenjang(response.data.jenjang)             
        setkelas(response.data.kelas)
        setnama_ortu(response.data.nama_ortu)             
        setno_hp(response.data.no_hp)             
        setkekurangan(response.data.kekurangan)
        setcatatan(response.data.catatan)     
        console.log(nama)        
      } catch (error) {
        console.error(error)
      }
    }

    const handleShowDelete = async (id)=> {
      try {
        setShowDelete(true)
        const response = await axios.get(`${url}/${id}`)
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
        formData.append("ttl", ttl)
        formData.append("jk", jk)
        formData.append("alamat", alamat)
        formData.append("nama_sekolah", nama_sekolah)
        formData.append("jenjang", jenjang)
        formData.append("kelas", kelas)
        formData.append("nama_ortu", nama_ortu)
        formData.append("no_hp", no_hp)
        formData.append("kekurangan", kekurangan)
        formData.append("catatan", catatan)
        const id = siswaEdit.id_siswa
        const response = await axios.post(`${urlEdit}/${id}`, formData)
        setShowState(true)
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
      <>
      {showState && <SuccessEditModal/>}
      {showState && <SuccessDeleteModal/>
      }
      <div class="card">
          <Modal key={"siswaEdit.id_siswa"} show={showEdit} onHide={handleCloseEdit}>
          <Modal.Header closeButton>
            <Modal.Title>Edit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Nama Lengkap</Form.Label>
                <Form.Control type="text" defaultValue={siswaEdit.nama||nama}  onChange={(e)=>setNama(e.target.value)}/>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Tempat dan Tanggal Lahir</Form.Label>
                <Form.Control type="text" defaultValue={siswaEdit.ttl || ttl}  onChange={(e)=>setTtl(e.target.value)}/>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Jenis Kelamin</Form.Label>
                <Form.Select id="select" value={jk} onChange={(e)=>setJk(e.target.value)} >
                {jenisKelamin.map((jk, index)=>{
                console.log();
                return(
                  <option key={index} value={jk}>{jk}</option>
                )
                })
              }
                </Form.Select>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Alamat</Form.Label>
                <Form.Control type="text" defaultValue={siswaEdit.alamat || alamat}  onChange={(e)=>setalamat(e.target.value)}/>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Nama Sekolah</Form.Label>
                <Form.Control type="text" defaultValue={siswaEdit.nama_sekolah || nama_sekolah} onChange={(e)=>setnama_sekolah(e.target.value)}/>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Jenjang Pendidikan</Form.Label>
                <Form.Control type="text" defaultValue={siswaEdit.jenjang|| jenjang} onChange={(e)=>setJenjang(e.target.value)}/>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Kelas</Form.Label>
                <Form.Control type="text" defaultValue={siswaEdit.kelas|| kelas } onChange={(e)=>setkelas(e.target.value)}/>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Nomor HP</Form.Label>
                <Form.Control type="text" defaultValue={siswaEdit.no_hp || no_hp} onChange={(e)=>setno_hp(e.target.value)}/>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Nama Orangtua</Form.Label>
                <Form.Control type="text" defaultValue={siswaEdit.nama_ortu || nama_ortu} onChange={(e)=>setnama_ortu(e.target.value)}/>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Kekurangan</Form.Label>
                <Form.Control type="text" defaultValue={siswaEdit.kekurangan || kekurangan} onChange={(e)=>setkekurangan(e.target.value)}/>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Catatan</Form.Label>
                <Form.Control type="text" defaultValue={siswaEdit.catatan || catatan} onChange={(e)=>setcatatan(e.target.value)}/>
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
                  <NavLink href="/dashboard/data_siswa/add" className="btn btn-primary p-2 "
                    tabindex="0"
                    aria-controls="example1"
                    type="button"
                  >
                    <span>Tambah Siswa</span>
                  </NavLink>{" "}
                  {/* </div>{" "} */}
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
                        Nama Lengkap
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example1"
                        rowspan="1"
                        colspan="1"
                        aria-label="Browser: activate to sort column ascending"
                      >
                        Tempat dan Tanggal Lahir
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example1"
                        rowspan="1"
                        colspan="1"
                        aria-label="Browser: activate to sort column ascending"
                      >
                        Jenis Kelamin
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example1"
                        rowspan="1"
                        colspan="1"
                        aria-label="Browser: activate to sort column ascending"
                      >
                        Alamat
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example1"
                        rowspan="1"
                        colspan="1"
                        aria-label="Platform(s): activate to sort column ascending"
                      >
                        Nama Sekolah
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example1"
                        rowspan="1"
                        colspan="1"
                        aria-label="Engine version: activate to sort column ascending"
                      >
                        Jenjang Pendidikan
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example1"
                        rowspan="1"
                        colspan="1"
                        aria-label="CSS grade: activate to sort column ascending"
                      >
                        Kelas
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example1"
                        rowspan="1"
                        colspan="1"
                        aria-label="CSS grade: activate to sort column ascending"
                      >
                        Nama Orang Tua
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example1"
                        rowspan="1"
                        colspan="1"
                        aria-label="CSS grade: activate to sort column ascending"
                      >
                        Nomor Handphone
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example1"
                        rowspan="1"
                        colspan="1"
                        aria-label="CSS grade: activate to sort column ascending"
                      >
                        Kekurangan
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example1"
                        rowspan="1"
                        colspan="1"
                        aria-label="CSS grade: activate to sort column ascending"
                      >
                        Catatan
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example1"
                        rowspan="1"
                        colspan="1"
                        aria-label="CSS grade: activate to sort column ascending"
                      >
                        Kelola
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {siswa &&
                      siswa.map((i) => {
                        return (
                          <tr key={i.id_siswa}>
                <td>{i.nama}</td>
                <td>{i.ttl}</td>
                <td>{i.jk}</td>
                <td>{i.alamat}</td>
                <td>{i.nama_sekolah}</td>
                <td>{i.jenjang}</td>
                <td>{i.kelas}</td>
                <td>{i.nama_ortu}</td>
                <td>{i.no_hp}</td>
                <td>{i.kekurangan}</td>
                <td>{i.catatan}
                </td>
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
      </>
    );
}