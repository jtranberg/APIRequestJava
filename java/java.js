const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load', () => {
  console.log('It worked!');
});
firstReq.addEventListener('error', () => {
  console.log('error 404');
});
firstReq.open('GET', "https://swapi.dev/api/planets/?page=2",);
firstReq.send();
console.log('Request Sent!');
