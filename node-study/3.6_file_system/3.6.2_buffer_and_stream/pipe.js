import {createReadStream} from 'node:fs';
import {createWriteStream} from 'node:fs';

const readStream = createReadStream('readme4.txt');
const writeStream = createWriteStream('writeme3.txt');
readStream.pipe(writeStream);
