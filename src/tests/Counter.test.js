// import necessary react testing library helpers here
// import the Counter component here

import Counter from '../components/Counter';
import { render, fireEvent } from "@testing-library/react";


let counter;


beforeEach(() => {
  // Render the Counter component here

  counter = render(<Counter />);
 
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMsg = counter.getByText("Counter");
  expect(counterMsg).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCount = counter.getByTestId("count");
  expect(initialCount).toHaveTextContent("0");
  
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const increment = counter.getByText("+");
  const count = counter.getByTestId("count");

  // when the increment is clicked, the counter should increase from 0 to 1
  fireEvent.click(increment);
  expect(count).toHaveTextContent("1");

  // value increments again
  fireEvent.click(increment);
  expect(count).toHaveTextContent("2");
  
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decrement = counter.getByText("-");
  const count = counter.getByTestId("count");

  // same as increment testing but for decrementing now

  fireEvent.click(decrement);
  expect(count).toHaveTextContent("-1");

  fireEvent.click(decrement);
  expect(count).toHaveTextContent("-2");

});
