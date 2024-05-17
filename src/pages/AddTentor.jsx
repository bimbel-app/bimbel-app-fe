import axios from "axios"
import { useState } from "react"
import { Container, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { SuccessAdd } from "../component/Dashboard/SuccessModal"

export const AddTentor= ()=>{
    
    const  [nama, setNama] = useState("")
    const  [asalSekolah, setAsalSekolah] = useState("")
    const  [pendidikan, setPendidikan] = useState("")
    const  [alamat, setAlamat] = useState("")
    const  [pengalaman, setPengalaman] = useState("")
    const  [keterangan, setKeterangan] = useState("")
    const [showState, setShowState] = useState(false)
    const [validation, setValidation] = useState([])
    const url = "http://127.0.0.1:8000/api/tentor/add"
    
    const formData = new FormData
    const navigate = useNavigate()
    
    const submitHandler = async (e)=>{
        try {
          e.preventDefault();
          formData.append("nama", nama)
          formData.append("asal_sekolah", asalSekolah)
          formData.append("alamat", alamat)
          formData.append("pendidikan", pendidikan)
          formData.append("pengalaman", pengalaman)
          formData.append("keterangan", keterangan)
          
        
        const response = await axios.post(url, formData)
        setShowState(true)
        console.log(response);
        } catch (error) {
            console.error(error)
        }
    }
    return(
      
        <Container>
      <div className="title fw-bold text-center py-2">Tambah Tentor</div>
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
        {showState && <SuccessAdd/>}
          {/* <form onSubmit={submitHandler}> */}
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Nama</Form.Label>
                <Form.Control type="text" placeholder="Fikri Dudung" value={nama} onChange={(e)=>setNama(e.target.value)}/>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Asal Sekolah</Form.Label>
                <Form.Control type="text" placeholder="SMA 1 Kanagawa" value={asalSekolah} onChange={(e)=>setAsalSekolah(e.target.value)}/>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Alamat</Form.Label>
                <Form.Control type="text" placeholder="Purbalingga" value={alamat} onChange={(e)=>setAlamat(e.target.value)}/>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Pendidikan</Form.Label>
                <Form.Control type="text" placeholder="1 SD" value={pendidikan} onChange={(e)=>setPendidikan(e.target.value)}/>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Pengalaman</Form.Label>
                <Form.Control type="text" placeholder="1 SD" value={pengalaman} onChange={(e)=>setPengalaman(e.target.value)}/>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Keterangan</Form.Label>
                <Form.Control type="text" placeholder="1 SD" value={keterangan} onChange={(e)=>setKeterangan(e.target.value)}/>
              </Form.Group>

              <Form.Control className="btn btn-primary btn-lg btn-block rounded-1 me-2 mb-xs-0 mb-2" type="submit" value="Tambah"/>
              
            
            </form>
      </div>
    </Container>
    )
}