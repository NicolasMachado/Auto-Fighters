import React from 'react';

export default function SvgBarChange(props) {
  return (
    <svg width={props.barWidth + '%'} height="100%">
      <rect width="100%" height="100%" style={{
        'fill': 'red'
      }} />
    </svg>
  );
}
