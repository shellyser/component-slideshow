import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import className from 'classnames';
import styles from '../styles/component.scss';
import { BaseComponent } from 'component-builder/support';

// console.log(styles);

class SampleComponent extends BaseComponent {
	constructor(props) {
    	super(props);
    }

    render() {
		const aphroStyles = StyleSheet.create({
			pseudoExample: {
				"@media (max-width: 539px)": {
					':after': {
						content: '" (Mobile)"'
					}
				},
				"@media (min-width: 540px)": {
					':after': {
						content: '" (Desktop)"'
					}
				}
			}
		});

		this.testFunctionOne(this.constructor.name);

	    return (
	      <div className={className(
	      	this.props.styles ? this.props.styles.SampleComponent : styles.SampleComponent,
	      	this.props.className,
	      	css(aphroStyles.pseudoExample)
		  )}>
	        WELCOME TO THE WORLD, <strong>{ this.props.innerText }</strong> !!!!
	      </div>
	    );
	}
}

SampleComponent.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.node,
  innerText: React.PropTypes.string
};

SampleComponent.defaultProps = {
  className: 'foobar',
  innerText: ' SampleComponent'
};

export default SampleComponent;
