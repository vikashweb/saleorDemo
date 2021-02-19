import CreateRow from '../../components/Create';
import Filter from '../../components/Filter';
const draft=()=>{
    return(
        <>
       <div>
       <CreateRow name="drafts"  create="create drafts" pageLink="createDraft"/>
        <div className="bg-white p-3 ">
        <div >
          <h5>All Orders</h5>
        </div>
       <Filter/>
        <hr />
        <div className="row">
            <div className="col-3">
              <div className="row">
                  <div className="col-6">
                   <span>No. of Orders></span>
                  </div>
                  <div className="col-6">
                  <span>date</span>
                  </div>
             </div>
            </div>
            <div className="col-6">
             <span>customer</span>
            </div>
            <div className="col-3">
             <span>total</span>
            </div>
        </div>
        <hr/>
        <span>no draft order found</span>
        <hr/>
     
      </div>
      </div>
        </>
    )
}
export default draft;