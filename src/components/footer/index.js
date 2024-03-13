import React from "react";
import vk from './../../images/vk.svg';
import telegram from './../../images/telegram.svg';
import phone from './../../images/phone.svg';
import './footer.css';
import { phoneRef, telegramRef, vkRef } from "./constants";

export const Footer = () => {
    return <div className="footer">
        Обратная связь
        <div className="footer-contact-info">
            <img className='footer-logo' src={phone} alt='phone'/>
            {phoneRef}
        </div>
        <div className="footer-contact-info">
            <img className='footer-logo' src={vk} alt='phone'/>
            {vkRef}
        </div>
        <div className="footer-contact-info">
            <img className='footer-logo' src={telegram} alt='phone'/>
            {telegramRef}
        </div>
    </div>
}