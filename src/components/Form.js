import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    /* eslint-disable max-len */
    // eslint-disable-next-line max-len
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <label htmlFor="name">
          Nome:
          <input
            type="text"
            data-testid="name-input"
            id="name"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="desc">
          Descrição :
          <textarea
            type="textarea"
            data-testid="description-input"
            id="desc"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="id-attr1">
          Atributo 01 :
          <input
            type="number"
            data-testid="attr1-input"
            id="id-attr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="id-attr2">
          Atributo 02 :
          <input
            type="number"
            data-testid="attr2-input"
            id="id-attr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="id-attr3">
          Atributo 03 :
          <input
            type="number"
            data-testid="attr3-input"
            id="id-attr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="id-imagem">
          Url da Imagem :
          <input
            type="text"
            data-testid="image-input"
            id="id-imagem"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="raridade">
          Raridade da Carta :
          <select
            data-testid="rare-input"
            name="raridade"
            id="raridade"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="id-check">
          Super Trunfo :
          <input
            type="checkbox"
            data-testid="trunfo-input"
            id="id-check"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
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
