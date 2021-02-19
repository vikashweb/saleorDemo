import Sale from "./home/Sale";
import Activity from "./home/Activity";

import { MdKeyboardArrowRight } from "react-icons/md";
import TopProducts from "./home/TopProducts";

const HomeSection = () => {
  return (
    <>
      <div className="home-top  ">
        <br />
        <div className="home-headding ">
          <h1>hello there, admin@example.com</h1>
          <span>here some information we gathered about your story</span>
        </div>
        <br />
        <div className="home-row row  ">
          <div className="sales col-8">
            <div className="sale-row row ">
              <div className="col-5">
                <Sale />
              </div>
              <div className="col-5">
                <Sale />
              </div>
            </div>
            <br />
            <div className="orders bg-white">
              <div className=" orderbox row align-items-center">
                <div>
                  <p>
                    <span className="text-bold">2345 </span> orders are ready to fulfill
                  </p>
                </div>
                <div>
                  <MdKeyboardArrowRight />
                </div>
              </div>
              <hr />
              <div className=" orderbox row align-items-center ">
                <div>
                  <p>
                    <span className="text-bold">2345 </span> orders are ready to fulfill
                  </p>
                </div>
                <div>
                  <MdKeyboardArrowRight />
                </div>
              </div>
              <hr />
              <div className=" orderbox row align-items-center">
                <div>
                  <p>
                    <span className="text-bold">2345 </span> orders are ready to fulfill
                  </p>
                </div>
                <div>
                  <MdKeyboardArrowRight />
                </div>
              </div>
            </div>
            <hr />
            <div className="top-products bg-white p-3 mt-3">
              <h4>Top products</h4>
              <hr />
              <TopProducts
                productName="red dwarf red paint"
                productRating="3.1"
                orderdProduct="4 ordered"
                productPrice="99"
                PPic="https://5.imimg.com/data5/YB/PW/MY-3479467/primer-asian-paint-500x500.jpg"
              />

              <TopProducts
                productName="sheos"
                productRating="3.1"
                orderdProduct="2 ordered"
                productPrice="89"
                PPic="https://assetscdn1.paytm.com/images/catalog/product/F/FO/FOOCASTOES-BLACA-J-114927393A2EB8A/1581336357230_0..jpg"
              />
              <TopProducts
                productName="ladies beg"
                productRating="3.1"
                orderdProduct="4 ordered"
                productPrice="134"
                PPic="https://4.imimg.com/data4/PY/LU/MY-24359344/ladies-backpacks-500x500.jpg"
              />
            </div>
          </div>
          <div className="activity  bg-white col-3">
            <div className=" p-3">
              <h4>activity</h4>
              <hr />
              <br />
              <Activity />
              <Activity />
              <Activity />
              <Activity />
              <Activity />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        ul {
          list-style-type: none;
          padding: 0;
        }
        .row {
          margin: 0 !important;
          justify-content: space-between;
        }
        hr {
          margin: 0;
        }
        .orderbox {
          padding: 10px 20px;
        }
        .orderbox:hover {
          background-color: #71f1f1;
        }
        .text-bold{
          font-weight:bold;
        }
      `}</style>
    </>
  );
};
export default HomeSection;
