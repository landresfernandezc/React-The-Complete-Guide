import { useSelector,useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import {INCREMENT,DECREMENT,INCREASE,TOGGLE} from '../store/index';
import  {counterActions } from '../store/counter';
const Counter = () => {
  const counter = useSelector(state => state.counter.counter)
  const showCounter = useSelector(state => state.counter.showCounter)
  const dispatchCounter= useDispatch()
  const incrementHandler=()=>{
   // dispatchCounter({type:INCREMENT})
   dispatchCounter(counterActions.increment())
  }
  const decrementHandler=()=>{
    //dispatchCounter({type:DECREMENT})

   dispatchCounter(counterActions.decrement())
  }
  const increaseHandler=()=>{
   /// dispatchCounter({type:INCREASE,amount:5})
   dispatchCounter(counterActions.increase(10))
  }
  const toggleCounterHandler=()=>{
   // dispatchCounter({type:TOGGLE})
   dispatchCounter(counterActions.toggleCounter())
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>INCREMENT</button>

        <button onClick={increaseHandler}>INCREASE by 5</button>
        <button onClick={decrementHandler}>DECREMENT</button>

      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};



export default Counter;



// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//   }
// };
