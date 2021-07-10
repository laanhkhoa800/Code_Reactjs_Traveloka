import React, { Component } from 'react';
import '../Main/Partner.css';
import Routes from '../RouterPage/Routes';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'; 
import {Link} from 'react-router-dom';
import GetApiHotel from  '../../Utils/Hotel/GetApiHotel';
import BookingMang from './BookingMang';

class MainHeaderPartner extends Component {
    constructor(){
        super();
        this.state={
            id:'',
            dataHotel: []
        }
        this.logout = this.logout.bind(this);
        this.state={

        }
    }
    addroom(){
        
        var {match} = this.props;
        var {history} = this.props;
        // kiểm tra match tồn tại
        if(match){
            var id = match.params.id;
                   
            history.push(`/${id}/add`);
        }
        
    }
    
    logout(){
        var {history} = this.props;
        if(window.confirm('Bạn Muốn đăng xuất!')){
            history.push("/");
        }
    }
    render() {
        var{id} = this.props
        var {match} = this.props;
        // kiểm tra match tồn tại
        if(match){
            var id = match.params.id;
                GetApiHotel(`hotel/${id}?`,'GET',null).then(res2=>{
              console.log(res2);
                    var id = res2.data.recordset.ID
            })
        }
        return ( 
        //    <Router>
        <from onSubmit={this.addroom} componentDidMount={this.componentDidMount}>
                <div className="homedisplay">
                <div className = "row DisplayPartner" >
                    <div className="col-md-4">
                        {/* <img style={{height:'50px'},{width:'100%'}} src="./img/PartNer/Traver Tera.PNG" alt='hinh Travelloka tera'/> */}
                        <div className="row titel">
                            <h2>Traveloka</h2>
                            <h1>TERA</h1>
                        </div>
                    </div>
                    <div className="bell">
                    {/* <a href="/loginpartner"><button type="button" className=" btn dangnhap">Login</button></a>
                    <a href="/gmailregister"><button type="button" className="btn dangkychoocuaban">Register Your Accommodation</button></a> */}
                        <span className="iconbell">
                            {/* <img style={{height:'26px'},{width:'30px'}} src="./img/bel.png" alt='icon bell'/> */}
                        </span>
                    </div>
                </div>
                <div className="row nav-homePartner">
                    <div className="col-md-1">
                        <a href={`/${id}/partner-home`}> <button>Home</button></a>
                    </div>
                    <div className="col-md-2">   
                        <a href={`/${id}/partner-home/roommanager`}><button>Room Management</button></a>
                    </div>
                    <div className="col-md-1">
                        <a href={`/${id}/Home`}><button>Reports</button></a>
                    </div>
                    <div className="col-md-1">
                        <a href={`/${id}/Sittings`}><button>Sittings</button></a>
                    </div>
                    <div className="col-md-1">
                        <a href={`/${id}/HotelData`}><button>HotelData</button></a>
                    </div>
                    <div className="col-md-2">
                        <a href={`/${id}/partner-home/bookingroom`}><button>Booking Manager</button></a>
                    </div>
                    <div className="col-md-1">
                      <button onClick={this.logout}>LogOut</button>
                    </div>
                    <div className="col-md-2" >
                        <a href={`/${id}/add`}> 
                            <button type="" className="btnAddroom">Add Room</button>
                        </a>
                    </div>

                </div>
                {/* Hiển Thị */}
                <div className="">
                    {/* gọi funsion để hiển thị menu */}
                    {/* { this.showContentMenus(routes) } */}
                    {/* <BookingMang/> */}
                    <Routes/>
                    
                </div>
        </div>
        </from>
        //    </Router>

        );
    }
    showContentMenus = (routes) =>{
        var result = null;
        if(routes.length > 0 ){
            result = routes.map((route,index)=>{
                return(<Routes //viết hàm map phải return về !
                    key={index}
                    path={route.path}
                    etact={route.etact}
                    Component={route.main}
                />)
            })
        }
        return <Switch>{result}</Switch>
    }
}

export default MainHeaderPartner;