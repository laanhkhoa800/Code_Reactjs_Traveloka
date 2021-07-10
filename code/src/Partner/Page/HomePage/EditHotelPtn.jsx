import React, { Component } from 'react';
// import './Funstionn.css';
import GetApiHotel from '../../../Utils/Hotel/GetApiHotel';
// import GetValue from '../../Utils/Getvalueroom';

class EditHotelPtn extends Component {
  constructor(props){
    super(props);
    this.state={
      id:'',
      txtName:'',
      txtType:'',
      txtImage:'',
      txtVote:'',
      txtID_City:'',
      cbkStatus:'',
      txtAddress:''
    };
}
 
  componentDidMount(){ // ghi cho đúng kh đúng kh consolelog id được :((
    var {match} = this.props;
    // kiểm tra match tồn tại
    if(match){
      var id = match.params.id;
      GetApiHotel(`hotel/${id}?`,'GET',null).then(res=>{
        //   console.log(res);
          // var data = res.data.recordset;
        var data = res.data.recordset;
          this.setState({
            // load dữ liệu từ server lên text dựa theo id
            id: data.ID,
            txtName: data.Name,
            txtAddress : data.Address,
            txtID_City: data.ID_City,
            txtImage: data.Image,
            txtType: data.Type,
            txtVote: data.Vote, 
            cbkStatus:data.Status
          });
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
    var{id, txtName, txtAddress, txtID_City, txtType,txtImage,txtVote,txtID_City,cbkStatus}=this.state;
    var {history} = this.props;
    //kiểm tra trường hợp, nếu source có id là update còn kh là thêm mới
      //  console.log('update');
      GetApiHotel(`hotel/${id}?`,'PUT',{
        // id : txtID,
        Name: txtName,
        Address: txtAddress,
        Type: txtType,
        Vote: txtVote,
        Image: txtImage,
        ID_City: txtID_City,
        Status: cbkStatus
      }).then(res=>{
          history.push("/:id/partner-home");
          console.log('edit thành công!');
        });
    }
    render() {
      var{txtName, txtVote, txtImage, txtType,txtAddress,txtID_City,cbkStatus}=this.state;
        return ( 
          <div className="formThemHotel">
            <div className="travelteraadd">
              <h2>traveloka <h1>TERA</h1></h2>
            </div>
            <form onSubmit={this.onSave}>
              <h2>EDIT Information</h2>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Name Hotel:</label>
                <input type="text" name="txtName" value={txtName} className="form-control" onChange={this.onChange}  />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Address:</label>
                <input type="text" name="txtAddress" value={txtAddress} className="form-control" onChange={this.onChange} />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Type:</label>
                <input type="text" name="txtType" value={txtType} className="form-control" onChange={this.onChange}  />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Vote:</label>
                <input type="text" name="txtVote" value={txtVote} className="form-control" onChange={this.onChange}  />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Image:</label>
                <input type="text" name="txtImage" value={txtImage} className="form-control" onChange={this.onChange}  />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">ID_City</label>
                <input type="text" name="txtID_City" value={txtID_City} className="form-control" onChange={this.onChange}  />
              </div>
              <div className="checkbox">
                <label>
                  Status: 
                  <input type="checkbox" name="cbkStatus" value={cbkStatus} className="labelstatus" onChange={this.onChange} checked={cbkStatus}>
                  </input>
                </label>
              </div>
              <div className="btnfunsition">
                <button type="submit" className="addhotelSubmit">Submit</button>
                <a href="/:id/partner-home"><button  type="button" className="comeback">Come Back</button></a>
              </div>
            </form>
          </div>
        );
            }
        }
export default EditHotelPtn;

