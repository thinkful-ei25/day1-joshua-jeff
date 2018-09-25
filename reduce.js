function reducer(incoming){
    let words = incoming.split(' ');
    let myOutArr = []
    words.reduce(function(builder, word){
        if(word.length === 3){
            myOutArr.push(' ');
        }
        else{
            myOutArr.push((word[word.length-1].toUpperCase()));
        }
    },' ');
    return myOutArr.join('');

}

let codeWord = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
console.log(codeWord);
console.log(reducer(codeWord));