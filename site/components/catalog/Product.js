const Product=(props)=>{
     let productFirstNumber=props.proNumber;
     let productLastNumber=props.proLastNumber;
     let increment=props.inc;
  
     //it will return a single product.
    return(
        <>
        { (increment >= productFirstNumber && increment <= productLastNumber)?
        <div>
        <div className="products row text-center align-items-center" >
            <div className="col-6">
             <div className="row align-items-center">
                 <div className="col-3">
                   <input type="checkbox"/>

                 </div>
                 <div className="col-4" onClick={props.click}>
                 <div className="row align-items-center justify-content-between">
                     <div className="col-2 product-image">
                      <img src={props.image}/>
                     </div>
                     <div className="col-8">
                         <span> {props.title}</span>
                     </div>
                 </div> 
                     </div>
             </div>
            </div>
            <div className="col-6" onClick={props.click}>
             <div className="row">
                 <div className="col-8">
                  <div className="row">
                      <div className="col-5">
                         <span>{props.type}</span>
                      </div>
                      <div className="col-5">
                       <span>published</span>
                      </div>
                  </div>
                 </div>
                 <div className="col-3">
                  <span>&#36;{props.priceRange}</span>
                 </div>
             </div>
                
            </div>

            </div>
        
            
            
        
             <hr/>
             </div>:<div></div>}
            
            <style jsx>{
                `
                .product-image img{
                    width:50px;
                    height:50px;
                    padding:5px;
                    box-shadow: 1px 1px 1px 1px #efe8e8;

                }
                
                `
            }</style> 
        </>
    )
}
export default Product;