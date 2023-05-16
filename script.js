


function OpenImageSpina(){
let ImageSpina = document.querySelector("#ImageSpina")
ImageSpina.style.opacity = 1.0
let chbxObsh = document.querySelector('#Obsh');

if(chbxObsh.checked == false){
chbxObsh.checked = true
alert('Спина может работать только с общим!!!')
}
OpenImageObsh()
SpinaShiacu()
}

function CloseImageSpina(){
CloseKolVoSpinaShiacu()
CloseAllKolVoSpinaEvromik()
CloseAllKolVoSpinaRotativ()
let ImageSpina = document.querySelector("#ImageSpina")
let chbxSpina = document.querySelector("#Spina")
let chbxNogi = document.querySelector("#Nogi")
let chbxTurbo = document.querySelector("#Turbo")
document.getElementById('SpinaShiacu').style.color = "#000000";
document.getElementById('SpinaEvromik').style.color = "#000000";
document.getElementById('SpinaRotativ').style.color = "#000000";
ImageSpina.style.opacity = 0.0

if((chbxSpina.checked == false) && (chbxNogi.checked == false)){
    chbxTurbo.checked = false
}
CloseImageTurbo()
SpinaDopOff()
}


function OpenImageNogi(){
let ImageNogi = document.querySelector("#ImageNogi")
ImageNogi.style.opacity = 1.0


let chbxObsh = document.querySelector('#Obsh');
chbxObsh.checked = true
//alert('Ноги могут работать только с общим!!!')
AlertDialogDug()
StyleAlertTxtNogi()
NogiShiacu()
OpenImageObsh()
}

function CloseImageNogi(){
CloseAllKolVoNogiShiacu()
let ImageNogi = document.querySelector("#ImageNogi")
let chbxSpina = document.querySelector("#Spina")
let chbxNogi = document.querySelector("#Nogi")
let chbxTurbo = document.querySelector("#Turbo")
ImageNogi.style.opacity = 0.0

if((chbxSpina.checked == false) && (chbxNogi.checked == false)){
    chbxTurbo.checked = false
}
CloseImageTurbo()
NogiDopOff()
}


function OpenImageObsh(){
let ImageObsh = document.querySelector("#ImageObsh")
ImageObsh.style.opacity = 1.0
ObshJakuz()
}

function CloseImageObsh(){
let ImageObsh = document.querySelector("#ImageObsh")
ImageObsh.style.opacity = 0.0

let chbxSpina = document.querySelector("#Spina")
chbxSpina.checked = false

let chbxNogi = document.querySelector("#Nogi")
chbxNogi.checked = false

CloseImageSpina()
CloseImageNogi()
ObshDopOff()
}

function OpenImageDonniy(){
let ImageDonniy = document.querySelector("#ImageDonniy")
ImageDonniy.style.opacity = 1.0
DonniyMagic()
}

function CloseImageDonniy(){
let ImageDonniy = document.querySelector("#ImageDonniy")
ImageDonniy.style.opacity = 0.0
DonniyDopOff()
}

function OpenImageAroma(){
let ImageAroma = document.querySelector("#ImageAroma")
ImageAroma.style.opacity = 1.0
}

function CloseImageAroma(){
let ImageAroma = document.querySelector("#ImageAroma")
ImageAroma.style.opacity = 0.0

}

function OpenImageTurbo(){
let ImageTurbo = document.querySelector("#ImageTurbo")
let chbxSpina = document.querySelector("#Spina")
let chbxNogi = document.querySelector("#Nogi")

if((chbxSpina.checked == false) && (chbxNogi.checked == false)){
    OpenImageSpina()
    OpenImageNogi()
    chbxSpina.checked = true
    chbxNogi.checked = true
    //alert('Турбопул может работать только с ногами или со спиной!!!')
    AlertDialogDug()
    }
ImageTurbo.style.opacity = 1.0
}

function CloseImageTurbo(){
let ImageTurbo = document.querySelector("#ImageTurbo")
ImageTurbo.style.opacity = 0.0
}

function OpenImageHromo(){
let ImageHromo = document.querySelector("#ImageHromo")
ImageHromo.style.opacity = 1.0
}

function CloseImageHromo(){
let ImageHromo = document.querySelector("#ImageHromo")
ImageHromo.style.opacity = 0.0
}

function OpenImageAquasound(){
let ImageAquasound = document.querySelector("#ImageAquasound")
ImageAquasound.style.opacity = 1.0
}

function CloseImageAquasound(){
let ImageAquasound = document.querySelector("#ImageAquasound")
ImageAquasound.style.opacity = 0.0
}

function OpenImageRuchki(){
let ImageRuchki = document.querySelector("#ImageRuchki")
ImageRuchki.style.opacity = 1.0
RuchkiMetal()
}

function CloseImageRuchki(){
let ImageRuchki = document.querySelector("#ImageRuchki")
ImageRuchki.style.opacity = 0.0
RuchkiDopOff()
}

function OpenImageSmes(){
let ImageSmes = document.querySelector("#ImageSmes")
ImageSmes.style.opacity = 1.0
}

function CloseImageSmes(){
let ImageSmes = document.querySelector("#ImageSmes")
ImageSmes.style.opacity = 0.0
}

function OpenImagePodgol(){
let ImagePodgol = document.querySelector("#ImagePodgol")
ImagePodgol.style.opacity = 1.0
}

function CloseImagePodgol(){
let ImagePodgol = document.querySelector("#ImagePodgol")
ImagePodgol.style.opacity = 0.0
}

let SpinaShiacuPer = false
function SpinaShiacu(){
CloseAllKolVoSpinaEvromik()
CloseAllKolVoSpinaRotativ()
let chbxSpina = document.querySelector("#Spina")
let ImageSpinaShiacu = document.querySelector("#ImageSpinaShiacu")
let ImageSpinaEvromik = document.querySelector("#ImageSpinaEvromik")
let ImageSpinaRotativ = document.querySelector("#ImageSpinaRotativ")
document.getElementById('SpinaShiacu').style.color = "#0095ff";

if(chbxSpina.checked == true){
if(ImageSpinaShiacu.style.opacity == 0.0){
    ImageSpinaShiacu.style.opacity = 1.0
}
/*else if(ImageSpinaShiacu.style.opacity == 1.0){
    ImageSpinaShiacu.style.opacity = 0.0
}*/

if(ImageSpinaEvromik.style.opacity == 1.0){
    ImageSpinaEvromik.style.opacity = 0.0
    document.getElementById('SpinaEvromik').style.color = "#000000";
}

if(ImageSpinaRotativ.style.opacity == 1.0){
    ImageSpinaRotativ.style.opacity = 0.0
    document.getElementById('SpinaRotativ').style.color = "#000000";
}
}
else
if(chbxSpina.checked == false){
    chbxSpina.checked = true
    OpenImageSpina()
    SpinaShiacu()
}
SpinaShiacuPer = true;
}


