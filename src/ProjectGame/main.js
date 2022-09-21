import React, { Component } from 'react'
import XucXac from './\bxucXac'
import DanhSachCuoc from './DanhSachCuoc'

export default class Main extends Component {
  render() {
    return (
      <div>
        <DanhSachCuoc />
        <XucXac/>
      </div>
    )
  }
}
