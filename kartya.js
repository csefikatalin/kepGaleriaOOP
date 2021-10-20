class Kartya {
    constructor(kepem, index, szuloelem) {
        /*  szuloelem.append("<div>"); */
        let nagykep = document.createElement("div");
        szuloelem.append(nagykep);
        this.tarolo = szuloelem.children("div:last");
        this.tarolo.addClass("kartya");
        let cim = document.createElement("h3");
        this.tarolo.append(cim);
        let kep = document.createElement("img");
        this.tarolo.append(kep);
        let leiras = document.createElement("p");
        this.tarolo.append(leiras);

        this.kepCim = this.tarolo.children("h3");
        this.kepImg = this.tarolo.children("img");
        this.kepLeiras = this.tarolo.children("p");
        this.index = index;
        this.setAktKep(kepem);
        this.tarolo.on("click", () => {
            this.kattintasTrigger();
        });
    }
    setAktKep(kepem) {
        this.aktKep = kepem;
        this.kepCim.text(this.aktKep.cim);
        this.kepLeiras.text(this.aktKep.leiras);
        this.kepImg.attr("src", this.aktKep.kep);
    }

    kattintasTrigger() {
        let esemeny = new CustomEvent("kepvaltas", { detail: this });
        window.dispatchEvent(esemeny);
    }
}
