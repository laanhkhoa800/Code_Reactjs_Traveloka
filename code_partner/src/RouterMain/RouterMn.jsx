import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import User from './User';
import Partnerr from './Partnerr';
// Thêm xóa sửa phòng !
import AddHotel from '../Partner/Funstionn/AddHotel'; //add và edit chung một trang
import DeleteHotel from '../Partner/Funstionn/DeleteHotel';
import Edithotel from '../Partner/Funstionn/Edithotel';
import GmailRegister from '../Partner/Register/GmailRegister';
import LoginPartner from '../Partner/Register/LoginPartner';
import MainHeaderPartner from '../Partner/Page/MainHeaderPartner';
import PartnerAddHotel from '../Partner/FunstionPartnerHT/PartnerAddHotel';



class RouterMn extends Component {
    constructor( props){
        super(props);

        this.state={
            isShowFrom:false
        };
    }
    render() {

        return (
            <Router>
                <div className="terURL">
                  <Route path="/" exact component={Partnerr}/>
                  {/* thêm xóa sửa phòng của partner */}
                  <Route path="/:id/add" match history component={AddHotel}/>
                  <Route path="/:id/edithotel" match history component={Edithotel}/>
                  <Route path="/deletehotel" component={DeleteHotel}/>
                  {/* page home partner */}
                  <Route path="/:id/partner-home" history match component={MainHeaderPartner}/>
                  <Route path="/gmailregister" component={GmailRegister}/>
                  <Route path="/loginpartner"  component={LoginPartner}/>   
                  <Route path="/:id/PntAdd_hotel"  match history  component={PartnerAddHotel}/>   
                </div>
            </Router>
        );
    }
}
export default RouterMn;