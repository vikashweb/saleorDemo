import Collection from '../../components/collection/Collection';
import CreateRow from '../../components/Create';
const collections=()=>{
    return(
        <>
         <div >
         <CreateRow name="collections"  create="create collections" pageLink="createCollection"/>
           <br/>
           <div className="categories bg-white p-3 ">
               <div >
                   <span>All collections</span>
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
                             <h5> collection name</h5>
                         </div>
                        </div>
                    </div>
                   </div>
                   <div className="col-6">
                    <div className="row">
                        <div className="col-6">
                            <span>no. of Products</span>
                        </div>
                        <div className="col-6">
                         <span>availability</span>
                        </div>
                    </div>
                   </div>
               </div>
               <hr/>
             <Collection/>  
             <Collection/>
             <Collection/>
             <Collection/>
             <Collection/>
            
           </div>
       </div>
        </>
    )
}

export default collections;