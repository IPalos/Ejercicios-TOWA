

//PIRAMIDE 
  //Modificar esto para cambiar la altura de la piramide
  let sizeOfPyramid = 5;

    const pyramid = (function(size){
      if (typeof size != 'number' || size <1){
        console.log('Not a valid input');
      }
        let floor = '#';
    for (let i=0;i<size;i++){
        console.log(floor);
        floor+='#';
    };
    }(sizeOfPyramid));




//FIBONACCI

const fibonacci = function(n){
    let sequence = [];
    let numToAppend=0;
    let i=1;
    if (n <= 0 || typeof n !== 'number' ){
      return 'Not a valid input';
      }
    else if (n === 1){
      numToAppend = 1;
    }
    else if ( n === 2){
      numToAppend = 1;
      sequence = fibonacci(1);
    }
    else{
      sequence = fibonacci(n-1);
      numToAppend = sequence[n-2]+sequence[n-3];
    }
    sequence.push(numToAppend);
    return sequence; 
  };


//CUENTALETRAS

const cuentaLetras =  function(word,letter) {
    if ( typeof word != 'string'){
      return 'Not a valid input';
    }
    else{
      let wordArray = [...word].filter(char => char !== letter);
      let letras = new Set(wordArray);
      return letras.size; 
    }
  };



