import { execSync } from 'child_process';
// import { exec } from 'child_process';


export const runScript = () => {
	const output = exec('pwd', { encoding: 'utf-8' });  // the default is 'buffer'

	console.log('Output was:\n', output);
	// console.log('yoyoyo');
}
var exec = require('child_process').exec, child;
