import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.scss';

// Importing Main Pages :
import Home from './pages/home/home';

// Importing Parent Pages From TOP NAVIGATION :
import Graduates from './pages/graduates/graduates';
import Undergraduates from './pages/undergraduates/undergraduates';
import Alumni from './pages/alumni/alumni';
import Wwus from './pages/wwus/wwus';
import Login from './pages/login/login';
import Register from './pages/register/register';

// Importing Parent Pages From BOTTOM NAVIGATION :
import Academic from './pages/academic/academic';
import Admission from './pages/admission/admission';
import Elibrary from './pages/e-library/e-library';
import Library from './pages/library/library';
import News from './pages/news-event/news';
import About from './pages/about/about';
import Partners from './pages/partners/partners';
import Lpm from './pages/lpm/lpm';

// Importing Child Pages :
import Daftar from './pages/daftar/daftar';
import Kurikulum from './pages/academic/kurikulum/kurikulum';
import VisiMisi from './pages/about/visimisi/vm';
import Sejarah from './pages/about/sejarah/sejarah';
import Pendiri from './pages/about/pendiri/pendiri';
import KomunitasMahasiswa from './pages/about/komun-mahasiswa/komuniswa';
import S2 from './pages/undergraduates/s2/s2';
import BantuanKlinikhukum from './pages/about/bantuan-klinik-hukum/bkh';
import Akreditas from './pages/about/akreditas/akreditas';
import CareerDevelopment from './pages/about/career-development/careerdev';
import S1 from './pages/graduates/s1/s1';
import ResourceConsulting from './pages/about/research-consulting/rcg';
import Kontak from './pages/about/kontak/kontak';
import ProgramKaryawan from './pages/undergraduates/s1-karyawan/s1k';
import JurnalHukumBisnis from './pages/e-library/jurnal-series/jurnal-bisnis';
import JurnalHukumTataNegara from './pages/e-library/jurnal-series/jurnal-tata-negara';
import JurnalHukumPidana from './pages/e-library/jurnal-series/jurnal-pidana';
import Sispen from './pages/academic/sistem-pendidikan/sispen';
import Pengajar from './pages/academic/pengajar/pengajar';
import KompetensiKelulusan from './pages/academic/kompetensi-kelulusan/kkl';
import Beasiswa from './pages/admission/beasiswa/beasiswa';
import Struktur from './pages/about/struktur-organisasi/struktur';
import Article from './pages/news-event/article/article';
import Index from './pages/library/index/library';

function App() {
  return (
    <Suspense fallback={<>loading...</>}>
      <Routes>

        {/* Top Navigation URL . . . */}
        <Route exact path='/' element={<Home />} />
        <Route exact path='/graduates' element={<Graduates />} />
        <Route exact path='/undergraduates' element={<Undergraduates />} />
        <Route exact path='/alumni' element={<Alumni />} />
        <Route exact path='/work-with-us' element={<Wwus />} />
        <Route exact path='/login' element={<Login />} /> {/* ?? IF YOU DON'T HAVE ACCOUNT ------> */} <Route exact path='/register' element={<Register />} />


        {/* Bottom Navigation URL . . . */}
        <Route exact path='/academic' element={<Academic />} />
        <Route exact path='/admission' element={<Admission />} />
        <Route exact path='/e-library' element={<Elibrary />} />
        <Route exact path='/library' element={<Library />} />
        <Route exact path='/news-event' element={<News />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/partners' element={<Partners />} />
        <Route exact path='/lpm' element={<Lpm />} />

        {/* Child Undergraduates URL . . .*/}
        <Route exact path='/undergraduates/s1' element={<S1 />} />
        <Route exact path='/undergraduates/s1-reguler-karyawan' element={<ProgramKaryawan />} />

        {/* Child Graduates URL . . .*/}
        <Route exact path='/graduates/s2' element={<S2 />} />

        {/* Child Academic URL . . . */}
        <Route exact path='/academic/kurikulum' element={<Kurikulum />} />
        <Route exact path='/academic/sistem-pendidikan' element={<Sispen />} />
        <Route exact path='/academic/pengajar' element={<Pengajar />} />
        <Route exact path='/academic/kompetensi-kelulusan' element={<KompetensiKelulusan />} />

        {/* Child : Admission URL . . . */}
        <Route exact path='/admission/daftar' element={<Daftar />} />
        <Route exact path='/admission/beasiswa' element={<Beasiswa />} />

        {/* Child : E-Library URL . . . */}
        <Route exact path='/e-library/tanya-jawab-hukum' element={<JurnalHukumBisnis />} />
        <Route exact path='/e-library/jurnal-hukum-bisnis' element={<JurnalHukumBisnis />} />
        <Route exact path='/e-library/jurnal-hukum-pidana' element={<JurnalHukumPidana />} />
        <Route exact path='/e-library/jurnal-hukum-tata-negara' element={<JurnalHukumTataNegara />} />

        {/* Child Library URL . . .*/}
        <Route exact path='/library/index' element={<Index />} />

        {/* Child : About URL . . . */}
        <Route exact path='/about/visi-misi' element={<VisiMisi />} />
        <Route exact path='/about/sejarah-iblam' element={<Sejarah />} />
        <Route exact path='/about/pendiri-iblam' element={<Pendiri />} />
        <Route exact path='/about/komunitas-mahasiswa' element={<KomunitasMahasiswa />} />
        <Route exact path='/about/bantuan-klinik-hukum' element={<BantuanKlinikhukum />} />
        <Route exact path='/about/akreditas' element={<Akreditas />} />
        <Route exact path='/about/iblam-career-and-development' element={<CareerDevelopment />} />
        <Route exact path='/about/iblam-resource-and-consulting-group' element={<ResourceConsulting />} />
        <Route exact path='/about/kontak-kami' element={<Kontak />} />
        <Route exact path='/about/struktur-organisasi' element={<Struktur />} />

        {/* Child News URL . . .*/}
        <Route exact path='/tes' element={<Article />} />

        {/* Unknown URL */}
        <Route path="*" element={
          <center>
            <h1>Oops! That page can't be found.</h1>
            <p>It looks like nothing was found at this location. Maybe try other link ?</p>
          </center>
        } />


      </Routes>
    </Suspense>
  );
}



export default App;
