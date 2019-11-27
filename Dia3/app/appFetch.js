//hace lo mismo que app.js, solo que usa fetch, en lugar de usar XMLHTTP
const promiseCallback2 = function(){
  return new Promise((resolve,reject) => {

    fetch('https://jsonplaceholder.typicode.com/users/1')

    .then((response)=> {
      if(response.status == 200){
        resolve(response.json())
      }
      else{
        reject(response);
      }
    })

    .catch((error) => console.info(error))

 });
}

var resolvedAnswer = function(data){
  console.debug('--resolvedAnswer--')
  console.debug('->', data)
}

var rejectedAnswer = function(data){
  console.debug('--rejectedAnswer--')
  console.debug('->', data)
}

promiseCallback2().then(resolvedAnswer, rejectedAnswer)
