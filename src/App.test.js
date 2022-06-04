import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Counter Testing', () => {
  beforeEach(() => {
    render(<App />)

  })
  test('renders the title of counter', () => {
    
    expect(screen.getByRole('heading', {name:'This is counter app', level: 6})).toHaveTextContent('This is counter app')
  });
  test("render a button with text of `Increment`", () => {
  
  expect(screen.getByLabelText('button-add').textContent).toBe('Increment')
  })
  test("render the initial value of state in a div", () => {
  expect(screen.getByLabelText('counter-value').textContent).toBe("0")
  });
  test('render the click event of increment button and increment counter value ', () => { 
    const testingWhatever  = async () => {
      await userEvent.click(screen.getByLabelText('button-add'))
      expect(screen.getByLabelText('counter-value').textContent).toBe('1')
    }
  });
    test('render the click event of decrement button and increment counter value ', () => { 
    const testingWhatever  = async () => {
      await userEvent.click(screen.getByLabelText('button-add'))
      expect(screen.getByLabelText('counter-value').textContent).toBe('1')
      await userEvent.click(screen.getByLabelText('button-dec'))
      expect(screen.getByLabelText('counter-value').textContent).toBe('0')
    }
  });
})

 