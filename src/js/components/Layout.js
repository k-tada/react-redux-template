import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Layout.css';

@CSSModules(styles, { allowMultiple: true })
export default class Layout extends Component {
  render() {
    return (
      <div className={styles.root}>
        { this.props.children }
      </div>
    );
  }
}

