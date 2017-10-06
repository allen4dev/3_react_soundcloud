import React, { Component } from 'react';
import SC from './../../helpers/soundcloud';

import CommentBar from './../../modules/comments/components/CommentBar';
import CommentList from './../../modules/comments/components/CommentList';
import User from './../../modules/users/components/User';

import './index.css';

class TrackDetail extends Component {
  componentDidMount() {
    SC.oEmbed('https://api.soundcloud.com/tracks/101329593', {
      element: document.getElementById('track-widget'),
      maxheight: 440,
      iframe: false,
    });
  }

  render() {
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
            <User />
            <div className="TrackDetail-description">
              <div className="TrackDetail-heading">
                <span className="TrackDetail-title">Fecha de lanzamiento</span>
                <span className="TrackDetail-text">15 Septiembre</span>
                <span className="TrackDetail-title">Linea de comunicacion</span>
                <span className="TrackDetail-text">
                  © 2017 Republic Records, a division of UMG Recording, Inc
                </span>
              </div>
              <CommentList items={new Array(12).fill({})} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default TrackDetail;
