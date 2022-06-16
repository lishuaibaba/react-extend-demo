import React, { Component } from 'react'

const MyContext = React.createContext();

export default class A extends Component {
    state = {
        username: "tom"
    }
    render() {
        return (
            <div>
                <div>我是A组件</div>
                <h4>我的用户名是:{this.state.username}</h4>
                <MyContext.Provider value={this.state.username}>
                    <B></B>
                </MyContext.Provider>
            </div>
        )
    }
}


class B extends Component {
    render() {
        return (
            <>
                <div>我是B组件</div>
                <h4>A组件用户名是:???</h4>
                <C></C>
            </>
        )
    }
}

class C extends Component {
    static contextType = MyContext;
    render() {
        console.log(this.context);
        return (
            <>
                <div>我是C组件</div>
                <h4>A组件用户名是:???</h4>
            </>
        )
    }
}


