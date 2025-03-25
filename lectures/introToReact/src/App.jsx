import React from "react";
import {Welcome} from "./Welcome.jsx";
import "./App.css";

 export default function App() {

     return (
         <>
             <header>
                 <h1>My First App</h1>
             </header>
             <main>
                <welcome name ="Sumner"/>
                 <p>Hello React!</p>
             </main>
         </>
     );
 }