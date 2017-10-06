import React, { Component } from 'react';
import { arrayOf, object, shape, string } from 'prop-types';
import { connect } from 'react-redux';
import SC from './../../helpers/soundcloud';

import CommentBar from './../../modules/comments/components/CommentBar';
import CommentList from './../../modules/comments/components/CommentList';
import User from './../../modules/users/components/User';

import tracks from './../../modules/tracks';

import './index.css';

class TrackDetail extends Component {
  state = {
    loading: true,
  };

  async componentDidMount() {
    const { match, fetchTrack, fetchTrackComments } = this.props;
    let { track } = this.props;

    if (!track) {
      this.setState({ loading: true }, async () => {});
      track = await fetchTrack(match.params.id);
      await fetchTrackComments(match.params.id);
    }

    this.setState({ loading: false }, () => {
      SC.oEmbed(track.uri, {
        element: document.getElementById('track-widget'),
        maxheight: 440,
        iframe: false,
      });
    });
  }

  renderComments() {
    if (this.props.comments.length === 0) {
      return <h2>No comments for this track</h2>;
    }

    return <CommentList items={this.props.comments} />;
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    const { track } = this.props;
    const stats = {
      playbackCount: track.playback_count,
      favoritingsCount: track.favoritings_count,
    };

    return (
      <section className="TrackDetail">
        <div className="TrackDetail-header">
          <div id="track-widget" />
        </div>

        <div className="TrackDetail-content">
          <CommentBar
            placeholder="Escribe un comentario"
            value=""
            handleChange={() => console.log('yay')}
            handleSubmit={() => console.log('hey')}
          />

          <div className="TrackDetail-info">
            <User user={track.user} stats={stats} />
            <div className="TrackDetail-description">
              <div className="TrackDetail-heading">
                <span className="TrackDetail-title">Fecha de lanzamiento</span>
                <span className="TrackDetail-text">
                  {new Date(track.created_at).getTime()}
                </span>
                <span className="TrackDetail-title">Linea de comunicacion</span>
                <span className="TrackDetail-text">
                  © 2017 Republic Records, a division of UMG Recording, Inc
                </span>
              </div>
              {this.renderComments()}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

TrackDetail.propTypes = {
  track: shape({
    created_at: string,
  }).isRequired,
  comments: arrayOf(object),
};

TrackDetail.defaultProps = {
  comments: [],
};

function mapStateToProps(state, { match }) {
  const track = state.tracks.entities[match.params.id];
  const commentIds = state.tracks.comments[match.params.id] || [];

  return {
    track,
    comments: commentIds.map(id => state.comments.entities[id]),
  };
}

export default connect(mapStateToProps, tracks.actions)(TrackDetail);
