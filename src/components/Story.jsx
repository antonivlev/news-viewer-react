import React from 'react';

const Story = ({ story }) => (
  <div>
    <h1>{story.title}</h1>
    <div>{story.content}</div>
  </div>
);

export default Story;
