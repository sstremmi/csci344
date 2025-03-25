import React, {useState} from "react";
import "./Welcome.css";

export function Welcome ({name})

function Welcome({name, imgUrl}) {
    return  <section className="card">
                Hello, {name}
                <img src={imgUrl} />
            </section>;
}