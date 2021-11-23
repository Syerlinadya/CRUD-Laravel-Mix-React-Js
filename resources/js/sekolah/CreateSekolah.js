import { useState } from 'react';
import axios from "axios";

const CreateSekolah = () => {
    const [nama, setNama] = useState('');
    const [telepon, setTelepon] = useState('');
    const [alamat, setAlamat] = useState('');
 
    const saveSekolah = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8000/api/sekolah',{
            nama: nama,
            telepon: telepon,
            alamat: alamat
        }).then(response => {
            console.log(response.data);
            alert("berhasil");;
            window.location = '/sekolah';
        }).catch((error) => {
            console.log(error.response.data);
        })
        
    }
 
    return (
        <div className="container">
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={saveSekolah}>
                            <h1>Tambah Data sekolah</h1>
                            <div className="mb-3">
                                <label className="form-label">Nama Sekolah</label>
                                <input type="text" className="form-control" placeholder="Nama.."
                                    onChange= {(e )=> setNama(e.target.value)}
                                    value= {nama}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Telepon</label>
                                <input type="text" className="form-control" placeholder="Telepon"  
                                    onChange= {(e) => setTelepon(e.target.value)}
                                    value= {telepon}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Alamat</label>
                                <input type="text" className="form-control" placeholder="alamat" 
                                    onChange= {(e) => setAlamat(e.target.value)}
                                    value= {alamat}
                                />
                            </div>
                            <button type="submit" className="btn btn-info mb-1 btn-block">
                                Simpan
                            </button>
                        </form>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default CreateSekolah;
