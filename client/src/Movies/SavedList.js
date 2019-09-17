import React from 'react';
import { NavLink } from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <NavLink activeStyle={{color: 'red'}} to={`/movies/${movie.id}`}>
        <span className="saved-movie">{movie.title}</span>
      </NavLink>
    ))}
    <div className="home-button" onClick={e => props.history.push('/')}>Home</div>
  </div>
);

export default SavedList;
