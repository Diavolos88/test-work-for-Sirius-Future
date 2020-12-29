import s from './graph.module.css'
import {Area, AreaChart, CartesianGrid, Line, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import React from 'react'
import {updateFirstAC} from "../../redux/firstGraphReduser";
import {connect} from 'react-redux';
import {RootStoreType} from '../../redux/redux';
import {bool, number} from "prop-types";


type MyGraphType = {
    name1: string,
    name2: string,
    name3: string,
    company: string
}

export default function MyGraph({name1, name2, name3, company}: MyGraphType) {
    return (
        <div className={s.field}>
            <button>{name1}</button>
            <button>{name2}</button>
            <button>{name3}</button>
            <GraphContainer company={company}/>
        </div>
    )
}

interface Props {
    company: string;
}

interface State {
    money: number,
    moneyEarly: number,
    procent: number,
    update: boolean
}

class Graph extends React.Component<Props, State> {
    state = {
        money: 0,
        moneyEarly: 0,
        procent: 0,
        update: true
    }
    timer: any;

    constructor(props) {
        super(props);
    }

    createDates() {
        const now = new Date();
        // @ts-ignore
        return [...Array(now.getDate() + 1).keys()];
    }

    createValues(dates: Array<number>) {
        let vals: Array<{ date: number, value: number }> = [];
        dates.map(d => {
            vals.push({
                date: d,
                value: Math.floor(Math.random() * 7)
            });
        });

        return vals;
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({...this.state, update: !this.state.update})
        }, 5000)
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {
        let dates = this.createDates().slice(1);
        let data = this.createValues(dates);
        let fullMany = 0
        data.forEach((e) => {
            fullMany += e.value
        })
        let procentNow = 0
        if (this.state.moneyEarly) {
            procentNow = Math.floor(((fullMany - this.state.moneyEarly) / fullMany) * 100)
            this.state.procent = procentNow
        }
        this.state.moneyEarly = fullMany
        return (
            <div className={s.graphContainer}>
                <div className={s.upperGraph}>
                    <div className={s.cash}>Выручка: <div><span>{fullMany} 000 руб.</span> <span
                        className={procentNow > 0 ? s.proc + " " + s.upper : s.proc + " " + s.fallen}><span
                        className={procentNow > 0 ? s.errow + " " + s.upper : s.errow + " " + s.fallen}> ↯ </span> {procentNow} %</span>
                    </div></div>
                    <div className={this.props.company === "yandex" ? s.yandexLogo : s.paypalLogo}/>
                </div>

                <ResponsiveContainer maxHeight={"200px"} width="100%">
                    <AreaChart
                        data={data}
                        margin={{top: 20, right: 30, left: 10, bottom: 10}}
                    >
                        <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0.0}/>
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="date" unit='сен'/>
                        <YAxis unit='тыс. ₽'/>
                        <CartesianGrid vertical={false} strokeDashArray="3 3"/>
                        <Tooltip
                            wrapperStyle={{backgroundColor: "red"}}
                            labelStyle={{color: "grey"}}
                            itemStyle={{color: "black"}}
                            formatter={function (value, name) {
                                return `${value} тыс. ₽`;
                            }}
                            labelFormatter={function (value) {
                                return `Выручка за ${value} сентября`;
                            }}
                        />
                        <Area
                            type="monotone"
                            dataKey="value"
                            stroke="blue"
                            fill="url(#colorValue)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        );
    }
}

let mapStateToProp = (state: RootStoreType): { update: boolean, moneyEarlyState: number } => {
    return {
        update: state.firstGraph.update,
        moneyEarlyState: state.firstGraph.moneyEarly
    }
}

const GraphContainer = connect(mapStateToProp, {updateFirstAC})(Graph)
