import api from '../../api/api'
import md5 from 'js-md5'
function login(name,pwd){
    
    let data = {
        "username":name,"password":md5(`${name}${pwd}`)
    }
    api.post(`user/login`,data).then(res=>{
        console.log(res.data);
        
    });
}

export default login
