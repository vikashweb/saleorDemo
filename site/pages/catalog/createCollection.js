import { useState } from "react";
import { useMutation } from "@apollo/client";
const createCategory=()=>{
    return(
        <>
             <div className="cover">
            <h5>create new collection</h5>
            <div className="categoryForm">
                <form >
                <div className="p-3 bg-white">
                 <lable>collection name:</lable> <br/>
                 <input type="text" placeholder="summer"/><br/>
                 <lable> description:</lable><br/>
                 <textarea type="text" /><br/>
                 <input type="submit" value="submit"/>
                </div>

                </form>
            </div>
        </div>
         
        </>
    )
}
export default createCategory;