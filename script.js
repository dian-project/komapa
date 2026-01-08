document.getElementById("formTransaksi").addEventListener("submit", function(e) {
  e.preventDefault();

  let nama = document.getElementById("nama").value;
  let jumlah = document.getElementById("jumlah").value;
  let kategori = document.getElementById("kategori").value;
  let error = document.getElementById("error");

  if (nama === "" || jumlah === "" || kategori === "") {
    error.innerText = "Semua data harus diisi!";
    error.style.color = "red";
    return;
  }

  let tabel = document.getElementById("tabelTransaksi");
  let row = tabel.insertRow();
  row.insertCell(0).innerText = nama;
  row.insertCell(1).innerText = jumlah;
  row.insertCell(2).innerText = kategori;

  document.getElementById("formTransaksi").reset();
  error.innerText = "";
});
