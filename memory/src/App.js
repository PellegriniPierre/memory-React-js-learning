import React, { Component } from 'react'
import shuffle from 'lodash.shuffle'

import Card from './Card'
import GuessCount from './GuessCount'
import HallOfFame, { FAKE_HOF } from './HallOfFame'

const SIDE = 6
const SYMBOLS = '😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿'

class App extends Component {
  state= {
    cards: this.generateCards(),
    currentPair: [],
    guesses: 0,
    matchedCardIndices: [],
  }

  generateCards() {
    const result = []
    const size = SIDE * SIDE
    const candidates = shuffle(SYMBOLS)
    while (result.length < size) {
      const card = candidates.pop()
      result.push(card, card)
    }
    return shuffle(result)
  }

  // Arrow fx for binding
  handleCardClick = (card) => {
    console.log(card, this)
  }


render() {
  const { cards, guesses, matchedCardIndices } = this.state
  const won = matchedCardIndices.length === cards.length
  return (
    <div className="Memory">
      <GuessCount guesses={guesses} />
      {cards.map((card, index) => (
      <Card
        card={card}
        feedback="visible"
        key={index}
        onClick={this.handleCardClick}
      />
    ))}
    {won && <HallOfFame entries={FAKE_HOF} />}
  </div>

)
}
}

export default App
