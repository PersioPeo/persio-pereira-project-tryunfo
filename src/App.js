import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      /* cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      */
    };
  }// fim do contructor

  // funções
 onInputChange = ({ target }) => {
   const { name } = target;
   const value = target.type === 'checkbox'
     ? target.checked
     : target.value;
   this.setState({
     [name]: value,
   }, () => this.validateSaveButton());
 } // fim onInputChange

 validateSaveButton = () => {
   this.setState((state) => {
     const limit = 90;
     const sumLimit = 210;
     return {
       isSaveButtonDisabled:
      !(state.cardName !== '' && state.cardDescription !== '' && state.cardImage !== ''
      && state.cardAttr1 <= limit && state.cardAttr2 <= limit
      && state.cardAttr3 <= limit
      && ((Number(state.cardAttr1) + Number(state.cardAttr2) + Number(state.cardAttr3))
        <= sumLimit)
      && state.cardAttr1 >= 0 && state.cardAttr2 >= 0 && state.cardAttr3 >= 0),
     };
   });
 }// fim da validateSaveButton

  onSaveButtonClick = () => {
    this.setState((state) => (
      {
        cards: [...state.cards, {
          cardName: state.cardName,
          cardDescription: state.cardDescription,
          cardAttr1: state.cardAttr1,
          cardAttr2: state.cardAttr2,
          cardAttr3: state.cardAttr3,
          cardImage: state.cardImage,
          cardRare: state.cardRare,
          cardTrunfo: state.cardTrunfo,
        }],
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        hasTrunfo: (!state.hasTrunfo && state.cardTrunfo) || state.hasTrunfo,
        isSaveButtonDisabled: true,
      }
    ));
  } // fim da onSaveButtonClick

  // fim das funções
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled } = this.state;
    const { onInputChange, onSaveButtonClick } = this;
    return (
      <main>
        <h1>Trunfo</h1>
        <Form
          onInputChange={ onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
        />
      </main>
    );
  }
}// fim da class
export default App;
