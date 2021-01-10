class Kasutajaliides{
    printTund(tund, paev){
        const tunniNr = `.tund-${tund.tund}`;
        const paevaNimetus = `.${paev}`;
        const rida = document.querySelectorAll(tunniNr);
        for(let i=0; i<rida.length; i++){
            const veerg = rida[i].querySelector(paevaNimetus);
            if(i % 2 == 0){
                veerg.classList.add('timetable-workout');
                veerg.appendChild(document.createTextNode(`${tund.aine} - ${tund.grupp}`));
            }else{
                veerg.classList.add('timetable-workout');
                veerg.appendChild(document.createTextNode(tund.ruum));
            }
        }
        console.log(tunniNr);
}

    print(tunniplaan){
        const nadalaAlgus = tunniplaaniAndmed.nadal;
        const nadalaKp = Object.values(this.nadalaKuupaevad(tunniplaan));
        const nadalaTunnid = tunniplaan.tunnid;
        const nadalaToopaevad = Object.keys(nadalaTunnid);
        const nadalaPaevaNimetused = Object.keys(this.nadalaKuupaevad(tunniplaan));
        for(let i = 0; i < nadalaPaevaNimetused.length; i++){
            for(let j = 0; j < nadalaToopaevad.length; j++){
                if(nadalaKp[i] === nadalaToopaevad[j]){
                    console.log(nadalaKp[i] + '-tunnid olemas');
                    const paevaTunnid = Object.values(nadalaTunnid[j]);
                    for(let t = 0; t < paevaTunnid.length; t++){
                        const tund = paevaTunnid[t];
                        const paev = nadalaPaevaNimetused[i];
                    }
                }
            }
        }
    }

    printNadalakp(nadalaAndmed){
      const e = document.querySelector('#e');
      e.textContent = `E ${nadalaAndmed.e}`;
        const t = document.querySelector('#t');
        t.textContent = `T ${nadalaAndmed.t}`;
        const k = document.querySelector('#k');
        k.textContent = `K ${nadalaAndmed.k}`;
        const n = document.querySelector('#n');
        n.textContent = `N ${nadalaAndmed.n}`;
        const r = document.querySelector('#r');
        r.textContent = `R ${nadalaAndmed.r}`;
        const l = document.querySelector('#l');
        l.textContent = `L ${nadalaAndmed.l}`;
        const p = document.querySelector('#p');
        p.textContent = `P ${nadalaAndmed.p}`;
    }

    nadalaKuupaevad(tunniplaaniAndmed){
        const nadalaAlgus = tunniplaaniAndmed.nadal;
        const nadalaPaevad = ['e','t','k','n','r','l','p'];
        const nadal = {}
        let tananePaev = new Date(nadalaAlgus);
        for(let i = 0; i<nadalaPaevad.length; i++){
            nadal[nadalaPaevad[i]] = tananePaev.toISOString().split('T')[0];
            const jargminePaev = new Date(tananePaev);
            jargminePaev.setDate(tananePaev.getDate() + 1);
            tananePaev = new Date(jargminePaev);
        }
        return nadal;
    }
}