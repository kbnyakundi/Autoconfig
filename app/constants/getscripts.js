import { execSync } from 'child_process';


export const runScript = () => {
	const output = execSync('../scripts/test.py', { encoding: 'utf-8' });  // the default is 'buffer'
	console.log('Output was:\n', output);
	// console.log('yoyoyo');
}
