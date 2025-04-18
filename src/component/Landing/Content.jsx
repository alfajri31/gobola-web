import News from "./News/News";

function LandingContent() {
    return(
        <>
            <div>
                <h2>Berita Sepakbola terkini</h2>
                <div style={{marginBottom:"1rem"}}></div>
                <News id={"go-news"}/>
            </div>
        </>
    )
}

export default LandingContent
