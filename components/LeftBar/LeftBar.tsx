import React from 'react'
import s from './LeftBar.module.css'
import Link from 'next/link'

type elemPropsType = {
    value: string,
    img: string
}

const Elem = ({value, img}: elemPropsType) => {

    return (
        <div className={s.elem}>
            <div className={s[img]}/>
            <Link href={`/${value}`}>
                <li>{value}</li>
            </Link>
        </div>
    )
}

export default function (): JSX.Element {

    return (
        <div className={s.leftBar}>
            <div className={s.leftBar__img}>
                <div className={s.imgDiv}>
                    <div className={s.imgDivEtry}/>
                </div>
                <div className={s.line}/>
                <div className={s.leftBar__menu}>
                    <ul>
                        <Elem value={"Занятия"} img={"zaniatia"}/>
                        <Elem value={"Учащиеся"} img={"uchashiesia"}/>
                        <Elem value={"Тренеры"} img={"treneri"}/>
                        <Elem value={"Финансы"} img={"finansi"}/>
                        <Elem value={"Абонементы"} img={"abonements"}/>
                        <Elem value={"Доступ в CRM"} img={"crm"}/>
                        <Elem value={"Рассылки"} img={"rassilki"}/>
                        <Elem value={"Отчеты"} img={"otcheti"}/>
                        <Elem value={"Настройки"} img={"nastroiki"}/>
                    </ul>
                </div>
            </div>
        </div>
    )
}