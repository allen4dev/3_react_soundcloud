import v4 from 'uuid';

const fixtures = {
  getComment() {
    return {
      id: v4(),
      user_id: 1505645,
      track_id: 9740245,
      timestamp: 55593,
      body: 'best jehst! :D',
      user: {
        id: v4(),
        permalink: 'big-blues',
        username: 'four 2wenty',
      },
    };
  },

  getComments(n) {
    let comments = {};
    /* eslint-disable */
    while (n-- > 0) {
      /* eslint-enable */
      const newComments = this.getComment();
      comments = { ...comments, [newComments.id]: newComments };
    }

    return comments;
  },
};

export default fixtures;
