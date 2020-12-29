import React from "react";
import s from './LeftBar.module.css'
import image1 from '../../img/asd.jpg'

export function LeftBar() {
    return (
        <div className={s.fullBox}>
            <div className={s.fullBox__logo}>
                <img src={'https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-prince-illustration.jpg'} alt=""/>
            </div>
        </div>
    )
}