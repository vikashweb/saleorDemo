
const Filter =()=>{
    return(
<>

<div className="filter-search row align-items-center">
<div className="col-1">
<button >FILTERS</button>
</div>
<div className="col-10">
  <input  type="text"/>
</div>
</div>


 <style jsx>{
     `
     button{
        border:2px solid #06847B;
                color:#06847B;
                border-radius:5px;
               
                text-transform:uppercase;
                padding:5px 10px 5px 10px
     }
     input{
         width:100%;
         padding:5px 10px 5px 10px;
         border-radius:5px;
     }
     `
 }</style>
 </>
    )
}
export default Filter;
