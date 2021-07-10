import React, { Component } from 'react';
import './Partner.css'


class HeaderV2 extends Component {
    render() {
        return ( 
            <div className = "row v2landingheader" >
                <div className="col-md-4">
                     {/* <img style={{height:'50px'},{width:'100%'}} src="./img/PartNer/Traver Tera.PNG" alt='hinh Travelloka tera'/> */}
                     <div className="row titel">
                        <h2>Traveloka</h2>
                        <h1>TERA</h1>
                     </div>
                </div>
                <div className="col-md-8 rightbtn">
                   <a href="/loginpartner"><button type="button" className=" btn dangnhap">Login</button></a>
                   <a href="/gmailregister"><button type="button" className="btn dangkychoocuaban">Register Your Accommodation</button></a>
                </div>
            </div>
        );
    }
}
export default HeaderV2;