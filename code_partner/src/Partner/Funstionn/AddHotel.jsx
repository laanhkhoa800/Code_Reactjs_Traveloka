import React, { Component } from 'react';
import './Funstionn.css';
// import GetUser from '../../Utils/GetLoginUser';
import GetApiHotel from '../../Utils/Hotel/GetApiHotel';
import axios from 'axios';

class AddHotel extends Component {
  constructor(props){
    super(props);
    this.state={
      // id:'',
      txtName:'',
      txtPrice:'',
      txtQuantity:'',
      txtDescription:'',
      txtImage:'',
      txtID_Hotel:'',
      cbkStatus:'',
      txtBed:'',
      image:'',
    };
}

  onChange=(e)=>{
    var target=e.target;
    var name = target.name;
    var value= target.type ==='checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    })
    // let files =e.target.files;
    // let reader = new FileReader();
    // reader.readAsDataURL(files[0]);
    // reader.onload=(e)=> {
    //   console.warn("img data",e.target.result)
    // }
  }
  onSave=(e)=>{
    e.preventDefault();// chặn trường hợp load lại trang
    var{txtID, txtName, txtPrice, txtQuantity, txtDescription,txtimage,txtBed,cbkStatus}=this.state;
    var {history} = this.props;
      // { ID: txtID,
    //     Name: txtName,
    //     Price: txtPrice,
    //     Quantity: txtQuantity,
    //     Description: txtDescription,
    //     Image: txtimage,
    //     ID_Hotel: txtID_Hotel,
    //     Bed:txtBed,
    //     TypeofBed: cbkStatus}


    // const params = new URLSearchParams({txtID, txtName, txtPrice, txtQuantity, txtDescription,txtimage,txtID_Hotel,txtBed,cbkStatus}=this.state)
    // params.append('ID', 'txtID')
    // params.append('Name', 'txtName')
    // params.append('Price', 'txtPrice')
    // params.append('Quantity', 'txtQuantity')
    // params.append('Description', 'txtDescription')
    // params.append('Image', 'txtimage')
    // params.append('ID_Hotel', 'txtID_Hotel')
    // params.append('Bed', 'txtBed')
    // params.append('TypeofBed', 'cbkStatus')
    
    const config ={
      headers:{
        // 'Accept':'x-www-form-urlencoded',
          'Content-Type':'x-www-form-urlencoded'
      }
    }
    // let files =e.target.files;
    // let reader = new FileReader();
    // reader.readAsDataURL(files[0]);
    // reader.onload=(e)=> {
    //   console.warn("img data",e.target.result)
    // }
    var {match} = this.props;
    if(match){
        var id = match.params.id;
    var {history} = this.props;
  GetApiHotel('room/addroom','POST',{
       ID: txtID,
        Name: txtName,
        Price: txtPrice,
        Quantity: txtQuantity,
        Description: txtDescription,
        Image: txtimage,
        ID_Hotel: id,
        Bed:txtBed,
        TypeofBed: cbkStatus,

  }).then(res=>{
    console.log(res);
    if(window.confirm('Tạo Phòng khoản thành công!')) { 
    //   history.push("/loginpartner");
      history.push(`/${id}/partner-home/roommanager`);
    }
  //  history.push("/:id/partner-home/roommanager");
  }).catch(err=>{
    console.log(err);
});
}
}
      //  if(res.data.status === "200"){
      //      console.log("lỗi");
      //   }else{
      //   axios.post('https://traveloka-hotel.herokuapp.com/room/addroom',params,config
      //   ).then(res=>{
      //            console.log(res)
                  // history.push("/:id/partner-home/roommanager");
              // })}
              // axios.post('https://traveloka-hotel.herokuapp.com/room/addroom',config,{
    //     ID: txtID,
    //     Name: txtName,
    //     Price: txtPrice,
    //     Quantity: txtQuantity,
    //     Description: txtDescription,
    //     Image: txtimage,
    //     ID_Hotel: id,
    //     Bed:txtBed,
    //     TypeofBed: cbkStatus}
    
    render() {
      var{id} = this.props
      var {match} = this.props;
      // kiểm tra match tồn tại
      if(match){
          var id = match.params.id;
              GetApiHotel(`hotel/${id}?`,'GET',null).then(res2=>{
            // console.log(res2);
                  var id = res2.data.recordset.ID
          })
      }
      
      var{txtID,txtName, txtPrice, txtQuantity, txtDescription,txtimage,txtBed,cbkStatus}=this.state;
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
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">ID Room:</label>
                <input type="text" name="txtID" value={txtID} className="form-control" onChange={this.onChange}  />
              </div>
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
              {/* <div className="uploadfile_Img">

              </div> */}
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">image Room:
                <input type="file" name="txtimage"  className="form-control"  />
                <input type="text" name="txtimage" value={txtimage} className="form-control" onChange={(e)=> this.onChange(e)}  />
                </label>
                {/* <input type="text" name="txtimage" value={txtimage} className="form-control" onChange={this.onChange}  /> */}
              </div>
              {/* <div className="form-group">
                <label htmlFor="exampleInputPassword1">Files image:</label>
                <input type="file" name="file" className="form-control" onChange={(e)=> this.onChange(e)}  />
              </div> */}
              
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Bed:</label>
                <input type="text" name="txtBed" value={txtBed} className="form-control" onChange={this.onChange}  />
              </div>
              <div className="checkbox">
                <label>
                  Double Bed:
                  <input type="checkbox" name="cbkStatus" value={cbkStatus} className="labelstatus" onChange={this.onChange} checked={cbkStatus}>
                  </input>
                </label>
              </div>
              <div className="btnfunsition">
                <button type="submit" className="addhotelSubmit">Submit</button>
                <a href={`/${id}/partner-home/roommanager`}><button  type="button" className="comeback">Come Back</button></a>
              </div>
            </form>
          </div>
        );
    }
}
export default AddHotel;



