function arrayToObject(arr) {
  return arr.reduce(
    (obj, item) => ({
      ...obj,
      [item.id]: item,
    }),
    {},
  );
}

function filterTrack(track) {
  // here will get just the necesary data
  const filtered = track;

  if (track.artwork_url) {
    filtered.artwork_url = filtered.artwork_url.replace('-large', '-crop');
  }

  return filtered;
}

function filterUser(user) {
  // here will get just the necesary data
  const filtered = user;

  if (user.avatar_url) {
    filtered.avatar_url = filtered.avatar_url.replace('-large', '-crop');
  }

  return filtered;
}

function filterPlaylist(playlist) {
  const filtered = playlist;
  if (playlist.artwork_url) {
    filtered.artwork_url = filtered.artwork_url.replace('-large', '-crop');
    return filtered;
  }

  if (playlist.tracks[0]) {
    if (playlist.tracks[0].artwork_url) {
      filtered.artwork_url = playlist.tracks[0].artwork_url.replace(
        '-large',
        '-crop',
      );
    } else {
      filtered.artwork_url = null;
    }
  }

  return filtered;
}

function cleanSearch(query) {
  const cleaned = query.replace('?q=', '');
  return cleaned;
}

export default {
  arrayToObject,
  cleanSearch,
  filterTrack,
  filterUser,
  filterPlaylist,
};
