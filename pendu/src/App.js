import React, { Component } from 'react'

const VISUAL_PAUSE_MSECS = 750



class App extends React.Component {
  state = {
    // Definir ici le status de l'application.
  }

  render() {
    return (
      <div className="Hangman">
        <div className="MaskedLetter">
          {/* To do  */} MASKED LETTER HERE
        </div>
        <div className="MaskedPart">
          {/* To do */} PARTS OF THE HANGMAN
        </div>
        <div className="Keyboard">
          {/* To do */} KEYBOARD HERE : A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
        </div>
        <div className="Result">
          {/* To do */} RESULT
        </div>

      </div>
    )
  }

}

export default App