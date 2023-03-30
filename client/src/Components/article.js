import React, { useState, useEffect } from "react"
import "./Details.css"
import poco from "../Images/imagecloud.png"
import videolink from "./youtube1.json"
// import videolink2 from "./youtube2.json"
import articlelink from "./google1.json"
// import articlelink2 from "./google2.json"

function App() {

    return(
        <div>
        {
            articlelink.Content.map(data => {
                return(
                    <div className="ul-div">
                        <a href={data.link1}>Video-link</a>
                    </div>
                )
            })
        }
        </div>
    )
}

export default App;