import React, { Component } from 'react'

export default class Child extends Component {
    state = {
        img: this.props.listArrayssss.mangSP[3].hinhAnh
    }
    changeImg = (imgs) => {
        return (
            this.setState({
                img: imgs
            })
        )
    }
    render() {
        // console.log(this.props.listArrayssss);
        // let fatherProps = this.props.listArrayssss
        // console.log(fatherProps);
        // cách 2 : detructuring
        let { listArrayssss } = this.props
        return (
            <div className='row' >
                <div className='col-6' >
                    <img src={this.state.img} style={{ width: 300, height: 300 }} />
                </div>
                <div className='col-6' >
                    {listArrayssss.mangSP.map((item, index) => {
                            return (
                                <button key={index} onClick={() => this.changeImg(item.hinhAnh)}>
                                    <img src ={item.hinhAnh} style={{ width: 300, height: 300 }} />
                                </button>
                            )
                    })}
                </div>
            </div>
        )
    }
}

//  sự khác nhau giữa state và props ? 6