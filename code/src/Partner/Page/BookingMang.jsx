import React, { Component } from 'react';
// import './Funstionn.css';
import GetApiHotel from '../../Utils/Hotel/GetApiHotel';
import {connect} from 'react-redux';
import CntBookingRoom from './CntBookingRoom';

class BookingMang extends Component {
  constructor(props){
    super(props);
    this.state={
      id:'',
      products:[]
   
    };
}
 
  componentDidMount(){ // ghi cho đúng kh đúng kh consolelog id được :((
    var {match} = this.props;
    var {products} = this.state;
    // kiểm tra match tồn tại
    if(match){
      var id = match.params.id;
      GetApiHotel(`bookroom/filled-hotel/${id}?`,'GET',null).then(res=>{
          console.log("hotel")
          console.log( res.data.recordsets);
          this.setState({
            products: res.data.recordsets
          })
        });
    }
  }

  onChange=(e)=>{
    var target=e.target;
    var name = target.name;
    var value= target.type ==='checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }
  
    render() {
      var{products}= this.state;
      // console.log(products);
        return ( 
          <div className="row BookingRoom_Hotel">
              <div className="row mgbk">
                <h4 className="h4ds">Danh sách phòng đã đặt của bạn </h4>
              </div>
              <hr className="hrss"/>

              <div className="Ctnbooking">
              <table className="container tablebk">
                <thead className="table-dark" >
                    <tr>
                        <th scope="col">Mã Room</th>
                        <th scope="col">Số Đêm</th>
                        <th scope="col">Giá</th>
                        <th scope="col" >Voucher</th>
                        <th scope="col" >Ngày Nhận</th>
                        <th scope="col">Ngày Trả</th>
                        <th scope="col">Khách Hàng</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        {/* <th scope="col">Function</th> */}
                    </tr>
                </thead>
                <tbody >
                     {this.showProducts(products)}
                </tbody>
            </table>
              </div>
          </div>
        );
    }
    showProducts(products){
      var result = null;
      if ( products.length > 0){
          result = products.map((products)=>{
              return(
                  <CntBookingRoom
                  products = {products} 
                  onDelete={this.onDelete}
                  />
              );
          });
      }
      return result;
  }
}
const mapStatetoProps = state =>{
  return{
      products : state.products
  }
}
export default connect(mapStatetoProps, null)(BookingMang);
// }
// export default BookingMang;

