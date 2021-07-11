// Auto Loading (refresh the page at random times)

var ara = Math.floor(Math.random() * 5);
var iri = Math.floor(Math.random() * 5);
if (ara == iri || iri == ara) window.location = 'https://kuhong-api.herokuapp.com/api';
