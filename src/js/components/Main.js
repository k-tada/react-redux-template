import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Layout.css';

@CSSModules(styles, { allowMultiple: true })
export default class Main extends Component {
  render() {
    return (
      <div className="root">
        <div>hoge</div>
        <div>{this.props.counter}</div>
      </div>
    )
  }
}


