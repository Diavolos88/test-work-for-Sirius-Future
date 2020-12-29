import React from "react";
import s from "./CardsCacad.module.css";
import CardComponent from "../CardComponent/CardComponent";
import CardComponentBlue from "../CardComponent/CardComponentBlue/CardComponentBlue";

const CardsCaskad: React.FC<{}> = () => {
    return (
        <div className={s.lastCards}>
            <CardComponent text={"Без абонемента:"} value={"30 "} imgCard={"withOutAbon"}/>
            <CardComponent text={"Количество тренеров:"} value={"250"} imgCard={"howTrainers"}/>
            <CardComponent text={"К оплате завтра:"} value={"32"} imgCard={"toPayTomorrow"}/>
            <CardComponentBlue text={"Получить выписку по зарплате тренеров"} imgCard={"takeSth"}/>
        </div>
    )
}

export default CardsCaskad