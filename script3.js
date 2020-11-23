window.onload=function(){
const lahetanappi = document.querySelector('.lahetanappi');
const pakemail = document.querySelector('.pakemail');
const paknimi = document.querySelector('.paknimi');
const virhe = document.querySelector('.virhe');
const tiedot = document.querySelector('#tiedot');
const ree = document.querySelector('#ree');
const ree2 = document.querySelector('#ree2');

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
  }
});
}