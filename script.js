function keLogin() {
  document.getElementById("opening").classList.add("hidden");
  document.getElementById("login").classList.remove("hidden");
  document.getElementById("judulApp").classList.remove("hidden")
}

function login() {
  let nama = document.getElementById("nama").value;

  if (nama === "") {
    alert("Nama tidak boleh kosong!");
    return;
  }

  document.getElementById("login").classList.add("hidden");
  document.getElementById("menu").classList.remove("hidden");
  document.getElementById("welcome").innerText =
    "Halo, " + nama + " Selamat datang!";
}

function pilihMetode(metode) {
  document.getElementById("menu").classList.add("hidden");

  document.getElementById("metode1").classList.add("hidden");
  document.getElementById("metode2").classList.add("hidden");
  document.getElementById("output").classList.add("hidden");

  if (metode === 1) {
    document.getElementById("metode1").classList.remove("hidden");
  } else if (metode === 2) {
    document.getElementById("metode2").classList.remove("hidden");
  }
}

function hitungKomponen() {
  let nilai = [];
  let id = ["Ax", "Ay", "Az", "Bx", "By", "Bz"];

  for (let i = 0; i < id.length; i++) {
    nilai[i] = parseFloat(document.getElementById(id[i]).value);

    if (isNaN(nilai[i])) {
      alert("Semua komponen vektor harus diisi!");
      return;
    }
  }

  let Ax = nilai[0];
  let Ay = nilai[1];
  let Az = nilai[2];
  let Bx = nilai[3];
  let By = nilai[4];
  let Bz = nilai[5];

  let Cx = Ay * Bz - Az * By;
  let Cy = Az * Bx - Ax * Bz;
  let Cz = Ax * By - Ay * Bx;

  let hasil = `${Cx} i`;
  hasil += Cy >= 0 ? ` + ${Cy} j` : ` - ${Math.abs(Cy)} j`;
  hasil += Cz >= 0 ? ` + ${Cz} k` : ` - ${Math.abs(Cz)} k`;

  tampilkanHasil("Hasil cross product = " + hasil);
}


function hitungBasis() {
  let b1 = document.getElementById("basis1").value;
  let b2 = document.getElementById("basis2").value;
  let hasil = "";

  if (b1 === b2) hasil = "0";
  else if (b1 === "i" && b2 === "j") hasil = "k";
  else if (b1 === "j" && b2 === "k") hasil = "i";
  else if (b1 === "k" && b2 === "i") hasil = "j";
  else if (b1 === "j" && b2 === "i") hasil = "-k";
  else if (b1 === "k" && b2 === "j") hasil = "-i";
  else if (b1 === "i" && b2 === "k") hasil = "-j";

  tampilkanHasil(`Hasil = ${b1} × ${b2} = ${hasil}`);
}

function tampilkanHasil(teks) {
  let output = document.getElementById("output");
  output.innerText = teks;
  output.classList.remove("hidden");
}