import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class CntBookingRoom extends Component {

         format_curency=(price) =>{
            return price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
        }
    

    onDelete = (id) => {
        if(window.confirm('Are you sure you want to delete this information?')) {  //eslint-disabled-line
            // goin lên server để xử lí
            this.props.onDelete(id);
        }
    }
    render() {
        var {products} = this.props;
        var statusName = products.TypeofBed ? 'Giường đôi'  : 'Giường đơn';
        var statusClass = products.TypeofBed ? 'Warning' : 'default';

        // var bellname = products.Bell ? 'Giường đôi'  : 'Giường đơn';
        // var bellClass = products.Bell ? 'Warning' : 'default';
        return ( 
                    <tr>
                        <th scope="row">{products[0].ID}</th>
                        <td className="trdes"> {products[0].DateofHire}</td>
                        <td className="trdes">{products[0].Price}</td>
                        <td className="trdes">{products[0].Voucher}</td>
                        <td className="trdes">{products[0].CreateDate}</td>
                        <td className="trdes">{products[0].CheckoutDate}</td>
                        <td className="trdes">{products[0].Name_User}</td>
                        <td className="trdes">{products[0].Email}</td>
                        <td className="trdes">{products[0].Phone_User}</td>
                        <td className="trdes">
                            <button onClick={ ()=> this.onDelete(products.ID)} className="btnthanhtoan">Thanh Toán</button>
                        </td>
                        <td className="trdes">
                            <button onClick={ ()=> this.onDelete(products.ID)} className="btndeletevalue">Delete</button>
                        </td>
                    </tr>

        );
    }
}

export default CntBookingRoom;