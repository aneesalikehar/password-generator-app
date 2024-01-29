var copyTex = document.getElementById('copyText') 
var password = document.getElementById("password");
let pass = "";





function genPassword(){
var chars = ["A","B","C","D","E","F","@","!","#",1,2,3,4,5,6,7,8,9];



for(var i = 0; i<=8;i++){
let passGen = Math.floor(Math.random()*chars.length);
  pass += chars[passGen];  
}
password.value = pass;
}

let copyPassword = () => {
 
 navigator.clipboard.writeText(pass)
 copyTex.innerText = "Copied";

setTimeout(()=>{
  copyTex.innerText = '';
},2000)
}


