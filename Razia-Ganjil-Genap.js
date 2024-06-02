function kenaRazia(date, data) {
    let hasilRazia = [];
  
    for (let i = 0; i < data.length; i++) {
      let kendaraan = data[i];
      if (kendaraan.type === "Mobil") {
        let platNomor = kendaraan.plat.split(' ')[1];
        let nomorBelakang = parseInt(platNomor[platNomor.length - 1]);
        let isGanjil = date % 2 !== 0;
        let tilang = 0;
  
        for (let j = 0; j < kendaraan.rute.length; j++) {
          let rute = kendaraan.rute[j];
          if (
            (isGanjil && nomorBelakang % 2 === 0 && (rute === "Gajah Mada" || rute === "Hayam Wuruk" || rute === "Sisingamangaraja" || rute === "Panglima Polim" || rute === "Fatmawati" || rute === "Tomang Raya")) ||
            (!isGanjil && nomorBelakang % 2 !== 0 && (rute === "Gajah Mada" || rute === "Hayam Wuruk" || rute === "Sisingamangaraja" || rute === "Panglima Polim" || rute === "Fatmawati" || rute === "Tomang Raya"))
          ) {
            tilang++;
          }
        }
  
        if (tilang > 0) {
          hasilRazia.push({ name: kendaraan.name, tilang: tilang });
        }
      }
    }
  
    return hasilRazia;
  }
  

console.log(

 kenaRazia(27, [

   {

     name: "Denver",

     plat: "B 2791 KDS",

     type: "Mobil",

     rute: ["TB Simatupang", "Panglima Polim", "Depok", "Senen Raya"]

   },

   {

     name: "Toni",

     plat: "B 1212 JBB",

     type: "Mobil",

     rute: [

       "Pintu Besar Selatan",

       "Panglima Polim",

       "Depok",

       "Senen Raya",

       "Kemang"

     ]

   },

   {

     name: "Stark",

     plat: "B 444 XSX",

     type: "Motor",

     rute: ["Pondok Indah", "Depok", "Senen Raya", "Kemang"]

   },

   {

     name: "Anna",

     plat: "B 678 DD",

     type: "Mobil",

     rute: [

       "Fatmawati",

       "Panglima Polim",

       "Depok",

       "Senen Raya",

       "Kemang",

       "Gajah Mada"

     ]

   }

 ])

);

// [ { name: ‘Toni’, tilang: 1 }, { name: ‘Anna’, tilang: 3 } ]