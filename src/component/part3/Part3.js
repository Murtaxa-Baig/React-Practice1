import React from 'react'
import './Part3.css'
import part3img1 from '../../assets/part3img1.jpg'
import part3img2 from '../../assets/part3img2.jpg'

export default function Part3() {
    return (
        <div className="part3 container-fluid">
            <div className="row">
                <div className="div1p3  col-md-6">
                    <img src={part3img1} alt="" />
                    <br />
                    <br />
                    <p id="prag">By planning ahead you can save yourself from<br />feeling stressed and
                        overwhelmed. Our Repair<b />Services is
                            the handyman service provider trusted<br />throughout Pennsylvania.</p>


                        </div>
                        <div className="     col-md-6">
                            <div className="div2p3">
                                <h2 style={{ color: 'black' }}>Need Help Right Away?</h2>
                                <h2 style={{ color: 'red' }}>Call us now: 723-123-345 </h2>
                                <br />
                                <img src={part3img2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                )
}
