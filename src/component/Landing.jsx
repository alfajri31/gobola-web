import {Footer} from "./Footer/Footer";
import LandingContent from "./Landing/Content";
import {Navbar} from "./Navbar/Navbar";



export function Landing() {
    return(
        <>
            <Navbar/>
                <div className={"container-fluid mt-4"}>
                    <LandingContent/>
                </div>
                <div className={"mt-5"}>  </div>
            <Footer/>
        </>
    )
}

