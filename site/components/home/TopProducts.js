

const TopProducts=(props)=>{
    return(
        <>
        <div className="product row align-items-center justify-content-between p-3">
        <div className="col-7">
          <div className="row align-items-center">
              <div className=" image-cover col-3">
               <img src={props.PPic}/>
              </div>
              <div className="col-7">
                <p className="productName">{props.productName}</p>
                <p>{props.productRating}</p>
                <p>{props.orderdProduct}</p>
              </div>
          </div>
        </div>
        <div className="col-2">

        <p>&#36;{props.productPrice}</p>

        </div>
         

        </div>
        <hr/>
        <style jsx>{
            `img{
                width:80px;
                height:80px;
                padding:5px;
                box-shadow: 1px 1px 3px 0px grey;
               

            }
            .productName{
                color:  #06847B;
            }
           
            .product:hover{
                background-color: #71f1f1;

            }
            `
        }</style>
        </>
    )
}
export default TopProducts;