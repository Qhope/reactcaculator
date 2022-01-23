import React from 'react';
import {Button, Row, Col} from 'antd'
import {useState} from "react";
import './App.css'


const Caculator=()=> {
    const [value, setValue] = useState('0');
    const action=(v:string)=>(event:any)=>{
        event.preventDefault()
        let preState:string=value
        if(preState==='0')
        {
            preState=''
        }
        switch (v) {
            case'AC':
                setValue('0')
                break
            case"=":
                try {
                    setValue(eval(preState).toString())
                } catch (e) {
                    setValue('Error')
                }
                break
            default:
                setValue(preState+v)
        }

    }
    return (
        <div >
            <Row>
                <div className="btn screen">{value}</div>
            </Row>
    <Row>

        <Col span={6}><Button className="btn" type="primary"onClick={action('AC')}>AC</Button></Col>

        <Col span={6}><Button className="btn" type="primary" onClick={action('+/-')}>+/-</Button></Col>

        <Col span={6}><Button className="btn" type="primary"onClick={action('%')}>%</Button></Col>

        <Col span={6}><Button className="btn action" type="primary"onClick={action('/')}>/</Button></Col>

    </Row>

    <Row>

        <Col span={6}><Button className="btn" type="primary"onClick={action('7')}>7</Button></Col>

        <Col span={6}><Button className="btn" type="primary"onClick={action('8')}>8</Button></Col>

        <Col span={6}><Button className="btn" type="primary"onClick={action('9')}>9</Button></Col>

        <Col span={6}><Button className="btn action" type="primary"onClick={action('x')}>x</Button></Col>

    </Row>

    <Row>

        <Col span={6}><Button className="btn" type="primary"onClick={action('4')}>4</Button></Col>

        <Col span={6}><Button className="btn" type="primary"onClick={action('5')}>5</Button></Col>

        <Col span={6}><Button  className="btn" type="primary"onClick={action('6')}>6</Button></Col>

        <Col span={6}><Button  className="btn action"type="primary"onClick={action('-')}>-</Button></Col>

    </Row>

    <Row>

        <Col span={6}><Button className="btn" type="primary"onClick={action('1')}>1</Button></Col>

        <Col span={6}><Button  className="btn"type="primary"onClick={action('2')}>2</Button></Col>

        <Col span={6}><Button className="btn" type="primary"onClick={action('3')}>3</Button></Col>

        <Col span={6}><Button className="btn action" type="primary"onClick={action('+')}>+</Button></Col>

    </Row>

    <Row>

        <Col span={12}><Button className="btn" type="primary"onClick={action('0')}>0</Button></Col>

        <Col span={6}><Button className="btn " type="primary"onClick={action('.')}>.</Button></Col>

        <Col span={6}><Button className="btn action" type="primary"onClick={action('=')}>=</Button></Col>

    </Row>

        </div>

    )
}

export default Caculator;
