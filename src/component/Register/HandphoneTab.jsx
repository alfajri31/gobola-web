import {Form, InputGroup} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import mobileIcon from "../../assets/mobile_icon.png";
import lockIcon from "../../assets/lock_icon.png";


export function HandPhoneTab() {
    return (
        <>
            <div className={"row"}>
                <div className={"col-6"}>
                    <InputGroup className="mb-3">
                        <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1"
                                          style={{backgroundColor: "#EEEEEE"}}><Image
                                        src={mobileIcon ? mobileIcon : ""} width={"100%"} height={"20px"}/></span>
                        </div>
                        <Form.Control type="text" placeholder="+62  81367511724" aria-label="Username"
                                      aria-describedby="basic-addon1" style={{
                            borderLeft: "none",
                            backgroundColor: "#EEEEEE"
                        }}/>
                    </InputGroup>
                </div>
                <div className={"col-6"}></div>
                <div className={"col-6"}>
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
                <div className={"col-6"}>
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
