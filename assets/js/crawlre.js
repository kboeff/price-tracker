/* Steps:
1) Get data: 
	- Http -> HTML
	- HTML -> objects
2) Save data

+ fetch API
npm -install isomorphic-fetch --save


*/

//---------------------------------
// /polyfills/index.js
require('isomorphic-fetch');

//---------------------------------
// /dom-parser/index.js
module.exports = require('dom-parser');

//---------------------------------
// /dom-parser/dom-parser.js
const { JSDOM } = require('jsdom');

const initDomParser = (html) => {
	return new Promise((resolve) => {
		const dom = new JSDOM(html);
		const $ = require('jquery')(dom.window);
		resolve($);
	});
};
module.exports = initDomParser;

//---------------------------------
// /selectors/index.js
module.exports = require('./selectors');

//---------------------------------
// /selectors/selectors.js
module.exports = {
	DETAILS: {
		TITLE_SELECTOR: 'title_wrapper h1';
	}
}

// ---------------------------------
// app.js
require('./polyfills');

const { DETAILS } = require('./selectors');

// get the products by category
const searchUrlBase = 'https://www.ikea.bg/eating-and-drinking/Glassware-and-jugs/Speciality-glassware/mjod-7206/10092216/';
const resultDB = []


// get a product and its data
const getProductData = (url) => {
	return fetch(url)
		.then((response) => {
			if(!response.ok) {
				throw new Error('Invalid url');
			}
			
			return response.text()
			
		})
		.then((html) => {
			// return require('./dom-parser')(html); // jQuery for Node.js
			const price = $('div.price').html();
			console.log(price);
		});
};

getProductData(searchUrlBase);