import {Button, Modal} from "react-bootstrap";
import CloseBtn from "../Util/CloseButton";
import {HandPhoneTab} from "./HandphoneTab";
import {EmailTab} from "./EmailTab";
import {useState} from "react";

function chooseTabRegister(tabName) {
    if(tabName === "handPhoneTab") {
        return(
            <>
                <div className={"col-12"}>
                    <HandPhoneTab/>
                </div>
            </>
        )
    }
    return(
        <>
            <div className={"col-12"}>
                <EmailTab/>
            </div>
        </>)
}

export function RegisterModal(prop) {
    const [stateTabName, setStateTabName] = useState("handPhoneTab")
    return (
        <>
            <Modal show={prop.prop.show}>
                <Modal.Header>
                    <Modal.Title>
                        <div className={"row"}>
                            <div className={"col-12"}>
                                <div>
                                    Daftar Sekarang
                                </div>
                                <div>
                                    <p style={{
                                        fontSize: ".8rem",
                                        fontWeight: 400
                                    }
                                    }>Simpan tim atau liga favorit kamu, ikuti obrolan, dan lainnya</p>
                                </div>
                            </div>
                        </div>
                    </Modal.Title>
                    <div className={"pr-4"}>
                        <CloseBtn close={prop.prop}/>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div className={"row"}>
                        <div className={"col-6"} style={{cursor: "pointer", marginBottom: "2rem"}} onClick={()=>{setStateTabName(("handPhoneTab"))}}>Nomor HP
                            <div className={stateTabName==="handPhoneTab" ? "underline-mobile-tab" : ""}></div>
                        </div>
                        <div className={"col-6"} style={{cursor: "pointer", marginBottom: "2rem"}} onClick={()=>{setStateTabName(("emailTab"))}}>Email
                            <div className={stateTabName === "emailTab" ? "underline-email-tab" : ""}></div>
                        </div>
                        {chooseTabRegister(stateTabName)}
                    </div>
                </Modal.Body>
                <div className={"pl-3 pr-3"}>
                    <p style={{fontSize: ".7rem", fontWeight: "400"}}>Dengan mendaftar, kamu menyetujui <a href={"#"} style={{color:"black",fontSize: ".7rem", fontWeight: "500",textDecoration:"underline"}}>Syarat dan
                        Kondisi</a>,serta <a href={"#"} style={{color:"black",fontSize: ".7rem", fontWeight: "500",textDecoration:"underline"}}>Kebijakan Privasi eBola</a></p>
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
                        }}>Sudah punya akun?</span>
                        <a href={"/#"} style={{color: "white", fontSize: ".8rem"}}> Login ke akunmu!</a>
                    </div>
                </div>
            </Modal>
        </>
    )
}

