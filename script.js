

// banka ...jautājumu kopumu
const jautajumi=[
  {
    jautajums:"Kas ir galvenais zemes satelīts?",
    atbilde: "Mēness"
  },
  {
    jautajums:"Cik ir 2+2?",
    atbilde:"4"
  },
  {
    jautajums:"Kā sauc lielāko okeānu?",
    atbilde:"Klusais okeāns"
  }
];

// mainīgie js....HTML
const jautajumsElements=document.getElementById("jautajums");
const atbildeInput=document.getElementById("atbilde");
const iesniegtButton=document.getElementById("iesniegt");

let esosaisJautajumsIndex=0;
// funkciju ... parādīt jautājumu
function paradiJautajumu(){
    jautajumsElements.textContent=jautajumi[esosaisJautajumsIndex].jautajums;
}


// funkciju ... pārbaudīt atbildi
function parbauditAtbildi(){
  const lietotajaAtbilde=atbildeInput.value.trim().toLowerCase();
  const pareizaAtbilde=jautajumi[esosaisJautajumsIndex].atbilde.toLowerCase();

  if(lietotajaAtbilde === pareizaAtbilde){
    alert("Pareizi");
  }else{
     alert("Nepareizi");
  }
  esosaisJautajumsIndex++;
  if(esosaisJautajumsIndex<jautajumi.length){
    paradiJautajumu();
    atbildeInput.value="";
  }else{
    jautajumsElements.textContent="Spēle beigusies!";
    atbildeInput.disabled=true;
    iesniegtButton.disabled=true;
  }
}

//klausītājs....
paradiJautajumu();
iesniegtButton.addEventListener("click",parbauditAtbildi);
