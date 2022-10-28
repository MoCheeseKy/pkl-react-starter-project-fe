import React from 'react'
import './s1.scss'
import Header from '../../../components/header/header'
import Foot from '../../../components/footer/foot/foot'
import { Breadcrumb, Collapse } from 'antd'
import { Link } from 'react-router-dom'

export default function S1() {
const { Panel } = Collapse;

const se1 = 
  <div className="isian">
    <div className="kiri">
      <table>
        <tr className='tr-kiri'>
          <th>Mata Kuliah</th>
          <th>SKS</th>
        </tr>
        <tr>
          <td>Pendidikan Agama</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Pendidikan Pancasila</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Pendidikan Kewarganegaraan</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Bahasa Inggris Hukum</td>
          <td>2</td>
        </tr>
      </table>
    </div>
    <div className="kanan">
      <table>
        <tr className='tr-kanan'>
          <th>Mata Kuliah</th>
          <th>SKS</th>
        </tr>
        <tr>
          <td>Pengantar Ilmu Hukum</td>
          <td>4</td>
        </tr>
        <tr>
          <td>Pengantar Hukum Indonesia</td>
          <td>4</td>
        </tr>
        <tr>
          <td>Ilmu Negara</td>
          <td>3</td>
        </tr>
      </table>
    </div>
    <div className="phone-isian">
      <table>
        <tr>
          <th>Mata Kuliah</th>
            <th>SKS</th>
          </tr>
          <tr>
            <td>Pendidikan Agama</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Pendidikan Pancasila</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Pendidikan Kewarganegaraan</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Bahasa Inggris Hukum</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Pengantar Ilmu Hukum</td>
            <td>4</td>
          </tr>
          <tr>
            <td>Pengantar Hukum Indonesia</td>
            <td>4</td>
          </tr>
          <tr>
            <td>Ilmu Negara</td>
            <td>3</td>
          </tr>
        </table>
      </div>
  </div>

  const se2 =
  <div className="isian">
    <div className="kiri">
      <table>
        <tr className='tr-kiri'>
          <th>Mata Kuliah</th>
          <th>SKS</th>
        </tr>
        <tr>
          <td>Bahasa Indonesia Hukum</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Hukum Adat</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Hukum Islam</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Hukum Internasional</td>
          <td>3</td>
        </tr>
      </table>
    </div>
    <div className="kanan">
      <table>
        <tr className='tr-kanan'>
          <th>Mata Kuliah</th>
          <th>SKS</th>
        </tr>
        <tr>
          <td>Hukum Perdata</td>
          <td>4</td>
        </tr>
        <tr>
          <td>Hukum Pidana</td>
          <td>4</td>
        </tr>
        <tr>
          <td>Hukum Tata Negara</td>
          <td>4</td>
        </tr>
        <tr>
          <td>Demokrasi dan HAM</td>
          <td>2</td>
        </tr>
      </table>
    </div>
    <div className="phone-isian">
      <table>
        <tr>
          <th>Mata Kuliah</th>
            <th>SKS</th>
          </tr>
          <tr>
          <td>Bahasa Indonesia Hukum</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Hukum Adat</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Hukum Islam</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Hukum Internasional</td>
          <td>3</td>
        </tr>
        <tr>
          <td>Hukum Perdata</td>
          <td>4</td>
        </tr>
        <tr>
          <td>Hukum Pidana</td>
          <td>4</td>
        </tr>
        <tr>
          <td>Hukum Tata Negara</td>
          <td>4</td>
        </tr>
        <tr>
          <td>Demokrasi dan HAM</td>
          <td>2</td>
        </tr>
        </table>
      </div>
  </div>

  const se3 =
  <div className="isian">
    <div className="kiri">
      <table>
        <tr className='tr-kiri'>
          <th>Mata Kuliah</th>
          <th>SKS</th>
        </tr>
        <tr>
          <td>Hukum Administrasi Negara</td>
          <td>4</td>
        </tr>
        <tr>
          <td>Hukum Agraria</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Hukum Dagang</td>
          <td>4</td>
        </tr>
        <tr>
          <td>Hukum Ketenagakerjaan dan Hubungan Industrial</td>
          <td>2</td>
        </tr>
      </table>
    </div>
    <div className="kanan">
      <table>
        <tr className='tr-kanan'>
          <th>Mata Kuliah</th>
          <th>SKS</th>
        </tr>
        <tr>
          <td>Hukum Arbitrase dan Alternatif Penyelesaian Sengketa</td>
          <td>3</td>
        </tr>
        <tr>
          <td>Hukum Lingkungan</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Sosiologi Hukum</td>
          <td>2</td>
        </tr>
      </table>
    </div>
    <div className="phone-isian">
      <table>
        <tr>
          <th>Mata Kuliah</th>
            <th>SKS</th>
          </tr>
          <tr>
          <td>Hukum Administrasi Negara</td>
          <td>4</td>
        </tr>
        <tr>
          <td>Hukum Agraria</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Hukum Dagang</td>
          <td>4</td>
        </tr>
        <tr>
          <td>Hukum Ketenagakerjaan dan Hubungan Industrial</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Hukum Arbitrase dan Alternatif Penyelesaian Sengketa</td>
          <td>3</td>
        </tr>
        <tr>
          <td>Hukum Lingkungan</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Sosiologi Hukum</td>
          <td>2</td>
        </tr>
        </table>
      </div>
  </div>
   
  const se4= 
  <div className="isian">
    <div className="kiri">
      <table>
        <tr className='tr-kiri'>
          <th>Mata Kuliah</th>
          <th>SKS</th>
        </tr>
        <tr>
          <td>Hukum Asuransi</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Hukum Hak Kekayaan Intelektual</td>
          <td>3</td>
        </tr>
        <tr>
          <td>Hukum Jaminan</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Hukum Pajak</td>
          <td>2</td>
        </tr>
      </table>
    </div>
    <div className="kanan">
      <table>
        <tr className='tr-kanan'>
          <th>Mata Kuliah</th>
          <th>SKS</th>
        </tr>
        <tr>
          <td>Hukum Perlindungan Konsumen</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Hukum Acara Perdata</td>
          <td>4</td>
        </tr>
        <tr>
          <td>Hukum Acara Pidana</td>
          <td>4</td>
        </tr>
        <tr>
          <td>Ilmu Perundang-undangan</td>
          <td>2</td>
        </tr>
      </table>
    </div>
    <div className="phone-isian">
      <table>
        <tr>
          <th>Mata Kuliah</th>
            <th>SKS</th>
          </tr>
          <tr>
          <td>Hukum Asuransi</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Hukum Hak Kekayaan Intelektual</td>
          <td>3</td>
        </tr>
        <tr>
          <td>Hukum Jaminan</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Hukum Pajak</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Hukum Perlindungan Konsumen</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Hukum Acara Perdata</td>
          <td>4</td>
        </tr>
        <tr>
          <td>Hukum Acara Pidana</td>
          <td>4</td>
        </tr>
        <tr>
          <td>Ilmu Perundang-undangan</td>
          <td>2</td>
        </tr>
        </table>
      </div>
  </div>

  const se5= 
  <div className="isian">
    <div className="kiri">
      <table>
        <tr className='tr-kiri'>
          <th>Mata Kuliah</th>
          <th>SKS</th>
        </tr>
        <tr>
          <td>Hukum Acara Peradilan Tata Usaha Negara</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Hukum Acara Mahkamah Konstitusi</td>
          <td>3</td>
        </tr>
        <tr>
          <td>Metode Penelitian Hukum</td>
          <td>3</td>
        </tr>
      </table>
    </div>
    <div className="kanan">
      <table>
        <tr className='tr-kanan'>
          <th>Mata Kuliah</th>
          <th>SKS</th>
        </tr>
        <tr>
          <td>Hukum Kesehatan</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Hukum Teknologi</td>
          <td>2</td>
        </tr>
      </table>
    </div>
    <div className="phone-isian">
      <table>
        <tr>
          <th>Mata Kuliah</th>
            <th>SKS</th>
          </tr>
          <tr>
          <td>Hukum Acara Peradilan Tata Usaha Negara</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Hukum Acara Mahkamah Konstitusi</td>
          <td>3</td>
        </tr>
        <tr>
          <td>Metode Penelitian Hukum</td>
          <td>3</td>
        </tr>
        <tr>
          <td>Hukum Kesehatan</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Hukum Teknologi</td>
          <td>2</td>
        </tr>
        </table>
      </div>
  </div>

  const se5b= 
  <div className="isian">
    <div className="kiri">
      <table>
        <tr className='tr-kiri'>
          <th>Mata Kuliah</th>
          <th>SKS</th>
        </tr>
        <tr>
          <td>Hukum Perdata Internasional (WP)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Hukum Anti Monopoli dan Persaingan Usaha Tidak Sehat (WP)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Hukum Kepailitan (WP)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Hukum Dagang Internasional (WP)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Hukum Investasi dan Pasar Modal (WP)</td>
          <td>2</td>
        </tr>
      </table>
    </div>
    <div className="kanan">
      <table>
        <tr className='tr-kanan'>
          <th>Mata Kuliah</th>
          <th>SKS</th>
        </tr>
        <tr>
          <td>Hukum Perbankan (WP)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Kapita Selekta Hukum Bisnis (WP)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Lembaga Pembiayaan (WP)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Hukum Ekonomi Syariah (WP)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Pendaftaran Tanah dan Rumah Susun (WP)</td>
          <td>2</td>
        </tr>
      </table>
    </div>
    <div className="phone-isian">
      <table>
        <tr>
          <th>Mata Kuliah</th>
          <th>SKS</th>
        </tr>
        <tr>
          <td>Hukum Perdata Internasional (WP)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Hukum Anti Monopoli dan Persaingan Usaha Tidak Sehat (WP)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Hukum Kepailitan (WP)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Hukum Dagang Internasional (WP)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Hukum Investasi dan Pasar Modal (WP)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Hukum Perbankan (WP)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Kapita Selekta Hukum Bisnis (WP)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Lembaga Pembiayaan (WP)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Hukum Ekonomi Syariah (WP)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Pendaftaran Tanah dan Rumah Susun (WP)</td>
          <td>2</td>
        </tr>
        </table>
      </div>
  </div>

  const se5p=
  <div className="isian">
    <div className="kiri">
      <table>
        <tr className='tr-kiri'>
          <th>Mata Kuliah</th>
          <th>SKS</th>
        </tr>
        <tr>
          <td>Hukum Kedokteran Forensik dan Medikolegal (WP)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Kriminologi (WP)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Viktimologi (WP)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Tindak Pidana Narkotika dan Psikotropika (WP)</td>
          <td>2</td>
        </tr>
      </table>
    </div>
    <div className="kanan">
      <table>
        <tr className='tr-kanan'>
          <th>Mata Kuliah</th>
          <th>SKS</th>
        </tr>
        <tr>
          <td>Hukum Pidana Internasional (WP)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Kapita Selekta Hukum Pidana (WP)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Kejahatan Korporasi (WP)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Hukum Siber (P)</td>
          <td>2</td>
        </tr>
      </table>
    </div>
    <div className="phone-isian">
      <table>
        <tr>
          <th>Mata Kuliah</th>
            <th>SKS</th>
          </tr>
          <tr>
          <td>Hukum Kedokteran Forensik dan Medikolegal (WP)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Kriminologi (WP)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Viktimologi (WP)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Tindak Pidana Narkotika dan Psikotropika (WP)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Hukum Pidana Internasional (WP)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Kapita Selekta Hukum Pidana (WP)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Kejahatan Korporasi (WP)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Hukum Siber (P)</td>
          <td>2</td>
        </tr>
        </table>
      </div>
  </div>

  const se5t=
  <div className="isian">
    <div className="kiri">
      <table>
        <tr className='tr-kiri'>
          <th>Mata Kuliah</th>
          <th>SKS</th>
        </tr>
        <tr>
          <td>Hukum Pemerintahan Daerah (WP)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Hukum Konstitusi dan Ekonomi Konstitusi (WP)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Hukum kepartaian dan pemilihan umum (WP)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Perbandingan hukum tata negara (WP)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Lembaga kepresidenan (WP)</td>
          <td>2</td>
        </tr>
      </table>
    </div>
    <div className="kanan">
      <table>
        <tr className='tr-kanan'>
          <th>Mata Kuliah</th>
          <th>SKS</th>
        </tr>
        <tr>
          <td>Hukum Kebijakan Publik (WP)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Kapita Selekta Hukum Tata Negara (WP)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Hukum Keuangan Negara (WP)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Hukum Perbendaharaan Negara (WP)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Hukum Administrasi Pembangunan (WP)</td>
          <td>2</td>
        </tr>
      </table>
    </div>
    <div className="phone-isian">
      <table>
        <tr>
          <th>Mata Kuliah</th>
            <th>SKS</th>
          </tr>
        <tr>
          <td>Hukum Pemerintahan Daerah (WP)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Hukum Konstitusi dan Ekonomi Konstitusi (WP)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Hukum kepartaian dan pemilihan umum (WP)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Perbandingan hukum tata negara (WP)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Lembaga kepresidenan (WP)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Hukum Kebijakan Publik (WP)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Kapita Selekta Hukum Tata Negara (WP)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Hukum Keuangan Negara (WP)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Hukum Perbendaharaan Negara (WP)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Hukum Administrasi Pembangunan (WP)</td>
          <td>2</td>
        </tr>
      </table>
      </div>
  </div>

  const se6=
  <div className="isian">
    <div className="kiri">
      <table>
        <tr className='tr-kiri'>
          <th>Mata Kuliah</th>
          <th>SKS</th>
        </tr>
        <tr>
          <td>Analisa dan Argumentasi Hukum</td>
          <td>3</td>
        </tr>
        <tr>
          <td>Etika Bisnis dan Profesi</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Filsafat Hukum</td>
          <td>3</td>
        </tr>
        <tr>
          <td>Hukum Anti Korupsi dan Pencucian Uang</td>
          <td>2</td>
        </tr>
      </table>
    </div>
    <div className="kanan">
      <table>
        <tr className='tr-kanan'>
          <th>Mata Kuliah</th>
          <th>SKS</th>
        </tr>
        <tr>
          <td>Hukum Kewirausahaan</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Teknik Perancangan Kontrak</td>
          <td>3</td>
        </tr>
        <tr>
          <td>Praktik Penulisan Ilmiah</td>
          <td>3</td>
        </tr>
      </table>
    </div>
    <div className="phone-isian">
      <table>
        <tr>
          <th>Mata Kuliah</th>
            <th>SKS</th>
          </tr>
          <tr>
          <td>Analisa dan Argumentasi Hukum</td>
          <td>3</td>
        </tr>
        <tr>
          <td>Etika Bisnis dan Profesi</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Filsafat Hukum</td>
          <td>3</td>
        </tr>
        <tr>
          <td>Hukum Anti Korupsi dan Pencucian Uang</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Hukum Kewirausahaan</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Teknik Perancangan Kontrak</td>
          <td>3</td>
        </tr>
        <tr>
          <td>Praktik Penulisan Ilmiah</td>
          <td>3</td>
        </tr>
        </table>
      </div>
  </div>

  const se7=
  <div className="isian">
  <div className="kiri">
    <table>
      <tr className='tr-kiri'>
        <th>Mata Kuliah</th>
        <th>SKS</th>
      </tr>
      <tr>
        <td>Praktik Peradilan Perdata</td>
        <td>2</td>
      </tr>
      <tr>
        <td>Praktik Peradilan Pidana</td>
        <td>2</td>
      </tr>
      <tr>
        <td>Praktik Peradilan Tata Usaha Negara</td>
        <td>2</td>
      </tr>
      <tr>
        <td>Praktik Peradilan Mahkamah Konstitusi</td>
        <td>2</td>
      </tr>
      <tr>
        <td>Praktik Pengabdian Kepada Masyarakat</td>
        <td>3</td>
      </tr>
    </table>
  </div>
  <div className="kanan">
    <table>
      <tr className='tr-kanan'>
        <th>Mata Kuliah</th>
        <th>SKS</th>
      </tr>
      <tr>
        <td>Teknik Penyusunan Dokumen Perkara Perdata</td>
        <td>3</td>
      </tr>
      <tr>
        <td>Teknik Perancangan Perundang - Undangan</td>
        <td>3</td>
      </tr>
      <tr>
        <td>Teknik Penyusunan Dokumen Perkara Pidana</td>
        <td>3</td>
      </tr>
      <tr>
        <td>Magang</td>
        <td>2</td>
      </tr>
    </table>
  </div>
  <div className="phone-isian">
    <table>
      <tr>
        <th>Mata Kuliah</th>
          <th>SKS</th>
        </tr>
        <tr>
        <td>Praktik Peradilan Perdata</td>
        <td>2</td>
      </tr>
      <tr>
        <td>Praktik Peradilan Pidana</td>
        <td>2</td>
      </tr>
      <tr>
        <td>Praktik Peradilan Tata Usaha Negara</td>
        <td>2</td>
      </tr>
      <tr>
        <td>Praktik Peradilan Mahkamah Konstitusi</td>
        <td>2</td>
      </tr>
      <tr>
        <td>Praktik Pengabdian Kepada Masyarakat</td>
        <td>3</td>
      </tr>
      <tr>
        <td>Teknik Penyusunan Dokumen Perkara Perdata</td>
        <td>3</td>
      </tr>
      <tr>
        <td>Teknik Perancangan Perundang - Undangan</td>
        <td>3</td>
      </tr>
      <tr>
        <td>Teknik Penyusunan Dokumen Perkara Pidana</td>
        <td>3</td>
      </tr>
      <tr>
        <td>Magang</td>
        <td>2</td>
      </tr>
      </table>
    </div>
  </div>

  const se8=
  <div className="isian">
  <div className="kiri">
    <table>
      <tr className='tr-kiri'>
        <th>Mata Kuliah</th>
        <th>SKS</th>
      </tr>
      <tr>
        <td>Skripsi</td>
        <td>6</td>
      </tr>
    </table>
  </div>
  <div className="kanan">
    <table>
      <tr className='tr-kanan'>
        <th>Mata Kuliah</th>
        <th>SKS</th>
      </tr>      
    </table>
  </div>
  <div className="phone-isian">
    <table>
      <tr>
        <th>Mata Kuliah</th>
          <th>SKS</th>
        </tr>
        <tr>
          <td>Skripsi</td>
          <td>6</td>
        </tr>
      </table>
    </div>
  </div>

  return (
    <div className='s1'>
      <Header />
      <div className="content">
        <div className="entry">
          <img src="https://iblam.ac.id/wp-content/uploads/2020/04/kurikulum-s1.jpeg" alt="" />
        </div>
        <div className="container">
          <div className="breadcrumb">
            <Breadcrumb separator=">">
              <Breadcrumb.Item><Link to={'/'}>Home</Link></Breadcrumb.Item>
              <Breadcrumb.Item><Link to={'/undergraduates'}>Undergraduates</Link></Breadcrumb.Item>
              <Breadcrumb.Item><Link to={'/graduates/s1'}>S1</Link></Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="title-main">
                    <h2>
                        <img src="https://iblam.ac.id/wp-content/uploads/2019/11/icon-3.png" alt="" /><br className='br' /> &nbsp;
                        <strong>Kurikulum S1</strong>
                    </h2>
          </div>
          <div className="isi">
            <div className="collapse-wrap">
              <div className="collapse">
                <Collapse accordion>
                  <Panel header="SEMESTER I (7 Mata Kuliah)" key={1}>
                    {se1}
                  </Panel>
                  <Panel header="SEMESTER II (8 Mata Kuliah)" key={2}>
                    {se2}
                  </Panel>
                    <Panel header="SEMESTER III (7 Mata Kuliah)" key={3}>
                      {se3}
                    </Panel>
                    <Panel header="SEMESTER IV (8 Mata Kuliah)" key={4}>
                      {se4}
                    </Panel>
                    <Panel header="SEMESTER V (5 Mata Kuliah)" key={5}>
                      {se5}
                    </Panel>
                    <Panel header="SEMESTER V : KONSENTRASI HUKUM BISNIS (4 sks WP dan 2 sks P) (10 Mata Kuliah)" key={6}>
                      {se5b}
                    </Panel>
                    <Panel header="SEMESTER V : KONSENTRASI HUKUM PIDANA (4 sks WP dan 2 sks P) (8 Mata Kuliah)" key={7}>
                      {se5p}
                    </Panel>
                    <Panel header="SEMESTER V : KONSENTRASI HUKUM TATA NEGARA (4 sks WP dan 2 sks P) (10 Mata Kuliah)" key={8}>
                      {se5t}
                    </Panel>
                    <Panel header="SEMESTER VI (7 Mata Kuliah)" key={9}>
                      {se6}
                    </Panel>
                    <Panel header="SEMESTER VII (9 Mata Kuliah)" key={10}>
                      {se7}
                    </Panel>
                    <Panel header="SEMESTER VIII (1 Mata Kuliah)" key={11}>
                      {se8}
                    </Panel>
                  </Collapse>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="links-s">
            <div className="biaya">
                <div className="isi-link">
                    <h4>Biaya Kuliah Program S1</h4>
                    <button>Download PDF</button>
                </div>
            </div>
            <div className="download">
                <div className="isi-link">
                    <h4>Download Brochure</h4>
                    <button>Download</button>
                </div>
            </div>
            <div className="apply">
                <div className="isi-link">
                    <h4>Apply Sekarang</h4>
                    <button>Apply Now</button>
                </div>
            </div>
        </div>
        <div className="s-help">
            <Link className='one'>
                <img src="https://iblam.ac.id/wp-content/themes/iblam/assets/img/banner-sm-kampus-jakarta.jpg" alt="" />
            </Link>
            <Link className='two'>
                <img src="https://iblam.ac.id/wp-content/themes/iblam/assets/img/banner-sm-kampus-depok.jpg" alt="" />
            </Link>
        </div>
        <Foot />
    </div>
  )
}
