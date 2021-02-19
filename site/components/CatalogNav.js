import Link from "next/link";

const CataLogNav=(props)=>{
    return(
        <>
        <div className="catalog-nav">
          <div className="catalog-main">
          <br/>
           <h5 >Catalogs</h5>
           <hr/>
            <ul>
            <Link href="/catalog/products">        
              <a onClick={props.click}>
                  <li>Products</li></a>
            </Link>
            <Link href="/catalog/collections">  
            <a onClick={props.click}>  
                <li>collections</li>
                </a>
                </Link>
                <Link href="/catalog/categories">    
                <a onClick={props.click}>
                 <li>categories</li>  
                 </a>
                 </Link>
            </ul>
        </div>
        </div>
        <style jsx>{
            `.catalog-nav{
                position:fixed;
                top:0;
                bottom:0;
               background-color:rgba(222, 227, 224,0.7);
                right:0;
                left:12rem;
                z-index:9;
                display:${props.noCatalog};
                
            }
            .catalog-main{
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
export default CataLogNav;