// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const listBelanjaan = (inputData) => {
  let nama = [];
  let kuantitas = [];
  let hasilList = [];

  for (let i=0; i<inputData.length; i++){
    nama[i] = inputData[i]['nama'];
    kuantitas[i] = inputData[i]['kuantitas'];
    hasilList[i] = "- " + nama[i] + " x " + kuantitas[i];
  }

  return hasilList;
}

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const totalBelanjaan = (inputData) => {
  let totalHarga = 0;
  let jumlah = [];
  let harga = [];
  let kuantitas = [];

  for (let i=0; i<inputData.length; i++){
    harga[i] = inputData[i]['harga'];
    kuantitas[i] = inputData[i]['kuantitas'];
    jumlah[i] = harga[i]*kuantitas[i];
    totalHarga += jumlah[i];
  }

  return totalHarga;
}

// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};
