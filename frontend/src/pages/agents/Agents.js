import React from "react";
import "react-quill/dist/quill.snow.css";
import Card from "../../components/card/Card";

function Agents({ product }) {
  const click = () => {
    console.log(product);
  };

  return (
    <div className="add-product">
      <Card cardClass={"card"}>
        <button type="button" onClick={click}>
          click
        </button>
        <form>
          <Card cardClass={"group"}>
            <label>Product Image</label>
            <code className="--color-dark">
              Supported Formats: jpg, jpeg, png
            </code>
            <input type="file" name="image" />

            <div className="image-preview">
              <img src="" alt="product" />
            </div>

            <p>No image set for this poduct.</p>
          </Card>
          <label>Product Name:</label>
          <input type="text" placeholder="Product name" name="name" />

          <label>Product Category:</label>
          <input type="text" placeholder="Product Category" name="category" />

          <label>Product Price:</label>
          <input type="text" placeholder="Product Price" name="price" />

          <div className="--my">
            <button type="submit" className="--btn --btn-primary">
              Save Product
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default Agents;
