import React from 'react';
import { renderToString } from 'react-dom/server';
import { PrerenderApp } from './App';

export function render(url) {
  return renderToString(<PrerenderApp url={url} />);
}
