import React from 'react';

const CityScreen = (props) => {
  return (
    <div>
      <h1>City Name</h1>
      <form onSubmit={props.onSubmit}>
        <input type="text" placeholder="Start typing city..." onChange={props.onChange} />
        <input class="button primary" type="submit" value="GO" />
      </form>
    </div>
  );
};

export default CityScreen;
