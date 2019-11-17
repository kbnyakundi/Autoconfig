// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';
import M from 'materialize-css';
import {Button, Icon} from 'react-materialize';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  componentDidMount(){
  	M.AutoInit();
  }

  render() {
    return (
    	<div className="container center-align">
	      <div className="row" id="title-div">
	        <h1>A u t o C o n f i g</h1>
	        <h5>Because who ever enjoyed setting up their development environment!</h5>
	       </div>
	        <div className="row">
	        	<a class="waves-effect waves-light btn-large">Create React-Flask App</a>
	        </div>
	        <div className="row">
	        	<a class="waves-effect waves-light btn-large">Create React-block App</a>
	        </div>
	        <div className="row">
	        	<a class="waves-effect waves-light btn-large">Create bosire App</a>
	        </div>
	        <Link to={routes.COUNTER}>A coders best friend.</Link>
      	</div>
    );
  }
}
