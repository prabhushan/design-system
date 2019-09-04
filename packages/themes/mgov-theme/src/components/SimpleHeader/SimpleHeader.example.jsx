import React from 'react';
import ReactDOM from 'react-dom';
import SimpleHeader from './SimpleHeader';

// Here is an example way to pass in the settings for a logo, or you can hard-code them into the header below
const logoExample = {
  src: 'https://via.placeholder.com/300x50?text=Placeholder+Logo',
  alt: 'This is a logo'
};

ReactDOM.render(
  <SimpleHeader
    logo={logoExample}
    menuItems={[
      {
        url: 'www.gt',
        title: 'title'
      },
      {
        url: 'www.gt',
        title: 'title'
      }
    ]}
  />,
  document.getElementById('js-example')
);
