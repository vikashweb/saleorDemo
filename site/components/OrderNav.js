import Link from "next/link";

const OrderNav=(props)=>{
    return(
        <>
        <div className="OrderNav-nav">
          <div className="OrderNav-main">
          <br/>
           <h5 >Orders</h5>
           <hr/>
            <ul>
            <Link href="/order/orders">        
              <a onClick={props.click}>
                  <li>Orders</li></a>
            </Link>
            <Link href="/order/draft">  
            <a onClick={props.click}>  
                <li>Drafts</li>
                </a>
                </Link>
              
            </ul>
        </div>
        </div>
        <style jsx>{
            `.OrderNav-nav{
                position:fixed;
                top:0;
                bottom:0;
               background-color:rgba(222, 227, 224,0.7);
                right:0;
                left:12rem;
                z-index:9;
                display:${props.noOrder};
                
            }
            .OrderNav-main{
                width:20%;
                background-color:white;
                height:100%;
                padding:20px 25px;
               
            }
            ul{
                list-style-type:none;
            }
            li{
                padding:20px 0 20px 0;
            }
            `
        }</style>
        </>
    )
}
export default OrderNav;