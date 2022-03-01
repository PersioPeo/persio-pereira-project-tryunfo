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
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    // fim do requisito 2

    return (
      <form>
        <label htmlFor="name">
          Nome da Carta :
          <input
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
            type="text"
          />
        </label>
        <label htmlFor="id-descricao">
          Descrição
          <textarea
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
            id="id-descricao"
          />
        </label>
        <label htmlFor="id-attr1">
          Attr1
          <input
            type="number"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
            id="id-attr1"
          />
        </label>
        <label htmlFor="id-attr2">
          Attr2
          <input
            type="number"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
            id="id-attr2"
          />
        </label>
        <label htmlFor="id-attr3">
          Attr3
          <input
            type="number"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
            id="id-attr3"
          />
        </label>
        <label htmlFor="id-imagem">
          link da imagem
          <input
            type="text"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
            id="id-imagem"
          />
        </label>
        <select
          name="select"
          data-testid="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <label htmlFor="id-super-trunfo">
          <input
            type="checkbox"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            id="id-super-trunfo"
          />
          Super trunfo
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
