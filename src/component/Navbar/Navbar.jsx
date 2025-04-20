import line1 from "../../assets/line_1.png"
import {RegisterModal} from "../Register/RegisterModal";
import {LoginModal} from "../Login/LoginModal";
import React, { useState, useEffect } from 'react';
import ReactSearchBox from "react-search-box";


function authModal(authComponent,prop) {
    if(authComponent==="login") {
        console.log(authComponent);
        return  <LoginModal prop={prop}/>
    }
    else {
        console.log(authComponent);
        return <RegisterModal prop={prop}/>
    }
}

export function Navbar() {
    let prop;
    const[authComponent,setAuthComponent]=useState("login");
    const [pageSizeState]=useState(1)
    const [searchBoxState,setSearchBoxState]=useState(false)
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const propRegister = {
        show : show,
        setShow : setShow,
        handleClose : handleClose
    }
    const [showLogin, setShowLogin] = useState(false);
    const handleShowLogin = () => setShowLogin(true);
    const handleCloseLogin = () => setShowLogin(false);
    const propLogin = {
        show: showLogin,
        setShow: setShowLogin,
        handleClose: handleCloseLogin
    }
    const [showBurgerMenu,setShowBurgerMenu] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    prop = (authComponent === "login") ? propLogin : propRegister

    useEffect(() => {
        const checkMobile = () => {
          setIsMobile(window.innerWidth <= 768); // or any breakpoint you choose
        };
    
        checkMobile(); // run once on mount
        window.addEventListener('resize', checkMobile);
    
        return () => window.removeEventListener('resize', checkMobile);
      }, []);

    return (
        <div className={"header"} >
            {authModal(authComponent,prop)}  
            <div className="nav-burger-wrapper">
            
            {(isMobile) ? 
            
            <button className={`nav-burger-menu ${showBurgerMenu ? 'active' : ''}`} 
            onClick={() => setShowBurgerMenu(prev => !prev)}
            aria-controls="demo"
            aria-expanded={showBurgerMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            
            : ""}

           
            </div>
            <div id={'demo'} className={`nav-hidden-wrapper`}  style={{ '--show': showBurgerMenu ? 'block' : 'none' }}>
                    <div className={"float-left"} style={
                            {
                                width: "70%",
                            }}>
                            <div style={{
                                paddingTop: "0rem",
                                position: ""
                            }} className={"row"}>
                                <div className={"col-md-8"} style={{fontSize:"2rem",Left: '1rem',marginLeft: '1rem',marginRight: '-1rem'}}>Logo</div>
                                <div className={"col-md-4 searchbox"} style={{}}>
                                <ReactSearchBox placeholder="Pertandingan Sepak Bola"
                                            data={[
                                                { key: "a", value: "Arsenal" },
                                                { key: "atm", value: "Atletico Madrid" },
                                                { key: "b", value: "Barcelona" },
                                                { key: "bm", value: "Bayern Munich" },
                                                { key: "c", value: "Chelsea F.C" },
                                                { key: "cp", value: "Crystal Palace" },
                                                { key: "d", value: "Dortmund" },
                                                { key: "e", value: "Everton" },
                                                { key: "f", value: "Fulham" },
                                                { key: "g", value: "Galatasaray" },
                                                { key: "h", value: "Hertha Berlin" },
                                                { key: "i", value: "Inter Milan" },
                                                { key: "j", value: "Juventus" },
                                                { key: "k", value: "Kaiserslautern" },
                                                { key: "l", value: "Liverpool" },
                                                { key: "lc", value: "Leicester City" },
                                                { key: "m", value: "Manchester United" },
                                                { key: "man", value: "Manchester City" },
                                                { key: "n", value: "Napoli" },
                                                { key: "new", value: "Newcastle United" },
                                                { key: "o", value: "Olympiacos" },
                                                { key: "psg", value: "Paris Saint-Germain" },
                                                { key: "p", value: "Porto" },
                                                { key: "qpr", value: "Queens Park Rangers" },
                                                { key: "r", value: "Real Madrid" },
                                                { key: "rs", value: "Real Sociedad" },
                                                { key: "s", value: "Sevilla" },
                                                { key: "sh", value: "Southampton" },
                                                { key: "t", value: "Tottenham Hotspur" },
                                                { key: "u", value: "Udinese" },
                                                { key: "v", value: "Valencia" },
                                                { key: "villa", value: "Aston Villa" },
                                                { key: "w", value: "West Ham United" },
                                                { key: "wlv", value: "Wolverhampton" },
                                                { key: "x", value: "Xerez CD" },
                                                { key: "yb", value: "Young Boys" },
                                                { key: "z", value: "Zaragoza" }
                                            ]}
                                            onSelect={(record) => console.log(record)}
                                            onFocus={() => {
                                                console.log("This function is called when is focussed");
                                            }}
                                            onChange={(value) => console.log(value)}
                                            autoFocus
                                            iconBoxSize="48px"
                                />
                                </div>
                            </div>
                    </div>
                    <div className={"float-left"} style={{}}>
                            <img src={line1 ? line1 : ""} width="" height="45" alt={'line'} id="line" />
                    </div>
                    <div id="navbar-auth-wrapper">
                            <div className={"cleared navbar-auth row"} style={{top:"1rem",backgroundColor: ""}}>
                                    <div className={"col-md-6 mt-2"} id={"login"}
                                        style={{
                                            cursor: "pointer"
                                        }}
                                        onClick={() => {
                                            handleShowLogin()
                                            setAuthComponent("login")
                                        }}>Login
                                    </div>
                                    <div className={"col-md-6"} id={"register"}>
                                        <div className={"create-account-btn"}
                                            style={{
                                                cursor: "pointer"
                                            }}
                                            onClick={() => {
                                                handleShow()
                                                setAuthComponent("register")
                                            }}>Buat Akun
                                        </div>
                                    </div>  
                            </div>
                    </div>  
            </div>
        </div>
    )
}
