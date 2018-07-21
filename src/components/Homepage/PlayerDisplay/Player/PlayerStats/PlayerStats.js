import React from 'react';

const playerStats = (props) => {
  return (
    <div>
      props.stats.map(stat => {
        <div>
          <strong>stat:</strong><span>stat.value</span>
        </div>
      })
    </div>
  );
}

export default playerStats;