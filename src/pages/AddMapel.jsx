import axios from "axios"
import { useState } from "react"
import { Container, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { SuccessAdd } from "../component/Dashboard/SuccessModal"

export const AddMapel= ()=>{
    
    const  [mapel, setMapel] = useState("")
    const [validation, setValidation] = useState([])
    const url = "http://127.0.0.1:8000/api/mapel/add"
    const [showState, setShowState] = useState(false)
    const formData = new FormData
    const navigate = useNavigate()
    const submitHandler = async (e)=>{
        try {
          formData.append("nama_mapel", mapel)
        
        const response = await axios.post(url, formData)
        setShowState(true)
        console.log(response);
        
        } catch (error) {
          console.log(formData);
            console.error(error)
        }
    }
    return(
        <Container>
      <div className="title fw-bold text-center py-2">Tambah Mapel</div>
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
              <Form.Group
                className="mb-3"
                controlId="AddMapelForm.ControlInput1"
              >
                <Form.Label>Nama Mata Pelajaran</Form.Label>
                <Form.Control type="text" placeholder="Matematika" value={mapel} onChange={(e)=>setMapel(e.target.value)}/>
              </Form.Group>

              <Form.Control className="btn btn-primary btn-lg btn-block rounded-1 me-2 mb-xs-0 mb-2" type="submit" value="Tambah"/>             
            </form>
      </div>
    </Container>
    )
}