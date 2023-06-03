import React, { useState, useEffect } from "react";

  function App () {
  // const [coffe, setCoffe] = useState(0);
  // const [sugar, setSugar] = useState(0);

  const [products, setProducts] = useState({
    coffe: 0,
    sugar: 0
  })

// const addCoffe = () => setCoffe(coffe + 1);
// const addSugar = () => setSugar(sugar + 1);

const addCoffe = () => setProducts((prevState) => {
  return {
    ...prevState,
    coffe: prevState.coffe + 1
  }
})

const addSugar = () => setProducts((prevState) => {
  return {
    ...prevState,
    sugar: prevState.sugar + 1
  }
})

const removeCoffe = () => setProducts((prevState) => {
  if (prevState.coffe > 0) {
    return {
      ...prevState,
      coffe: prevState.coffe - 1
    }
  } else {
    return prevState;
  }
})
const removeSugar = () => setProducts((prevState) => {
  if (prevState.sugar > 0) {
    return {
      ...prevState,
      sugar: prevState.sugar - 1 
    }
  } else {
    return prevState;
  }
}) 

const save = () => {
  localStorage.setItem('coffe', products.coffe);
  localStorage.setItem('sugar', products.sugar);
}

const clear = () => {
    localStorage.removeItem('coffe');
    localStorage.removeItem('sugar');
    setProducts({
      coffe: 0,
      sugar: 0
    })
}

useEffect(()=>{
  if (localStorage.getItem('coffe')){
    setProducts(prevState => ({
      ...prevState,
      coffe: +localStorage.getItem('coffe'),
      sugar: +localStorage.getItem('sugar')
    }));
  }
}, []);

return (
  <div className="wrapper">
    <div className="list">
      <h1>Product list</h1>
      <div className='product'>
      <span>{`Coffe: ${products.coffe}`}</span>
      <button onClick={addCoffe}>Add</button>
      <button onClick={removeCoffe}>Remove</button>
      </div>
      <div className='product'>
      <span>{`Sugar: ${products.sugar}`}</span>
        <button onClick={addSugar}>Add</button>
        <button onClick={removeSugar}>Remove</button>
      </div>
      <div className='save'>
          <button onClick={save}>SAVE</button>
          <button onClick={clear}>CLEAR</button>
        </div>
    </div>
  </div> 
  );
}

export default App;
