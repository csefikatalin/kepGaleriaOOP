$(function () {
    const galeriaTomb = [
        {
            cim: "Szentkirályszabadja",
            kep: "kepek/DSC3977.jpeg",
            leiras: "Vasarelly stílusban",
        },
        {
            cim: "Tisza melletti kerékpárút",
            kep: "kepek/DSC5109.jpeg",
            leiras: "Tisza melletti kerékpárút esőben",
        },
        {
            cim: "Kis tó szobnál",
            kep: "kepek/DSC5826.jpeg",
            leiras: "Tükröződés",
        },
    ];
    const nagyKartyaSzulo = $("#fokep");
    const galeria = $("#galeria");
    const maxIndex = galeriaTomb.length;
    let aktIndex = 0;
    const nagyKartya = new Kartya(
        galeriaTomb[aktIndex],
        aktIndex,
        nagyKartyaSzulo
    );
    /**Galéria képeinek generálása */
    galeriaTomb.forEach((elem, index) => {
        const galeriaKep = new KisKartya(elem, index, galeria);
    });

    $(window).on("kepvaltas", (event) => {
        let dataID = event.detail.index;
        console.log(dataID);
        aktIndex = dataID;
        nagyKartya.setAktKep(galeriaTomb[dataID]);
    });

    $("#bal").on("click", function () {
        aktIndex--;
        if (aktIndex < 0) {
            aktIndex = maxIndex - 1;
        }
        nagyKartya.setAktKep(galeriaTomb[aktIndex]);
    });
    $("#jobb").on("click", function () {
        aktIndex++;
        if (aktIndex > maxIndex - 1) {
            aktIndex = 0;
        }
        nagyKartya.setAktKep(galeriaTomb[aktIndex]);
    });
});
