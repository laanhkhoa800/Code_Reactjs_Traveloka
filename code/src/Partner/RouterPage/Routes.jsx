import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NotFoudPage from '../Page/NotFoudPage';
import Homepage from '../Page/HomePage/HomePage';
import Roommanager from '../Page/Roommanager';
import EditHotelPtn from '../Page/HomePage/EditHotelPtn';
import GetApiHotel from  '../../Utils/Hotel/GetApiHotel';
import { connect } from 'react-redux';
import BookingMang from '../Page/BookingMang';



class Routes extends Component {
    findindex = (dataHotel,id) => {
        var result = -1;
        dataHotel.forEach((dataHotel, index) => {
            if(dataHotel.id===id){
                result=index;
            }
        });
    }
    render() {
        var {id} = this.props;
        return (
            <Router>
                <div className="RouterURL">
                    <Route path="/:id/partner-home"  exact component={Homepage}/>
                
                    <Route path="''"  component={NotFoudPage}/>
                    {/* <Route path={`/${id}/partner-home/roommanager`} match history  component={Roommanager}/> */}
                    <Route path="/:id/partner-home/roommanager" match history  component={Roommanager}/>
                    <Route path="/:id/partner-home/Edit" match history component={EditHotelPtn}/>
                    <Route path="/:id/partner-home/bookingroom" match history component={BookingMang}/>
                </div>
            </Router>
        );
    }
}
const mapStatetoProps = state =>{
    return{
        dataHotel : state.dataHotel
    }
}
export default connect(mapStatetoProps, null)(Routes)
// export default Routes;