const createOrder=()=>{
    return(
        <>
        <h5>create order</h5>
        <br/>
        <div className="p-3 bg-white">
        <form>
         <label>order</label><br/><br/>
         <input type="text"/><br/><br/>
         <label>user</label><br/><br/>
         <input type="text"/><br/><br/>
         <label>status</label><br/><br/>
         <input type="text"/><br/><br/>
         <label>total</label><br/><br/>
         <input type="text"/><br/><br/>
         <label>items</label><br/><br/>
         <input type="text"/><br/><br/>
        
         <input type="submit" value="submit"/>
        </form>
        </div>
        </>
    )
}
export default createOrder;