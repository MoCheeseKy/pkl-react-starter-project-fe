
import React from "react";
import { DownOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { Drawer } from "antd";
import { useState } from "react";
import './header.scss'

export default function Header() {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const drawer = {
        display: 'flex',
        gap: '40px',
    };
    const right = {
        width: '50%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
    }
    const left = {
        width: '50%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
    }
    const buttonRight = {
        width: '100%',
        border: 'none',
        backgroundColor: 'white',
        textAlign: 'left',
        fontSize: '18px',
        color: 'black',

    }
    const buttonLeft = {
        width: '100%',
        border: 'none',
        backgroundColor: 'white',
        textAlign: 'right',
        fontSize: '18px',
        color: 'black',
    }
    const login = localStorage.getItem('login')
    var showButton
    if (login === "true") {
        showButton = false
    } else {
        showButton = true
    }

    function Logout() {
        localStorage.clear()
        window.location.reload()
    }

    return (
        <div className="header">
            <Link to="/">
                <div className="logo">

                </div>
            </Link>
            <nav>
                <div className="top-nav">
                    <Link to="/undergraduates"><button>Ungraduates</button></Link>
                    <Link to="/graduates"><button>Graduates</button></Link>
                    <Link to="/alumni"><button>Alumni</button></Link>
                    <Link to="/daftar" ><button className="log">Pendaftaran</button></Link>
                    <div>
                        {showButton ? <Link to="/login"><button className="log">Login</button> </Link> : <Link to="/login"><button className="log">Logout</button></Link>}
                    </div>
                </div>
                <div className="bottom-nav">
                    <button><Link to={'/academic'}>Academic</Link></button>
                    <button>Admission</button>
                    <button>E-Library</button>
                    <button>Library</button>
                    <button>Life at Iblam</button>
                    <button>About</button>
                    <button><Link to={'/partners'}>Partners</Link></button>
                    <button>LPM</button>
                    <div className="search">

                    </div>
                </div>
            </nav>
            <div className="nav-phone">
                <button onClick={showDrawer}><DownOutlined /></button>
                <Drawer
                    className="drawer"
                    title="University Name"
                    placement="top"
                    closable={false}
                    onClose={onClose}
                    open={open}
                    key="top"
                    bodyStyle={drawer}


                >
                    <div className="left" style={left}>
                        <Link><button style={buttonLeft}>Ungraduates</button></Link>
                        <Link><button style={buttonLeft}>Graduates</button></Link>
                        <Link><button style={buttonLeft}>Alumni</button></Link>
                        <Link to="/daftar"><button style={buttonLeft}>Daftar</button></Link>
                        <Link to="/login"><button hidden={!showButton} style={buttonLeft}>Login</button></Link>
                        <button onClick={Logout} style={buttonLeft} hidden={showButton}>Logout</button>
                    </div>
                    <div className="right" style={right}>
                        <Link><button style={buttonRight}>Academic</button></Link>
                        <Link><button style={buttonRight}>Admission</button></Link>
                        <Link><button style={buttonRight}>E-Library</button></Link>
                        <Link><button style={buttonRight}>Library</button></Link>
                        <Link><button style={buttonRight}>Life at Iblam</button></Link>
                        <Link><button style={buttonRight}>About</button></Link>
                        <Link><button style={buttonRight}>Partners</button></Link>
                        <Link><button style={buttonRight}>LPM</button></Link>
                    </div>
                </Drawer>
            </div>

        </div>
    )
}