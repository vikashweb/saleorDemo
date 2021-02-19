import Link from "next/link";
import { useState } from "react";

import CatalogNav from "./CatalogNav";
import OrderNav from "./OrderNav";
import DiscountNav from "./DiscountNav";

import { ImHome } from "react-icons/im";
import { GrCatalogOption } from "react-icons/gr";
import { FaShoppingCart } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { FiPocket } from "react-icons/fi";
import { FiGlobe } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";

const AsideNav = () => {
  const [noCatalog, showCatalog] = useState("none");
  const [noOrder, ShowOrder] = useState("none");
  const [noDiscount, ShowDiscount] = useState("none");
  const showCata = () => {
    if (noCatalog === "none") {
      showCatalog("block");
    }
    if (noCatalog === "block") {
      showCatalog("none");
    }
    if (noOrder === "block") {
      ShowOrder("none");
    }
    if(noDiscount==="block"){
      ShowDiscount("none");
    }
  };

  const orderHandler = () => {
    if (noOrder === "none") {
      ShowOrder("block");
    }
    if (noOrder === "block") {
      ShowOrder("none");
    }
    if (noCatalog === "block") {
      showCatalog("none");
    }
    if(noDiscount==="block"){
      ShowDiscount("none");
    }
  };
  const discountHandler=()=>{
    if(noDiscount==="none"){
      ShowDiscount("block");
    }
    if(noDiscount==="block"){
      ShowDiscount("none");
    }
    if(noOrder==="block"){
      ShowOrder("none");
    }
    if(noCatalog==="block"){
      showCatalog("none");
    }
  }

  return (
    <>
      <div className="navCover col-2 p-0">
        <div className="positionPart">
          <div className="navHeader p-3">
            <h2>
              <span>S</span>aleor
            </h2>
          </div>
          <div className="navBarItems">
            <ul>
              <li>
                <Link href="/">
                  <a>
                    <ImHome />

                    <span>Home</span>
                  </a>
                </Link>
              </li>
              <li>
                <a onClick={() => showCata()}>
                  <GrCatalogOption />
                  <span>Catalog</span>
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    orderHandler();
                  }}
                >
                  <FaShoppingCart />
                  <span>Orders</span>
                </a>
              </li>
              <li>
                <Link href="/customers">
                  <a>
                    <BsPersonFill />
                    <span>Customers</span>
                  </a>
                </Link>
              </li>
              <li>
             
                  <a onClick={()=>{discountHandler();}}>
                    <FiPocket />
                    <span>Discounts</span>
                  </a>
                
              </li>
              <li>
                <Link href="/translations">
                  <a>
                    <FiGlobe />
                    <span>Translations</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/configrations">
                  <a>
                    <FiSettings />
                    <span>Configrations</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <CatalogNav noCatalog={noCatalog} click={showCata} />
        <OrderNav noOrder={noOrder} click={orderHandler} />
        <DiscountNav noDiscount={noDiscount} click={discountHandler}/>
      </div>

      <style jsx>{`
        ul {
          list-style-type: none;
          padding: 20px 25px;
        }
        li {
          font-size: 20px;
          padding: 20px 0 20px 0;
        }
        .positionPart {
          background-color: white;
          position: fixed;
          bottom: 0;
          top: 0;
        }
        span {
          padding: 0 0 0 10px;
        }
        .navHeader {
          background-color: #21125e;
          color: white;
          text-align: center;
        }
        .navHeader h2 span {
          font-size: 35px;
        }
      `}</style>
    </>
  );
};
export default AsideNav;