let SpinaEvromikPer = false;
function SpinaEvromik(){
SpinaEvromikPer = true;
CloseAllKolVoSpinaRotativ()
CloseKolVoSpinaShiacu()
let chbxSpina = document.querySelector("#Spina")
let ImageSpinaEvromik = document.querySelector("#ImageSpinaEvromik")
let ImageSpinaShiacu = document.querySelector("#ImageSpinaShiacu")
let ImageSpinaRotativ = document.querySelector("#ImageSpinaRotativ")
document.getElementById('SpinaEvromik').style.color = "#0095ff";
if(chbxSpina.checked == true){
if(ImageSpinaEvromik.style.opacity == 0.0){
    ImageSpinaEvromik.style.opacity = 1.0
}
/*else if(ImageSpinaEvromik.style.opacity == 1.0){
    ImageSpinaEvromik.style.opacity = 0.0
}*/

if(ImageSpinaShiacu.style.opacity == 1.0){
    ImageSpinaShiacu.style.opacity = 0.0
    document.getElementById('SpinaShiacu').style.color = "#000000";
}

if(ImageSpinaRotativ.style.opacity == 1.0){
    ImageSpinaRotativ.style.opacity = 0.0
    document.getElementById('SpinaRotativ').style.color = "#000000";
}
}
else
if(chbxSpina.checked == false){
    chbxSpina.checked = true
    OpenImageSpina()
    SpinaEvromik()
}


}

let SpinaRotativPer = false;
function SpinaRotativ(){
SpinaRotativPer = true
CloseKolVoSpinaShiacu()
CloseAllKolVoSpinaEvromik()
let chbxSpina = document.querySelector("#Spina")
let ImageSpinaRotativ = document.querySelector("#ImageSpinaRotativ")
let ImageSpinaEvromik = document.querySelector("#ImageSpinaEvromik")
let ImageSpinaShiacu = document.querySelector("#ImageSpinaShiacu")
document.getElementById('SpinaRotativ').style.color = "#0095ff";
if(chbxSpina.checked == true){
if(ImageSpinaRotativ.style.opacity == 0.0){
    ImageSpinaRotativ.style.opacity = 1.0
}
/*else if(ImageSpinaRotativ.style.opacity == 1.0){
    ImageSpinaRotativ.style.opacity = 0.0
}*/

if(ImageSpinaEvromik.style.opacity == 1.0){
    ImageSpinaEvromik.style.opacity = 0.0
    document.getElementById('SpinaEvromik').style.color = "#000000";
}
if(ImageSpinaShiacu.style.opacity == 1.0){
    ImageSpinaShiacu.style.opacity = 0.0
    document.getElementById('SpinaShiacu').style.color = "#000000";
}
}
else
if(chbxSpina.checked == false){
    chbxSpina.checked = true
    OpenImageSpina()
    SpinaRotativ()
}
}

function SpinaDopOff(){
let ImageSpinaEvromik = document.querySelector("#ImageSpinaEvromik")
let ImageSpinaShiacu = document.querySelector("#ImageSpinaShiacu")
let ImageSpinaRotativ = document.querySelector("#ImageSpinaRotativ")

    if(ImageSpinaEvromik.style.opacity == 1.0){
        ImageSpinaEvromik.style.opacity = 0.0
    }
    if(ImageSpinaShiacu.style.opacity == 1.0){
        ImageSpinaShiacu.style.opacity = 0.0
    }
    if(ImageSpinaRotativ.style.opacity == 1.0){
        ImageSpinaRotativ.style.opacity = 0.0
    }
}

let NogiShiacuPer = false;
function NogiShiacu(){
CloseAllKolVoNogiRapid()
CloseAllKolVoNogiJakuz()
CloseAllKolVoNogiMac()
CloseAllKolVoNogiRotativ()
CloseAllKolVoNogiEvromik()
NogiShiacuPer = true;
let ImageNogiShiacu = document.querySelector("#ImageNogiShiacu")
let ImageNogiEvromik = document.querySelector("#ImageNogiEvromik")
let ImageNogiRotativ = document.querySelector("#ImageNogiRotativ")
let ImageNogiMac = document.querySelector("#ImageNogiMac")
let ImageNogiJakuz = document.querySelector("#ImageNogiJakuz")
let ImageNogiRapid = document.querySelector("#ImageNogiRapid")
document.getElementById('NogiShiacu').style.color = "#0095ff";

let chbxNogi = document.querySelector("#Nogi")

if(ImageNogiShiacu.style.opacity == 0.0){
    ImageNogiShiacu.style.opacity = 1.0
}
/*else if(ImageNogiShiacu.style.opacity == 1.0){
    ImageNogiShiacu.style.opacity = 0.0
}*/

if(ImageNogiEvromik.style.opacity == 1.0){
    ImageNogiEvromik.style.opacity = 0.0
    document.getElementById('NogiEvromik').style.color = "#000000";
}
if(ImageNogiRotativ.style.opacity == 1.0){
    ImageNogiRotativ.style.opacity = 0.0
    document.getElementById('NogiRotativ').style.color = "#000000";
}
if(ImageNogiMac.style.opacity == 1.0){
    ImageNogiMac.style.opacity = 0.0
    document.getElementById('NogiMac').style.color = "#000000";
}
if(ImageNogiJakuz.style.opacity == 1.0){
    ImageNogiJakuz.style.opacity = 0.0
    document.getElementById('NogiJakuz').style.color = "#000000";
}
if(ImageNogiRapid.style.opacity == 1.0){
    ImageNogiRapid.style.opacity = 0.0
    document.getElementById('NogiRapid').style.color = "#000000";
}

if(chbxNogi.checked == false){
    chbxNogi.checked = true
    OpenImageNogi()
    NogiShiacu()
}
}

let NogiEvromikPer = false;
function NogiEvromik(){
CloseAllKolVoNogiRapid()
CloseAllKolVoNogiJakuz()
CloseAllKolVoNogiMac()
CloseAllKolVoNogiRotativ()
CloseAllKolVoNogiShiacu()
NogiEvromikPer = true;
CloseAllKolVoNogiShiacu()
let ImageNogiEvromik = document.querySelector("#ImageNogiEvromik")
let ImageNogiShiacu = document.querySelector("#ImageNogiShiacu")
let ImageNogiRotativ = document.querySelector("#ImageNogiRotativ")
let ImageNogiMac = document.querySelector("#ImageNogiMac")
let ImageNogiJakuz = document.querySelector("#ImageNogiJakuz")
let ImageNogiRapid = document.querySelector("#ImageNogiRapid")
document.getElementById('NogiEvromik').style.color = "#0095ff";

if(ImageNogiEvromik.style.opacity == 0.0){
    ImageNogiEvromik.style.opacity = 1.0
}
/*else if(ImageNogiEvromik.style.opacity == 1.0){
    ImageNogiEvromik.style.opacity = 0.0
}*/

if(ImageNogiShiacu.style.opacity == 1.0){
    ImageNogiShiacu.style.opacity = 0.0
    document.getElementById('NogiShiacu').style.color = "#000000";
}
if(ImageNogiRotativ.style.opacity == 1.0){
    ImageNogiRotativ.style.opacity = 0.0
    document.getElementById('NogiRotativ').style.color = "#000000";
}
if(ImageNogiMac.style.opacity == 1.0){
    NogiMac.style.opacity = 0.0
    document.getElementById('NogiMac').style.color = "#000000";
}
if(ImageNogiJakuz.style.opacity == 1.0){
    ImageNogiJakuz.style.opacity = 0.0
    document.getElementById('NogiJakuz').style.color = "#000000";
}
if(ImageNogiRapid.style.opacity == 1.0){
    ImageNogiRapid.style.opacity = 0.0
    document.getElementById('NogiRapid').style.color = "#000000";
}

let chbxNogi = document.querySelector("#Nogi")
if(chbxNogi.checked == false){
    chbxNogi.checked = true
    OpenImageNogi()
    NogiEvromik()
}
}

