import {Button, Form, InputGroup, Modal} from "react-bootstrap";
import CloseBtn from "../Util/CloseButton";

export function LoginModal(prop) {
    // console.log(prop)
    // console.log(prop.prop.show);
    // console.log(prop.prop.handleClose);
    return(
        <>
            <Modal show={prop.prop.show}>
                <Modal.Header>
                    <Modal.Title>
                        <div className={"row"}>
                            <div className={"col-10"}>
                                <div>
                                    Login Sekarang
                                </div>
                                <div>
                                    <p style={{
                                        fontSize: ".8rem",
                                        fontWeight: 400
                                    }
                                    }>Simpan tim atau liga favorit kamu, ikuti obrolan, dan lainnya</p>
                                </div>
                            </div>
                            <div className={"col-2"}>
                                <CloseBtn close={prop.prop.handleClose}/>
                            </div>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <span>Nomor HP</span>
                            <div className={"underline-news mb-2"}></div>
                            <InputGroup className="mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1"
                                          style={{backgroundColor: "transparent"}}>@</span>
                                </div>
                                <Form.Control type="text" placeholder="+62   81367511724" aria-label="Username"
                                              aria-describedby="basic-addon1" style={{
                                    borderLeft: "none"
                                }}/>
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1"
                                          style={{backgroundColor: "transparent"}}>@</span>
                                </div>
                                <Form.Control type="password" placeholder='••••••••' aria-label="Password"
                                              aria-describedby="basic-addon1" style={{
                                    borderLeft: "none"
                                }}/>
                            </InputGroup>
                        </div>

                        <div className={"col-6"}>
                            <span>Email</span>
                            <InputGroup className="mb-3" style={{marginTop: "4rem"}}>
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1"
                                          style={{backgroundColor: "transparent"}}>@</span>
                                </div>
                                <Form.Control type="password" placeholder='Ulangi Kata sandi' aria-label="Password"
                                              aria-describedby="basic-addon1" style={{
                                    borderLeft: "none"
                                }}/>
                            </InputGroup>
                        </div>
                    </div>

                </Modal.Body>

                <div>
                    <Button style={{
                        backgroundColor: "#00B0A6"
                    }}>
                        Login
                    </Button>
                </div>
                <div style={{
                    backgroundColor: "#013A67",
                    color: "white",
                    height: "50px",
                    borderBottomLeftRadius: "5px",
                    borderBottomRightRadius: "5px",
                }}>
                    <span>
                        <span style={{
                            color: "white",
                            fontSize: ".8rem"
                        }}>Sudah punya akun?</span>
                        <a href={"/#"} style={{color: "white", fontSize: ".8rem"}}> Login ke akunmu!</a>
                    </span>
                </div>
            </Modal>
        </>
    )
}

