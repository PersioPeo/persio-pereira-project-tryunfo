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
      hasTrunfo,
      isSaveButtonDisabled,
      onSaveButtonClick,
    } = this.props;
    // fim do requisito 2

    return (
      <form onSubmit={ (e) => e.preventDefault() }>
        <section>
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
        </section>
        <section>
          <label htmlFor="cardDescription">
            Descrição
            <textarea
              name="cardDescription"
              data-testid="description-input"
              onChange={ onInputChange }
              value={ cardDescription }
            />
          </label>
        </section>
        <section>
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
        </section>
        <section>
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
        </section>
        <section>
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
        </section>
        <section>
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
        </section>
        <section>
          <label htmlFor="cardRare">
            Raridade :
            <select
              name="cardRare"
              data-testid="rare-input"
              onChange={ onInputChange }
              value={ cardRare }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
        </section>
        <section>
          <label htmlFor="cardTrunfo">
            Super trunfo :
            {hasTrunfo
              ? <p>Você já tem um Super Trunfo em seu baralho</p>
              : (
                <input
                  name="cardTrunfo"
                  type="checkbox"
                  data-testid="trunfo-input"
                  onChange={ onInputChange }
                  checked={ cardTrunfo }
                  value="Super Trunfo"
                />)}
          </label>
        </section>
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
