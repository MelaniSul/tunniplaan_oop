const tunniplaan = new Tunniplaan(346, '2019-04-01');

document.addEventListener('DOMContentLoaded', valjastatudTunniplaan);

function valjastatudTunniplaan(){
    tunniplaan.opetajaTunniplaaniAndmed().then(tunnid => {
        console.log(tunnid);
    }).catch(viga => console.log(viga));
}
