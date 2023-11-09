import React from "react";
import { useState } from "react";

const ProductForm = ({addProduct, removeProduct}) => {
    const [value, setValue] = useState('');

    const Inserir = (e) => {
        e.preventDefault();
        if(!value) return;
        addProduct(value)
        setValue('')
    }

    return(
        <div className="product-form">
            <h2>Novo Produto</h2>
            <form>
                <input 
                type="text" 
                placeholder="Nome do Produto"
                value={value}
                onChange={(e)=>{
                    setValue(e.target.value.toUpperCase())
                }}/>
                <div className="button-container">
                    <button className="complete" onClick={Inserir}>Inserir</button>
                    <button className="remove" onClick={() => removeProduct(product)}>Limpar Lista</button>
                </div>
            </form>
        </div> 
    )
}

export default ProductForm