import React from "react";
import s from "./CardComponentBlue.module.css";


const CardComponentBlue: React.FC<{ text: string, imgCard: string }> = ({text, imgCard}) => {

    return (
        <div className={s.topCardContentBlue}>
            <div className={s[imgCard]}/>
            <div>
                <div className={s.blueText}>{text}</div>
            </div>
        </div>
    )
}

export default CardComponentBlue