// @flow

import v4 from 'uuid';

const fixtures = {
  getTrack() {
    return {
      id: v4(),
      created_at: new Date().toString(),
      title: 'Track title',
      duration: 123,
      sharing: 'public',
      uri: `https://api.soundcloud.com/tracks/${v4()}`,
      user_id: v4(),
      artwork_url: `https://i1.sndcdn.com/artworks-${v4()}.jpg`,
      comment_count: 456,
      description: 'An awesome track',
      genre: 'Anime',
      playback_count: 789,
      repost_count: 101112,
      user: {
        avatar_url: `https://i1.sndcdn.com/avatars-${v4()}-large.jpg`,
        id: v4(),
        uri: `https://api.soundcloud.com/users/${v4()}`,
        username: 'allen4dev',
      },
      likes_count: 131415,
    };
  },

  getTracks(n: number) {
    let tracks = {};
    /* eslint-disable */
    while (n-- > 0) {
      /* eslint-enable */
      const newTrack = this.getTrack();
      tracks = { ...tracks, [newTrack.id]: newTrack };
    }

    return tracks;
  },
};

export default fixtures;
