import axios from 'axios';
import * as ConfigApiCity from '../../Contant/City/ConfigApiCity';

export default function GetApiCity(endpoint, method = 'POST', body)
{
    return   axios({
        method: method,
        url: `${ConfigApiCity.API_CITY}/${endpoint}`,
        data : body
    });
};