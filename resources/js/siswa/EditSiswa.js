import { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';

function EditSiswa() {
    const [data, setData] = useState([]);
    const [nis, setNis] = useState('');
    const [nama_siswa, setNamaSiswa] = useState('');
    const [tgl_lahir, setTglLahir] = useState('');
    const [sekolah_id, setSekolahId] = useState('');

    const { id } = useParams();
 
    const updateData = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8000/api/siswa/${id}`,{
            nis: nis,
            nama_siswa: nama_siswa,
            tgl_lahir: tgl_lahir,
            sekolah_id: sekolah_id
        }).then(response => {
            console.log(response.data);
            alert("berhasil")
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


    const getDataById = async () => {
        await axios.get(`http://localhost:8000/api/siswa/${id}`)
        .then(response => {
            console.log(response.data.nis);
            setNis(response.data.nis);
            setNamaSiswa(response.data.nama_siswa);
            setTglLahir(response.data.tgl_lahir);
            setSekolahId(response.data.sekolah_id)
        })
        .catch((error) => {
            console.log(error.response.data);
        })
    }

    useEffect(() => {
        getDataById();
    },[]);

    const handleCancel = () => {
        window.location = '/siswa';
    }

    return (
        <div className="container justify-content-center">
            <div className="row justify-content-center">
            <div className="col-md-5">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={updateData}>
                                <h1>Edit Data Siswa</h1>
                                <div className="mb-3">
                                    <label className="form-label">NIS</label>
                                    <input type="text" className="form-control" placeholder="NIS.."
                                        onChange= {(e )=> setNis(e.target.value)}
                                        value= {nis}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Nama Siswa</label>
                                    <input type="text" className="form-control" placeholder="Nama Siswa"  
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
                                    <label className="form-label">Sekolah ID</label>
                                    {/* <input type="text" className="form-control" placeholder="Sekolah ID" 
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

export default EditSiswa;
