// src/components/participants.test.js
import { render, screen } from '@testing-library/react'
import { unmountComponentAtNode } from 'react-dom';
import Theme from "../../../utils/providers/theme";
import Context from '../../../utils/providers/context'
import { Lifes } from './lifes';


describe('Lifes', () => {
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

  it('should start with 5 lifes', () => {
    render(
      <Context.Provider>
        <Theme>
          <Lifes />
        </Theme>
      </Context.Provider>
    )
    expect(screen.getAllByTestId('heart_filled').length).toEqual(5)
  })
})
