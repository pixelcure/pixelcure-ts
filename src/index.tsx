import * as React from 'react';
import { render } from 'react-dom';

import './styles/index.css';

render(
  <p>Hello World</p>,
  document.getElementById('root') as HTMLElement
);
