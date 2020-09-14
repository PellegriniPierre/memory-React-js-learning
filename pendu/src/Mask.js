import PropTypes from 'prop-types'
import React from 'react'

import './Mask.css'

const MASKED_LETTER = '_'

const Mask = ({ maskedLetter, feedback, index, onClick }) => (
    <div className={`mask ${feedback}`} onClick={() => onClick(index)}>
        <span className="letter">
            {feedback === 'hidden' ? MASKED_LETTER : maskedLetter}
        </span>
    </div>
)

class MaskedLetter extends Component{
  static defaultProps = {
    initialCollapsed: false,
  }

  static propTypes = {
    initialCollapsed: PropTypes.bool.isRequired,
    items: PropTypes.arrayOf(CoolItemPropType).isRequired
  }

  constructor(props) {
    super(props)
    this.state = { collapsed: props.initialCollapsed}
  }
}

class MaskedHangPart extends Component{

}

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
