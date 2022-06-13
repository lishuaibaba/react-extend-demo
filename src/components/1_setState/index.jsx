import React, { Component } from 'react'

export default class Demo extends Component {
    state = {
        count: 0
    }
    add = () => {
        this.setState((state, porps) => ({ count: state.count + 1 }))
    }
    render() {
        return (
            <div>
                <h1>当前求和为 : {this.state.count}</h1>
                <button onClick={this.add}>点击我+1</button>
            </div>
        )
    }
}
