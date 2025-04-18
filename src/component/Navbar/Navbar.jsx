import line1 from "../../assets/line_1.png"
import {RegisterModal} from "../Register/RegisterModal";
import {LoginModal} from "../Login/LoginModal";
import {useState} from "react";
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
                        width: "70%",
                    }}>
                    <div style={{
                        paddingTop: ".5rem",
                        position: "relative"
                    }} className={"row"}>
                        <div className={"col-8"} style={{fontSize:"2rem"}}>Logo</div>
                        <div className={"col-4"} style={{}}>
                            <ReactSearchBox
                                placeholder="Pertandingan Sepak Bola"
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
                        {/*<SearchBox pageSize={pageSizeState} searchBoxToggle={searchBoxState}/>*/}
                    </div>
                </div>
                    <img src={line1 ? line1 : ""} width="" height="45" alt={'line'} style={{
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
                             handleShowLogin()
                             setAuthComponent("login")
                         }}>Masuk
                    </div>
                    <div className={"d-inline-block pl-5"} id={"register"}>
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
    )
}
