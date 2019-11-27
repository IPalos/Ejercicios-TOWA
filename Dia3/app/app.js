
const promiseCallback =  function(){
  return new Promise(function(resolve, reject){
    var req = new XMLHttpRequest();
    req.open('GET', 'https://jsonplaceholder.typicode.com/users/1');
    req.onload = function(){
      if(req.status == 200){
        resolve(req.response);
      }
      else{
        reject(Error(req.statusText));
      }
    };
    req.onerror= function(){
      reject(Error("Network Error  "+req.status));
    };
    req.send();
  });
}


//Si la respuesta del servidor es exitosa
var resolvedAnswer = function(data){
  console.debug('--resolvedAnswer--')
  console.debug(data)
}

//Si la respuesta del servidor es rechazada
var rejectedAnswer = function(data){
  console.debug('--rejectedAnswer--')
  console.debug(data)
}

promiseCallback().then(resolvedAnswer, rejectedAnswer)
