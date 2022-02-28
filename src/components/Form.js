import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
      <label htmlFor="id-nome">Nome</label>
        <input type="text" data-testid="name-input" id="id-nome" />
        <label htmlFor="id-decricao" />
        <input type="textarea" data-testid="description-input" id="id-descricao" />
        <label htmlFor="id-attr1">Attr01</label>
        <input type="number" data-testid="attr1-input" id="id-attr1" />
        <label htmlFor="id-attr2">Attr02</label>
        <input type="number" data-testid="attr2-input" id="id-attr2" />
        <label htmlFor="id-attr3">Attr03</label>
        <input type="number" data-testid="attr3-input" id="id-attr3" />
        <labe htmlFor="id-imagem">Imagem</labe>
        <input type="text" data-testid="image-input" id="id-imagem" />
        <label>Raridade</label>
        <select data-testid="rare-input">
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito-raro">muito raro</option>
        </select>
        <input type="checkbox" data-testid="trunfo-input" id="id-check" />
        <label>Super Trybe Trunfo</label>
        <button data-testid="save-button">Salvar</button>
      </form>
    );
  }
}
export default Form;
