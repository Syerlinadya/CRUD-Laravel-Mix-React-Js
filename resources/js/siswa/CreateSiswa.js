import { useState, useEffect } from 'react';
import axios from "axios";

const CreateSiswa = () => {
    const [data, setData] = useState([]);
    const [nis, setNis] = useState('');
    const [nama_siswa, setNamaSiswa] = useState('');
    const [tgl_lahir, setTglLahir] = useState('');
    const [sekolah_id, setSekolahId] = useState(0);

    const saveSiswa = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8000/api/siswa',{
            nis: nis,
            nama_siswa: nama_siswa,
            tgl_lahir: tgl_lahir,
            sekolah_id: sekolah_id
        }).then(response => {
            console.log(response.data);
            alert("berhasil");;
            window.location = '/siswa';
        }).catch((error) => {
            console.log(error.response.data);
        })   
    }

    useEffect(() => {
        getData();
    },[]);

    const getData = async () => {
        await axios.get("http://localhost:8000/api/sekolah")
        .then(response => {
            setData(response.data);
        })
        .catch((error) => {
            console.log(error.response.data);
        })
    }

    const handleCancel = () => {
        window.location = '/siswa';
    }
    return (
        <div className="container justify-content-center">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={saveSiswa}>
                                <h1>Tambah Data Siswa</h1>
                                <div className="mb-3">
                                    <label className="form-label">NIS</label>
                                    <input type="text" className="form-control" placeholder="NIS.."
                                        onChange= {(e )=> setNis(e.target.value)}
                                        value= {nis}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Nama Siswa</label>
                                    <input type="text" className="form-control" placeholder="Nama siswa"  
                                        onChange= {(e) => setNamaSiswa(e.target.value)}
                                        value= {nama_siswa}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Tanggal Lahir</label>
                                    <input type="date" className="form-control" placeholder="Tanggal Lahir" 
                                        onChange= {(e) => setTglLahir(e.target.value)}
                                        value= {tgl_lahir}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">ID Sekolah</label>
                                    {/* <input type="number" className="form-control" placeholder="ID sekolah" 
                                        onChange= {(e) => setSekolahId(e.target.value)}
                                        value= {sekolah_id}
                                    /> */}
                                    <select className="form-control" data-val="true" name="sekolah_id" value={sekolah_id} onChange={(e) => setSekolahId(e.target.value)}>
                                        <option value="">-- Pilih Id Sekolah --</option>
                                        {data.map((item) =>
                                            <option key={item.id} value={item.id}>{item.nama}</option>
                                        )}
                                    </select>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-4">
                                        <button type="submit" className="btn btn-success mb-1 btn-block">
                                            Simpan
                                        </button>
                                    </div>
                                    <div className="col-4">
                                        <button type="submit" className="btn btn-light mb-1 btn-block" onClick={handleCancel}>
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

export default CreateSiswa;
