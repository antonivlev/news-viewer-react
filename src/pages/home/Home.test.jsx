import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
});

// it('renders fetched data ok', async () => {
//   const fakeRSSFeed = [{
//     title: story1,
//   }];

//   jest.spyOn( useEffect ?);

//   // Use the asynchronous version of act to apply resolved promises
//   await act(async () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<Home />, div);
//   });
// });
