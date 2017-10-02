import * as actionTypes from './../actionTypes';
import * as actions from './../actions';

describe('Action Creators', () => {
  it('should create an action to set the query', () => {
    const query = 'some search query';

    const expectedAction = {
      type: actionTypes.SET_QUERY,
      payload: query,
    };

    expect(actions.setQuery(query)).toEqual(expectedAction);
  });

  it('should create an action to add track ids', () => {
    const trackIds = ['track1', 'track2', 'track3'];

    const expectedAction = {
      type: actionTypes.SET_TRACKS,
      payload: trackIds,
    };

    expect(actions.setTracks(trackIds)).toEqual(expectedAction);
  });

  it('should create an action to add playlist ids', () => {
    const playlistIds = ['playlist1', 'playlist2', 'playlist3'];

    const expectedAction = {
      type: actionTypes.SET_PLAYLISTS,
      payload: playlistIds,
    };

    expect(actions.setPlaylists(playlistIds)).toEqual(expectedAction);
  });

  it('should create an action to add users', () => {
    const usersIds = ['user1', 'user2', 'user3'];

    const expectedAction = {
      type: actionTypes.SET_USERS,
      payload: usersIds,
    };

    expect(actions.setUsers(usersIds)).toEqual(expectedAction);
  });
});
