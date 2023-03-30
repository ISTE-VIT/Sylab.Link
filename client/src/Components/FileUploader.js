import React, { useState, useEffect, useNavigate } from "react"
import axios from "axios"
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
} from "firebase/storage";
import { authentication } from "./firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {firebase} from "./firebase";
import { storage } from "./firebase";
import { v4 } from "uuid";
import "./FileUploader.css"
import cloudimg from "../Images/imagecloud.png"
import progress from "../Images/Process-pana.png"

function App() {   
  const [ name, setName ] = useState("")
  const [ home, setHome ] = useState("")
  const [imageUrls, setImageUrls] = useState([]);
  const [container, setContainer] = useState([]);

useEffect(() => {
  axios.get("http://localhost:4000/home").then(function(response) {
    setHome(response.data)
  })
}, [])

async function postName(e) {
  e.preventDefault()
  try {
    await axios.post("http://localhost:4000/post_name", {
      imageUrls
    })
  } catch (error) {
    console.error(error)
  }
}
  const [imageUpload, setImageupload] = useState(null)
  const imagesListRef = ref(storage, "images/");
  const length = imageUrls.length
  console.log(imageUrls[length-1])
  console.log(imageUrls)

  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };


  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, [])

  let buttonDisp = <ul></ul>

  const signInWithFirebase = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
    .then((re) => {
      console.log(re);
      buttonDisp =
      <ul className='button-ul'>
        <button className='login-button'>Login</button>
        <button className='sign-up-button' onClick={signInWithFirebase}>Sign In</button>
      </ul>

    })
    .catch((err) => {
      console.log(err)
    })
  }

  

  return (
    <div className="App">
      <form onSubmit={postName}>
    <div className="App">
      <div className='navbar'>

        <div className='upload-area'>
          
            <div className='upload-head'>
              <div className="side-images">
                <img src={cloudimg} alt="cloud-upload" />
              </div>
              <div className="upload-area-heading">
                <h1>Find <span>Links</span> and relevant <br></br><span>Articles</span></h1>
              </div>
              <div className="endside-images">
                <img src={progress} alt="cloud-upload" />
              </div>
            </div>

            <div className='upload-area-main'>
              <div className = 'upload-main-div'>
                <div class='file file--upload' onChange = {(event) => {
                  setImageupload(event.target.files[0])
                }}>
      <label for='input-file'>Upload
      </label>
      <input id='input-file' type='file' />
    </div>
              </div>
            </div>
            <div className="uploaded-images"></div>
        </div>
      </div>
    </div>

    <div className="button-classname">
    <button className='sign-up-button' onClick={uploadFile}>
        Submit
    </button>
    </div>

    {/* <div className="image-display">
      <div className="image-mapped">
        <h1>Image Uploaded</h1>
      </div>
      <div className="links-div">
        <div className="video-links">
            <h1>Video Links</h1>
            <p>Youtube.com</p>
        </div>
        <div className="article-links">
            <h1>Article Links</h1>
            <p>geeksforgeek.com</p>
        </div>
      </div>
    </div> */}

    <div className="table-div">
      <table>
        <tr>
          <th>Image Uploaded</th>
          <th>Video Links</th>
          <th>Article Links</th>
        </tr>
        {imageUrls.map((url) => {
            return(
        <tr className="mapped-tr">
          <td className="image-td">
              <div>
                <img src={url} alt = "hello" />
                {/* <img src="https://i.ytimg.com/an_webp/vJEO57B05Sg/mqdefault_6s.webp?du=3000&sqp=CMiM75UG&rs=AOn4CLCnV2DYDC5btmKKzGZ-J2r4VVMGaA" alt="hehhe" /> */}
              </div>
          </td>
          <td className="video-td">
            <p>Youtube.com</p>
          </td>
          <td className="article-td">
            Geeksforgeeks.com
          </td>
        </tr>
            );
          })}
      </table>
    </div>
    </form>

  </div>

  )
}

export default App;