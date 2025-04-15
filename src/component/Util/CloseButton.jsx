import Image from "react-bootstrap/Image";
import closeImageButton from "../../assets/close_modal.png";


function close(close) {
    close(false)
}
function CloseBtn(prop) {
    return <div style={{"cursor" : "pointer"}} onClick={()=>{close(prop.close)}}>
        <Image src={closeImageButton ? closeImageButton : ""} width={"15px"} height={"15px"}/>
    </div>;
}

export default CloseBtn;
