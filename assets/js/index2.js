function datee(){
    var d = new Date();
    var b = d.getFullYear()+"-"+("0" + (d.getMonth()+1)).slice(-2)+"-"+("0" +d.getDate()).slice(-2) ;
    document.getElementById('locaa').setAttribute("max",b);
}