let NogiRotativPer = false
function NogiRotativ(){
CloseAllKolVoNogiRapid()
CloseAllKolVoNogiJakuz()
CloseAllKolVoNogiMac()
CloseAllKolVoNogiShiacu()
CloseAllKolVoNogiEvromik()
NogiRotativPer = true
let ImageNogiRotativ = document.querySelector("#ImageNogiRotativ")
let ImageNogiShiacu = document.querySelector("#ImageNogiShiacu")
let ImageNogiEvromik = document.querySelector("#ImageNogiEvromik")
let ImageNogiMac = document.querySelector("#ImageNogiMac")
let ImageNogiJakuz = document.querySelector("#ImageNogiJakuz")
let ImageNogiRapid = document.querySelector("#ImageNogiRapid")
document.getElementById('NogiRotativ').style.color = "#0095ff";

if(ImageNogiRotativ.style.opacity == 0.0){
    ImageNogiRotativ.style.opacity = 1.0
}
/*else if(ImageNogiRotativ.style.opacity == 1.0){
    ImageNogiRotativ.style.opacity = 0.0
}*/

if(ImageNogiShiacu.style.opacity == 1.0){
    ImageNogiShiacu.style.opacity = 0.0
    document.getElementById('NogiShiacu').style.color = "#000000";
}
if(ImageNogiEvromik.style.opacity == 1.0){
    ImageNogiEvromik.style.opacity = 0.0
    document.getElementById('NogiEvromik').style.color = "#000000";
}
if(ImageNogiMac.style.opacity == 1.0){
    ImageNogiMac.style.opacity = 0.0
    document.getElementById('NogiMac').style.color = "#000000";
}
if(ImageNogiJakuz.style.opacity == 1.0){
    ImageNogiJakuz.style.opacity = 0.0
    document.getElementById('NogiJakuz').style.color = "#000000";
}
if(ImageNogiRapid.style.opacity == 1.0){
    ImageNogiRapid.style.opacity = 0.0
    document.getElementById('NogiRapid').style.color = "#000000";
}

let chbxNogi = document.querySelector("#Nogi")
if(chbxNogi.checked == false){
    chbxNogi.checked = true
    OpenImageNogi()
    NogiRotativ()
}
}

let NogiMacPer = false
function NogiMac(){
CloseAllKolVoNogiRapid()
CloseAllKolVoNogiJakuz()
CloseAllKolVoNogiShiacu()
CloseAllKolVoNogiEvromik()
CloseAllKolVoNogiRotativ()
NogiMacPer = true
let ImageNogiMac = document.querySelector("#ImageNogiMac")
let ImageNogiShiacu = document.querySelector("#ImageNogiShiacu")
let ImageNogiEvromik = document.querySelector("#ImageNogiEvromik")
let ImageNogiRotativ = document.querySelector("#ImageNogiRotativ")
let ImageNogiJakuz = document.querySelector("#ImageNogiJakuz")
let ImageNogiRapid = document.querySelector("#ImageNogiRapid")
document.getElementById('NogiMac').style.color = "#0095ff";

if(ImageNogiMac.style.opacity == 0.0){
    ImageNogiMac.style.opacity = 1.0
}
/*else if(ImageNogiMac.style.opacity == 1.0){
    ImageNogiMac.style.opacity = 0.0
}*/

if(ImageNogiShiacu.style.opacity == 1.0){
    ImageNogiShiacu.style.opacity = 0.0
    document.getElementById('NogiShiacu').style.color = "#000000";
}
if(ImageNogiEvromik.style.opacity == 1.0){
    ImageNogiEvromik.style.opacity = 0.0
    document.getElementById('NogiEvromik').style.color = "#000000";
}
if(ImageNogiRotativ.style.opacity == 1.0){
    ImageNogiRotativ.style.opacity = 0.0
    document.getElementById('NogiRotativ').style.color = "#000000";
}
if(ImageNogiJakuz.style.opacity == 1.0){
    ImageNogiJakuz.style.opacity = 0.0
    document.getElementById('NogiJakuz').style.color = "#000000";
}
if(ImageNogiRapid.style.opacity == 1.0){
    ImageNogiRapid.style.opacity = 0.0
    document.getElementById('NogiRapid').style.color = "#000000";
}

let chbxNogi = document.querySelector("#Nogi")
if(chbxNogi.checked == false){
    chbxNogi.checked = true
    OpenImageNogi()
    NogiMac()
}
}

let NogiJakuzPer = false
function NogiJakuz(){
CloseAllKolVoNogiRapid()
CloseAllKolVoNogiMac()
CloseAllKolVoNogiRotativ()
CloseAllKolVoNogiEvromik()
CloseAllKolVoNogiShiacu()
NogiJakuzPer = true
let ImageNogiJakuz = document.querySelector("#ImageNogiJakuz")
let ImageNogiShiacu = document.querySelector("#ImageNogiShiacu")
let ImageNogiEvromik = document.querySelector("#ImageNogiEvromik")
let ImageNogiRotativ = document.querySelector("#ImageNogiRotativ")
let ImageNogiMac = document.querySelector("#ImageNogiMac")
let ImageNogiRapid = document.querySelector("#ImageNogiRapid")
document.getElementById('NogiJakuz').style.color = "#0095ff";

if(ImageNogiJakuz.style.opacity == 0.0){
    ImageNogiJakuz.style.opacity = 1.0
}
/*else if(ImageNogiJakuz.style.opacity == 1.0){
    ImageNogiJakuz.style.opacity = 0.0
}*/

if(ImageNogiShiacu.style.opacity == 1.0){
    ImageNogiShiacu.style.opacity = 0.0
    document.getElementById('NogiShiacu').style.color = "#000000";
}
if(ImageNogiEvromik.style.opacity == 1.0){
    ImageNogiEvromik.style.opacity = 0.0
    document.getElementById('NogiEvromik').style.color = "#000000";
}
if(ImageNogiRotativ.style.opacity == 1.0){
    ImageNogiRotativ.style.opacity = 0.0
    document.getElementById('NogiRotativ').style.color = "#000000";
}
if(ImageNogiMac.style.opacity == 1.0){
    ImageNogiMac.style.opacity = 0.0
    document.getElementById('NogiMac').style.color = "#000000";
}
if(ImageNogiRapid.style.opacity == 1.0){
    ImageNogiRapid.style.opacity = 0.0
    document.getElementById('NogiRapid').style.color = "#000000";
}

let chbxNogi = document.querySelector("#Nogi")
if(chbxNogi.checked == false){
    chbxNogi.checked = true
    OpenImageNogi()
    NogiJakuz()
}
}

