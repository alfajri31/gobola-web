import {Footer} from "./Footer/Footer";
import Content from "./Content/Content";
import {Navbar} from "./Navbar/Navbar";

export function Landing() {
    return(
        <>
            <Navbar/>
                <div className={"container-fluid mt-4"}>
                    <Content/>
                </div>
                <div className={"mt-5"}>  </div>
            <Footer/>
        </>
    )
}

