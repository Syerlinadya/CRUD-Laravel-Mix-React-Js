import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  
import axios from "axios";

function Index() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    },[]);

    const getData = async () => {
        await axios.get("http://localhost:8000/api/siswa")
        .then(response => {
            setData(response.data);
        })
        .catch((error) => {
            console.log(error.response.data);
        })
    }

    const deleteData = async (id) => {
        await axios.delete(`http://localhost:8000/api/siswa/${id}`)
        .then(response => {
            console.log(response.data);
            alert('berhasil');
            getData();
            
        })
        .catch((error) =>{
            console.log(error.response.data);
        })
    }
    
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-body ">
                            <button className="btn btn-success p-0 mb-2">
                                <Link className="nav-link text-light" to="/createSiswa">
                                + Tambah
                                </Link>
                            </button>
                            <table className="table table-bordered-md text-center">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">NIS</th>
                                        <th scope="col">Nama Siswa</th>
                                        <th scope="col">Tanggal Lahir</th>
                                        <th scope="col">Nama Sekolah</th>
                                        <th scope="col">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((item, idx) => {
                                            return(
                                                <tr key={idx}>
                                                   <td>{idx+1}</td> 
                                                   <td>{item.nis}</td> 
                                                   <td>{item.nama_siswa}</td> 
                                                   <td>{item.tgl_lahir}</td> 
                                                   <td>{item.nama}</td> 
                                                   <td>
                                                       <div className="btn-group">
                                                            <button className="btn btn-warning p-0 mr-2">
                                                                <Link className="nav-link text-dark" to={`/editSiswa/${item.id}`}>Edit</Link>
                                                            </button>
                                                            <button className="btn btn-danger" 
                                                                onClick={() => deleteData(item.id)} 
                                                            >
                                                                Delete
                                                            </button>
                                                       </div>
                                                   </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;