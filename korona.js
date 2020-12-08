var getJSON = function(url, callback) {

  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';

  xhr.onload = function(){

    var status = xhr.status;

    if (status == 200) {
      callback(null, xhr.response);
    }else {
      callback(status);
      }
    };
  
  xhr.send();
};
window.onload=function(){
var varmistetut = document.querySelector('.varmistetut');
var paivamaara = document.querySelector('.paivamaara');


getJSON
('https://api.apify.com/v2/datasets/BDEAOLx0DzEW91s5L/items?format=json&clean=1', function(err, data){
  let taulukko = `<table width="100%" style="border=1px solid black">`;

  const historia = data.map(function(paiva){
    if(paiva.confirmedCases != undefined && paiva.lastUpdatedAtSource != undefined){ 
    taulukko = taulukko + `<tr><td>${paiva.confirmedCases}</td><td>${paiva.lastUpdatedAtSource.split('T')[0]}</td></tr>`;
  }
  else if(paiva.testedCases != undefined && paiva.lastUpdatedAtSource != undefined){
    taulukko = taulukko + `<tr><td>${paiva.testedCases}</td><td>${paiva.lastUpdatedAtSource.split('T')[0]}</td></tr>`;
  }
  else if(paiva.infected != undefined && paiva.lastUpdatedAtApify != undefined){
    taulukko = taulukko + `<tr><td>${paiva.infected}</td><td>${paiva.lastUpdatedAtApify.split('T')[0]}</td></tr>`;
  }
  else{
    taulukko = taulukko + `<tr><td>ei dataa</td></tr>`;
  }

  });



  taulukko = taulukko + `</table>`;
  document.body.innerHTML = taulukko;
});
}