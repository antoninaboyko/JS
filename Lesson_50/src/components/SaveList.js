import React, { useEffect }  from 'react'
import {useDispatch, useSelector } from 'react-redux';

const SaveList = () => {
  const dispatchFunc = useDispatch();

  const isLoggedIn = useSelector((state) => state.isLoggedIn)
  const coffee = useSelector((state) => state.coffee);
  const sugar = useSelector((state) => state.sugar);

  const products = {
    coffee: coffee,
    sugar: sugar,
  };

  useEffect(()=>{
    if (localStorage.getItem('coffee')){
      dispatchFunc({type: 'save', setCoffee: localStorage.getItem('coffee'), setSugar: localStorage.getItem('sugar')});
    }
  },[]);


  const save = () => {
    localStorage.setItem('coffee', products.coffee);
    localStorage.setItem('sugar', products.sugar);
  };

  const clear = () => {
    localStorage.removeItem('coffee');
    localStorage.removeItem('sugar');
    dispatchFunc({type: 'clear'});
  };

  return (
    <div className='save'>
          {!isLoggedIn && <p>You must be logged in to save the list.</p>}
          {isLoggedIn && <button onClick={save} >SAVE</button>}
          {isLoggedIn && <button onClick={clear} >CLEAR</button>}
      </div>
  )
}

export default SaveList