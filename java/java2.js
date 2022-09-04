

const firstReq = new XMLHttpRequest();                      //create const
firstReq.addEventListener('load', function() {              //   add API eventlistener
  console.log('It worked!');
  const data = JSON.parse(this.responseText)
  const filmURL = data.results[0].films[0]; 
  const filmReq = new XMLHttpRequest();
   console.log('Second request worked');
   const filmData = JSON.parse(this.responseText);
   console.log(filmData);
});
firstReq.addEventListener('error', () => {                   //use function to listen for errors
  console.log('error 404');
});
firstReq.open('GET', "https://swapi.dev/api/planets/?page=2",); //API address
firstReq.send();                                                 //,send is last on call stack
console.log('Request Sent!');                                    //add a success tag
