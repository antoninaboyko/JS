import React, {useState} from "react";
import Product from "./components/Product";
import Add from "./components/Add";

function App () {

  const productsList = [
  {name: 'Iphone', price: 800, id: 1},
  {name: 'Watch', price: 100, id: 2},
  ];
  const [products, setProducts] = useState(productsList)
  const [newProducts, setNewProducts] = useState({name: '', price: '', id: 3})
  const [nameError, setNameError] = useState('');
  const [priceError, setPriceError] = useState('');

  const validateName = (name) => {
    if (name.trim().length < 2) {
      setNameError('Введіть назву');
    } else {
      setNameError('');
    }
  }

  const validatePrice = (price) => {
    if (price <= 0) {
      setPriceError("Введіть ціну");
    } else {
      setPriceError('');
    }
  }

  const changeName = (e)=>{
    const name = e.target.value;
   setNewProducts((prev)=>({...prev, name }))
   validateName(name);
  }

  const changePrice = (e)=>{
    const price = e.target.value;
    setNewProducts((prev)=>({...prev, price }))
    validatePrice(price);
  }

  const addProducts = () => {
    if (nameError || priceError) {
      return;
    }
    let key = Math.random();
    setNewProducts((prev)=>({name: '', price: '', id: key}))
    setProducts((prev) => ([...prev, newProducts]))
  }

  const removeProduct = (id) => {
    const newList =  products.filter(product => product.id !== id);
    setProducts(newList);
  }

return (
<div className="wrapper">
  < Add newProducts={newProducts} addProducts={addProducts} nameError={nameError} priceError={priceError} changeName={changeName} changePrice={changePrice} />
  <div className="list">
    {products.map(product => <Product onRemove={removeProduct} key={product.id} id={product.id} name={product.name} price={`${product.price} $`} />)}
  </div>
</div> 
);
}

export default App;