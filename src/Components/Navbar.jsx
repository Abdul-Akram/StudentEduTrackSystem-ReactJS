import React from 'react';
import "./Navbar.css";
import { IoPersonCircleSharp } from "react-icons/io5";
import { TbCashRegister } from "react-icons/tb";
import { TbCircleDashedPercentage } from "react-icons/tb";
import { RiCollageFill } from "react-icons/ri";
import { IoBarChartSharp } from "react-icons/io5";
import { HiMiniQuestionMarkCircle } from "react-icons/hi2";
import { IoIosSettings } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import reactlogo from "../assets/react.svg"
const Navbar = () => {
    return (
        <nav>
            <div className="image">
                <img src={reactlogo} alt="react-logo" />
            </div>
            <div className="logo">
                <i><IoPersonCircleSharp /></i>
                <p>Student Management</p>
            </div>
            <div className="logo">
                <i><TbCashRegister /></i>
                <p>Financial Management</p>
            </div>
            <div className="logo">
                <i><TbCircleDashedPercentage /></i>
                <p>Quality Control</p>
            </div>
            <div className="logo">
                <i><RiCollageFill /></i>
                <p>Report Delivery</p>
            </div>
            <div className="logo">
                <i><IoBarChartSharp /></i>
                <p>Attendance</p>
            </div>
            <div className="lower-logo">
                <i><HiMiniQuestionMarkCircle /></i>
                <i><IoIosSettings /></i>
                <i><CiLogout /></i>
            </div>
        </nav>
    );
}

export default Navbar;
