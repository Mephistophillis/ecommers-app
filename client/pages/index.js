import { useSelector, useDispatch } from 'react-redux'
import {
  incrementCount,
  decrementCount,
  resetCount,
} from '../src/store/actions/counter.action'

export default () => {
  const count = useSelector(({ counter }) => counter)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Counter: {count}</h1>

      <button onClick={() => dispatch(incrementCount())}>+1</button>
      <button onClick={() => dispatch(decrementCount())}>-1</button>
      <button onClick={() => dispatch(resetCount())}>Reset</button>
    </div>
  )
}
