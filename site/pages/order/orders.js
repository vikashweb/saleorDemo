import Order from '../../components/order/Order';
import CreateRow from '../../components/Create';
import Filter from '../../components/Filter';
const Orders = () => {
  return (
    <>
      <div>
      <CreateRow name="orders"  create="create orders" pageLink="createOrder"/>
        <div className="bg-white p-3 ">
        <div >
          <h5>All Orders</h5>
        </div>
       <Filter/>
        <hr />
        <div className="row text-center">
          <div className="col-3">
            <div className="row">
              <div className="col-4">
                <span>no of orders</span>
              </div>
              <div className="col-6">Date</div>
            </div>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-4">
                <span>Customer</span>
              </div>
              <div className="col-4">
                <span>Payment</span>
              </div>
              <div className="col-4">
                <span>fulfillment status</span>
              </div>
            </div>
          </div>
          <div className="col-3">
            <span>Total</span>
          </div>
        </div>
        <hr/>
        <Order/>
        <Order/>
        <Order/>
        <Order/>
      </div>
      </div>
    </>
  );
};
export default Orders;
