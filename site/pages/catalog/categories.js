import Categories from '../../components/categories/Categories';
import CreateRow from '../../components/Create';
const categories=()=>{
    return(
        <>
       <div >
       <CreateRow name="categories"  create="create category" pageLink="createCategory"/>
           <br/>
           <div className="categories bg-white p-3 ">
               <div >
                   <span>All categories</span>
               </div>
               <hr/>
               <input type="text"/>
               <hr/>
               <div className="row text-center">
                   <div className="col-6">
                    <div className="row">
                        <div className="col-3">
                          <input type="checkBox"/>
                        </div>
                        <div className="col-6">
                         <div>
                             <h5> category name</h5>
                         </div>
                        </div>
                    </div>
                   </div>
                   <div className="col-6">
                    <div className="row">
                        <div className="col-6">
                            <span>subcategories</span>
                        </div>
                        <div className="col-6">
                         <span>no. of Products</span>
                        </div>
                    </div>
                   </div>
               </div>
               <br/>
               <Categories/>
               <Categories/>
               <Categories/>
               <Categories/>
               <Categories/>
           </div>
       </div>
        </>
    )
}

export default categories;