import './App.scss';
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import {Landing} from "./component/Landing";
import { PopUpDownloaApk } from './component/Util/download';
import "@fontsource/lato"; 
import "@fontsource/lato/300.css";
import "@fontsource/lato/700.css";



function App() {
  return (
      <div>
        <PopUpDownloaApk/>
        <Landing/>
      </div>
  );
}

export default App;
