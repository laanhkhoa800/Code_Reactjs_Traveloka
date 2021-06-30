import React, { Component } from 'react';
import '../Main/Partner.css';
import GetApiHotel from '../../Utils/Hotel/GetApiHotel';


class PartnerAddHotel extends Component {
    constructor(){
        super();
        this.state={
            err: false,
            errormgs: " ",
            dataPartner:[],
            id:'',
            txtID:'',
            txtName:'',
            txtStatus: true,
            txtType:'',
            txtVote:'',
            txtImage:'',
            txtAddress:''
            
        }
    }
    onChange=(e)=>{
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        })
    }
    onSave=(e)=>{
        e.preventDefault();// chặn trường hợp load lại trang
        var{txtID,txtName, txtAddress, txtVote, txtType, txtImage,txtStatus}=this.state;
        var {history} = this.props;
        
        const config ={
          headers:{
              'Content-Type':'x-www-form-urlencoded'
          }
        }
        var {match} = this.props;
        if(match){
            var id = match.params.id;
        var {history} = this.props;
        GetApiHotel('hotel/addhotel','POST',{
                ID: id,
                Name: txtName,
                Address: txtAddress,
                Type: txtType,
                Vote: txtVote,
                Image: txtImage,
                ID_City: txtID,
                Status: txtStatus
            }).then(res=>{
                console.log(res);
                if(window.confirm('Tạo Dịch vụ của bạn thành công! Đăng Nhập để tiếp tục')) { 
                history.push(`/`);
                }
            }).catch(err=>{
                console.log(err);
            });
            }
        }    
 
    // Register=(e)=>{

    //     e.preventDefault();
    //     var {match} = this.props;
    //     // kiểm tra match tồn tại
    //     if(match){
    //     var id = match.params.id;}
    //     var {history} = this.props;
    //     var {txtType, txtAddress, txtName, txtVote,txtStatus, txtImage} = this.state;
    //     GetApiHotel('hotel/addhotel','POST',{
    //         ID : id,
    //         Name : txtName,
    //         Address : txtAddress,
    //         Type: txtType,
    //         Vote: txtVote,  
    //         Image: txtImage,
    //         ID_City: txtID_CITY,
    //         Status: txtStatus
    //     }).then(res=>{
    //         // if(res.data.status === "SUCCES"){
    //              console.log("Thêm thành công!");
    //              console.log(res);
    //         //      if(window.confirm('Tạo tài khoản thành công! Tạo nơi nghỉ của bạn!')) { 
    //                 //   history.push("/loginpartner");
    //         //     }
    //         //     //  history.push("/loginpartner");
    //         // }else  {}
    //     }).catch(err=>{
    //         // console.log(err);
    //         // this.setState({
    //             if(window.confirm('Tạo Dịch vụ của bạn thành công! login để tiếp trục!')) { 
    //                   history.push("/loginpartner");
    //             }
    //         //     err : true,
    //         //   errormgs: res.data.result.console.error
    //         // })
    //     });
    // }
  
    render() {
        var {txtID,txtType, txtAddress, txtName, txtVote,txtStatus, txtImage} = this.state;
        var { partner } = this.state
        return ( 
            <div className = "MainRegister" >
                   <img style={{height:'300px'},{width:'300px'}} src="./img/icon/dichvu.jpg" alt='icon may bay'/>
                <div className="sForm">
                    <form onSubmit={this.onSave}>
                       <div className="row titelh">
                           <h3>traveloka</h3>
                           <h2> TERA</h2>
                       </div>
                       <div className="commentp">
                           <h3>Create New your place of residence </h3>
                           <p>List your property at Traveloka and let us help </p>
                           <p>you connect with millions of guests!</p>
                       </div>
                     <div className="row nd1">
                            <div className="col-md-4 dd">
                                <label style={{color:'white'}} htmlFor="exampleInputPassword1">Type of service:</label>
                                <div className="input-group flex-nowrap txtflex" style={{width:'330px'}}>
                                    <span className="input-group-text" id="addon-wrapping">
                                        <img style={{height:'10px'},{width:'20px'}} src="./img/icon/email.png" alt='icon may bay'/>
                                    </span>
                                    <input type="text" name="txtType" value={txtType} onChange={this.onChange} className="form-control" placeholder="Nhập loại hình dịch vụ!" aria-label="Username" aria-describedby="addon-wrapping"/>
                                </div>
                            </div>
                            <div className="col-md-4 dd">
                                <label style={{color:'white'}} htmlFor="exampleInputPassword1">Name type of service:</label>
                                <div className="input-group flex-nowrap txtflex" style={{width:'330px'}}>
                                    <span className="input-group-text" id="addon-wrapping">
                                        <img style={{height:'10px'},{width:'20px'}} src="./img/icon/hat.png" alt='icon may bay'/>
                                    </span>
                                    <input type="text" name="txtName" value={txtName}  onChange={this.onChange} className="form-control" placeholder="Điền tê nhãn hiệu dịch vụ của bạn!" aria-label="Username" aria-describedby="addon-wrapping"/>
                                </div>
                            </div>
                     </div>
                       <div className="row nd2">
                       <div className="col-md-4 dd">
                            <label style={{color:'white'}} htmlFor="exampleInputPassword1">Address service:</label>
                            <div className="input-group flex-nowrap txtflex" style={{width:'330px'}}>
                                <span className="input-group-text" id="addon-wrapping">
                                     <img style={{height:'10px'},{width:'20px'}} src="./img/icon/hat.png" alt='icon may bay'/>
                                </span>
                                <input type="text" name="txtAddress" value={txtAddress}  onChange={this.onChange} className="form-control" placeholder="Điền địa chỉ dịch vụ  ở đây!" aria-label="Username" aria-describedby="addon-wrapping"/>
                            </div>
                        </div>
                        <div className="col-md-4 dd">
                            <label style={{color:'white'}} htmlFor="exampleInputPassword1">Star service:</label>
                            <div className="input-group flex-nowrap txtflex" style={{width:'330px'}}>
                                <span className="input-group-text" id="addon-wrapping">
                                     <img style={{height:'10px'},{width:'20px'}} src="./img/icon/hat.png" alt='icon may bay'/>
                                </span>
                                <input type="text" name="txtVote" value={txtVote}  onChange={this.onChange} className="form-control" placeholder="Điền sao  của dịch vụ ở đây!" aria-label="Username" aria-describedby="addon-wrapping"/>
                            </div>
                        </div>
                        
                        {/* <div className="col-md-4 dd">
                            <label style={{color:'white'}} htmlFor="exampleInputPassword1">Status service:</label>
                            <div className="input-group flex-nowrap txtflex" style={{width:'330px'}}>
                                <span className="input-group-text" id="addon-wrapping">
                                     <img style={{height:'10px'},{width:'20px'}} src="./img/icon/hat.png" alt='icon may bay'/>
                                </span>
                                <input type="text" name="txtStatus" value={txtStatus}  onChange={this.onChange} className="form-control" placeholder="Điền tình trạng dịch vụ ở đây!" aria-label="Username" aria-describedby="addon-wrapping"/>
                            </div>
                        </div> */}

                        <div className="col-md-4 dd">
                            <label style={{color:'white'}} htmlFor="exampleInputPassword1">City:</label>
                            <div className="input-group flex-nowrap txtflex" style={{width:'330px'}}>
                                <span className="input-group-text" id="addon-wrapping">
                                     <img style={{height:'10px'},{width:'20px'}} src="./img/icon/hat.png" alt='icon may bay'/>
                                </span>
                                <input type="text" name="txtID" value={txtID}  onChange={this.onChange} className="form-control" placeholder="Chọn thành phố ở đây!" aria-label="Username" aria-describedby="addon-wrapping"/>
                            </div>
                        </div>
                       </div>
                       
                        <div className="dd">
                            <label style={{color:'white'}} htmlFor="exampleInputPassword1">Image service:</label>
                            <div className="input-group flex-nowrap txtflex" style={{width:'330px'}}>
                                <span className="input-group-text" id="addon-wrapping">
                                     <img style={{height:'10px'},{width:'20px'}} src="./img/icon/hat.png" alt='icon may bay'/>
                                </span>
                                <input type="text" name="txtImage" value={txtImage}  onChange={this.onChange} className="form-control" placeholder="Điền hình ảnh dịch vụ ở đây!" aria-label="Username" aria-describedby="addon-wrapping"/>
                            </div>
                        </div>
                        <a href="#next">
                            <button type="submit" className="nextemailR">Finish</button>
                        </a>
                       <div className="ddd">
                            <div className="botlinklogint">
                                    <p>Already have an account? <a href="/v2landing">Cancel here!</a></p>
                            </div>
                            {this.state.err === true &&
                                <div className="alert alert-danger" role="alert">
                                    <p>Register partner Fail ! :((</p>
                                </div>
                            }
                       </div>
                    </form>
                </div>
            </div>
        );
    }
}
export default PartnerAddHotel;