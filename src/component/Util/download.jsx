import {Modal} from "react-bootstrap";
import {useState} from "react";
import CloseBtn from "../Util/CloseButton";

export function PopUpDownloaApk() {
    let prop;
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const propDownload = {
        show : show,
        setShow : setShow,
        handleClose : handleClose
    }
   return (
    <Modal show={propDownload.show}>
        <Modal.Header>
            <Modal.Title style={{fontSize: '1rem',width: '100%'}}>
            <div className={"row"}>
                <div className={"col-10"}>
                    <p style={{fontSize: ".8rem",fontWeight: 400}}>Try download APK for testing</p>                  
                </div>               
                <div className={"col-2"}>
                     <CloseBtn close={propDownload}/>         
                </div>  
            </div>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <ul style={{fontWeight: 500}}>
                    <li style={{paddingBottom: '1rem'}}>Download Android : <a href="https://al-fajricurriculumvitae.s3.ap-southeast-1.amazonaws.com/js/gobola-v2.apk">Gobola-android.apk</a></li>
                    <li style={{paddingBottom: '1rem'}}>Download IOS : <a>no available</a></li>
                </ul>
        </Modal.Body>
    </Modal>
   )
}