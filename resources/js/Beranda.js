import React, { useState, useEffect } from 'react'
import axios from "axios";

function Index() {
    const [sekolah, setSekolah] = useState([]);
    const [siswa, setSiswa] = useState([]);

    useEffect(() => {
        getSekolah();
        getSiswa();
    },[]);

    const getSekolah = async () => {
        await axios.get("http://localhost:8000/api/sekolah")
        .then(response => {
            setSekolah(response.data);
        })
        .catch((error) => {
            console.log(error.response.data);
        })
    }

    const getSiswa = async () => {
        await axios.get("http://localhost:8000/api/siswa")
        .then(response => {
            setSiswa(response.data);
        })
        .catch((error) => {
            console.log(error.response.data);
        })
    }

    const totalSekolah = sekolah.length;
    const totalSiswa = siswa.length;

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-3 text-center pb-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Data Sekolah</h5><hr/>
                            <p className="card-text">{totalSekolah}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 text-center pb-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Data Siswa</h5><hr/>
                            <p className="card-text">{totalSiswa}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;