window.onload=function(){
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
    "EmailMsg": "qwe", //kirjoittaa sähköpostin sisällön
    "EmailAddress": "saf@gmail.com", //viestin kirjoittajan sähköpostin
    "EmailTo": "matias.kallio@edu.salpaus.fi", //oma sähköpostin
    "EmailName": "wqe" //Nimi kentän sisältö
  });
  xhr.send(data);
};
}