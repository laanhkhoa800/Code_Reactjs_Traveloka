import React, { Component } from 'react';
import GetApiHotel from '../../../Utils/Hotel/GetApiHotel';
import ContentHomePage from  './ContentHomePage';
import {connect} from 'react-redux';



class HomePage extends Component {
    constructor(props){
        super(props);
        this.state={
            id:'',
            dataHotel: []
        }
    }
    componentDidMount(){
        
        var {match} = this.props;
        // kiểm tra match tồn tại
        if(match){
            var id = match.params.id;
                     GetApiHotel(`hotel/${id}?`,'GET',null).then(res2=>{
                    //   console.log(res2);
                      this.setState({
                        dataHotel: res2.data.recordset
                      })
                    })
        }
        
    }
    render() {
        var {dataHotel} = this.state;
        const { username } = this.props.match.params;
        return ( 
            <div className = "HomePage" > { username } 
                <div className ="container" >
                    {this.showDataHotel(dataHotel)}
                </div>
            </div>   
        );
    }
    showDataHotel(dataHotel){
        var result = null;
        if(dataHotel.length > 0){
            result = dataHotel.map((dataHotel)=>{
                return(
                    <ContentHomePage
                    dataHotel = {dataHotel}/>
                );
            });
        }
       
        return result;
    }  
}
const mapStatetoProps = state =>{
    return{
        dataHotel : state.dataHotel
    }
}
export default connect(mapStatetoProps, null)(HomePage);
// export default HaNoi;