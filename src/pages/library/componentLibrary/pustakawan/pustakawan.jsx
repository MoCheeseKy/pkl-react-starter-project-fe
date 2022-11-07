import React from "react";
import './pustakawan.scss';
import Head from "../../../../components/headlib/head";
import Foot from "../../../../components/footlib/foot";

export default function Pustakawan() {
    return (
        <>
            <Head></Head>
            <div className="pustakawan">
                <h1>Profil Pustakawan</h1>
                <hr />
                <div className="pustakawan-wrapper">
                    <div className="pustakawan-item">
                        <div className="pustakawan-item-image"></div>
                        <div className="pustakawan-item-desc">
                            <tr>
                                <td>Nama</td>
                                <td>Administrator</td>
                            </tr>
                            <tr>
                                <td>Jabatan</td>
                                <td>Pustakawan</td>
                            </tr>
                            <tr>
                                <td>Surel</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Medsos</td>
                                <td></td>
                            </tr>
                        </div>
                    </div>
                    <div className="pustakawan-item">
                        <div className="pustakawan-item-image"></div>
                        <div className="pustakawan-item-desc">
                            <tr>
                                <td>Nama</td>
                                <td>Tika</td>
                            </tr>
                            <tr>
                                <td>Jabatan</td>
                                <td>Pustakawan</td>
                            </tr>
                            <tr>
                                <td>Surel</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Medsos</td>
                                <td></td>
                            </tr>
                        </div>
                    </div>
                </div>
            </div>
            <Foot></Foot>
        </>
    )
}