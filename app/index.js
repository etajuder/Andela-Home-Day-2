module.exports = {

	words: function(words){
		
    var value_count = {}; //to return the result

    words.replace(/\n/g, " ").replace(/\t/g," ").replace(/ +/g, " ").split(" ").forEach(function(str){
      
        if(value_count[str] !== undefined){
           //if value is in value_count  already just increment it
           value_count[str] += 1;

        }else{
            //else add the key to the json file and set the value to be 1
            value_count[str] = 1;

        }

    });

  return value_count;

	},
	reverseString:function(word){
	

    	var st = word.split("").reverse().join(""); //split the values into array then reverse it 

        return word === '' ? null : st === word ? true : st ; // if the word is empty it will return null or if the word same as the reverse string return true
    	
       
	}
}
