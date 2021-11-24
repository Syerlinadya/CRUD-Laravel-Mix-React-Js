import { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
 
const EditSekolah = () => {
    const [nama, setNama] = useState('');
    const [telepon, setTelepon] = useState('');
    const [alamat, setAlamat] = useState('');

    const { id } = useParams();
 
    const updateData = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8000/api/sekolah/${id}`,{
            nama: nama,
            telepon: telepon,
            alamat: alamat
        }).then(response => {
            console.log(response.data);
            alert("berhasil")
            window.location = '/sekolah';
        }).catch((error) => {
            console.log(error.response.data);
        })
    }

    const getDataById = async () => {
        await axios.get(`http://localhost:8000/api/sekolah/${id}`)
        .then(response => {
            console.log(response.data);
            setNama(response.data.nama);
            setTelepon(response.data.telepon);
            setAlamat(response.data.alamat);
        })
        .catch((error) => {
            console.log(error.response.data);
        })
    }

    useEffect(() => {
        getDataById();
    },[]);

    const handleCancel = () => {
        window.location = '/sekolah';
    }
 
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={updateData}>
                                <h1>Edit Data Sekolah</h1>
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
                                <div className="row justify-content-center">
                                    <div className="col-4">
                                        <button type="submit" className="btn btn-light mb-1 btn-block">
                                            Simpan
                                        </button>
                                    </div>
                                    <div className="col-4">
                                        <button type="submit" className="btn btn-dark mb-1 btn-block text-light" onClick={handleCancel}>
                                            cancel
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default EditSekolah;
