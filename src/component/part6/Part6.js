import React from 'react'
import './Part6.css'
import img1p6 from '../../assets/img1p6.jpg'
import img2p6 from '../../assets/img2p6.jpg'
import img3p6 from '../../assets/img3p6.jpg'
import img4p6 from '../../assets/img4p6.jpg'

export default function Part6() {
  return (
    <div>
        <div id="divp6">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <p className="about">ABOUT US</p>
                    <br/>
                    <h1 className="about" id="h1p6">Plumbing <br/> Services</h1>
                </div>
                <div className="col-md-6">
                    <div className="frow   row">
                        <div className="bg  col-md-5">

                            <img src={img1p6} class="img  mt-4" alt="" />

                        </div>
                        <div className="bg  col-md-5">

                            <img src={img2p6} class="img  mt-4" alt="" />


                        </div>
                    </div>
                    <div className="frow     row">

                        <div className="bg  col-md-5">

                            <img src={img3p6} class="img  mt-4" alt="" />

                        </div>

                        <div className="bg  col-md-5">

                            <img src={img4p6} class="img  mt-4" alt="" />

                        </div>


                    </div>



                </div>
            </div>

        </div>
    </div>
    </div>
  )
}
