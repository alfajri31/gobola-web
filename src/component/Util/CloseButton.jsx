import Image from "react-bootstrap/Image";
import closeImageButton from "../../assets/close_modal.png";


function close(prop) {
    console.log(prop)
    prop.close.handleClose(false)
}
function CloseBtn(prop) {
    return <div style={{"cursor" : "pointer"}} onClick={()=>{close(prop)}}>
        <Image src={closeImageButton ? closeImageButton : ""} width={"15px"} height={"15px"}/>
    </div>;
}

export default CloseBtn;
