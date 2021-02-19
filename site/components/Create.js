import Link from "next/link";
//createrow is use for create product or something else which will  use in many pages
const CreateRow=(props)=>{
    return(
        <>
        <div className="cover">      
          <div className="row justify-content-between">
            <div className="col-4">
                <h5>{props.name}</h5>
            </div>
            <div className="col-5">
                <div className="row">
                    <div className="col-5">
                     <button className="colButton">{props.column}</button>
                    </div>
                    <div className="col-5">

                    <Link href={props.pageLink}>
                  <a>
                   

                    <button className="createButton"> {props.create}</button>
                  </a>
                </Link>
                     
                     
                    </div>
                </div>
            </div>
        </div>
        </div>
        <br/>
        <style jsx>{
            `
            .cover{
                padding:10px 0 10px 0;
            }
            .createButton{
                background-color:#06847B;
                color:white;
                text-transform:uppercase;
                padding:5px 10px 5px 10px;
            }
            .colButton{
                border:2px solid #06847B;
                color:#06847B;
                border-radius:5px;
               
                text-transform:uppercase;
                padding:5px 10px 5px 10px;
            }
            h5{
                font-size:28px;
            }
            
            `
        }</style>

        </>
    )
}
export default CreateRow;