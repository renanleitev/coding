import React from 'react'
import { PropTypes } from 'prop-types';
import GlobalStyle from "./styles/GlobalStyle"

const Counter = ({ value, onIncrement, onDecrement }) =>
      <div>
        <GlobalStyle/>
        <button onClick={onIncrement} className='increment'>
          Increment
        </button>
        {' '}
        <button onClick={onDecrement} className='decrement'>
          Decrement
        </button>
        <hr />
        <div>
          Clicked: {value} times
        </div>
      </div>

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter
