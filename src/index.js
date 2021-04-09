//import myMain from "./js/main";
//myMain(); 

const url = `http://www.boredapi.com/api/activity/`;
const button = document.getElementById("button");
const innerText = document.getElementById("app1");
button.addEventListener('click', NewActivity);
function NewActivity(){
fetch(url).then(response => response.json()).then(data => {

innerText.innerText = data.activity
}); 
}    

const url2 = `http://jservice.io/api/random`;
const button2 = document.getElementById("button2");
const innerText2 = document.getElementById("app2");
button2.addEventListener('click', NewTrivia);
function NewTrivia(){
    fetch(url2).then(response => response.json()).then(data => {
        innerText2.innerText = data[0].question;
    });
    
}

const url3 = `https://travelbriefing.org/countries.json`;
const button3 = document.getElementById("button3");
const innerText3 = document.getElementById("app3");
button3.addEventListener('click', TrvlCountries);
function TrvlCountries(){
    var rand = Math.floor(Math.random() * 150)
    fetch(url3).then(response => response.json()).then(data => {
        innerText3.innerText = data[rand].name; 
    });
}