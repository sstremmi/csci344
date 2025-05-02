import {TimePicker} from 'antd';
import {Select} from "antd";
import {Calendar} from "antd";
import React from "react";
import NavBar from "./NavBar";

// custom components:
export default function App() {
    return (
        <>
            <NavBar />

            <main className="min-h-screen max-w-[1000px] mt-24 mx-auto">
                <p>Put your design system components in the space below...</p>
                
                <TimePicker variant="underlined"></TimePicker>
                <Calendar></Calendar>
                <Select></Select>
            </main>

            <footer className="p-5 bg-white">footer goes here</footer>
        </>
    );
}
