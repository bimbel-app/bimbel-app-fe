import { useState, useEffect } from "react";
import axios from "axios";

const Datasiswa = ()=>{
    const url = `127.0.0.1:8000/api/siswa/index`
    const [siswa, setSiswa] = useState([]);
    const [num, setNum] = useState(1);
    
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
    return(
<div className="container">
    <table className="table">
    <thead>
      <tr>
        <th scope="col">Nama</th>
        <th scope="col">Asal Sekolah</th>
        <th scope="col">Pendidikan</th>
        <th scope="col">Alamat</th>
      </tr>
    </thead>
    <tbody>
      
    {siswa && siswa.map((i)=>{
            return(
            <tr key={i.id_siswa}>
                <td>{i.nama}</td>
                <td>{i.asal_sekolah}</td>
                <td>{i.pendidikan}</td>
                <td>{i.alamat}</td>
            </tr>
            )
        })}
    </tbody>
  </table>
</div>
  )
}
export default Datasiswa