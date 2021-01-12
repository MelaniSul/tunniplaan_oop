const tunniplaan = new Tunniplaan(346, '2019-04-01');
const kl = new Kasutajaliides();

document.addEventListener('DOMContentLoaded', valjastatudTunniplaan);
const changeBtn = document.querySelector('#w-change');
changeBtn.addEventListener('click', changeWeather);


function valjastatudTunniplaan(){
    tunniplaan.opetajaTunniplaaniAndmed().then(tunnid => {
        kl.printNadalakp(kl.nadalaKuupaevad(tunnid));
        kl.print(tunnid);
    }).catch(viga => console.log(viga));
}

function changeWeather(){
    const city = document.querySelector('#teacher').value;
    tunniplaan.changeTeacher(city);
    valjastatudTunniplaan();
    $('#changeCity').modal('hide');
}
