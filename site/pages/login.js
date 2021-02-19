import { useMutation } from "@apollo/client";

import {authentication} from "../graphql/saleor/all";
 const login=()=>{

    const [auth, authdata] = useMutation(authentication);

    
     const   handelSubmit = async (e) => {
      e.preventDefault();
      await auth({
        variables: { email:"admin@inventory.in",password:"ee3442077dfa" }
      });
      
  
      alert("your form has been submited!");
      console.log(authdata.data);
     
    };

    return(
        <>
       { console.log("it is working")}
         
        </>
    )
}
export default login;