import Sales from '../../components/sales/Sales';
const sales=()=>{
    return(
        <>
             <div>
        <div className="row justify-content-between">
          <div className="col-3">
            <h5>sales</h5>
          </div>
          <div className="col-3">
            <button>CREATE sales</button>
          </div>
        </div>
        <div className="bg-white p-3 ">
        <div >
          <h5>All sales</h5>
        </div>
        <div className="row">
          <div className="col-2">
            <button>filters</button>
          </div>
          <div className="col-7">
            <input type="text" />
          </div>
        </div>
        <hr />
      <div className="row ">
          <div className="col-6">
            <div className="row">
                <div className="col-4">
                   <input type="checkBox"/>

                   
                </div>
                <div className="col-7">
                   <span>Name</span>
                    
                    </div>
            </div>
          </div>
          <div className="col-6">
          <div className="row">
              <div className="col-5">
             <span>starts</span>
              </div>
              <div className="col-4">
                  <span>ends</span>
              </div>
              <div className="col-3">
                  <span>value</span>
              </div>
          </div>

          </div>
      </div>
        <hr/>
        <Sales/>
        <Sales/>
        <Sales/>
        <Sales/>
       
      </div>
      </div>
        </>
    )
}
export default sales;