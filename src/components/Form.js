import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>

        <input type="text" data-testid="name-input" id="id-nome" />
        <input type="textarea" data-testid="description-input" id="id-descricao" />
        <input type="number" data-testid="attr1-input" id="id-attr1" />
        <input type="number" data-testid="attr2-input" id="id-attr2" />
        <input type="number" data-testid="attr3-input" id="id-attr3" />
        <input type="text" data-testid="image-input" id="id-imagem" />
        <select data-testid="rare-input">
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito-raro">muito raro</option>
        </select>
        <input type="checkbox" data-testid="trunfo-input" id="id-check" />
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}
export default Form;
