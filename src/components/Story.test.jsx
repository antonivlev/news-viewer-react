import React from 'react';
import ReactDOM from 'react-dom';
import Story from './Story';


it('empty story renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Story />, div);
});
