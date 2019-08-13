import React from 'react';

const ErrorScreen = (props) => {
  return (
    <div>
      <h1 className="main-heading">Oops!</h1>
      <h1>Something went wrong.</h1>
      <input
        class="button primary"
        type="button"
        value="GO BACK"
        onClick={props.onClick}
      />
    </div>
  );
};

export default ErrorScreen;
