import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 


const Index = () => {
    const [data, setData] = useState([]);

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

    const deleteData = async (id) => {
        await axios.delete(`http://localhost:8000/api/sekolah/${id}`)
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
            <div className="row justify-content-center">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <button className="btn btn-success p-0 mb-2">
                                <Link className="nav-link text-light" to="/createSekolah">
                                + Tambah
                                </Link>
                            </button>
                            <table className="table table-bordered-md text-center">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Nama Sekolah</th>
                                        <th scope="col">Telepon</th>
                                        <th scope="col">Alamat</th>
                                        <th scope="col">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((item, idx) => {
                                            return(
                                                <tr key={idx}>
                                                   <td>{idx+1}</td> 
                                                   <td>{item.nama}</td> 
                                                   <td>{item.telepon}</td> 
                                                   <td>{item.alamat}</td> 
                                                   <td>
                                                       <div className="btn-group">
                                                            <button className="btn btn-warning p-0 mr-2">
                                                                <Link className="nav-link text-dark" to={`/editSekolah/${item.id}`}>Edit</Link>
                                                            </button>
                                                            <button className="btn btn-danger" onClick={() => deleteData(item.id)}>
                                                                Delete
                                                            </button>
                                                        </div>
                                                   </td>
                                                </tr>
                                            )
                                        })
                                    }
                                    {/* {showSekolah} */}
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