import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Beranda from '../Beranda';

// sekolah
import Sekolah from '../sekolah/index';
import EditSekolah from '../sekolah/EditSekolah';
import CreateSekolah from '../sekolah/CreateSekolah';

// siswa
import Siswa from '../siswa/index';
import EditSiswa from '../siswa/EditSiswa';
import CreateSiswa from '../siswa/CreateSiswa';

function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Beranda />}/>
                {/* sekolah */}
                <Route path="/sekolah" element={<Sekolah />}/>
                <Route path="/createSekolah" element={<CreateSekolah />}/>
                <Route path="/editSekolah/:id" element={<EditSekolah/>}/>
                {/* siswa */}
                <Route path="/siswa" element={<Siswa />}/>
                <Route path="/createSiswa" element={<CreateSiswa />}/>
                <Route path="/editSiswa/:id" element={<EditSiswa />}/>
            </Routes>
        </Router>
    );
}

export default App;

