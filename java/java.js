//API Http request
//.send must be last in call stack, after .open or call backs





const firstReq = new XMLHttpRequest();                      //create const
firstReq.addEventListener('load', function() {              //   add API eventlistener
  console.log('It worked!');
  const data = JSON.parse(this.responseText)
  console.log(data.results[0].films[0]);  
});
firstReq.addEventListener('error', () => {                   //use function to listen for errors
  console.log('error 404');
});
firstReq.open('GET', "https://swapi.dev/api/planets/?page=2",); //API address
firstReq.send();                                                 //,send is last on call stack
console.log('Request Sent!');                                    //add a success tag
