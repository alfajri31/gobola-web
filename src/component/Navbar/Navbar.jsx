import search from "../../assets/search.png"
import line1 from "../../assets/line_1.png"
import {useState} from "react";
import {RegisterModal} from "../Register/RegisterModal";
import {LoginModal} from "../Login/Login";


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
    const[authComponent,setAuthComponent]=useState("login");
    let prop;
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
    prop = (authComponent === "login") ? propLogin : propRegister
    return (
        <div className={"header"}>
            {authModal(authComponent,prop)}
                <div className={"position-relative"} style={{
                    left: "-.8rem",
                    right: 60
                }}>
                <div className={"float-left"} style={
                    {
                        width: "60%",
                    }}>
                    <div style={{
                        paddingTop: ".5rem",
                        position: "relative"
                    }} className={"row"}>
                        <div className={"col-8"}>Logo</div>
                        <div className={"col-4 search-match"}>
                            <input type={"text"} placeholder={"Pertandingan Sepak Bola"}/>
                            {/*<img src={search} width="15" height="15" alt={'search'} style={{*/}
                            {/*    cursor: "pointer",*/}
                            {/*    position: "relative",*/}
                            {/*    top: "-0.1rem",*/}
                            {/*    left: "0rem"*/}
                            {/*}}/>*/}
                        </div>
                    </div>
                </div>
                    <img src={line1} width="" height="45" alt={'line'} style={{
                        position: "relative",
                        top: "0rem",
                        left: "2rem"
                    }}/>
                <div className={"position-relative"} style={{
                    top: "0rem",
                    left: "5rem",
                    display: "inline-block"
                }}>
                    <div className={"d-inline-block"} id={"login"}
                         style={{
                             cursor: "pointer"
                         }}
                         onClick={() => {
                             handleShowLogin(setAuthComponent("login"))
                         }}>Masuk
                    </div>
                    <div className={"d-inline-block pl-5"} id={"register"}>
                        <div className={"create-account-btn"}
                             style={{
                                 cursor: "pointer"
                             }}
                             onClick={() => {
                                 handleShow(setAuthComponent("register"))
                             }}>Buat Akun
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