let NogiRapidPer = false
function NogiRapid(){
CloseAllKolVoNogiJakuz()
CloseAllKolVoNogiMac()
CloseAllKolVoNogiRotativ()
CloseAllKolVoNogiEvromik()
CloseAllKolVoNogiShiacu()
NogiRapidPer = true
let ImageNogiRapid = document.querySelector("#ImageNogiRapid")
let ImageNogiShiacu = document.querySelector("#ImageNogiShiacu")
let ImageNogiEvromik = document.querySelector("#ImageNogiEvromik")
let ImageNogiRotativ = document.querySelector("#ImageNogiRotativ")
let ImageNogiMac = document.querySelector("#ImageNogiMac")
let ImageNogiJakuz = document.querySelector("#ImageNogiJakuz")
document.getElementById('NogiRapid').style.color = "#0095ff";

if(ImageNogiRapid.style.opacity == 0.0){
    ImageNogiRapid.style.opacity = 1.0
}
/*else if(ImageNogiRapid.style.opacity == 1.0){
    ImageNogiRapid.style.opacity = 0.0
}*/

if(ImageNogiShiacu.style.opacity == 1.0){
    ImageNogiShiacu.style.opacity = 0.0
    document.getElementById('NogiShiacu').style.color = "#000000";
}
if(ImageNogiEvromik.style.opacity == 1.0){
    ImageNogiEvromik.style.opacity = 0.0
    document.getElementById('NogiEvromik').style.color = "#000000";
}
if(ImageNogiRotativ.style.opacity == 1.0){
    ImageNogiRotativ.style.opacity = 0.0
    document.getElementById('NogiRotativ').style.color = "#000000";
}
if(ImageNogiMac.style.opacity == 1.0){
    ImageNogiMac.style.opacity = 0.0
    document.getElementById('NogiMac').style.color = "#000000";
}
if(ImageNogiJakuz.style.opacity == 1.0){
    ImageNogiJakuz.style.opacity = 0.0
    document.getElementById('NogiJakuz').style.color = "#000000";
}

let chbxNogi = document.querySelector("#Nogi")
if(chbxNogi.checked == false){
    chbxNogi.checked = true
    OpenImageNogi()
    NogiRapid()
}
}

function NogiDopOff(){
let ImageNogiRapid = document.querySelector("#ImageNogiRapid")
let ImageNogiShiacu = document.querySelector("#ImageNogiShiacu")
let ImageNogiEvromik = document.querySelector("#ImageNogiEvromik")
let ImageNogiRotativ = document.querySelector("#ImageNogiRotativ")
let ImageNogiMac = document.querySelector("#ImageNogiMac")
let ImageNogiJakuz = document.querySelector("#ImageNogiJakuz")
document.getElementById('NogiRapid').style.color = "#000000";
document.getElementById('NogiShiacu').style.color = "#000000";
document.getElementById('NogiEvromik').style.color = "#000000";
document.getElementById('NogiRotativ').style.color = "#000000";
document.getElementById('NogiMac').style.color = "#000000";
document.getElementById('NogiJakuz').style.color = "#000000";

if(ImageNogiShiacu.style.opacity == 1.0){
    ImageNogiShiacu.style.opacity = 0.0
}
if(ImageNogiEvromik.style.opacity == 1.0){
    ImageNogiEvromik.style.opacity = 0.0
}
if(ImageNogiRotativ.style.opacity == 1.0){
    ImageNogiRotativ.style.opacity = 0.0
}
if(ImageNogiMac.style.opacity == 1.0){
    ImageNogiMac.style.opacity = 0.0
}
if(ImageNogiJakuz.style.opacity == 1.0){
    ImageNogiJakuz.style.opacity = 0.0
}
if(ImageNogiRapid.style.opacity == 1.0){
    ImageNogiRapid.style.opacity = 0.0
}
}


let ObshJakuzPer = false
function ObshJakuz(){
CloseAllKolVoObshRapid()
CloseAllKolVoObshMac()
ObshJakuzPer = true
let ImageObshJakuz = document.querySelector("#ImageObshJakuz")
let ImageObshRapid = document.querySelector("#ImageObshRapid")
let ImageObshMac = document.querySelector("#ImageObshMac")
let chbxObsh = document.querySelector("#Obsh")
document.getElementById('ObshJakuz').style.color = "#0095ff";
document.getElementById('ObshRapid').style.color = "#000000";
document.getElementById('ObshMac').style.color = "#000000";

if(chbxObsh.checked == true){

if(ImageObshJakuz.style.opacity == 0.0){
    ImageObshJakuz.style.opacity = 1.0
}

if(ImageObshRapid.style.opacity == 1.0){
    ImageObshRapid.style.opacity = 0.0
}
if(ImageObshMac.style.opacity == 1.0){
    ImageObshMac.style.opacity = 0.0
}
}
else
if(chbxObsh.checked == false){
    chbxObsh.checked = true
    OpenImageObsh()
    ObshJakuz()
}
}

let ObshRapidPer = false
function ObshRapid(){
ObshRapidPer = true
CloseAllKolVoObshMac()
CloseAllKolVoObshJakuz()
let ImageObshRapid = document.querySelector("#ImageObshRapid")
let ImageObshJakuz = document.querySelector("#ImageObshJakuz")
let ImageObshMac = document.querySelector("#ImageObshMac")
let chbxObsh = document.querySelector("#Obsh")
document.getElementById('ObshRapid').style.color = "#0095ff";
document.getElementById('ObshJakuz').style.color = "#000000";
document.getElementById('ObshMac').style.color = "#000000";

if(chbxObsh.checked == true){

if(ImageObshRapid.style.opacity == 0.0){
    ImageObshRapid.style.opacity = 1.0
}
/*else if(ImageObshRapid.style.opacity == 1.0){
    ImageObshRapid.style.opacity = 0.0
}*/
if(ImageObshJakuz.style.opacity == 1.0){
    ImageObshJakuz.style.opacity = 0.0
}
if(ImageObshMac.style.opacity == 1.0){
    ImageObshMac.style.opacity = 0.0
}
}
else
if(chbxObsh.checked == false){
    chbxObsh.checked = true
    OpenImageObsh()
    ObshRapid()
}
}

let ObshMacPer = false
function ObshMac(){
ObshMacPer = true
CloseAllKolVoObshJakuz()
CloseAllKolVoObshRapid()
let ImageObshMac = document.querySelector("#ImageObshMac")
let ImageObshRapid = document.querySelector("#ImageObshRapid")
let ImageObshJakuz = document.querySelector("#ImageObshJakuz")
document.getElementById('ObshMac').style.color = "#0095ff";
document.getElementById('ObshRapid').style.color = "#000000";
document.getElementById('ObshJakuz').style.color = "#000000";

let chbxObsh = document.querySelector("#Obsh")

if(chbxObsh.checked == true){

if(ImageObshMac.style.opacity == 0.0){
    ImageObshMac.style.opacity = 1.0
}
/*else if(ImageObshMac.style.opacity == 1.0){
    ImageObshMac.style.opacity = 0.0
}*/
if(ImageObshRapid.style.opacity == 1.0){
    ImageObshRapid.style.opacity = 0.0
}
if(ImageObshJakuz.style.opacity == 1.0){
    ImageObshJakuz.style.opacity = 0.0
}

if(chbxObsh.checked == false){chbxObsh.checked == true}

}
else
if(chbxObsh.checked == false){
    chbxObsh.checked = true
    OpenImageObsh()
    ObshMac()
}
}

