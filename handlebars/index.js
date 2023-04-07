import fs from 'fs';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';
import Handlebars from 'handlebars';

const __dirname = dirname(fileURLToPath(import.meta.url));

const template = Handlebars.compile(fs.readFileSync(join(__dirname, 'template.handlebars'), 'utf8'));

export function renderHandlebars (data) {
	return template({products: data.products});
}