import React from 'react'


export default function CFBanner({ contentfragment, label}) {

  return (
    <div>
    <div className='app-150x150-content'>
      <div className='banner-text'>
        <h1>{contentfragment.headline}</h1>
      </div>
    </div>
    <h3 className='cfheading'>{label}</h3>
    </div>
  );

}