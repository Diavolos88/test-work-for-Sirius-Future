import React from "react";
import LeftBar from "../components/LeftBar/LeftBar";
import s from './index.module.css'
import Graph from "../components/Graph/Graph";
import store from "../redux/redux";
import {Provider} from "react-redux";
import Head from 'next/head'
import CardsCaskad from "../components/CardsCascad/CardsCascad";
import DrowCards from "../components/DrowCard/DrowCard";
import UserTopRight from "../components/UserTopGight/UserTopRight";

export default function Index(): JSX.Element {
    return (
        <Provider store={store}>
            <Head>
                <title>test page for work</title>
                <meta name="description"
                      content="Помогаем улучшить оценки, развить память и внимание ребенка с помощью ментальной арифметики. Онлайн-занятия в мини-группах и индивидуально."/>
                <meta name="keywords" content="test, work, testWork"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,300;0,400;0,500;0,600;1,200;1,300;1,400;1,500;1,600&display=swap"
                    rel="stylesheet"/>
            </Head>
            <div className={s.mainPage}>
                <LeftBar/>
                <div>
                    <UserTopRight/>
                    <div className={s.graphs}>
                        <Graph name1={"День"} name2={"Неделя"} name3={"Месяц"} company={"yandex"}/>
                        <Graph name1={"День"} name2={"Неделя"} name3={"Месяц"} company={"paupal"}/>
                        <DrowCards/>
                        <CardsCaskad/>
                    </div>
                </div>
            </div>
        </Provider>
    )
}






