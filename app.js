const tunniplaan = new Tunniplaan(346, '2019-04-01');
const kl = new Kasutajaliides();

document.addEventListener('DOMContentLoaded', valjastatudTunniplaan);

function valjastatudTunniplaan(){
    tunniplaan.opetajaTunniplaaniAndmed().then(tunnid => {
        kl.printNadalakp(kl.nadalaKuupaevad(tunnid));
    }).catch(viga => console.log(viga));
}
