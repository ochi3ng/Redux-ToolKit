// import React, { useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, AddTocart,incrementByAmount} from './counterSlice'

// export function Counter() {
 
//   const count = useSelector((state) => state.counter.value)
//   const dispatch = useDispatch()
// const[amount,setAmount]=useState()
// function incrementValue(e){
//    setAmount(parseInt(e.target.value))
    
// console.log(e.target.value)
// }
// function incrementByValue(e){
//     dispatch(incrementByAmount(amount))
//     setAmount(0)
// }
//   return (
//     <div>
//       <div>
//         <input onChange={incrementValue} value={amount}/>


//         <span>{count}</span>

//       </div>
//       <button onClick={incrementByValue}>submit</button>

//       <button
      
//           onClick={() => dispatch(AddTocart())}
//         >
//          AddTocart 
//         </button>
//     </div>
//   )
// }
