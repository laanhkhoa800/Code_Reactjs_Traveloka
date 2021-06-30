import axios from 'axios';
import * as ConfigPartner from '../../Contant/Partner/ConfigPartner';

export default function PostLoginPartner(endpoint, method = 'POST', body)
{
    return   axios({
        method: method,
        url: `${ConfigPartner.API_LOGINPARTNER}/${endpoint}`,
        data : body
    });
};