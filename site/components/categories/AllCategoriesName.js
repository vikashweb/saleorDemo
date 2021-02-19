import {allCategoriesName} from "../../graphql/saleor/all";
import CategoriesOption from './CategoriesOptions';
import { useQuery} from "@apollo/client";


const AllCategoriesName=()=>{
 let catData=null;
  
  const {error , loading, data} = useQuery(allCategoriesName);
  if(error)return <p>error to fatch categories</p>;
  if(loading) return <p>loading...</p>;
 console.log(data);
   catData=data.allCategories.map(cl=>{
    return <CategoriesOption title={cl.title}/>
  })
  return (
      <>
      {catData}
      </>
  )

};
export default AllCategoriesName; 