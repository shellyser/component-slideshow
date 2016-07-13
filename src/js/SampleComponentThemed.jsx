import React, { Component } from 'react';
import className from 'classnames';
import styles from '../styles/component-theme.scss';

import SampleComponent from "./SampleComponent";

export default function(props) {
	return (
		// Ensure to include {...props} in your component instance.
		<SampleComponent {...props} styles={styles}>Hello</SampleComponent>
	);
}