import { useState } from "react";
import { useMutation } from "@apollo/client";

import { updateProduct } from "../../graphql/saleor/all";
import AllCategoryName from "../../components/categories/AllCategoriesName";

const UpdateProduct = (props) => {
  
  
  const [Category, setCategory] = useState(props.categoryId);
  const [productType, setProductType] = useState(props.type);
  const [collections, setCollections] = useState("summer");
  const [purchase, setPurchase] = useState("purchashed");
  const [title1, setTitle1] = useState(props.title);
  const [Quantity, setQuentity] = useState(null);
  const [PriceRange, setPriceRange] = useState(props.priceRange);
  const [available, setAvailable] = useState(null);

  const [updateproduct] = useMutation(updateProduct);

  const handelSubmit = async (e) => {
    e.preventDefault();

    const all = {
      title: title1,

      product_type: productType,
    };

    await updateproduct({
      variables: {  id:props.Id, data: all },
    });

    alert("your form has been submited!");
  };

  return (
    <>
      <div className="product">
        <h3>update Product</h3>
        <br />
        <form onSubmit={handelSubmit}>
          <div className="row">
            <div className="col-8">
              <div className="bg-white p-3">
                <h5>General Information</h5>
                <hr />
                <div>
                  <input
                    className="product-name w-100 p-3"
                    placeholder="product name"
                    value={title1}
                    type="text"
                    onChange={(e) => {
                      setTitle1(e.target.value);
                    }}
                  />
                  <br />
                  <br />

                  <div>
                    <h5>Discription</h5>
                    <textarea className="product-discription w-100 p-3" />
                  </div>
                </div>
              </div>
              <br />
              <div className="bg-white p-3">
                <h5>search engine preview</h5>
                <hr />
                <span>
                  add search engine title and description to make this product
                  easier to find
                </span>
              </div>
              <br />
              <div className="bg-white p-3">
                <div className="row p-3">
                  <div className="col-2">
                    <input
                      type="number"
                      placeholder="quantity"
                      value={Quantity}
                      onChange={(e) => {
                        setQuentity(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-2">
                    <input
                      type="text"
                      placeholder="price range"
                      value={PriceRange}
                      onChange={(e) => {
                        setPriceRange(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-2">
                    <input type="text" placeholder="product type" />
                  </div>
                  <div className="col-2">
                    <input type="text" placeholder="vendor" />
                  </div>
                  <div className="col-2">
                    <input type="text" placeholder="publish status" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="p-3 bg-white">
                <h5>organize product</h5>
                <hr />
                <lable>Product type</lable>
                <br />
                <br />

                <select
                  value={productType}
                  name="productType"
                  onChange={(e) => {
                    setProductType(e.target.value);
                  }}
                >
                  <option value="mobile">mobile</option>
                  <option value="shoes">shoes</option>
                  <option value="shirt">T-shirt</option>
                  <option value="juice">Juice</option>
                </select>
                <br />
                <hr />

                <lable>category</lable>
                <br />
                <br />

                <select
                  value={Category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                >
                  <AllCategoryName />
                </select>
                <br />
                <br />
                <hr />

                <lable>collections</lable>
                <br />
                <br />

                <select
                  value={collections}
                  onChange={(e) => {
                    setCollections(e.target.value);
                  }}
                >
                  <option value="summer">summer</option>
                  <option value="winter">winter</option>
                </select>
                <hr />
              </div>
              <br />

              <div className="visibility p-3 bg-white ">
                <h5>visibility</h5>
                <hr />
                <div>
                  <input
                    type="radio"
                    name="publish"
                    value="published"
                    chacked={purchase === "published"}
                    onChange={(e) => {
                      setPurchase(e.target.value);
                    }}
                  />
                  published
                  <br />
                  <br />
                  <input
                    type="radio"
                    name="publish"
                    value="notPublished"
                    chacked={purchase === "notPublished"}
                    onChange={(e) => {
                      setPurchase(e.target.value);
                    }}
                  />
                  not published
                </div>

                <hr />
                <div>
                  <h5>availability</h5>
                  <hr />
                  <input
                    type="radio"
                    name="availability"
                    value="available"
                    chacked={available == "available"}
                    onChange={(e) => {
                      setAvailable(e.target.value);
                    }}
                  />
                  <span>available for purchase </span>
                  <br />
                  <br />
                  <input
                    type="radio"
                    name="availability"
                    value="notAvailable"
                    chacked={available == "notAvailable"}
                    onChange={(e) => {
                      setAvailable(e.target.value);
                    }}
                  />
                  <span>not available for purchase</span>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div className="product-variant p-3">
            <h4>create product variant</h4>
            <br />
            <div className="p-3 bg-white">
              <lable>title</lable>
              <br />
              <br />
              <input type="text" />
              <br />
              <br />
              <lable>variation name</lable>
              <br />
              <br />
              <input type="text" />
              <br />
              <br />
              <lable>variation value</lable>
              <br />
              <br />
              <input type="text" />
              <br />
              <br />
              <lable>option name</lable>
              <br />
              <br />
              <input type="text" />
              <br />
              <br />
              <lable>option value</lable>
              <br />
              <br />
              <input type="text" />
              <br />
              <br />
              <lable>image</lable>
              <br />
              <br />
              <input type="file" />
              <br />
              <br />
              <lable>summary</lable>
              <br />
              <br />
              <textarea type="text" />
              <br />
              <br />
              <lable>description</lable>
              <br />
              <br />
              <textarea type="text" />
              <br />
              <br />
              <lable>price</lable>
              <br />
              <br />
              <input type="text" />
              <br />
              <br />
              <lable>discount</lable>
              <br />
              <br />
              <input type="text" />
              <br />
              <br />
              <lable>brand</lable>
              <br />
              <br />
              <input type="text" />
              <br />
              <br />
              <lable>quantity</lable>
              <br />
              <br />
              <input type="text" />
              <br />
              <br />
              <lable>unit price</lable>
              <br />
              <br />
              <input type="text" />
              <br />
              <br />
              <lable>weight</lable>
              <br />
              <br />
              <input type="text" />
              <br />
              <br />
              <lable>type</lable>
              <br />
              <br />
              <input type="text" />
              <br />
              <br />
            </div>
          </div>

          <br />
          <div className="form-submit p-3 bg-white">
            <input
              className="p-3 bg-success text-white"
              type="submit"
              value="submit"
            />
          </div>
        </form>
      </div>
    </>
  );
};
export default UpdateProduct;
