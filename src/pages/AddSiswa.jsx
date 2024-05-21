import axios from "axios"
import { useState } from "react"
import { Container, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { SuccessAdd } from "../component/Dashboard/SuccessModal"

export const AddSiswa= ()=>{
    
    const jenisKelamin = ["Laki-laki", "Perempuan"]

    const  [nama, setnama] = useState("")
    const  [ttl, setttl] = useState("")
    const  [jk, setjk] = useState(jenisKelamin[0])
    const  [alamat, setalamat] = useState("")
    const  [nama_sekolah, setnama_sekolah] = useState("")
    const  [jenjang, setjenjang] = useState("")
    const  [kelas, setkelas] = useState("")
    const  [nama_ortu, setnama_ortu] = useState("")
    const  [no_hp, setno_hp] = useState("")
    const  [kekurangan, setkekurangan] = useState("")
    const  [catatan, setcatatan] = useState("")
    const [showState, setShowState] = useState(false)
    
    const [validation, setValidation] = useState([])
    const url = "http://127.0.0.1:8080/api/siswa/add"
    const formData = new FormData
    const navigate = useNavigate()
    const submitHandler = async (e)=>{
        try {
          e.preventDefault();
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
        
        const response = await axios.post(url, formData)
        
        setShowState(true)
        // console.log(window.location.pathname) 
      } catch (error) {
          // console.log(response);
          console.log(jk);
            console.error(error)
        }
    }
    return(
        <Container>

      <div className='content'>
          {/* <div className='user-details'>
            <div className='input-box'>
              <span className='details'>Nama Lengkap</span>
              <input type="text" value={nama} onChange={(e)=>setNama(e.target.value)} placeholder='' required />
            </div>
            {validation.name && (<div className="alert alert-danger">{validation.name[0]}</div>)}
            <div className='input-box'>
              <span className='details'>Asal Sekolah</span>
              <input type="text" value={asalSekolah} onChange={(e)=>setAsalSekolah(e.target.value)} placeholder='' required />
            </div>
            {validation.username && (<div className="alert alert-danger">{validation.pendidikan[0]}</div>)}
            <div className='input-box'>
              <span className='details'>Pendidikan</span>
              <input type="text" value={pendidikan}  onChange={(e)=>setPendidikan(e.target.value)} placeholder='' required />
            </div>
            {validation.email && (<div className="alert alert-danger">{validation.email[0]}</div>)}
            <div className='input-box'>
              <span className='details'>Alamat</span>
              <input type="text" value={alamat} onChange={(e)=>setAlamat(e.target.value)} placeholder='' required />
            </div>
        {validation.phoneNumber && (<div className="alert alert-danger">{validation.phoneNumber[0]}</div>)}
            <div className='input-box'>
              <span className='details'>Password</span>
              <input type="text" onChange={(e)=>setPassword(e.target.value)} placeholder='' required />
            </div>
            <div className='input-box'>
              <span className='details'>Konfirmasi Password</span>
              <input type="text" onChange={(e)=>setPasswordConfirmation(e.target.value)} placeholder='' required />
            </div>
            <div className="text-center mx-auto">
              <input type="submit" className="btn btn-primary"/>
              <div className="mt-3 justify text-center">
                <p>Sudah memiliki akun? Silakan <a href="/login">Login</a></p>
              </div>
            </div>
          </div> */}
<form onSubmit={submitHandler}>
        
          {showState && <SuccessAdd isShow={showState} />}
          <Form.Group
                className="mb-3"
                // controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Nama Lengkap</Form.Label>
                <Form.Control type="text" value={nama}  onChange={(e)=>setnama(e.target.value)}/>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Tempat dan Tanggal Lahir</Form.Label>
                <Form.Control type="text" value={ttl || ttl}  onChange={(e)=>setttl(e.target.value)}/>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Jenis Kelamin</Form.Label>
                <Form.Select id="select" value={jk} onChange={(e)=>setjk(e.target.value)} >
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
                <Form.Control type="text" value={alamat}  onChange={(e)=> setalamat(e.target.value)}/>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Nama Sekolah</Form.Label>
                <Form.Control type="text" value={nama_sekolah} onChange={(e)=>setnama_sekolah(e.target.value)}/>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Jenjang Pendidikan</Form.Label>
                <Form.Control type="text" value={jenjang} onChange={(e)=>setjenjang(e.target.value)}/>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Nama Orangtua</Form.Label>
                <Form.Control type="text" value={nama_ortu} onChange={(e)=>setnama_ortu(e.target.value)}/>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Kelas</Form.Label>
                <Form.Control type="text" value={kelas } onChange={(e)=>setkelas(e.target.value)}/>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Nomor HP</Form.Label>
                <Form.Control type="text" value={no_hp} onChange={(e)=>setno_hp(e.target.value)}/>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Kekurangan</Form.Label>
                <Form.Control type="text" value={kekurangan} onChange={(e)=>setkekurangan(e.target.value)}/>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Catatan</Form.Label>
                <Form.Control type="text" value={catatan} onChange={(e)=>setcatatan(e.target.value)}/>
              </Form.Group>
              <Form.Control className="btn btn-primary btn-lg btn-block rounded-1 me-2 mb-xs-0 mb-2" type="submit" value="Tambah"/>
              
            
            </form>
      </div>
    </Container>
    )
}