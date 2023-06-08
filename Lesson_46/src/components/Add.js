import React from "react";

function Add({newProducts, addProducts, nameError, priceError, changeName, changePrice}) {
    return (
        <div className="add">
            <label>Product name</label>
            <input onInput={changeName} onBlur={changeName} type="text" value={newProducts.name} />
            {nameError && <div className="error">{nameError}</div>}
            <label>Product price</label>
            <input onInput={changePrice} onBlur={changePrice} type="number" value={newProducts.price} />
            {priceError && <div className="error">{priceError}</div>}
            <button onClick={addProducts} type="button">Add</button>
        </div>
    )
}
export default Add;