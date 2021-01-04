class Tunniplaan{
    constructor(opetaja, kp) {
        this.opetaja = opetaja;
        this.kp = kp;
    }

    async opetajaTunniplaaniAndmed(){
        const vastus = await fetch('https://siseveeb.khk.ee/veebilehe_andmed/tunniplaan?opetaja=' +
        this.opetaja + '&nadal=' + this.kp);
        const andmed = await vastus.json();
        return andmed;
    }
}