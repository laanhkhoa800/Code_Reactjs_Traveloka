    import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ContentHomePage extends Component {
    render() {
        var {dataHotel} = this.props;
        var statusName = dataHotel.Status ? 'Mở Cửa'  : 'Đóng cửa';
        var statusClass = dataHotel.Status ? 'Warning' : 'default';
        return ( 
             <div className="ContentHomePage">
                 <h1><h2>Thông Tin </h2> {dataHotel.Name}</h1>
                 <hr style={{border:'black'}}/>
                   <div className="row thongtinpartner">
                       <div className="col-md-8 leftcontent">
                            <div className="row Adress">
                                <h5 className="labelvalue">Address:</h5>
                                <h4 className="valueAdress">{dataHotel.Address}</h4>
                            </div>
                            <div className="row Adress">
                                <h5 className="labelvalue">Type :</h5>
                                <h4 className="valueAdress">{dataHotel.Type}</h4>
                            </div>
                            <div className="row Adress">
                                <h5 className="labelvalue">ID_City :</h5>
                                <h4 className="valueAdress">{dataHotel.ID_City}</h4>
                            </div>
                            <div className="row Adress">
                                <h5 className="labelvalue">Status Hotel:</h5>
                                <div className="trdest">
                                        <span className={`label label-${statusClass}`}>
                                            {statusName}
                                        </span>
                                </div>
                            </div>
                       </div>
                       <div className="col-md-4">
                       <img className = "imageHotel" src = {dataHotel.Image} />
                       </div>
                   </div>
                   <div className="row funsitonHotel">
                        <Link to={`/${dataHotel.ID}/partner-home/Edit`} className="btneditvalue">Edit</Link>
                   </div>
             </div>
        );
    }
}

export default ContentHomePage;