
import AllProducts from '../../components/catalog/AllProducts';
import CreateRow from '../../components/Create';


 const products=()=> {
    return (
      <>
          <CreateRow name="products" column="column" create="create product" pageLink="/catalog/createProduct"/>
           <AllProducts/>
       
           
          
   
    
      </>
    )
  }
  export default products;