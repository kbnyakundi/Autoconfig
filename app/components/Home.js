// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';
import M from 'materialize-css';
import {Button, Icon} from 'react-materialize';
import { runScript } from '../constants/getscripts.js';

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

	        	<a className="waves-effect waves-light btn-large slide modal-trigger" href="#modal1">Create React-Flask App</a>
	        </div>
	        <div className="row">
	        	<a className="waves-effect waves-light btn-large slide modal-trigger" href="#modal1">Create React-block App</a>
	        </div>
	        <div className="row">
	        	<a className="waves-effect waves-light btn-large slide modal-trigger"  href="#modal1">Create bosire App</a>
	        </div>
	        <Link to={routes.COUNTER}>A coders best friend.</Link>

	        <div id="modal1" className="modal">
			    <div className="modal-content">
			    	<form>
			    	<div className="row"><h2 className="center-align">Great Choice</h2></div>

			    	<div className="row">
			    		<input placeholder="project euler" id="project_name" type="text" className="validate"/>
          				<label htmlFor="project_name">Project Name</label>
			    	</div>

			      	<h4>Modal Header</h4>
			      	<p>A bunch of text</p>
			      </form>
			    </div>
			    <div className="modal-footer">
			      <button onClick={() => runScript} className="modal-close waves-effect waves-green btn-flat">Submit</button>
			    </div>
			 </div>
      	</div>
    );
  }
}
