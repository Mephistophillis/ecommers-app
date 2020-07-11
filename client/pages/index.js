import { useSelector, useDispatch } from 'react-redux'
import {
  incrementCount,
  decrementCount,
  resetCount,
} from '../src/store/actions/counter.action'

import styled from 'styled-components'
import { down } from 'styled-breakpoints'

export default () => {
  const count = useSelector(({ counter }) => counter)
  const dispatch = useDispatch()

  return (
    <Wrapper>
      <h1>Counter: {count}</h1>

      <button onClick={() => dispatch(incrementCount())}>+1</button>
      <button onClick={() => dispatch(decrementCount())}>-1</button>
      <button onClick={() => dispatch(resetCount())}>Reset</button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.success};
  ${down('sm')} {
    background-color: ${({ theme }) => theme.color.light};
  }
`
