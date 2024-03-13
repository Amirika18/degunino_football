import React from "react";
import aboutPhoto from './../../../images/about.jpg';
import './about.css';
import aboutTitle from './../../../images/about-title.png';
import { aboutText, dueDate } from "./constants";

export const AboutMain = () => {
    return <div className='about'>
        <div className='about-info'>
            <div className='about-header'>
                <div className='about-header-title'>
                    <img src={aboutTitle} alt='title'/>
                </div>
                <div className='about-header-due-date'>{`РЕГИСТРАЦИЯ ДО ${dueDate}`}</div>
            </div>
            <div className='about-text'>{aboutText}</div>
        </div>
        <div className='about-photo'>
            <img src={aboutPhoto} alt='about' className='about-photo-img'/>
        </div>
    </div>
}