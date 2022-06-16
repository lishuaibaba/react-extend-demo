import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'

export default class Demo extends Component {
    state = {
        count: 0
    }

    myRef = React.createRef();

    add = () => {
        this.setState(state => ({ count: state.count + 1 }))
    }
    show = () => {
        alert(this.myRef.current.value);
    }

    render() {
        return (
            <Fragment>
                <input type="text" ref={this.myRef} />
                <h1>当前求和为：{this.state.count}</h1>
                <button onClick={this.add}>点我加1</button>
                <button onClick={this.show}>点我展示数据</button>
            </Fragment>
        )
    }
}

// function Demo() {
//     const [count, setCount] = React.useState(0);
//     // const [name, setName] = React.useState(0);

//     const myRef = React.useRef()
//     function add() {
//         setCount(count + 1)
//     }



//     React.useEffect(() => {
//         // setInterval(() => {
//         // setCount(count => count + 1)
//         // }, 1000)
//     }, [])

//     function show() {
//         // alert()
//         console.log(myRef.current.value);
//     }

//     return (
//         <div>
//             <input type="text" ref={myRef} />
//             <h1>当前求和为：{count}</h1>
//             <button onClick={add}>点我加1</button>
//             <button onClick={show}>点我展示数据</button>
//         </div>
//     )
// }

// export default Demo;