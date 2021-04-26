// Initialization
var a = document.getElementById('eemail');
var b =document.getElementById('locaa');

function fetchInfo(){
    console.log(a.value);
    location.replace("search.html")
}
   

//Spread sheet
$.get("https://spreadsheets.google.com/feeds/cells/1URQBjLmkRkPxI1RGQFpp_ZxUa1xMcoMth3qmWH9DK2Y/og38pvz/public/basic?alt=json", function(data){
    console.log(data);
})