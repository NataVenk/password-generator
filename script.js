// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ["a","b","c","d","e","f","g"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G"]
var numbers = [1,2,3,4,5,6,7,8,9,0]
var specialChar = ["@","#","&","*","!"]

console.log("is it  working?")

// var lowCase = "abcdefghij"
// var upCase = "ABCDEFGHIJ"
// var num = "1234567890"
// var spChar = "@#&*!"
// Write password to the #password input
function writePassword() {
  var password = createPassword();
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  return password;

}
function setPasslength(){
  var passLength = window.prompt("How long do you want your password to be?");
  if (passLength<8 || passLength>128){
    window.alert(" you have to enter number between 8 and 128")
    return setPasslength()
  };
  return passLength
}

function creatingPool(){

  const passCreated = [ ];
  var userChoice = window.confirm("Would you like to include low case letters");
if (userChoice){
  // var passCreated  = passCreated.concat(lowerCase);
  // //////////
  // passCreated.push(lowerCase);
  // [[]]
  // ///////////
  passCreated.push(...lowerCase);
}
//ask user  about upper case
var userChoice = window.confirm("Would you like to include UPPER case letters");
if (userChoice){
   passCreated.push(...upperCase);
}

var userChoice = window.confirm("Would you like to include numbers");
if (userChoice){
   passCreated.push(...numbers);
}
return passCreated

}
function createPassword(){
   var passCreated = creatingPool();
  var passLength = setPasslength();
  const userPass = [ ];
for (let i=0; i<passLength; i++){
  //1
  const index = Math.floor(Math.random()*passCreated.length)
  const char = passCreated[index]
  userPass.push(char)

  //2
  // const char = passCreated[Math.floor(Math.random()*passCreated.length)]
  // userPass.push(char)


  //3
  // userPass.push(passCreated[Math.floor(Math.random()*passCreated.length)])
}
  
    
 


}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


///

// pseudo code

// LC Array
// UP Array
// NUM Array
// SC Array

// 1. user picks length of password
// 2. user picks what they want to include (picking arrays to choose from) - each time they pick somethng that should be added to selection array
// 3. computer randomly picks (math.floor (math.random) from array of picked criterias)

// 4. use function write the password with a eventlistener (line 14)

// old Assignment Code
// var generateBtn = document.querySelector("#generate");
// var lc="abcde"
// var uc="ABCDE"
// var num="1234567890"
// var sc="!@#$%^&*()"
// Write password to the #password input
// function writePassword() {

//   var password = generatePassword();
 
 
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

//   return password;

// }

// function generatePassword(){
//   var possible=""
//   var passlength=prompt("how long would you like your password?")

//   if (passlength<8 || passlength>128){
//     console.log ("this password is not correct length")
//     return "This password is not correct length. Please enter number between 8 and 128."
//   }



//   var needsUpperCase=confirm("do you want uppercase letters?")
//   if(needsUpperCase){
//   possible=uc+possible
//  }
//   var needsLowerCase=confirm("do you want lowercase letters?")
//   if(needsLowerCase){
//     possible=lc+possible
//    }
//   var needsNumbers=confirm("do you want Numbers?")
//   if(needsNumbers){
//     possible=num+possible
//    }
//   var needsSpecialCharacter=confirm("do you want Special Character?")

//   if(needsSpecialCharacter){
//     possible=sc+possible
//    }
//   console.log(needsUpperCase, needsLowerCase, needsNumbers, needsSpecialCharacter)


//   console.log(possible)

//   if (possible.length<=0) {
 
//     return "YOU NEED TO CHOOSE AT LEAST ONE"
//    }

  
//   var generatedPassword = vgenpwd(passlength);
  // console.log(generatedPassword)
  // console.log(generatedPassword.length)
//   return generatedPassword;


// function vgenpwd(passlength) {
//   var result           = '';
//   for ( var i = 0; i < passlength; i++ ) {
//     result += possible.charAt(Math.floor(Math.random() * 
// possible.length));
//  }
//  return result;
// }

// } 


// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


 
