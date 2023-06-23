import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App.js';

describe( 'TEST APP', () => {
  
  test('Main test', async () => {
   render(<App />);
   const user = userEvent.setup()
   const mainLink =  screen.getAllByText(/Main/i);
   await user.click(mainLink[0]);
   expect(screen.getByText(/We have a lot of posts/i)).toBeInTheDocument();
 })

 test('Posts test', async () => {
  render(<App />);
  const user = userEvent.setup()
  const postsLink =  screen.getAllByText(/Posts/i);
  await user.click(postsLink[0]);
  expect(screen.getByText(/View our posts/i)).toBeInTheDocument();
})

test('Login test', async () => {
  render(<App />);
  const user = userEvent.setup()
  const loginLink =  screen.getAllByText(/Login/i);
  await user.click(loginLink[0]);
  expect(screen.getByText(/Subscribe to our updates/i)).toBeInTheDocument();
})

}) 
 