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
const virhe = document.querySelector('.virhe');
const tiedot = document.querySelector('#tiedot');
const ree = document.querySelector('#ree');
const ree2 = document.querySelector('#ree2');
const terveiset = document.querySelector('#terveiset');

lahetanappi.addEventListener('click', e =>{
  e.preventDefault();

  if(ree.value === '' || ree2.value === ''){
    document.getElementById("ree").style.backgroundColor="red";
    document.getElementById("ree2").style.backgroundColor="red";
    lahetanappi.style.background = 'red';
    lahetanappi.value = 'Virhe! Et lisännyt nimeä tai sähköpostia.'
    setTimeout(()=> lahetanappi.style.background = 'rgb(255,255,255)', 6000);
    setTimeout(()=> lahetanappi.value = 'Lähetä', 6000);
    setTimeout(()=> document.getElementById("ree").style.backgroundColor="white", 6000);
    setTimeout(()=> document.getElementById("ree2").style.backgroundColor="white", 6000);
  }else{

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`Viestisi on lähetetty ${ree.value} ${ree2.value}!`));

    tiedot.appendChild(li);

    ree.value= '';
    ree2.value= '';
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
  const nimi = document.querySelector('#ree').value;
  const email = document.querySelector('#ree2').value;
  const viestit = document.querySelector('#terveiset').value;

  console.log(nimi);

  var data =JSON.stringify({
   "EmailMsg": viestit,  //Kirjoittaa sisällön 
    "EmailAddress": email, //viestin kirjoittajan sähköposti
    "EmailTo": "matias.kallio@edu.salpaus.fi", //oma sähköpostisi!!!!
    "EmailName": nimi //Nimi-kentän sisältö
  });
  xhr.send(data);
};