function ObshDopOff(){
if(ImageObshRapid.style.opacity == 1.0){ImageObshRapid.style.opacity = 0.0}
if(ImageObshJakuz.style.opacity == 1.0){ImageObshJakuz.style.opacity = 0.0}
if(ImageObshMac.style.opacity == 1.0){ImageObshMac.style.opacity = 0.0}
document.getElementById('ObshMac').style.color = "#000000";
document.getElementById('ObshRapid').style.color = "#000000";
document.getElementById('ObshJakuz').style.color = "#000000";
}




let DonniyMagicPer = false
function DonniyMagic(){
CloseAllKolVoDonniyAero()
DonniyMagicPer = true
let ImageDonniyMagic = document.querySelector("#ImageDonniyMagic")
let ImageDonniyAero = document.querySelector("#ImageDonniyAero")
document.getElementById('DonniyMagic').style.color = "#0095ff";
document.getElementById('DonniyAero').style.color = "#000000";

let chbxDonniy = document.querySelector("#Donniy")

if(chbxDonniy.checked == true){
if(ImageDonniyMagic.style.opacity == 0.0){
    ImageDonniyMagic.style.opacity = 1.0
}
/*else if(ImageDonniyMagic.style.opacity == 1.0){
    ImageDonniyMagic.style.opacity = 0.0
}*/
if(ImageDonniyAero.style.opacity == 1.0){ImageDonniyAero.style.opacity = 0.0}
}
else
if(chbxDonniy.checked == false){
    chbxDonniy.checked = true
    OpenImageDonniy()
    DonniyMagic()
}
}

let DonniyAeroPer = false
function DonniyAero(){
CloseAllKolVoDonniyMagic()
DonniyAeroPer = true
let ImageDonniyAero = document.querySelector("#ImageDonniyAero")
let ImageDonniyMagic = document.querySelector("#ImageDonniyMagic")
document.getElementById('DonniyMagic').style.color = "#000000";
document.getElementById('DonniyAero').style.color = "#0095ff";

let chbxDonniy = document.querySelector("#Donniy")

if(chbxDonniy.checked == true){
if(ImageDonniyAero.style.opacity == 0.0){
    ImageDonniyAero.style.opacity = 1.0
}
/*else if(ImageDonniyAero.style.opacity == 1.0){
    ImageDonniyAero.style.opacity = 0.0
}*/
if(ImageDonniyMagic.style.opacity == 1.0){ImageDonniyMagic.style.opacity = 0.0}
}
else
if(chbxDonniy.checked == false){
    chbxDonniy.checked = true
    OpenImageDonniy()
    DonniyAero()
}
}

function DonniyDopOff(){
    let ImageDonniyAero = document.querySelector("#ImageDonniyAero")
    let ImageDonniyMagic = document.querySelector("#ImageDonniyMagic")
    document.getElementById('DonniyMagic').style.color = "#000000";
    document.getElementById('DonniyAero').style.color = "#000000";
    if(ImageDonniyAero.style.opacity == 1.0){ImageDonniyAero.style.opacity = 0.0}
    if(ImageDonniyMagic.style.opacity == 1.0){ImageDonniyMagic.style.opacity = 0.0}
}



function RuchkiMetal(){
let ImageRuchkiMetal = document.querySelector("#ImageRuchkiMetal")
let ImageRuchkiPoluret = document.querySelector("#ImageRuchkiPoluret")
let chbxRuchki = document.querySelector("#Ruchki")
document.getElementById('RuchkiMetal').style.color = "#0095ff";
document.getElementById('RuchkiPoluret').style.color = "#000000";

if(chbxRuchki.checked == true){
if(ImageRuchkiMetal.style.opacity == 0.0){
    ImageRuchkiMetal.style.opacity = 1.0
}
/*else if(ImageRuchkiMetal.style.opacity == 1.0){
    ImageRuchkiMetal.style.opacity = 0.0
}*/
if(ImageRuchkiPoluret.style.opacity == 1.0){ImageRuchkiPoluret.style.opacity = 0.0}
}
else
if(chbxRuchki.checked == false){
    chbxRuchki.checked = true
    OpenImageRuchki()
    RuchkiMetal()
}
}

function RuchkiPoluret(){
let ImageRuchkiPoluret = document.querySelector("#ImageRuchkiPoluret")
let ImageRuchkiMetal = document.querySelector("#ImageRuchkiMetal")
let chbxRuchki = document.querySelector("#Ruchki")
document.getElementById('RuchkiMetal').style.color = "#000000";
document.getElementById('RuchkiPoluret').style.color = "#0095ff";

if(chbxRuchki.checked == true){
if(ImageRuchkiPoluret.style.opacity == 0.0){
    ImageRuchkiPoluret.style.opacity = 1.0
}
/*else if(ImageRuchkiPoluret.style.opacity == 1.0){
    ImageRuchkiPoluret.style.opacity = 0.0
}*/
if(ImageRuchkiMetal.style.opacity == 1.0){
    ImageRuchkiMetal.style.opacity = 0.0
}
}
else
if(chbxRuchki.checked == false){
    chbxRuchki.checked = true
    OpenImageRuchki()
    RuchkiPoluret()
}
}

function RuchkiDopOff(){
    ImageRuchkiMetal.style.opacity = 0.0
    ImageRuchkiPoluret.style.opacity = 0.0
    document.getElementById('RuchkiMetal').style.color = "#000000";
    document.getElementById('RuchkiPoluret').style.color = "#000000";
}

function ClickFitness(){
    ButtonClean()
    ObshJakuzPer = true
    KolVoObshJakuz6()
    let chbxObsh = document.querySelector("#Obsh")
    let ramka_vibora  = document.querySelector("#ramka_viboraFitness")
    ramka_vibora.style.opacity = 1.0

    let ramka_viboraRelax  = document.querySelector("#ramka_viboraRelax")
    ramka_viboraRelax.style.opacity = 0.0

    let ramka_viboraMagic  = document.querySelector("#ramka_viboraMagic")
    ramka_viboraMagic.style.opacity = 0.0

    let ramka_viboraHelth  = document.querySelector("#ramka_viboraHelth")
    ramka_viboraHelth.style.opacity = 0.0

    let ramka_viboraSPA  = document.querySelector("#ramka_viboraSPA")
    ramka_viboraSPA.style.opacity = 0.0

    OpenImageObsh()
    chbxObsh = true
    ObshJakuz()

    let chbxSpina = document.querySelector("#Spina")
    let chbxNogi = document.querySelector("#Nogi")
    let chbxDonniy = document.querySelector("#Donniy")
    let chbxAroma = document.querySelector("#Aroma")
    let chbxTurbo = document.querySelector("#Turbo")
    let chbxHromo = document.querySelector("#Hromo")
    let chbxAquasound = document.querySelector("#Aquasound")

    if(chbxSpina.checked == true){
        chbxSpina.checked = false
        CloseImageSpina()
    }
    if(chbxNogi.checked == true){
        chbxNogi.checked = false
        CloseImageNogi()
    }
    if(chbxDonniy.checked == true){
        chbxDonniy.checked = false
        CloseImageDonniy()
    }
    if(chbxAroma.checked == true){
        chbxAroma.checked = false
        CloseImageAroma()
    }
    if(chbxTurbo.checked == true){
        chbxTurbo.checked = false
        CloseImageTurbo()
    }
    if(chbxHromo.checked == true){
        chbxHromo.checked = false
        CloseImageHromo()
    }
    if(chbxAquasound.checked == true){
        chbxAquasound.checked = false
        CloseImageAquasound()
    }
}

