import React from "react";
import s from "./LiComponents.module.css";


const LiComponent: React.FC<{ text: string, value: string }> = ({text, value}) => {
    return <li>
        <div className={s.pointer}><span
            className={s.withOutPoint}>{text}&nbsp;&nbsp;&nbsp;&nbsp;</span>
        </div>
        <div>{value}</div>
    </li>
}

export default LiComponent