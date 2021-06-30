import axios from 'axios';
import * as ConfigLoginUser from '../Contant/ConfigLoginUser';

export default function GetLoginuser(endpoint, method = 'POST', body)
{
    return   axios({
        method: method,
        url: `${ConfigLoginUser.API_LOGINUSER}/${endpoint}`,
        data : body
    }).catch(err=>{
        console.log(err);
    });
};