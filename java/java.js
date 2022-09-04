//API Http request
//.send must be last in call stack, after .open or call backs





const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load', function() {
  console.log('It worked!');
  const data = JSON.parse(this.responseText)
  for(let planet of data.results){
    console.log(planet.name);
  }
});
firstReq.addEventListener('error', () => {
  console.log('error 404');
});
firstReq.open('GET', "https://swapi.dev/api/planets/?page=2",);
firstReq.send();
console.log('Request Sent!');
