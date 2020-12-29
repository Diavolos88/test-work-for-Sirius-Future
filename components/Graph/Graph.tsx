import s from './graph.module.css'
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import React, {useState} from 'react'
import {updateFirstAC} from "../../redux/firstGraphReduser";
import {connect} from 'react-redux';
import {RootStoreType} from '../../redux/redux';


type MyGraphType = {
    name1: string,
    name2: string,
    name3: string,
    company: string
}

type StateType = Array<{
    name: string,
    nameHover: string,
    hmValues: number
}>

export default function MyGraph<StateType>({
                                               name1,
                                               name2,
                                               name3,
                                               company
                                           }: React.PropsWithChildren<MyGraphType>): JSX.Element {
    let [data, setData] = useState({
        name: "час",
        nameHover: "час",
        hmValues: 24
    })
    return (
        <div className={s.field}>
            <button onClick={() => {
                setData({name: "час", nameHover: "час", hmValues: 24})
            }}>{name1}</button>
            <button onClick={() => {
                setData({name: "день", nameHover: "день", hmValues: 7})
            }}>{name2}</button>
            <button onClick={() => {
                setData({name: "сен", nameHover: "сентября", hmValues: 29})
            }}>{name3}</button>
            <GraphContainer company={company} name={data.name} nameHover={data.nameHover} hmValues={data.hmValues}/>
        </div>
    )
}

interface Props {
    company: string,
    hmValues: number,
    name: string,
    nameHover: string
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

    createDates(num: number) {
        const now = new Date();
        // @ts-ignore
        return [...Array(num).keys()];
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

        let dates = this.createDates(this.props.hmValues).slice(1);
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
                        <XAxis dataKey="date" unit={this.props.name}/>
                        <YAxis unit='тыс. ₽'/>
                        <CartesianGrid vertical={false} strokeDashArray="3 3"/>
                        <Tooltip
                            wrapperStyle={{backgroundColor: "red"}}
                            labelStyle={{color: "grey"}}
                            itemStyle={{color: "black"}}
                            formatter={function (value, name) {
                                return `${value} тыс. ₽`;
                            }}
                            labelFormatter={(value) => {
                                return `Выручка за ${value} ${this.props.nameHover}`;
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
