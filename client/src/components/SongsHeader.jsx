import PropTypes from 'prop-types';
import React from 'react';
import SongsHeaderGenres from '../components/SongsHeaderGenres';
import SongsHeaderTimes from '../components/SongsHeaderTimes';

const propTypes = {
  genre: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  navigateTo: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  showLikes: PropTypes.bool.isRequired,
  showStream: PropTypes.bool.isRequired,
  sticky: PropTypes.bool.isRequired,
  time: PropTypes.string.isRequired,
  times: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const SongsHeader = ({
  genre,
  genres,
  navigateTo,
  search,
  showLikes,
  showStream,
  sticky,
  time,
  times,
}) => {
  if (showLikes || showStream) {
    return null;
  }

  return (
    <div className={`songs-header ${sticky ? 'songs-header--sticky' : ''}`}>
      <div className="songs-header__inner">
        <div className="songs-header__sections container">
          <SongsHeaderGenres
            genre={genre}
            genres={genres}
            navigateTo={navigateTo}
            time={time}
          />
          <SongsHeaderTimes
            genre={genre}
            navigateTo={navigateTo}
            search={search}
            time={time}
            times={times}
          />
        </div>
      </div>
    </div>
  );
};

SongsHeader.propTypes = propTypes;

export default SongsHeader;
