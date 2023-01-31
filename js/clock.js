function name() {
    let enterName=prompt("Adınızı Giriniz")
    let nameSurname=document.getElementById("myName")
    nameSurname.innerHTML="Merhaba <strong>"+enterName.toUpperCase()+"</strong> Hoşgeldin!"
}
function date() {
    let date=new Date()
    let dateDay=date.getDay()
    let dateHours=date.getHours()
    let dateMinutes=date.getMinutes()
    let dateSeconds=date.getSeconds()
    var gunler= ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];
    if (dateHours<10)
        dateHours="0"+dateHours
    if (dateMinutes<10)
        dateMinutes="0"+dateMinutes
    if (dateSeconds<10)
        dateSeconds="0"+dateSeconds
    let clockArea=document.getElementById("detail")
    clockArea.innerHTML='<div class="clock" >'+dateHours+":"+dateMinutes+":"+dateSeconds+" "+gunler[dateDay]+'</div><div class="text2 text-center"> tarihinde <strong>Kodluyoruz Frontend Web Development Patikası</strong>nın Javascript bölümü 1. Ödevindesiniz.</div>'
    var time
    time = setInterval('date()', 1000);
}

/*Merhaba, Cihan! Hoş geldin!
12:43:38 Çarşamba
tarihinde Kodluyoruz Frontend Web Development Patikası'nın Javascript bölümü 1. Ödevindesiniz.



<div class="text1 text-center">
        Merhaba, <strong><span id="myName"></span></strong>! Hoş geldin!
      </div>
      <div id="myClock" class="clock" onload="showTime()"></div>
      <div class="text2 text-center">
        tarihinde
        <strong>Kodluyoruz Frontend Web Development Patikası</strong>'nın
        Javascript bölümü 1. Ödevindesiniz.
      </div>
*/