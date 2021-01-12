const tunniplaan = new Tunniplaan(346, '2019-04-01');
const kl = new Kasutajaliides();
//default
document.addEventListener('DOMContentLoaded', valjastatudTunniplaan);
//change name
const changeBtn = document.querySelector('#w-teacher');
changeBtn.addEventListener('click', changeTeacher);


function valjastatudTunniplaan(){
    tunniplaan.opetajaTunniplaaniAndmed().then(tunnid => {
        kl.printNadalakp(kl.nadalaKuupaevad(tunnid));
        kl.print(tunnid);
    }).catch(viga => console.log(viga));
}

function changeTeacher(){
    const teacher = document.querySelector('#teacher').value;
    tunniplaan.changeTeacherName(teacher);
    valjastatudTunniplaan();
    $('#changeTeacher').modal('hide');
}

