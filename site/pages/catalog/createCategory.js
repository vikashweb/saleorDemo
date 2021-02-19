import { useState } from "react";
import { useMutation } from "@apollo/client";
import {useEffect,useRef} from 'react';


import {createCategory} from "../../graphql/saleor/all";
const createCategories=()=>{

  const name=useRef(null);

    const [selectedFile, setSelectedFile] = useState(null); 
     const [catName,setCatName]=useState("");
    const [Description,setdescription]=useState("");

    const [category, catData] = useMutation(createCategory);
  
    const all={title:catName,description:Description,image:selectedFile}

    const submitHandler= async (e)=>{
        e.preventDefault();

        console.log(name.current.value);

        await category({
            variables: { data: all }
          });
          alert("new category created.");
          console.log(selectedFile);
          

    }
    return(
        <>
        <div className="cover">
            <h5>create new category</h5>
            <br/>
            <div className="categoryForm">
                <form onSubmit={submitHandler}>
                <div className="p-3 bg-white">
                 <lable>category name:</lable> <br/><br/>
                 <input type="text" placeholder="electronic" value={catName} onChange={(e)=>{setCatName(e.target.value)}}/><br/><br/>
                 <lable> description:</lable><br/><br/>
                 <textarea type="text" value={Description} onChange={(e)=>{setdescription(e.target.value)}} /><br/><br/><br/>
                  <lable>image:</lable>
                  <input type="file" 
          onChange={(e) => setSelectedFile(e.target.files[0])}/>
                 <input type="submit"/>
                </div>
                <input type="text" ref={name}/>

                </form>
            </div>
        </div>
         
        </>
    )
}
export default createCategories;