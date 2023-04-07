import Fastify from 'fastify';
import {createServer as createViteServer} from 'vite';
import {getData} from './data.js';
import {renderPreact} from './preact/index.js';
import {renderInferno} from './inferno/index.js';
import {renderMithril} from './mithril/index.js';
import {renderHandlebars} from './handlebars/index.js';
import {renderArt} from './art-template/index.js';
import {renderVanilla} from './vanilla/index.js';


const DEV = process.env.DEV === 'true';

const fastify = Fastify({
	logger: true
});

export let vite;
let renderSvelte, renderSolid;

if (DEV) {
	await fastify.register(import('@fastify/middie'));

	// generate the dev server
	vite = await createViteServer({
		server: {middlewareMode: true},
		appType: 'custom'
	});

	fastify.use(vite.middlewares);

	const module = await vite.ssrLoadModule('/svelte/index.js');
	renderSvelte = module.render;

	const moduleSolid = await vite.ssrLoadModule('/solid/index.jsx');
	renderSolid = moduleSolid.render;
} else {
	const module = await import('./vite/server/svelte/index.js');
	renderSvelte = module.render;

	const moduleSolid = await import('./vite/server/solid/index.js');
	renderSolid = moduleSolid.render;
}

fastify.get('/', async function (request, reply) {
	const data = getData();
	const html = await renderVanilla(data);
	reply.header('content-type', 'text/html');
	reply.send(html);
});

fastify.get('/svelte', async function (request, reply) {
	const data = getData();
	const html = await renderSvelte(data);
	reply.header('content-type', 'text/html');
	reply.send(html);
});

fastify.get('/preact', async function (request, reply) {
	const data = getData();
	const html = renderPreact(data);
	reply.header('content-type', 'text/html');
	reply.send(html);
});

fastify.get('/inferno', async function (request, reply) {
	const data = getData();
	const html = renderInferno(data);
	reply.header('content-type', 'text/html');
	reply.send(html);
});

fastify.get('/solid', async function (request, reply) {
	const data = getData();
	const html = renderSolid(data);
	reply.header('content-type', 'text/html');
	reply.send(html);
});

fastify.get('/mithril', async function (request, reply) {
	const data = getData();
	const html = renderMithril(data);
	reply.header('content-type', 'text/html');
	reply.send(html);
});

fastify.get('/handlebars', async function (request, reply) {
	const data = getData();
	const html = renderHandlebars(data);
	reply.header('content-type', 'text/html');
	reply.send(html);
});

fastify.get('/art', async function (request, reply) {
	const data = getData();
	const html = renderArt(data);
	reply.header('content-type', 'text/html');
	reply.send(html);
});


fastify.listen({ port: 3000 }, function (err, address) {
	if (err) {
		fastify.log.error(err)
		process.exit(1)
	}
});