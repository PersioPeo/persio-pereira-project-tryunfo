import React from 'react';

class Form extends React.Component {
  render() {
    /* eslint-disable max-len */
    // eslint-disable-next-line max-len
    return (
      <form>
        <label htmlFor="name">
          <input type="text" data-testid="name-input" id="name" />
        </label>
        <label htmlFor="desc">
          <input type="textarea" data-testid="description-input" id="desc" />
        </label>
        <label htmlFor="id-attr1">
          <input type="number" data-testid="attr1-input" id="id-attr1" />
        </label>
        <label htmlFor="id-attr2">
          <input type="number" data-testid="attr2-input" id="id-attr2" />
        </label>
        <label htmlFor="id-attr3">
          <input type="number" data-testid="attr3-input" id="id-attr3" />
        </label>
        <label htmlFor="id-imagem">
          <input type="text" data-testid="image-input" id="id-imagem" />
        </label>
        <label htmlFor="id-raridade">
          <select data-testid="rare-input" id="id-raridade">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="id-check">
          <input type="checkbox" data-testid="trunfo-input" id="id-check" />
        </label>
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}
export default Form;
