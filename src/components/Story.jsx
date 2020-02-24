import React, { useEffect } from 'react';
import './Story.css';

// material components
import {
  Card, Button, Typography, CardContent, CardActions, IconButton,
} from '@material-ui/core';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

import firebase from '../database/firebase';


const Story = ({ story }) => {
  const [liked, setLiked] = React.useState(false);

  useEffect(() => {
    const storyID = story.link.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');

    const db = firebase.firestore();
    const dbStory = db.collection('liked-stories').doc(storyID);

    dbStory.get().then((doc) => {
      const dbStoryData = doc.data();
      if (dbStoryData) setLiked(dbStoryData.isLiked);
    });
  }, [story.link]);

  const setLikedAndWrite = () => {
    const storyID = story.link.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');

    const db = firebase.firestore();
    const dbStory = db.collection('liked-stories').doc(storyID);
    dbStory.set({
      isLiked: !liked,
    });

    setLiked(!liked);
  };

  return (
    <Card className="story-card">
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {story.pubDate}
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
          {story.title}
        </Typography>
        <Typography color="textSecondary">
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
        <IconButton onClick={setLikedAndWrite}>
          {liked ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Story;
