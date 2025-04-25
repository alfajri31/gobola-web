import {Button, Modal} from "react-bootstrap";
import CloseBtn from "../Util/CloseButton";
import {useState} from "react";
import {EmailTabLogin} from "./EmailTabLogin";
import {HandPhoneTabLogin} from "./HandphoneTabLogin";


function chooseTabLogin(tabName) {
    if(tabName === "handPhoneTabLogin") {
        return(
            <>
                <div className={"col-12"}>
                    <HandPhoneTabLogin/>
                </div>
            </>
        )
    }
    return(
        <>
            <div className={"col-12"}>
                <EmailTabLogin/>
            </div>
        </>)
}

export function LoginModal(prop) {
    const [stateTabName, setStateTabName] = useState("handPhoneTabLogin")
    return (
        <>
            <Modal show={prop.prop.show}>
                <Modal.Header>
                    <Modal.Title>
                        <div className={"row pr-5"}>
                            <div className={"col-10"}>
                                <div>
                                    Login ke akunmu
                                </div>
                                <div>
                                    <p style={{
                                        fontSize: ".8rem",
                                        fontWeight: 400
                                    }
                                    }>Simpan tim atau liga favorit kamu, ikuti obrolan, dan lainnya</p>
                                </div>
                            </div>
                            <div className={"col-2 position-relative"} style={{}}>
                                <CloseBtn close={prop.prop}/>
                            </div>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={"row"}>
                        <div className={"col-6"} style={{cursor: "pointer", marginBottom: "2rem"}} onClick={()=>{setStateTabName(("handPhoneTabLogin"))}}>Nomor HP
                            <div className={stateTabName==="handPhoneTabLogin" ? "underline-mobile-tab" : ""}></div>
                        </div>
                        <div className={"col-6"} style={{cursor: "pointer", marginBottom: "2rem"}} onClick={()=>{setStateTabName(("emailTabLogin"))}}>Email
                            <div className={stateTabName === "emailTabLogin" ? "underline-email-tab" : ""}></div>
                        </div>
                        {chooseTabLogin(stateTabName)}
                    </div>
                </Modal.Body>
                <div className={"pl-3 pr-3"}>
                    <div className={"mb-3"}>
                        <Button style={{
                            fontSize: ".9rem",
                            width: "100px",
                            backgroundColor: "#00B0A6"
                        }}>
                            Login
                        </Button>
                    </div>
                </div>
                <div style={{
                    backgroundColor: "#013A67",
                    color: "white",
                    height: "50px",
                    borderBottomLeftRadius: "5px",
                    borderBottomRightRadius: "5px",
                }}>
                    <div className={"pt-2"}>
                        <span style={{
                            color: "white",
                            fontSize: ".8rem",
                            paddingLeft: "1rem",
                        }}>Belum punya akun?</span>
                        <a href={"/#"} style={{color: "white", fontSize: ".8rem"}}> Daftar Sekarang!</a>
                    </div>
                </div>
            </Modal>
        </>
    )
}

