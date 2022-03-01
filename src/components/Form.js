import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    // requisito 2
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      onInputChange,
      /* hasTrunfo,
      isSaveButtonDisabled,
      onSaveButtonClick, */
    } = this.props;
    // fim do requisito 2

    return (
      <form onSubmit={ (e) => e.preventDefault() }>
        <label htmlFor="cardName">
          Nome da Carta :
          <input
            name="cardName"
            data-testid="name-input"
            onChange={ onInputChange }
            value={ cardName }
            type="text"
          />
        </label>
        <label htmlFor="cardDescription">
          Descrição
          <textarea
            name="cardDescription"
            data-testid="description-input"
            onChange={ onInputChange }
            value={ cardDescription }
          />
        </label>
        <label htmlFor="cardAttr1">
          Attr1
          <input
            name="cardAttr1"
            type="number"
            data-testid="attr1-input"
            onChange={ onInputChange }
            value={ cardAttr1 }
          />
        </label>
        <label htmlFor="cardAttr2">
          Attr2
          <input
            name="cardAttr2"
            type="number"
            data-testid="attr2-input"
            onChange={ onInputChange }
            value={ cardAttr2 }
          />
        </label>
        <label htmlFor="cardAttr3">
          Attr3
          <input
            name="cardAttr3"
            type="number"
            data-testid="attr3-input"
            onChange={ onInputChange }
            value={ cardAttr3 }
          />
        </label>
        <label htmlFor="cardImage">
          link da imagem
          <input
            name="cardImage"
            type="text"
            data-testid="image-input"
            onChange={ onInputChange }
            value={ cardImage }
          />
        </label>
        <select
          name="select"
          data-testid="rare-input"
          onChange={ onInputChange }
          value={ cardRare }
        >
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <label htmlFor="cardTrunfo">
          <input
            name="cardTrunfo"
            type="checkbox"
            data-testid="trunfo-input"
            onChange={ onInputChange }
            value={ cardTrunfo }
          />
          Super trunfo
        </label>
        <button
          type="submit"
          data-testid="save-button"

        >
          Salvar
        </button>

      </form>
    );
  }
}
Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImagestring: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfoum: PropTypes.bool,
}.isRequired;
export default Form;
