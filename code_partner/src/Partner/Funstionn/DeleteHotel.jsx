import React, { Component } from 'react';
import './Funstionn.css';
import GetUser from '../../Utils/GetLoginUser';

class DeleteHotel extends Component {
  constructor(props){
    super(props);
    this.state={
        danang:[]
    };
    this.state={
      ID:'',
      Name:'',
      Star:'',
      Address:'',
      Vote:'',
      img:'',
      Price:''
    };
}

// componentDidMount() {
//     GetUser('dataDN','GET',null).then(res=>{
//         this.setState({
//             danang: res.data
//         });
//     });
//   }
  onChange=(e)=>{
    var target=e.target;
    var name = target.name;
    var value=target.value;
    this.setState({
      [name]: value
    })
  }
  onSave=(e)=>{
    e.preventDefault();
  //   var{txtID, txtName, txtStar, txtAddress, txtVote, txtimg, txtPrice}=this.state;
  //   GetUser('addhotel','POST',{
  //     id: txtID,
  //     nameHT: txtName,
  //     sao: txtStar,
  //     diachi: txtAddress,
  //     antuong: txtVote,
  //     ingHT: txtimg,
  //     gia: txtPrice
  //   }).then(res=>{
  //     console.log(res);
  //   });
       console.log(this.state);
  }
    render() {
      var{txtID, txtName, txtStar, txtAddress, txtVote, txtimg, txtPrice}=this.state;
        return ( 
          <div className="formThemHotel">
            <div className="travelteraadd">
              <h2>traveloka <h1>TERA</h1></h2>
            </div>
            <form onSubmit={this.onSave}>
              <h2>Delete</h2>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">ID</label>
                <input type="text" name="txtID"
                 value={txtID} className="form-control" onChange={this.onChange}  />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Name</label>
                <input type="text" name="txtName" value={txtName} className="form-control" onChange={this.onChange}  />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Star</label>
                <input type="text" name="txtStar" value={txtStar} className="form-control" onChange={this.onChange} />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Address</label>
                <input type="text" name="txtAddress" value={txtAddress} className="form-control" onChange={this.onChange}  />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Vote</label>
                <input type="text" name="txtVote" value={txtVote} className="form-control" onChange={this.onChange} />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Image</label>
                <input type="text" name="txtimg" value={txtimg} className="form-control" onChange={this.onChange} />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Price</label>
                <input type="text" name="txtPrice" value={txtPrice} className="form-control" onChange={this.onChange} />
              </div>
              <button type="submit" className="addhotelSubmit">Submit</button>
              <a href="/partner-home"><button type="button" className="comeback">Come Back</button></a>
            </form>
          </div>
        );
    }
}
export default DeleteHotel;



