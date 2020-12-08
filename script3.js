window.onload=function(){

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
var korona = document.querySelector('.korona');
var tartunnat = document.querySelector('.tartunnat');
var testatut = document.querySelector('.testatut');
var kuolemat = document.querySelector('.kuolemat');

getJSON
('https://api.apify.com/v2/key-value-stores/jEFt5tgCTMfjJpLD3/records/LATEST?disableRedirect=true', function(err, data){
  if (err != null) {
    console.error(err);
  }else {
    tartunnat.innerHTML = (`${data.infected}`);
    korona.innerHTML = (`${data.lastUpdatedAtApify.split('T')[0]}`);
    testatut.innerHTML = (`${data.tested}`);
    kuolemat.innerHTML = (`${data.deaths}`);
  }
});

const lahetanappi = document.querySelector('.lahetanappi');
const pakemail = document.querySelector('.pakemail');
const paknimi = document.querySelector('.paknimi');
const virhe = document.querySelector('.virhe');
const tiedot = document.querySelector('#tiedot');
const ree = document.querySelector('#ree');
const ree2 = document.querySelector('#ree2');
const terveiset = document.querySelector('.terveiset');

lahetanappi.addEventListener('click', e =>{
  e.preventDefault();

  if(paknimi.value === '' || pakemail.value === ''){
    document.getElementById("ree").style.backgroundColor="red";
    document.getElementById("ree2").style.backgroundColor="red";
    lahetanappi.style.background = 'red';
    lahetanappi.value= 'Virhe! Et lisännyt nimeä tai sähköpostia.'
    setTimeout(()=> lahetanappi.style.background = 'rgb(255,255,255)', 6000);
    setTimeout(()=> lahetanappi.value = 'Lähetä', 6000);
    setTimeout(()=> document.getElementById("ree").style.backgroundColor="white", 6000);
    setTimeout(()=> document.getElementById("ree2").style.backgroundColor="white", 6000);
  }else{

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`Viestisi on lähetetty ${paknimi.value} ${pakemail.value}!`));

    tiedot.appendChild(li);

    paknimi.value= '';
    pakemail.value= '';
    sendJSON();
  }
});

const emailnappi = document.querySelector('.lahetanappi');

emailnappi.addEventListener('click', e =>{
  e.preventDefault();
});

function sendJSON(){
  let xhr = new XMLHttpRequest();
  let url = "https://salpausemail.azurewebsites.net/api/HttpTriggerCSharp1?code=lWOELqiU07AqsBviOQYzuNIrQP7xoV7NV7C5W2ctgjIRcf7nXE2biw==";

  xhr.open("POST", url, true);

  xhr.setRequestHeader("Content-type", "application/json");

  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200)
    console.log("Valmis, yhteys toimii");
  };
  var data =JSON.stringify({
    "EmailMsg": terveiset, //kirjoittaa sähköpostin sisällön
    "EmailAddress": pakemail, //viestin kirjoittajan sähköpostin
    "EmailTo": "matias.kallio@edu.salpaus.fi", //oma sähköpostin
    "EmailName": paknimi //Nimi kentän sisältö
  });
  xhr.send(data);
};
};
