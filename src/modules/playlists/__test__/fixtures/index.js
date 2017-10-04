import v4 from 'uuid';

const fixtures = {
  getPlaylist() {
    return {
      id: v4(),
      title: 'A random playlist name',
      created_at: new Date().toString(),
      permalink: 'a-random-playlist-name',
    };
  },

  getPlaylists(n) {
    let playlists = {};
    /* eslint-disable */
    while (n-- > 0) {
      /* eslint-enable */
      const newPlaylist = this.getPlaylist();
      playlists = { ...playlists, [newPlaylist.id]: newPlaylist };
    }

    return playlists;
  },
};

export default fixtures;
