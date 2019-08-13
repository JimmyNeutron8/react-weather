import React from 'react';

const InputScreen = (props) => {
  return (
    <div>
      <h1 className="main-heading">React Weather</h1>
      <input
        className="button primary"
        type="button"
        value="USE CURRENT LOCATION"
        onClick={props.onClickGeolocate}
      />
      <input
        className="button"
        type="button"
        value="USE CITY NAME"
        onClick={props.onClickCity}
      />
    </div>
  );
}

export default InputScreen;
