const Sale=()=>{
    return(
        <>
          <div className=" sale row align-items-center bg-white ">
                          <div className="col-7">
                           <div >  <h5>Sales</h5>
                             <p>today</p>
                          </div>
                          <div >
                              <h3 className="ml-auto w-50"> &#36;420.15  </h3>
                          </div>
                          </div>
                          <div className="col-5">
                           <img src="https://www.mindtools.com/media/Diagrams/Charts-and-Graphs-5.jpg"/>

                          </div>
                      </div>
                      <style jsx>{
            `img{
                width:100%;
                height:90px;
            }
            .sale{
                padding:10px 20px;
                border-radius:5px; 
            }
            `
        }</style>
        </>
    )
}
export default Sale;