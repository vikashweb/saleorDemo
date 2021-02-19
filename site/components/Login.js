import { useMutation } from "@apollo/client";

import {authentication} from "../graphql/saleor/all";
 const Login=()=>{

    const [auth, authdata] = useMutation(authentication);

    
     const   handelSubmit = async (e) => {
     
      await auth({
        variables: { email:"admin@inventory.in",password:"ee3442077dfa" }
      });
      
  

      console.log(authdata.data);
     
    };
    handelSubmit();
    
    

   
}
export default Login;