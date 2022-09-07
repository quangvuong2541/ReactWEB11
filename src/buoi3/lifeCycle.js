import React, { Component } from 'react'

export default class LifeCycle extends Component {
    constructor(props) {
        //  hàm khởi tạo 
        super(props)
        this.state = { color: "green" }

    }
    componentWillUnmount() {
        // chạy thứ cuối cùng
        console.log("componentWillUnmount đã chạy");

    }
    componentDidMount() {
        // componentDidMount chạy tiếp theo
        console.log("component did mount đã chạy");
    }
    componentWillMount() {
        // chạy đầu tiên 
        console.log("componentWillMount  đã chạy");

    }

    render() {
        return (
            <div>
                <button onClick={() => this.setState({ color: 'aaaaa' })}>
                    submit
                </button>
                <p >
                    {this.state.color}
                </p>
            </div>
        )
    }
}
