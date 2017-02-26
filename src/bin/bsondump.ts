#!/usr/bin/env node

import {MongoBins} from '../mongo-bins';
const COMMAND: string = "bsondump";

let mongoBin: MongoBins = new MongoBins(COMMAND, process.argv.slice(2));
mongoBin.run().then(() => {
	//console.log(`${COMMAND} is now running`);
}, (e) => {
	console.error(`unable to launch ${COMMAND}`, e);
});