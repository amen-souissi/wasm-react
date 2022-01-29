import React from 'react';

import { helperArray } from '../helpers/helper';

function JSArray() {
  // JS helper
  const start = Date.now();
  helperArray();
  const end = Date.now();
  const jsTime = end - start;

  return (
    <div className="indicator indicator-1">
      <div>JS</div> <div>{jsTime}</div>
    </div>
  );
}

export default JSArray;
