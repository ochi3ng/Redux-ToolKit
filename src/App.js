import { useEffect } from 'react';
import './Component/Product.css';
import { useDispatch,useSelector} from 'react-redux';
import  {getProducts} from './Component/counterSlice';
// import { Counter } from './Component/Counter';
// import Product from './Component/Product';

import Products from './Component/Product';


function App() {

  const {posts,loading}=useSelector((state)=>state.products)

  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getProducts());
    // console.log(Products)
  }, [])
  return (
    <div  className='header'>
{loading &&    <h1>loading</h1>}
   {!loading && posts.map((item)=><Products title={item.title} image={item.image} price={item.price}/>)}
    </div>
   
  );
}

export default App;
