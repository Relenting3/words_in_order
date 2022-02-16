// src/components/participants.test.js
import { render, screen } from '@testing-library/react'
import { unmountComponentAtNode } from 'react-dom';
import { Description } from './description'
import Theme from "../../utils/providers/theme";


describe('Description component', () => {
  let container = null
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  })

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  })

  it('render with one p tag and one div tag', () => {
    render(<Theme><Description /></Theme>)
    let tags = []
    for(const values of screen.getAllByTestId('description')[0].childNodes[0].childNodes){
      tags.push(
        values.nodeName
      )
    }
    expect(tags).toEqual(['P','DIV'])
  })
})
