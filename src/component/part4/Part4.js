import React from 'react'
import './Part4.css'
import part4 from '../../assets/part4.png'

export default function Part4() {
    return (
        <div>
            <div className="divp4    container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <img src={part4} id="imgp4" alt="" />
                    </div>
                    <div className=" col-md-6">
                        <div className="div2p4">
                            <h1 id="h1p4">BEST QUALITY</h1>
                            <div id="hrp4"></div>
                            <br />
                            <h5 style={{ color: 'black' }}>Company works with homeowners, contractors, realtors, <br /> and residential
                                building managers to help
                                maintain, <br /> upgrade, and repair properties</h5>
                            <button class="button">BOOK NOW</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
