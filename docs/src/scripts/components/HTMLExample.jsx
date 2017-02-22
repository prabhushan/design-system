import React from 'react';

class HTMLExample extends React.Component {
  // Replace {{modifier}} tag with modifier, if there is one.
  markup() {
    let html = this.props.markup;
    const modifier = this.props.modifier ?
      ` ${this.props.modifier.className}` : '';

    return html.replace(/\s?{{\s?modifier\s?}}/g, modifier);
  }

  name() {
    return this.props.modifier ? this.props.modifier.name : 'Default';
  }

  render() {
    const markup = this.markup();

    return (
      <div className="markup markup--html">
        <strong className="markup__name">{this.name()}</strong>
        <div dangerouslySetInnerHTML={{ __html: markup }} />
        <code>
          <pre>{markup}</pre>
        </code>
      </div>
    );
  }
}

HTMLExample.propTypes = {
  markup: React.PropTypes.string.isRequired,
  modifier: React.PropTypes.shape({
    className: React.PropTypes.string,
    description: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
  })
};

export default HTMLExample;