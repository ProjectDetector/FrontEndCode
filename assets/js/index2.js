// Initialization
var a = document.getElementById('eemail');
var b =document.getElementById('locaa');

function fetchInfo(){
    console.log(a.value);
    location.replace("search.html")
}
   

function datee(){
    var d = new Date();
    var b = d.getFullYear()+"-"+("0" + d.getMonth()).slice(-2)+"-"+("0" +d.getDate()).slice(-2) ;
    document.getElementById('locaa').setAttribute("max",b);
}
