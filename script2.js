const nimi = 'Matias';
const ikä = 16;
let opiskelija=true;
if(opiskelija == true){
  opiskelija = 'opiskelija'
}else{
  opiskelija = 'ammattilainen'
}
console.log('Hei sivuilleni surffaaja, olen ' + nimi + ' ' + 'ja olen ' + ikä + '-vuotias ' + opiskelija);

var kaverit = ['bratast', 'Banaani Omena', 'Kissa Koira', 'Aasi Kahvikuppi', 'Koira Lehmä'];
var arrayLength = kaverit.length;
for (var i = 1; i < arrayLength; i++) {
    console.log(`${i}` + '.' + ' Ystäväni: ' + kaverit[i]);
}

const perhe = [
  {
    id: 1,
    etunimi: 'Matias',
    ika: 16,
    tausiikainen: false
  },
  {
    id: 2,
    etunimi: 'Kissa',
    ika: 40,
    tausiikainen: true
  },
  {
    id: 3,
    etunimi: 'Koira',
    ika: 40,
    tausiikainen: true
  }
];


const tausiikainer = perhe.filter(function(per){
return per.tausiikainen === true;
}).map(function(per){
return per.etunimi;
});

console.log('Täysi-ikäisiä: ' + tausiikainer);

const alaikaisia = perhe.filter(function(per){
return per.tausiikainen === false;
}).map(function(per){
return per.etunimi;
});
console.log('Alaikäisiä: ' + alaikaisia)

    total = 0,
    iks = perhe.ika,
    i;
for (i = 0; i < perhe.length; i++) {
    total += perhe[i].ika;
}
console.log('Ikä yhteensä: ' + total);


function toggleText() {
  var text = document.getElementById("demo");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

window.onload=function(){
const teemalista = document.querySelectorAll('.teemalista');
const teemanvaihto = document.querySelector('#teemanvaihto');

teemanvaihto.addEventListener('click',e => {
  e.preventDefault();
  if(document.querySelector('#tumma').checked){
    document.body.style.backgroundColor = "#000000";
    document.body.style.color = "#FFFFFF";
  }
  if(document.querySelector('#vaalea').checked){
    document.body.style.backgroundColor = "#FFFFFF";
    document.body.style.color = "#000000";
  }
  if(document.querySelector('#varikas').checked){
    document.body.style.backgroundColor = "#FEFF9E";
    document.body.style.color = "#FF5500";
  }
  })
}
