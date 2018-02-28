import React from 'react';

export default function SvgBarChange(props) {

  let color, healDecal;
  if (props.type === 'heal') {
    color = 'white';
    healDecal = props.barWidth;
  } else {
    color = 'red';
    healDecal = 0;
  }

  let marginLeftValue = props.side === 'ally-bar' ? (props.decal - healDecal) + '%' : 0;
  let marginRightValue = props.side === 'enemy-bar' ? (props.decal - healDecal) + '%' : 0;

  return (
    <svg width={props.barWidth + '%'} height="100%" style={{
      'marginLeft' : marginLeftValue,
      'marginRight' : marginRightValue
    }} >

      <rect width="100%" height="100%" style={{
        'fill': color
      }} />

    </svg>
  );
}
