import CreateRow from '../components/Create';
import Customer from '../components/Customers';
import Filter from '../components/Filter';
 const customers=()=> {
    return (
      <>
        <div>
        <CreateRow name="customers"  create="create customer" pageLink="createCustomer"/>
        <div className="bg-white p-3 ">
        <div >
          <h5>All customers</h5>
        </div>
      <Filter/>
        <hr />
        <div className="row text-center">
          <div className="col-4">
           <div className="row">
             <div className="col-3">
              <input type="checkBox"/>
             </div>
             <div className="col-8">
                <span>customer name</span>
             </div>
           </div>
          </div>
          <div className="col-5">
            <span>customer email</span>
          </div>
          <div className="col-2">
            <span>no.of orders</span>

          </div>
        </div>
        <hr/>
        <Customer/>
        <Customer/>
        <Customer/>
        <Customer/>
      </div>
      </div>
    
           
        
    
      </>
    )
  }
  export default customers;