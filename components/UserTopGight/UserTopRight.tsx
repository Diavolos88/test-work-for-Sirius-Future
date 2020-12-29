import React from "react";
import s from "../../pages/index.module.css";


const UserTopRight: React.FC<{}> = () => {
    return (
        <div className={s.topContent}>
            <input type={"text"} placeholder={"Поиск клиента"}/>
            <div/>
            <div className={s.user}>
                <div className={s.bels}/>
                <div className={s.namePhoto}>
                    <div className={s.userName}>Alexander Gerasimuk</div>
                    <div className={s.userPhoto}/>
                </div>
            </div>
        </div>
    )
}

export default UserTopRight
