

function close(close) {
    close(false)
}
function CloseBtn(prop) {
    return <div style={{
        "cursor" : "pointer"
    }} onClick={()=>{close(prop.close)}}>X</div>;
}

export default CloseBtn;
