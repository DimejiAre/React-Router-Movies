import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      {/* <SavedList list={savedList} /> */}
      <Route path='/' render={props => {
        return <SavedList {...props} list={savedList} />
      }}/>
      <Route exact path='/' component={MovieList}/>
      {/* <Route path='/movies/:id' component={Movie}/> */}
      <Route path='/movies/:id' render={props => {
        return <Movie {...props} addToSavedList={addToSavedList} />
      }}/>
    </div>
  );
};

export default App;
