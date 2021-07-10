import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class CntList extends Component {

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
                        <th scope="row">{products.ID}</th>
                        <td className="trdes"> {products.Name}</td>
                        <td className="trdes">{products.Price}</td>
                        <td className="trdes">{products.Quantity}</td>
                       <div className="dest">
                         <td >{products.Description}</td>
                       </div>
                        {/* <td className="dest">{products.Image}</td> */}
                        <td className="dest">
                            <img className="img_cntImage" src={products.Image}/>
                        </td>
                        <td className="trdes">{products.ID_Hotel}</td>
                        <td className="trdes">{products.Bed}</td>
                        {/* <td className="trdes">
                                <span className={`label label-${bellClass}`}>
                                    {bellname}
                                </span>
                        </td> */}
                        <td className="trdes">
                                <span className={`label label-${statusClass}`}>
                                    {statusName}
                                </span>
                        </td>
                        <td className="trdes">
                            {/* <Link to={`/${products.ID}/edithotel`} className="btneditvalue">Edit</Link> */}
                            <button onClick={ ()=> this.onDelete(products.ID)} className="btndeletevalue">Delete</button>
                        </td>
                    </tr>

        );
    }
}

export default CntList;