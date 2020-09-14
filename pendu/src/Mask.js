import PropTypes from 'prop-types'
import React from 'react'

import './Mask.css'

const HIDDEN_SYMBOL = '_'

const Mask = ({ mask, feedback, index, onClick }) => (
    <div className={`mask ${feedback}`} onClick={() => onClick(index)}>
        <span className="letter">
            {feedback === 'hidden' ? HIDDEN_SYMBOL : mask}
        </span>
    </div>
)

Mask.propTypes = {
  mask: PropTypes.string.isRequired,
  feedback: PropTypes.oneOf([
    'hidden',
    'justMatched',
    'justMismatched',
    'visible',
  ]).isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Mask
