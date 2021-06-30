import React, { Component } from 'react';
import '../Main/Partner.css';
import PostLoginPartner from '../../Utils/Partner/PostLoginPartner';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';


class LoginPartner extends Component {
    constructor(){
        super();
        this.state={
            err: false,
            valueToken: null,
            errormgs: " ",
            emailpartner:'',
            passpartner:'',
            dataPartner:[],
            id: ''
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

    Login=(e)=>{
        e.preventDefault();
        var {txtemailptn, txtpassptn} = this.state;
        var {history} = this.props;
        PostLoginPartner('api/partner/login','POST',{
            partnerUsername : txtemailptn,
            partnerPass : txtpassptn
        }).then(res=>{
            console.log(res.data.partnerId);
                //   this.setState({
                //        var id = res.data.partnerId
                //      })
                var id = res.data.partnerId
                // var products = res.data.partnerI;
            // if(res.data.status === "SUCCES"){
                // PostLoginPartner('api/profiles','GET',{
                //     authorization : res.data.token
                // }).then(res=>{
                //    console.log(res)
                //    history.push(`/${res.partnerId}/partner-home`);
                // })
                //  this.setState({
                //      valueToken : res.data.token
                //  })
                history.push(`/${id}/partner-home`);
    
            // }else  {}
            //  history.push(`/${res.partnerId}/partner-home`);
        }).catch(err=>{
            console.log(err);
            this.setState({
                err : true,
            //   errormgs: res.data.result.console.error
            })
        })
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
          // var{ products }= this.props; (nếu lấy từ dũ liệu cứng)
        var { products } = this.props;
        var {txtemailptn, txtpassptn} = this.state;

        return ( 
            <div className = "MainRegister" >
                <div className="Gmail-Form">
                    <form onSubmit={this.Login} >
                       <div className="row titelh">
                           <h3>traveloka</h3>
                           <h2> TERA</h2>
                       </div>
                       <div className="commentp">
                           <h3>Welcome back!</h3>
                           <p>Log in to manage your accommodation from</p>
                           <p>checking reservations to managing room</p>
                           <p>availability!</p>
                       </div>
                        <div className="formloginpartner">
                            <label style={{color:'white'}} htmlFor="exampleInputPassword1">Your email address:</label>
                            <div className="input-group flex-nowrap txtflex" style={{width:'330px'}}>
                                <span className="input-group-text" id="addon-wrapping">
                                     <img style={{height:'10px'},{width:'20px'}} src="./img/icon/email.png" alt='icon may bay'/>
                                </span>
                                <input type="text" className="form-control" name="txtemailptn" value={txtemailptn} onChange={this.onChange} placeholder="Enter your email address here!" aria-label="Username" aria-describedby="addon-wrapping"/>
                            </div>
                        </div>
                        <div className="formloginpartner">
                            <label style={{color:'white'}} htmlFor="exampleInputPassword1">Password:</label>
                            <div className="input-group flex-nowrap txtflex" style={{width:'330px'}}>
                                <span className="input-group-text" id="addon-wrapping">
                                     <img style={{height:'10px'},{width:'20px'}} src="./img/icon/padlock.png" alt='icon may bay'/>
                                </span>
                                <input type="password" className="form-control" name="txtpassptn" value={txtpassptn} onChange={this.onChange} placeholder="Enter your Password here!" aria-label="Username" aria-describedby="addon-wrapping"/>
                            </div>
                        </div>  
                        <a style={{marginLeft:'46px'}} href="#quenpasswword">Forgot your password?</a>
                        <button type='submit' className="nextemailR">Login</button>
                                 {/* <button type='submit' className="nextemailR"><Link className="nextemailR" to={`/${res.data.partnerId}/partner-home`} className="XemGia">Login</Link></button> */}
                             <div className="botlinkregister">
                                <p>Not yet a partner? <a href="/gmailregister">Register here!</a></p>
                            </div>
                            {/* {this.showProducts(products)} */}
                            {this.state.err === true &&
                                <div className="alert alert-danger" role="alert">
                                    <p>Login Fail ! :((</p>
                                </div>
                            }
                        </form>
                    </div>
            </div>
        );
    }
//     showProducts(products){
//         var result = null;
//         if ( products.length >= 0){
//             result = products.map((products)=>{
//                 return(
//                     <FuncitionLogin
//                     products = {products} 
//                     />
//                 );
//             });
//         }
//         return result;
//     }
}
const mapStatetoProps = state =>{
    return{
        products : state.products
    }
}
export default connect(mapStatetoProps, null)(LoginPartner);