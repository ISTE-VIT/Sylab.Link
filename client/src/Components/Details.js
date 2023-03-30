// import React, { useState, useEffect } from "react";
// import "./Details.css"

// function App() {

//     const [message, setMessage] = useState("");
//     const [response, setResponse] = useState("");
//     const [click, setClick] = useState(false);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         fetch('http://localhost:5000/', {
//           method: 'POST',
//           headers: {
//             'Content-type': 'application/json',
//           },
//           body: JSON.stringify({ message }),
//         })
//         .then((res) => res.json())
//         .then((data => setResponse(data.message)));
//     }

//     const [hdToggle, setHdToggle] = useState(true);
//     const [paraToggle, setParaToggle] = useState(true);

//     const headToggle = () => {
//         setHdToggle(!hdToggle)
//     }

//     const pToggle = () => {
//         setParaToggle(!paraToggle)
//     }

//     return(
//         <div className="detail-App">      

//             <div className="link-display">
//                 <div className="link-drop">
//                     <div className="mod-content">
//                         <div className ="mod-header" onClick = {headToggle}>
//                             <p>MODULE-1</p>
//                         </div>
//                         {
//                             hdToggle 
//                             ?
//                             <div className = "mod-header-content">
//                                 <div className="topic">
//                                     <p className = "toggle-para" onClick = {pToggle}>
//                                         <li>
//                                             Strings and Waves
//                                         </li>
//                                     </p>
//                                     <div className = "links">
//                                         <ul>
//                                             <li className = "link-list">
//                                                 <a href = "">
//                                                     Video
//                                                 </a>
//                                             </li>
//                                             <li className = "link-list">
//                                                 <a href = "">
//                                                     Article
//                                                 </a>
//                                             </li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>
//                             :
//                             ""    
//                         }
                        
//                     </div>
//                 </div>
                
//                 <div className="vector-image">
//                     {/* <div>Hello</div> */}
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default App;

import React, { useState } from "react";
import "./Details.css";
import data from './links.json';

function App() {
  const [modules, setModules] = useState(data);

  const toggleContent = (index) => {
    const newModules = [...modules];
    newModules[index].expanded = !newModules[index].expanded;
    setModules(newModules);
  };

  return (
    <div>
        <div className="">
            <div className="">
                {modules.map((module, index) => (
                <div className="link-drop" key={index}>
                    <div className="mod-content">
                    <div className="mod-header" onClick={() => toggleContent(index)}>
                        <p>{module.title}</p>
                    </div>
                    {module.expanded && (
                        <div className="mod-header-content">
                        {module.Content.map((content, index) => (
                            <div className="topic" key={index}>
                            <p className="toggle-para">{content.topic}</p>
                            <div className="links">
                                <ul>
                                <li className="link-list">
                                    <a href={content.videoLink}>Video</a>
                                </li>
                                <li className="link-list">
                                    <a href={content.articleLink}>Article</a>
                                </li>
                                </ul>
                            </div>
                            </div>
                        ))}
                        </div>
                    )}
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  );
}

export default App;
