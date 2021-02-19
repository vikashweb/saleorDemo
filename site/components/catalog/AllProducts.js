import { useQuery } from "@apollo/client";
import { useState } from "react";
import { productQuery } from "../../graphql/saleor/all";

import Filter from "../Filter";
import Product from "./Product";
import UpdateProduct from "./UpdateProduct";

//all products will show in a list and also can update.
const AllProducts = () => {
  const [updatePro, setUpdatePro] = useState(null);
  let products = null;
  const [productListShow, setProductListShow] = useState(true);
  const [productNumber, setProductNumber] = useState(0);
  const [productLastNumber, setProductLastNumber] = useState(9);
 
  const nextHandler = () => {
    setProductNumber(productNumber + 10);
    setProductLastNumber(productLastNumber + 10);
  };

  const preHandler = () => {
    if (productNumber > 0) {
      setProductNumber(productNumber - 10);
      setProductLastNumber(productLastNumber - 10);
    }
  };

  const { loading, error, data } = useQuery(productQuery);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>error to fatch data from server...</p>;
  console.log(data.allProducts);
  const updateProductHandler = (e, index) => {
    let up = (
      <UpdateProduct
        title={data.allProducts[index].title}
        priceRange={data.allProducts[index].price_range}
        type={data.allProducts[index].product_type}
        Id={data.allProducts[index].id}
      />
    );

    setProductListShow(false);
    setUpdatePro(up);
  };

  products = data.allProducts.map((cl, index) => {
    return (
      <Product
        title={cl.title}
        priceRange={cl.price_range}
        type={cl.product_type}
        key={cl.id}
        inc={index}
        image={cl.productVariant.image.publicUrl}
        proNumber={productNumber}
        proLastNumber={productLastNumber}
        click={(e) => {
          updateProductHandler(e, index);
        }}
      />
    );
  });

  return (
    <>
      {productListShow ? (
        <div className="all-products">
          <h5>AllProducts</h5>
          <hr />
          <Filter />
          <br />
          <div className="products row text-center">
            <div className="col-6">
              <div className="row">
                <div className="col-3">
                  <input type="checkbox" />
                </div>
                <div className="col-3">
                  <span>Name</span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-8">
                  <div className="row">
                    <div className="col-5">
                      <span>Type</span>
                    </div>
                    <div className="col-5">
                      <span>published</span>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <span>price</span>
                </div>
              </div>
            </div>
          </div>
          <hr />
          {products}
          <br />
          <br />
          <div className="p-3 row bg-white justify-content-between ">
            <div className="col-1  ProChange">
              <button className="btn text-white" onClick={preHandler}>
                PRE
              </button>
            </div>
            <div className="col-1  ProChange">
              <button className="btn text-white" onClick={nextHandler}>
                NEXT
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>{updatePro}</div>
      )}
      <style jsx>{`
        .all-products {
          padding: 20px 25px;
          background-color: white;
        }
        .ProChange {
          background-color: #06847b;
          color: white;
        }
      `}</style>
    </>
  );
};
export default AllProducts;
