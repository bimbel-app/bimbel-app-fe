import axios from "axios"
import { useState } from "react"
import { Button, Container, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export const AddJadwal= ()=>{
    
    const  [tanggal, setTanggal] = useState("")
    const  [waktu, setWaktu] = useState("")
    const  [hari, setHari] = useState("")
    const [validation, setValidation] = useState([])
    
    const url = "http://127.0.0.1:8000/api/jadwal/add"
    
    const formData = new FormData
    const navigate = useNavigate()
    const days = ["Senin", "Selasa","Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"]
    const date = new Date(tanggal)
    const dateFormat = date.toLocaleString('id-ID', {day:'numeric', month:'long', year:'numeric'})

    const submitHandler = async (e)=>{
        try {
          e.preventDefault();
          formData.append("tanggal", dateFormat)
          formData.append("waktu", waktu)
          formData.append("hari", hari)          
        
        const response = await axios.post(url, formData)

        alert(response.data.message);
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
        
          {/* <form onSubmit={submitHandler}> */}
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
              <Form.Control className="btn btn-primary btn-lg btn-block rounded-1 me-2 mb-xs-0 mb-2" type="submit" value="Tambah"/>           
            </form>
      </div>
    </Container>
    )
}