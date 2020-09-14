import PropTypes from 'prop-types'
import React from 'react'

import './Result.css'

import Keyboard from './Keyboard'
import Mask from './Mask'


const Result = ({ key, feedback, index, onClick }) => (
  <div className={`key ${feedback}`} onClick={() => onClick(index)}>
    <span className="symbol">
      {feedback === 'hidden' ? MASKED_LETTER : maskedletter}
    </span>
  </div>
)

Result.propTypes = {
  result: PropTypes.string.isRequired,
  feedback: PropTypes.oneOf([
    'hidden',
    'justMatched',
    'justMismatched',
    'visible',
  ]).isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Result
