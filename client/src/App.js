import Home from "./Components/Home.js";
import FileUploader from "./Components/FileUploader.js";
import Details from "./Components/Details.js"
import Test from "./Components/text"
// import SignIn from "./Components/signinpage.js"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  return (
    <div className="App">
    <div className="navbar">
        <nav>

            <ul className='logo-ul'>
                <li>
                <h1 className='logo-heading'>SYLAB.<span>LINK</span></h1>
                </li>
            </ul>

            <ul className='middle-ul'>
                <li>
                  <a className="middle-a" href="/">
                     Home
                  </a>
                </li>
                <li>
                  <a href="/FileUploader">
                    Upload Syllabus
                  </a>
                </li>
            </ul>
        </nav>
    </div>    
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/FileUploader" element={<FileUploader />} />
          <Route path="/Details" element={<Details />} />
          <Route path="/Test" element={<Test />} />
          {/* <Route path="/SignInPage" element={<SignIn />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;