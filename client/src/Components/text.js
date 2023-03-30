import axios from "axios";
import { useState } from "react";

function Test() {
  const [previewImage, setPreviewImage] = useState("");
  const [imageFile, setImageFile] = useState({});
  const [text, setText] = useState("");

  function handleFileInputChange(event) {
    setImageFile(event.target.files[0]);
    setPreviewImage(URL.createObjectURL(event.target.files[0]));
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const form = new FormData();
    form.append("Session", "string");
    form.append("srcImg", imageFile);
    // const options = {
    //   method: "POST",
    //   url: "https://pen-to-print-handwriting-ocr.p.rapidapi.com/recognize/",
    //   headers: {
    //     "content-type": "multipart/form-data",
    //     "x-rapidapi-host": "pen-to-print-handwriting-ocr.p.rapidapi.com",
    //     "x-rapidapi-key": ,
    //   },
    //   data: form,
    // };

    const options = {
        method: 'GET',
        url: 'https://ocr-text-extractor.p.rapidapi.com/languages/list-options',
        headers: {
          Accept: 'string',
          'X-RapidAPI-Key': '894f6e6001msh6fb5a60a282171dp1aab6bjsnffcfa28c097a',
          'X-RapidAPI-Host': 'ocr-text-extractor.p.rapidapi.com'
        }
      };

    axios
      .request(options)
      .then(function (response) {
        setText(response.data.value);
      })
     .catch(function (error) {
       console.error(error);
     });
   }
  return (
    <div className="Test">
      <h1>Image to Text Extractor</h1>
      <img src={previewImage} />
        <form onSubmit={handleFormSubmit}>
          <input type="file" onChange={handleFileInputChange} />
          <input type="submit" value="Extract Text" />
       </form>
       <p className="text">{text}</p>
     </div>
  );
}
export default Test;