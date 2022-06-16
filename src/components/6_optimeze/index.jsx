import React, { PureComponent } from 'react'

export default class Parent extends PureComponent {

    state = {
        carName: "奔驰"
    }

    changeCar = () => {
        this.setState({})
    }


    render() {
        const { state: { carName }, changeCar } = this;
        return (
            <div>
                <h1>我是Parent组件</h1>
                <span>我的车是:{carName}</span>
                <button onClick={changeCar}>点我换车</button>
                <Child carName={carName} />
            </div>
        )
    }
}

class Child extends PureComponent {
    render() {
        const { props: { carName } } = this;
        return (
            <div>
                <h1>我是Child组件</h1>
                <span>我的车是:{carName}</span>
            </div>
        )
    }
}

