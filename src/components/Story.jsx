import React from 'react';
import './Story.css';

import {
  Card, Button, Typography, CardContent, CardActions, IconButton,
} from '@material-ui/core';

import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const Story = ({ story }) => {
  const [liked, setLiked] = React.useState(false);
  return (
    <Card className="story-card">
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {story.pubDate}
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
          {story.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {story.content}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          className="read-more-button"
          size="small"
          color="primary"
          onClick={() => {
            const win = window.open(story.link, '_blank');
            win.focus();
          }}
        >
          Read more
        </Button>
        <IconButton onClick={() => setLiked(!liked)}>
          {liked ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Story;
