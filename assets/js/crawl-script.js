let input = document.getElementById("urlInput");


// !!!! adjust fetch to avoid Cross-Origin Read Blocking
html = $.getJSON('http://www.whateverorigin.org/get?url=' + encodeURIComponent('http://google.com') + '&callback=?', function(data){
	return data.contents;
});
      
const getProductData = (html) => {
	let name = $('h1.product-detail-title').html() + ' ' + $('h2.product-detail-title-sub').html();
	let price = $('div.price').html();
	return [name, price];
	
}


// get a product and its data
/*const getProductData = (url) => {
	return fetch(url)
		.then((response) => {
			if(!response.ok) {
				throw new Error('Invalid url');
			}
			return response.text();
		})
		.then((html) => {
			// return require('./dom-parser')(html); // jQuery for Node.js
			let name = $('h1.product-detail-title').html() + ' ' + $('h2.product-detail-title-sub').html();
			let price = $('div.price').html();
		});
};*/



// get the products by category
const getUrl = () => {
	const gotData = getProductData(html);
	let line = '<div class="row"><div class="col-md-12"><div class="card"><div class="card-body"><div class="row"><div class="col-md-6"><div class="card card-plain"><div class="card-header"><h5 class="card-title">Link</h5></div><div class="card-body"><div class="alert alert-info alert-dismissible fade show"><button type="button" aria-hidden="true" class="close" data-dismiss="alert" aria-label="Close"><i class="nc-icon nc-simple-remove"></i></button><span class="product-url">'+
		input+
		'</span></div></div></div></div><div class="col-md-4"><div class="card card-plain"><div class="card-header"><h5 class="card-title">Product</h5></div><div class="card-body"><div class="alert alert-primary alert-dismissible fade show"><button type="button" aria-hidden="true" class="close" data-dismiss="alert" aria-label="Close"><i class="nc-icon nc-simple-remove"></i></button><span><b>'+
		gotData[0]+
		'</b></span></div></div></div></div><div class="col-md-2"><div class="card card-plain"><div class="card-header"><h5 class="card-title">Price</h5></div><div class="card-body"><div class="alert alert-success alert-dismissible fade show"><button type="button" aria-hidden="true" class="close" data-dismiss="alert" aria-label="Close"><i class="nc-icon nc-simple-remove"></i></button><span><b>'+
		gotData[1]+
		'</b></span></div></div></div></div></div></div></div></div></div>';
	$('#url-block').append(line);
}

