import React, { Component } from 'react'
import './buoi1.css'
export default class Buoi1 extends Component {

    render() {
      const  renderHTML = () => {
            return (
                <div className='demo1'>
                    lêu lêu cái đồ chưa cài win 8
                </div>
            )
        }
    
    
        return (
            <div>
                {renderHTML()}
                chào quân thần gió
            </div>
        )
    }
}
