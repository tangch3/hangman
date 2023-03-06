import React, {Component} from 'react';
import { randomWord } from './RandomWord';
import state1 from './hangmandrawings/state1.jpg';
import state2 from './hangmandrawings/state2.jpg';
import state3 from './hangmandrawings/state3.jpg';
import state4 from './hangmandrawings/state4.jpg';
import state5 from './hangmandrawings/state5.jpg';
import state6 from './hangmandrawings/state6.jpg';
import state7 from './hangmandrawings/state7.jpg';
import state8 from './hangmandrawings/state8.jpg';
import state9 from './hangmandrawings/state9.jpg';
import state10 from './hangmandrawings/state10.jpg';
import state11 from './hangmandrawings/state11.jpg';

class Hangman extends Component {

    

    static defaultProps = {
        maxWrong: 11,
        images: [
            state1,
            state2,
            state3,
            state4,
            state5,
            state6,
            state7,
            state8,
            state9,
            state10,
            state11,
        ]
    };

    
    constructor(props) {
        super(props);
        this.state = {
          noOfWrong: 0,
          guessed: new Set(),
          answer: randomWord(),
        };
        this.handleGuess = this.handleGuess.bind(this);
        this.reset = this.reset.bind(this);
      }

      
    
      reset() {
        this.setState({
          noOfWrong: 0,
          guessed: new Set(),
          answer: randomWord(),
        });
      }
    
      guessedWord() {
        return this.state.answer
          .split("")
          .map((letter) => (this.state.guessed.has(letter) ? letter : "  __  "));
      }
    
      handleGuess(e) {
        let letter = e.target.value;
        this.setState((s) => ({
          guessed: s.guessed.add(letter),
          noOfWrong: s.noOfWrong + (s.answer.includes(letter) ? 0 : 1),
        }));
      }
    
      letterKeys() {
        return "abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
          <button
            key={letter}
            value={letter}
            onClick={this.handleGuess}
            disabled={this.state.guessed.has(letter)}
          >
            {letter}
          </button>
        ));
      }
    
      render() {
        const gameOver = this.state.noOfWrong >= this.props.maxWrong;
        const isWinner = this.guessedWord().join("") === this.state.answer;
        let gameState = this.letterKeys();
        if (isWinner) gameState = "You won";
        if (gameOver) gameState = "You're an idiot";
        let restart = gameOver || isWinner;
        return (
          <div>
            <h1>Hangman</h1>
            <img src={this.props.images[this.state.noOfWrong]} alt="HangMan" />
            <p>
              Guesses left: {this.props.maxWrong - this.state.noOfWrong}/{" "}
              {this.props.maxWrong}
            </p>
            <p>
              {!gameOver ? this.guessedWord() : this.state.answer}
            </p>
            <p>{gameState}</p>
            {restart && (
              <button id="reset" onClick={this.reset}>
                Restart
              </button>
            )}

            <p>Rules of hangman: If you don't know how to play then have you been living under a rock? Just guess the word by guessing the letters. You have 11 tries. Don't waste my time asking more questions.</p>
          </div>
        );
      }
    }
    
    export default Hangman;