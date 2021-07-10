import React, { Component } from 'react';
import '../Main/Partner.css';
import PostLoginPartner from '../../Utils/Partner/PostLoginPartner'


class GmailRegister extends Component {
    constructor(){
        super();
        this.state={
            err: false,
            errormgs: " ",
            emailpartner:'',
            passpartner:'',
            partnerRole:'',
            dataPartner:[],
            id:''
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

    Register=(e)=>{
        e.preventDefault();
        var {txtemailptn, txtpassptn, txtroleptn} = this.state;
        var {history} = this.props;
        PostLoginPartner('api/partner','POST',{
            partnerUsername : txtemailptn,
            partnerPass : txtpassptn,
            partnerRole : txtroleptn
        }).then(res=>{
             var id = res.data.created[0].partnerId;
            console.log(res.data.created[0].partnerId);
            console.log(res);
            if(res.data.status === "SUCCES"){
                 console.log("Thêm thành công!");
                 if(window.confirm('Tạo tài khoản thành công! Tạo nơi nghỉ của bạn!')) { 
                    //   history.push("/loginpartner");
                    history.push(`/${id}/PntAdd_hotel`);
                }
                //  history.push("/loginpartner");
            }else  {}
        }).catch(err=>{
            console.log(err);
            this.setState({
                err : true,
            //   errormgs: res.data.result.console.error
            })
        });
    }
    render() {
        var {txtemailptn, txtpassptn, txtroleptn} = this.state;
        var { partner } = this.state
        return ( 
            <div className = "MainRegister" >
                <div className="Gmail-Form">
                    <form onSubmit={this.Register}>
                       <div className="row titelh">
                           <h3>traveloka</h3>
                           <h2> TERA</h2>
                       </div>
                       <div className="commentp">
                           <h3>Create New Tera Account</h3>
                           <p>List your property at Traveloka and let us help </p>
                           <p>you connect with millions of guests!</p>
                       </div>
                        <div className="formgmail">
                            <label style={{color:'white'}} htmlFor="exampleInputPassword1">Email:</label>
                            <div className="input-group flex-nowrap txtflex" style={{width:'330px'}}>
                                <span className="input-group-text" id="addon-wrapping">
                                     <img style={{height:'10px'},{width:'20px'}} src="./img/icon/email.png" alt='icon may bay'/>
                                </span>
                                <input type="text" name="txtemailptn" value={txtemailptn} onChange={this.onChange} className="form-control" placeholder="Điền email của bạn ở đây!" aria-label="Username" aria-describedby="addon-wrapping"/>
                            </div>
                        </div>
                        <div className="formpass">
                            <label style={{color:'white'}} htmlFor="exampleInputPassword1">PassWord:</label>
                            <div className="input-group flex-nowrap txtflex" style={{width:'330px'}}>
                                <span className="input-group-text" id="addon-wrapping">
                                     <img style={{height:'10px'},{width:'20px'}} src="./img/icon/padlock.png" alt='icon may bay'/>
                                </span>
                                <input type="password" name="txtpassptn" value={txtpassptn}  onChange={this.onChange} className="form-control" placeholder="Điền password của bạn ở đây!" aria-label="Username" aria-describedby="addon-wrapping"/>
                            </div>
                        </div>
                        <div className="formpass">
                            <label style={{color:'white'}} htmlFor="exampleInputPassword1">Role:</label>
                            <div className="input-group flex-nowrap txtflex" style={{width:'330px'}}>
                                <span className="input-group-text" id="addon-wrapping">
                                     <img style={{height:'10px'},{width:'20px'}} src="./img/icon/hat.png" alt='icon may bay'/>
                                </span>
                                <input type="text" name="txtroleptn" value={txtroleptn}  onChange={this.onChange} className="form-control" placeholder="Điền role của bạn ở đây!" aria-label="Username" aria-describedby="addon-wrapping"/>
                            </div>
                        </div>
                        <a href="#next">
                            <button type="submit" className="nextemailR">Next</button>
                        </a>
                        <div className="botlinklogin">
                            <p>Already have an account? <a href="/loginpartner">Log in here!</a></p>
                        </div>
                        {this.state.err === true &&
                            <div className="alert alert-danger" role="alert">
                                <p>Register partner Fail ! :((</p>
                            </div>
                        }
                    </form>
                </div>
            </div>
        );
    }
}
export default GmailRegister;