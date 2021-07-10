import React, { Component } from 'react';
import './Funstionn.css';
import GetApiHotel from '../../Utils/Hotel/GetApiHotel';
// import GetValue from '../../Utils/Getvalueroom';

class Edithotel extends Component {
  constructor(props){
    super(props);
    this.state={
      id:'',
      txtName:'',
      txtPrice:'',
      txtQuantity:'',
      txtDescription:'',
      txtImage:'',
      txtID_Hotel:'',
      cbkBell:'',
      txtBed:''
    };
}
 
  componentDidMount(){ // ghi cho đúng kh đúng kh consolelog id được :((
    var {match} = this.props;
    // kiểm tra match tồn tại
    if(match){
      var id = match.params.id;
      // console.log(id);
      GetApiHotel(`room/${id}?`,'GET',null ).then(res=>
        { 
          console.log(res);
          var data = res.data.recordset;
          // recordser
          this.setState({
            // load dữ liệu từ server lên text dựa theo id
            id: data.ID,
            txtName: data.Name,
            txtPrice : data.Price,
            txtQuantity: data.Quantity,
            txtDescription: data.Description,
            txtimage: data.Image,
            txtID_Hotel: data.ID_Hotel,
            txtBed: data.Bed,
            cbkBell:data.TypeofBed
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
  onSave=(e)=>{
    e.preventDefault();// chặn trường hợp load lại trang
    var{id, txtName, txtPrice, txtQuantity, txtDescription,txtimage,txtID_Hotel,cbkBell,txtBed}=this.state;
    var {history} = this.props;
    //kiểm tra trường hợp, nếu source có id là update còn kh là thêm mới
      //  console.log('update');
      GetApiHotel(`room/${id}?`,'PUT',{
        // id : txtID,
        Name: txtName,
        Price: txtPrice,
        Quantity: txtQuantity,
        Description: txtDescription,
        Image: txtimage,
        ID_Hotel: txtID_Hotel,
        Bed:txtBed,
        TypeofBed: cbkBell
      }).then(res=>{
          history.push("/:id/partner-home/roommanager");
          console.log('edit thành công!');
        });
    }
    render() {
      var{ txtName, txtPrice, txtQuantity, txtDescription,txtimage,txtID_Hotel,cbkBell,txtBed}=this.state;
        return ( 
          <div className="formThemHotel">
            <div className="travelteraadd">
              <h2>traveloka <h1>TERA</h1></h2>
            </div>
            <form onSubmit={this.onSave}>
              <h2>Information</h2>
              {/* <div className="form-group">
                <label htmlFor="exampleInputEmail1">ID</label>
                <input type="text" name="txtID" value={txtID} className="form-control" onChange={this.onChange}  />
              </div> */}
              {/* <div className="form-group">
                <label htmlFor="exampleInputPassword1">ID Room:</label>
                <input type="text" name="id" value={id} className="form-control" onChange={this.onChange}  />
              </div> */}
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Name Room:</label>
                <input type="text" name="txtName" value={txtName} className="form-control" onChange={this.onChange}  />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Price Room:</label>
                <input type="text" name="txtPrice" value={txtPrice} className="form-control" onChange={this.onChange} />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Quantity:</label>
                <input type="text" name="txtQuantity" value={txtQuantity} className="form-control" onChange={this.onChange}  />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Description:</label>
                <input type="text" name="txtDescription" value={txtDescription} className="form-control" onChange={this.onChange}  />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">image Room:</label>
                <input type="text" name="txtimage" value={txtimage} className="form-control" onChange={this.onChange}  />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">ID_Hotel</label>
                <input type="text" name="txtID_Hotel" value={txtID_Hotel} className="form-control" onChange={this.onChange}  />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Bed:</label>
                <input type="text" name="txtBed" value={txtBed} className="form-control" onChange={this.onChange}  />
              </div>
              <div className="checkbox">
                <label>
                  Giường Đôi:
                  <input type="checkbox" name="cbkBell" value={cbkBell} className="labelstatus" onChange={this.onChange} checked={cbkBell}>
                  </input>
                </label>
              </div>
              {/* <div className="checkbox">
                <label>
                  Còn Phòng
                  <input type="checkbox" name="cbkStatus" value={cbkStatus} className="labelstatus" onChange={this.onChange} checked={cbkStatus}>
                  </input>
                </label>
              </div> */}
              <div className="btnfunsition">
                <button type="submit" className="addhotelSubmit">Submit</button>
                <a href="/:id/partner-home/roommanager"><button  type="button" className="comeback">Come Back</button></a>
              </div>
            </form>
          </div>
        );
            }
        }
export default Edithotel;

