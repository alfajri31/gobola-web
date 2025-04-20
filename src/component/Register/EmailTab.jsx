import {Form, InputGroup} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import lockIcon from "../../assets/lock_icon.png";
import emailIcon from "../../assets/email_icon.png";

export function EmailTab() {
    return(
        <>
            <div className={"row"}>
                <div className={"col-md-6"}>
                    <InputGroup className="mb-3">
                        <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1"
                                          style={{backgroundColor: "#EEEEEE"}}><Image
                                        src={emailIcon? emailIcon : ""} width={"100%"} height={"10px"}/></span>
                        </div>
                        <Form.Control type="text" placeholder="armin.arltet@gmail.com" aria-label="Email"
                                      aria-describedby="basic-addon1" style={{
                            borderLeft: "none",
                            backgroundColor: "#EEEEEE"
                        }}/>
                    </InputGroup>
                </div>  
                <div className={"col-md-6"}>
                    <InputGroup className="mb-3">
                        <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1"
                                          style={{backgroundColor: "#EEEEEE"}}><Image src={lockIcon ? lockIcon : ""}
                                                                                      width={"100%"}
                                                                                      height={"15px"}/></span>
                        </div>
                        <Form.Control type="password" placeholder='••••••••' aria-label="Password"
                                      aria-describedby="basic-addon1" style={{
                            borderLeft: "none",
                            backgroundColor: "#EEEEEE"
                        }}/>
                    </InputGroup>
                </div>
                <div className={"col-md-6"}>
                    <InputGroup className="mb-3">
                        <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1"
                                          style={{backgroundColor: "#EEEEEE"}}><Image src={lockIcon ? lockIcon : ""}
                                                                                      width={"100%"}
                                                                                      height={"15px"}/></span>
                        </div>
                        <Form.Control type="password" placeholder='Ulangi Kata sandi' aria-label="Password"
                                      aria-describedby="basic-addon1" style={{
                            borderLeft: "none",
                            backgroundColor: "#EEEEEE"
                        }}/>
                    </InputGroup>
                </div>
            </div>
        </>
    )
}
