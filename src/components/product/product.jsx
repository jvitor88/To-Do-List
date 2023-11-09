import React from "react";

const Product = ({product, removeProduct, completeProduct}) => {
    return(
          <div className='product' style={{textDecoration: product.isCompleted ? "line-through" : ""}}>
            <div className='content'>
              <p children>{product.text}</p>
            </div>
              <div>
                <button className="complete" onClick={() => completeProduct(product.id)}>Ok</button>
                <button className="remove" onClick={() => removeProduct(product.id)}>X</button>
              </div>
          </div> 
    )
}

export default Product