function ClickRelax(){
    ButtonClean()
    SpinaEvromikPer = true;
    ObshJakuzPer = true
    NogiEvromikPer = true
    let chbxSpina = document.querySelector("#Spina")
    let chbxNogi = document.querySelector("#Nogi")
    let chbxObsh = document.querySelector("#Obsh")
    let ramka_viboraRelax = document.querySelector("#ramka_viboraRelax")
    ramka_viboraRelax.style.opacity = 1.0

    let ramka_vibora  = document.querySelector("#ramka_viboraFitness")
    ramka_vibora.style.opacity = 0.0

    let ramka_viboraMagic  = document.querySelector("#ramka_viboraMagic")
    ramka_viboraMagic.style.opacity = 0.0

    let ramka_viboraHelth  = document.querySelector("#ramka_viboraHelth")
    ramka_viboraHelth.style.opacity = 0.0

    let ramka_viboraSPA  = document.querySelector("#ramka_viboraSPA")
    ramka_viboraSPA.style.opacity = 0.0

    OpenImageObsh()
    chbxObsh.checked = true
    ObshJakuz()

    OpenImageSpina()
    chbxSpina.checked = true
    SpinaEvromik()

    OpenImageNogi()
    chbxNogi.checked = true
    NogiEvromik()

    let chbxDonniy = document.querySelector("#Donniy")
    let chbxAroma = document.querySelector("#Aroma")
    let chbxTurbo = document.querySelector("#Turbo")
    let chbxHromo = document.querySelector("#Hromo")
    let chbxAquasound = document.querySelector("#Aquasound")

    if(chbxDonniy.checked == true){
        chbxDonniy.checked = false
        CloseImageDonniy()
    }
    if(chbxAroma.checked == true){
        chbxAroma.checked = false
        CloseImageAroma()
    }
    if(chbxTurbo.checked == true){
        chbxTurbo.checked = false
        CloseImageTurbo()
    }
    if(chbxHromo.checked == true){
        chbxHromo.checked = false
        CloseImageHromo()
    }
    if(chbxAquasound.checked == true){
        chbxAquasound.checked = false
        CloseImageAquasound()
    }

    KolVoSpinaEvromik6()
    KolVoObshJakuz6()
    KolVoNogiEvromik4()
}

function ClickMagic(){
    ButtonClean()
    DonniyMagicPer = true;
    let chbxDonniy = document.querySelector("#Donniy")
    let chbxHromo = document.querySelector("#Hromo")
    let ramka_viboraMagic = document.querySelector("#ramka_viboraMagic")
    ramka_viboraMagic.style.opacity = 1.0

    let ramka_vibora  = document.querySelector("#ramka_viboraFitness")
    ramka_vibora.style.opacity = 0.0

    let ramka_viboraRelax  = document.querySelector("#ramka_viboraRelax")
    ramka_viboraRelax.style.opacity = 0.0

    let ramka_viboraHelth  = document.querySelector("#ramka_viboraHelth")
    ramka_viboraHelth.style.opacity = 0.0

    let ramka_viboraSPA  = document.querySelector("#ramka_viboraSPA")
    ramka_viboraSPA.style.opacity = 0.0

    OpenImageDonniy()
    chbxDonniy.checked = true
    DonniyMagic()

    OpenImageHromo()
    chbxHromo.checked = true

    let chbxSpina = document.querySelector("#Spina")
    let chbxNogi = document.querySelector("#Nogi")
    let chbxObsh = document.querySelector("#Obsh")
    let chbxAroma = document.querySelector("#Aroma")
    let chbxTurbo = document.querySelector("#Turbo")
    let chbxAquasound = document.querySelector("#Aquasound")

    if(chbxSpina.checked == true){
        chbxSpina.checked = false
        CloseImageSpina()
    }
    if(chbxNogi.checked == true){
        chbxNogi.checked = false
        CloseImageNogi()
    }
    if(chbxObsh.checked == true){
        chbxObsh.checked = false
        CloseImageObsh()
    }
    if(chbxAroma.checked == true){
        chbxAroma.checked = false
        CloseImageAroma()
    }
    if(chbxTurbo.checked == true){
        chbxTurbo.checked = false
        CloseImageTurbo()
    }
    if(chbxAquasound.checked == true){
        chbxAquasound.checked = false
        CloseImageAquasound()
    }
    KolVoDonniyMagic10()
}

function ClickHelth(){
    ButtonClean()
    ObshJakuzPer = true
    DonniyAeroPer = true
    let chbxObsh = document.querySelector("#Obsh")
    let chbxDonniy = document.querySelector("#Donniy")
    let chbxTurbo = document.querySelector("#Turbo")
    let chbxHromo = document.querySelector("#Hromo")
    let ramka_viboraHelth = document.querySelector("#ramka_viboraHelth")
    ramka_viboraHelth.style.opacity = 1.0

    let ramka_vibora  = document.querySelector("#ramka_viboraFitness")
    ramka_vibora.style.opacity = 0.0

    let ramka_viboraRelax  = document.querySelector("#ramka_viboraRelax")
    ramka_viboraRelax.style.opacity = 0.0

    let ramka_viboraMagic  = document.querySelector("#ramka_viboraMagic")
    ramka_viboraMagic.style.opacity = 0.0

    let ramka_viboraSPA  = document.querySelector("#ramka_viboraSPA")
    ramka_viboraSPA.style.opacity = 0.0

    chbxObsh.checked = true
    OpenImageObsh()
    ObshJakuz()

    chbxDonniy.checked = true
    OpenImageDonniy()
    DonniyAero()

    chbxTurbo.checked = true
    OpenImageTurbo()

    chbxHromo.checked = true
    OpenImageHromo()

    let chbxSpina = document.querySelector("#Spina")
    let chbxNogi = document.querySelector("#Nogi")
    let chbxAroma = document.querySelector("#Aroma")
    let chbxAquasound = document.querySelector("#Aquasound")

    if(chbxSpina.checked == true){
        chbxSpina.checked = false
        CloseImageSpina()
    }
    if(chbxNogi.checked == true){
        chbxNogi.checked = false
        CloseImageNogi()
    }
    if(chbxAroma.checked == true){
        chbxAroma.checked = false
        CloseImageAroma()
    }
    if(chbxAquasound.checked == true){
        chbxAquasound.checked = false
        CloseImageAquasound()
    }
    KolVoObshJakuz6()
    KolVoDonniyAero10()
}

