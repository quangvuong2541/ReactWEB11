import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionType from "../redux/action/action"
class DanhSachCuoc extends Component {

  renderDanhSachCuoc = () => {
    console.log(this.props.danhSachCuocs);
    return this.props.danhSachCuocs.map((quanCuoc, index) => {
      return (
        <div className='col-4 mt-2' key={index}>
          <br />
          <button onClick={() => {this.props.datCuoc(quanCuoc)}} >
            <img src={quanCuoc.hinhAnh} />
            <span > {quanCuoc.diemCuoc}</span>
          </button>
          <span style={{ fontSize: '50px', color: "red" }}>
            {quanCuoc.diemCuoc}
          </span>
        </div>  
      )
    })
  }
  render() {
    return (
      <div className='container'>
        <div className='row' >
          {this.renderDanhSachCuoc()}
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    // tên giá trị : lấy dữ liệu từ trong kho
    danhSachCuocs: state.bauCuaTomCaReducer.danhSachCuoc
    //  biến tự đặt : 
  }
}
//  hàm nhận action khi người dùng click chuột vào các nút trên html 
const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (quanCuoc) => {
      dispatch(actionType.datCuocAction(quanCuoc))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DanhSachCuoc)

