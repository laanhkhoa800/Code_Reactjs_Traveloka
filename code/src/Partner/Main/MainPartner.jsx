import React, { Component } from 'react';
import HeaderV2 from './HeaderV2';
import './Partner.css';


class MainPartner extends Component {
    render() {
        return ( 
            <div className = "MainPartner" >
                <HeaderV2/>
                  {/* COntent */}
                  <div className="row v2content">
                    <div className="topcontent">
                        <h1>Elevate your business to the next level</h1>
                        <h5>List your property and expose your business to millions of potential guests. Traveloka also lets you manage your accommodation in an easy way; no hassle and no fuss.</h5>
                       <a href="/gmailregister">
                         <button type="button" className="RegisterNow">Register Now</button>
                       </a>
                    </div>
                    <div className="content_img1">
                          {/* Hình từ traveloka tera */}
                     </div>
                </div>
            </div>
        );
    }
}
export default MainPartner;