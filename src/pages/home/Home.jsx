import React, { useEffect, useState } from 'react';
import './Home.css';
import Parser from 'rss-parser';

import Story from '../../components/Story';

export default () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const parser = new Parser();
    parser.parseURL('/news/rss.xml?edition=uk')
      .then((feed) => {
        console.log(feed);
        setStories(feed.items);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="stories-column">
      {stories.map((s) => <Story key={s.guid} story={s} />)}
    </div>
  );
};