function ClickSPA(){
    ButtonClean()
    SpinaShiacuPer = true
    NogiRotativPer = true
    ObshJakuzPer = true
    DonniyMagicPer = true
    let chbxSpina = document.querySelector("#Spina")
    let chbxNogi = document.querySelector("#Nogi")
    let chbxObsh = document.querySelector("#Obsh")
    let chbxDonniy = document.querySelector("#Donniy")
    let chbxAroma = document.querySelector("#Aroma")
    let chbxTurbo = document.querySelector("#Turbo")
    let chbxHromo = document.querySelector("#Hromo")
    let ramka_viboraSPA = document.querySelector("#ramka_viboraSPA")
    ramka_viboraSPA.style.opacity = 1.0

    let ramka_vibora  = document.querySelector("#ramka_viboraFitness")
    ramka_vibora.style.opacity = 0.0

    let ramka_viboraRelax  = document.querySelector("#ramka_viboraRelax")
    ramka_viboraRelax.style.opacity = 0.0

    let ramka_viboraMagic  = document.querySelector("#ramka_viboraMagic")
    ramka_viboraMagic.style.opacity = 0.0

    let ramka_viboraHelth  = document.querySelector("#ramka_viboraHelth")
    ramka_viboraHelth.style.opacity = 0.0

    chbxSpina.checked = true
    OpenImageSpina()
    SpinaShiacu()

    chbxNogi.checked = true
    OpenImageNogi()
    NogiRotativ()

    chbxObsh.checked = true
    OpenImageObsh()
    ObshJakuz()

    chbxDonniy.checked = true
    OpenImageDonniy()
    DonniyMagic()

    chbxAroma.checked = true
    OpenImageAroma()

    chbxTurbo.checked = true
    OpenImageTurbo()

    chbxHromo.checked = true
    OpenImageHromo()

    let chbxAquasound = document.querySelector("#Aquasound")

    if(chbxAquasound.checked == true){
        chbxAquasound.checked = false
        CloseImageAquasound()
    }
    KolVoSpinaShiacu12()
    KolVoNogiRotativ4()
    KolVoObshJakuz6()
    KolVoDonniyMagic8()
}
Clean
function ButtonClean(){
    let ramka_viboraFitness = document.querySelector("#ramka_viboraFitness")
    ramka_viboraFitness.style.opacity = 0.0

    let ramka_viboraRelax = document.querySelector("#ramka_viboraRelax")
    ramka_viboraRelax.style.opacity = 0.0

    let ramka_viboraMagic = document.querySelector("#ramka_viboraMagic")
    ramka_viboraMagic.style.opacity = 0.0

    let ramka_viboraSPA = document.querySelector("#ramka_viboraSPA")
    ramka_viboraSPA.style.opacity = 0.0

    let ramka_viboraHelth  = document.querySelector("#ramka_viboraHelth")
    ramka_viboraHelth.style.opacity = 0.0

    let Spina = document.querySelector("#Spina")
    Spina.checked = false
    CloseImageSpina()

    let Nogi = document.querySelector("#Nogi")
    Nogi.checked = false
    CloseImageNogi()

    let Obsh = document.querySelector("#Obsh")
    Obsh.checked = false
    CloseImageObsh()

    let Donniy = document.querySelector("#Donniy")
    Donniy.checked = false
    CloseImageDonniy()

    let Aroma = document.querySelector("#Aroma")
    Aroma.checked = false
    CloseImageAroma()

    let Turbo = document.querySelector("#Turbo")
    Turbo.checked = false
    CloseImageTurbo()

    let Hromo = document.querySelector("#Hromo")
    Hromo.checked = false
    CloseImageHromo()

    let Aquasound = document.querySelector("#Aquasound")
    Aquasound.checked = false
    CloseImageAquasound()

    let Ruchki = document.querySelector("#Ruchki")
    Ruchki.checked = false
    CloseImageRuchki()

    let Smes = document.querySelector("#Smes")
    Smes.checked = false
    CloseImageSmes()

    let Podgol = document.querySelector("#Podgol")
    Podgol.checked = false
    CloseImagePodgol()

    CloseKolVoSpinaShiacu()

    CloseAllKolVoSpinaEvromik()

    CloseAllKolVoSpinaRotativ()

    CloseAllKolVoNogiShiacu()

    CloseAllKolVoNogiEvromik()

    CloseAllKolVoNogiRotativ()

    CloseAllKolVoNogiMac()

    CloseAllKolVoNogiJakuz()

    CloseAllKolVoNogiRapid()

    CloseAllKolVoObshJakuz()

    CloseAllKolVoObshMac()

    CloseAllKolVoObshRapid()

    CloseAllKolVoDonniyMagic()

    CloseAllKolVoDonniyAero()

    let DialogDug = document.querySelector("#DialogCloudDug")
    DialogDug.style.opacity = 0.0
}

function Test123(){
 console.log ("Привет мир!");
}

function KolVoSpinaShiacu12(){
    if(SpinaShiacuPer == true){
        CloseKolVoSpinaShiacu()
        document.getElementById('KolVoSpinaShiacu12').style.color = "#0095ff";
    }
}

function CloseKolVoSpinaShiacu(){
    SpinaShiacuPer = false
    document.getElementById('KolVoSpinaShiacu12').style.color = "#000000";
}

function KolVoSpinaEvromik2(){
    //console.log(SpinaEvromikPer)
    if(SpinaEvromikPer == true){
        CloseKolVoSpinaEvromik()
        document.getElementById('KolVoSpinaEvromik2').style.color = "#0095ff";
    }
}

function KolVoSpinaEvromik4(){
    //console.log(SpinaEvromikPer)
    if(SpinaEvromikPer == true){
        CloseKolVoSpinaEvromik()
        document.getElementById('KolVoSpinaEvromik4').style.color = "#0095ff";
    }
}

function KolVoSpinaEvromik6(){
    if(SpinaEvromikPer == true){
        CloseKolVoSpinaEvromik()
        document.getElementById('KolVoSpinaEvromik6').style.color = "#0095ff";
    }
}

function CloseAllKolVoSpinaEvromik(){
    SpinaEvromikPer = false;
    document.getElementById('KolVoSpinaEvromik2').style.color = "#000000";
    document.getElementById('KolVoSpinaEvromik4').style.color = "#000000";
    document.getElementById('KolVoSpinaEvromik6').style.color = "#000000";
}

function CloseKolVoSpinaEvromik(){
    document.getElementById('KolVoSpinaEvromik2').style.color = "#000000";
    document.getElementById('KolVoSpinaEvromik4').style.color = "#000000";
    document.getElementById('KolVoSpinaEvromik6').style.color = "#000000";
}

function KolVoSpinaRotativ2(){
    if(SpinaRotativPer == true){
        CloseKolVoSpinaRotativ()
        document.getElementById('KolVoSpinaRotativ2').style.color = "#0095ff";
    }
}

function KolVoSpinaRotativ4(){
    if(SpinaRotativPer == true){
        CloseKolVoSpinaRotativ()
        document.getElementById('KolVoSpinaRotativ4').style.color = "#0095ff";
    }
}

