// do not change lines 2 - 6:
var twitter = {
  countCharacters: function(string) {
    return string.length;
  }
};

// 1. Dot notation:
twitter.stockPrice = 18;
console.log(twitter.stockPrice)

// 2. Bracket notation:
twitter[ceo] = 'Jack Dorsey'
console.log(twitter[ceo])

// 3. Practice on your own:
var twittersAddress = "1355 Market St #900, San Francisco, CA 94103";
twitter.address = twittersAddress;
console.log(twitter.address);

// 4. Array:
var tweetArray = ["tweet", "tweedle", "leet"];
twitter.tweets = tweetArray;
console.log(twitter.tweets);

// 5. Loop through array:
for (var i = 0; i < tweetArray.length; i++){
	console.log(tweets[i]);
}

// 5. Invoke countCharacters:
var countCharactersInvocation = countCharacters(tweetArray[1]);
console.log(countCharactersInvocation);
//will return the length of the second string (number of charictors in the string)

// 6. Loop through twitter object:
 for (var key in twitter){
 	console.log(twitter[key]);
 }