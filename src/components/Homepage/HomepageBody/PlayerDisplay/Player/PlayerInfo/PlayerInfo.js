import React from 'react';

const playerInfo = (props) => {
  return (
    <div>
      <strong>{props.title}:</strong><span>{props.info}</span>
    </div>
  );
}

export default playerInfo;