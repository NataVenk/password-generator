// Assignment Code
var generateBtn = document.querySelector("#generate");
var lc="abcde"
var uc="ABCDE"
var num="1234567890"
var sc="!@#$%^&*()"
// Write password to the #password input
function writePassword() {

  var password = generatePassword();
 
 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  return password;

}

function generatePassword(){
  var possible=""
  var passlength=prompt("how long would you like your password?")

  if (passlength<8 || passlength>128){
    console.log ("this password is not correct length")
    return "This password is not correct length. Please enter number between 8 and 128."
  }



  var needsUpperCase=confirm("do you want uppercase letters?")
  if(needsUpperCase){
  possible=uc+possible
 }
  var needsLowerCase=confirm("do you want lowercase letters?")
  if(needsLowerCase){
    possible=lc+possible
   }
  var needsNumbers=confirm("do you want Numbers?")
  if(needsNumbers){
    possible=num+possible
   }
  var needsSpecialCharacter=confirm("do you want Special Character?")

  if(needsSpecialCharacter){
    possible=sc+possible
   }
  console.log(needsUpperCase, needsLowerCase, needsNumbers, needsSpecialCharacter)


  console.log(possible)

  if (possible.length<=0) {
 
    return "YOU NEED TO CHOOSE AT LEAST ONE"
   }

  
  var generatedPassword = vgenpwd(passlength);
  // console.log(generatedPassword)
  // console.log(generatedPassword.length)
  return generatedPassword;


function vgenpwd(passlength) {
  var result           = '';
  for ( var i = 0; i < passlength; i++ ) {
    result += possible.charAt(Math.floor(Math.random() * 
possible.length));
 }
 return result;
}

} 


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


 
