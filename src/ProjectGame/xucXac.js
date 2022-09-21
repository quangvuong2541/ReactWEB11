import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionType from "../redux/action/action"
class XucXac extends Component {
    renderXucXac = () => {
        return this.props.xucXac.map((item, key) => {
            return <img key={key}
                src={item.hinhAnh}
                style={{ width: '50px' }}

            />
        })
    }
    render() {
        return (
            <div className='container-fluid'>
                <div className='row' >
                    <div className='col-2' >
                        <button onClick={() => {
                            this.props.playGame()
                        }}>play game</button>
                    </div>
                    <div className='col-8' >
                        {this.renderXucXac()}
                    </div>
                    <div className='col-2' >

                        {this.props.tongTien}$
                    </div>

                </div>


            </div>
        )
    }
}
// chỉ có mápstateToProps mới có quyền render ra giao diện 
const mapStateToProps = (state) => {
    return {
        xucXac: state.bauCuaTomCaReducer.xucXac,
        tongTien: state.bauCuaTomCaReducer.tongTien,
    }
}
// ko đc quyền 
const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            dispatch(actionType.playGameAction())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(XucXac)