import React from 'react'

import PropTypes from 'prop-types'

import './GuessCount.css'

const GuessCount = () => <div className="guesses" />

GuessCount.propTypes = {
    guesses : PropTypes.number.isRequired
}

export default GuessCount