function KolVoSpinaRotativ6(){
    if(SpinaRotativPer == true){
        CloseKolVoSpinaRotativ()
        document.getElementById('KolVoSpinaRotativ6').style.color = "#0095ff";
    }
}

function CloseKolVoSpinaRotativ(){
    document.getElementById('KolVoSpinaRotativ2').style.color = "#000000";
    document.getElementById('KolVoSpinaRotativ4').style.color = "#000000";
    document.getElementById('KolVoSpinaRotativ6').style.color = "#000000";
}

function CloseAllKolVoSpinaRotativ(){
    SpinaRotativPer = false;
    document.getElementById('KolVoSpinaRotativ2').style.color = "#000000";
    document.getElementById('KolVoSpinaRotativ4').style.color = "#000000";
    document.getElementById('KolVoSpinaRotativ6').style.color = "#000000";
}

function KolVoNogiShiacu6(){
    if(NogiShiacuPer == true){
        document.getElementById('KolVoNogiShiacu6').style.color = "#0095ff";
    }
}

function CloseAllKolVoNogiShiacu(){
    NogiShiacuPer = false
    document.getElementById('KolVoNogiShiacu6').style.color = "#000000";
}

function KolVoNogiEvromik2(){
    if(NogiEvromikPer == true){
        CloseKolVoNogiEvromik()
        document.getElementById('KolVoNogiEvromik2').style.color = "#0095ff";
    }
}

function KolVoNogiEvromik4(){
    if(NogiEvromikPer == true){
        CloseKolVoNogiEvromik()
        document.getElementById('KolVoNogiEvromik4').style.color = "#0095ff";
    }
}

function CloseAllKolVoNogiEvromik(){
    NogiEvromikPer = false
    document.getElementById('KolVoNogiEvromik2').style.color = "#000000";
    document.getElementById('KolVoNogiEvromik4').style.color = "#000000";
}

function CloseKolVoNogiEvromik(){
    document.getElementById('KolVoNogiEvromik2').style.color = "#000000";
    document.getElementById('KolVoNogiEvromik4').style.color = "#000000";
}

function KolVoNogiRotativ2(){
    if(NogiRotativPer == true){
        CloseKolVoNogiRotativ()
        document.getElementById('KolVoNogiRotativ2').style.color = "#0095ff";
    }
}

function KolVoNogiRotativ4(){
    if(NogiRotativPer == true){
        CloseKolVoNogiRotativ()
        document.getElementById('KolVoNogiRotativ4').style.color = "#0095ff";
    }
}

function CloseAllKolVoNogiRotativ(){
    NogiRotativPer = false
    document.getElementById('KolVoNogiRotativ2').style.color = "#000000";
    document.getElementById('KolVoNogiRotativ4').style.color = "#000000";
}

function CloseKolVoNogiRotativ(){
    document.getElementById('KolVoNogiRotativ2').style.color = "#000000";
    document.getElementById('KolVoNogiRotativ4').style.color = "#000000";
}

function KolVoNogiMac2(){
    if(NogiMacPer == true){
        CloseAllKolVoNogiMac()
        document.getElementById('KolVoNogiMac2').style.color = "#0095ff";
    }
}

function CloseAllKolVoNogiMac(){
    NogiMacPer = false
    document.getElementById('KolVoNogiMac2').style.color = "#000000";
}

function KolVoNogiJakuz2(){
    if(NogiJakuzPer == true){
        CloseAllKolVoNogiJakuz()
        document.getElementById('KolVoNogiJakuz2').style.color = "#0095ff";
    }
}

function CloseAllKolVoNogiJakuz(){
    NogiJakuzPer = false
    document.getElementById('KolVoNogiJakuz2').style.color = "#000000";
}

function KolVoNogiRapid2(){
    if(NogiRapidPer == true){
        CloseAllKolVoNogiRapid()
        document.getElementById('KolVoNogiRapid2').style.color = "#0095ff";
    }
}

function CloseAllKolVoNogiRapid(){
    NogiRapidPer = false
    document.getElementById('KolVoNogiRapid2').style.color = "#000000";
}

function KolVoObshJakuz6(){
    if(ObshJakuzPer == true){
        CloseAllKolVoObshJakuz()
        document.getElementById('KolVoObshJakuz6').style.color = "#0095ff";
    }
}

function CloseAllKolVoObshJakuz(){
    ObshJakuzPer = false
    document.getElementById('KolVoObshJakuz6').style.color = "#000000";
}

function KolVoObshMac6(){
    if(ObshMacPer == true){
        CloseAllKolVoObshMac()
        document.getElementById('KolVoObshMac6').style.color = "#0095ff";
    }
}

function CloseAllKolVoObshMac(){
    ObshMacPer = false
    document.getElementById('KolVoObshMac6').style.color = "#000000";
}

function KolVoObshRapid6(){
    if(ObshRapidPer == true){
        CloseAllKolVoObshRapid()
        document.getElementById('KolVoObshRapid6').style.color = "#0095ff";
    }
}

function CloseAllKolVoObshRapid(){
    ObshRapidPer = false
    document.getElementById('KolVoObshRapid6').style.color = "#000000";
}

function KolVoDonniyMagic8(){
    if(DonniyMagicPer == true){
        CloseKolVoDonniyMagic()
        document.getElementById('KolVoDonniyMagic8').style.color = "#0095ff";
    }
}

function KolVoDonniyMagic10(){
    if(DonniyMagicPer == true){
        CloseKolVoDonniyMagic()
        document.getElementById('KolVoDonniyMagic10').style.color = "#0095ff";
    }
}

function CloseKolVoDonniyMagic(){
    document.getElementById('KolVoDonniyMagic8').style.color = "#000000";
    document.getElementById('KolVoDonniyMagic10').style.color = "#000000";
}

function CloseAllKolVoDonniyMagic(){
    DonniyMagicPer = false
    document.getElementById('KolVoDonniyMagic8').style.color = "#000000";
    document.getElementById('KolVoDonniyMagic10').style.color = "#000000";
}

function KolVoDonniyAero10(){
    if(DonniyAeroPer == true){
        CloseKolVoDonniyAero()
        document.getElementById('KolVoDonniyAero10').style.color = "#0095ff";
    }
}

function KolVoDonniyAero12(){
    if(DonniyAeroPer == true){
        CloseKolVoDonniyAero()
        document.getElementById('KolVoDonniyAero12').style.color = "#0095ff";
    }
}

function CloseKolVoDonniyAero(){
    document.getElementById('KolVoDonniyAero10').style.color = "#000000";
    document.getElementById('KolVoDonniyAero12').style.color = "#000000";
}

function CloseAllKolVoDonniyAero(){
    DonniyAeroPer = false
    document.getElementById('KolVoDonniyAero10').style.color = "#000000";
    document.getElementById('KolVoDonniyAero12').style.color = "#000000";
}

function AlertDialogDug(){
    let DialogDug = document.querySelector("#DialogCloudDug")
    DialogDug.style.opacity = 1.0
}

function StyleAlertTxtNogi(){
    let AlertTxt = document.querySelector("#AlertDialogTxtNogi")
    AlertTxt.style.opacity = 1.0
}