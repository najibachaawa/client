import axios from 'axios' ; 
import { USER_URI } from '../constants/defaultValues';

export class UserService {
   var ;   
   getAll() {
       return axios.get(USER_URI + '/getAllAdmins')
       .then((result)=> result.data) 
   }

   adduser(User) {
       console.log('hello from service') ; 
       return axios.post(USER_URI + '/register',User).then(
           res => console.log(res.data.message) 
       )
    
       }
       deleteuser(id) {
           console.log('hello from delete service!') ; 
           return axios.delete(USER_URI + '/delete/' + id).then(
               res => console.log(res.data.message) 
           )
       }
       
       login(loginInfo) {
           console.log('hello from login service') 
           return axios.post(USER_URI + '/login',loginInfo).then(
               res => {localStorage.setItem("token",res.data.token) ; this.var=res.data.success ; console.log(this.var) } 
        )

        
       }
   

}
