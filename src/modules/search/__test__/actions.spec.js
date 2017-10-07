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

  it('should create an action to add a next tracks results', () => {
    const trackIds = ['track1', 'track2', 'track3'];

    const expectedAction = {
      type: actionTypes.SET_NEXT_TRACKS,
      payload: trackIds,
    };

    expect(actions.setNextTracks(trackIds)).toEqual(expectedAction);
  });

  it('should create an action to set the tracks next page', () => {
    const nextPage = 'https://example.test/tracks/next-page';

    const expectedAction = {
      type: actionTypes.SET_TRACKS_NEXT_PAGE,
      payload: nextPage,
    };

    expect(actions.setTracksNextPage(nextPage)).toEqual(expectedAction);
  });

  it('should create an action to add playlist ids', () => {
    const playlistIds = ['playlist1', 'playlist2', 'playlist3'];

    const expectedAction = {
      type: actionTypes.SET_PLAYLISTS,
      payload: playlistIds,
    };

    expect(actions.setPlaylists(playlistIds)).toEqual(expectedAction);
  });

  it('should create an action to set the playlists next page', () => {
    const nextPage = 'https://example.test/playlists/next-page';

    const expectedAction = {
      type: actionTypes.SET_PLAYLISTS_NEXT_PAGE,
      payload: nextPage,
    };

    expect(actions.setPlaylistsNextPage(nextPage)).toEqual(expectedAction);
  });

  it('should create an action to add a next playlists results', () => {
    const playlistIds = ['playlist1', 'playlist2', 'playlist3'];

    const expectedAction = {
      type: actionTypes.SET_NEXT_PLAYLISTS,
      payload: playlistIds,
    };

    expect(actions.setNextPlaylists(playlistIds)).toEqual(expectedAction);
  });

  it('should create an action to add user ids', () => {
    const usersIds = ['user1', 'user2', 'user3'];

    const expectedAction = {
      type: actionTypes.SET_USERS,
      payload: usersIds,
    };

    expect(actions.setUsers(usersIds)).toEqual(expectedAction);
  });

  it('should create an action to set the users next page', () => {
    const nextPage = 'https://example.test/users/next-page';

    const expectedAction = {
      type: actionTypes.SET_USERS_NEXT_PAGE,
      payload: nextPage,
    };

    expect(actions.setUsersNextPage(nextPage)).toEqual(expectedAction);
  });

  it('should create an action to add a next users results', () => {
    const userIds = ['user1', 'user2', 'user3'];

    const expectedAction = {
      type: actionTypes.SET_NEXT_USERS,
      payload: userIds,
    };

    expect(actions.setNextUsers(userIds)).toEqual(expectedAction);
  });
});
