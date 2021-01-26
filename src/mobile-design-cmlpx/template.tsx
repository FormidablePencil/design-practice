import './index.scoped.sass';

import React from 'react';

import Balance from './balance';
import Portfolio from './portfolio';
import Profile from './profile';
import Trending from './trending';

function template() {
  return (
    <div className="container">
      <Profile />
      <Balance />
      <Portfolio />
      <Trending />
    </div>
  )
}

export default template
