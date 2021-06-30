import axios from 'axios';
import * as Config from '../Contant/Config'

export default function GetData(endpoint, method = 'GET', body)
{
    return   axios({
        method: method,
        url: `${Config.API_DATAROOM}/${endpoint}`,
        data : body
    }).catch(err=>{
        console.log(err);
    });
};