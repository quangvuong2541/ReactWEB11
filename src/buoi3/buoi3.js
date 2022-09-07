import React, { Component } from 'react'
import img1 from "../asset/2-1609553273528814827700.jpeg"
import img2 from "../asset/a2-1628309230.jpeg"
import img3 from "../asset/images.jpeg"
import img4 from "../asset/nobita.jpeg"
import Child from './child'
export default class Buoi3 extends Component {
    listArray = {
        mangSP: [
            { maSP: 1, tenSP: "IphoneX", gia: 100, hinhAnh: img1 },
            { maSP: 2, tenSP: "IphoneXs", gia: 100, hinhAnh: img2 },
            { maSP: 3, tenSP: "Iphone11", gia: 100, hinhAnh: img3 },
            { maSP: 4, tenSP: "Iphone12", gia: 100, hinhAnh: img4 },
        ]
    }
    //  props : truyền dữ liệu thông qua các component
    render() {
        return (
            <div>
                <Child listArrayssss = { this.listArray}/>
            </div>
        )
    }
}
