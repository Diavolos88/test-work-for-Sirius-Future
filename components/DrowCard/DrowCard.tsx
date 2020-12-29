import React from "react";
import s from "../../pages/index.module.css";
import LiComponent from "../LiComponents/LiComponents";
import CardComponent from "../CardComponent/CardComponent";

const DrowCards: React.FC<{}> = () => {
    return (
        <div className={s.cards}>
            <div className={s.bigCard}>
                <div className={s.topCardContentTmp}>
                    <div className={s["imgCard"]}/>
                    <div>
                        <div className={s.topCard_text}>{"Количество учеников:"}</div>
                        <div className={s.topCard_number}>{"250"}</div>
                    </div>
                </div>
                <ul>
                    <LiComponent text={"За последнюю неделю"} value={"25"}/>
                    <LiComponent text={"Без абонемента"} value={"150"}/>
                    <LiComponent text={"Неактивные"} value={"25"}/>
                    <LiComponent text={"Добавлено за день"} value={"50"}/>
                </ul>
            </div>
            <div className={s.seconColumn}>
                <CardComponent text={"Должников:"} value={"12 (1859,5 руб )"} imgCard={"doljniki"}/>
                <CardComponent text={"К оплате сегодня:"} value={"12 1"} imgCard={"forPay"}/>
            </div>
        </div>)
}

export default DrowCards