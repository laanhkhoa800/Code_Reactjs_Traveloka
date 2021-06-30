import React, { Component } from 'react';
import '../Main/Partner.css';
import CntList from './CtnList';
import {connect} from 'react-redux';
// import products from '../../Reduces/dataproduct';
// import GetValue from '../../Utils/Getvalueroom';
// import axios from 'axios';
import GetApiHotel from '../../Utils/Hotel/GetApiHotel';
import { useLocation } from 'react-router-dom';

class Roommanager extends Component {
    constructor(props){
    super(props);
    this.state={
        id: '',
        products:[]
    };
}
componentDidMount() {
    var {match} = this.props;
    if(match){
        var id = match.params.id;
        GetApiHotel(`room/hotel/filled/${id}?`, 'GET', null).then(res=>{
            console.log(res.data.recordset);
            this.setState({
                products: res.data.recordset //gán cho products lấy value từ data
            })
        }).catch(err=>{
            console.log(err);
        });
    }
  }
  

  onDelete = (id) =>{
      //lấy produsst xuống
      var{products} = this.state;
      GetApiHotel(`room/deleteroom/${id}`, 'DELETE', null).then(res => {

        console.log(res);
        //kiểm tra để load lại value
        if(res.status === 200){
             // tìm vị tri trong mãng với id
             var index = this.findindex(products,id);
             if(index !== -1){
                 products.splice(index, 1);
                 this.setState({
                     products : products
                 });
             }
        }
    });
  }
  findindex = (products,id) => {
      var result = -1;
      products.forEach((products, index) => {
          if(products.id===id){
              result=index;
          }
      });
  }
    render() {
        let location = useLocation;
        console.log(location);
        // var{ products }= this.props; (nếu lấy từ dũ liệu cứng)
        var { products } = this.state;
        return ( 
            <div>
            <table className="container table">
                <thead className="table-dark" >
                    <tr>
                        <th scope="col">#ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col" style={{width:'20px'}}>Quantity</th>
                        <th scope="col" style={{width:'30px'}} >Description</th>
                        <th scope="col">image</th>
                        <th scope="col">ID_Hotel</th>
                        <th scope="col">Bed</th>
                        <th scope="col">Status Bed</th>
                        <th scope="col">Function</th>
                    </tr>
                </thead>
                <tbody >
                     {this.showProducts(products)}
                </tbody>
            </table>
        </div>
        
        );
    }
    showProducts(products){
        var result = null;
        if ( products.length > 0){
            result = products.map((products)=>{
                return(
                    <CntList
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
export default connect(mapStatetoProps, null)(Roommanager);