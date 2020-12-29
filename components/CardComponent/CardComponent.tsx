import React from "react";
import s from "./CardComponent.module.css";


const CardComponent: React.FC<{ text: string, value: string, imgCard: string }> = ({text, value, imgCard}) => {

    return (
        <div className={s.topCardContent}>
            <div className={s[imgCard]}/>
            <div>
                <div className={s.topCard_text}>{text}</div>
                <div className={s.topCard_number}>{value}</div>
            </div>
        </div>
    )
}

export default CardComponent