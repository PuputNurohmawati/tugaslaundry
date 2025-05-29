const form = document.getElementById("laundryForm");
const pesananList = document.getElementById("pesananList");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const wa = document.getElementById("wa").value;
  const berat = parseFloat(document.getElementById("berat").value);
  const layanan = document.getElementById("layanan").value;

  const hargaPerKg = layanan === "express" ? 8000 : 5000;
  const total = berat * hargaPerKg;

  const pesan = `Halo *${nama}*,\n\nPesanan laundry Anda:\n- Berat: ${berat} kg\n- Layanan: ${layanan}\n- Total: Rp${total}\n\nTerima kasih telah menggunakan jasa kami!`;

  const nomorWA = "62" + wa.substring(1); // ubah 08xxx jadi 62xxx
  const linkWA = `https://wa.me/${0895335130524}?text=${encodeURIComponent(pesan)}`;

  const item = document.createElement("li");
  item.innerHTML = `
    <strong>${nama}</strong><br>
    WA: <a href="${linkWA}" target="_blank">${wa}</a><br>
    Berat: ${berat} kg<br>
    Layanan: ${layanan}<br>
    Total: Rp${total}<br>
    <a href="${linkWA}" target="_blank"><button>Kirim Ulang ke WhatsApp</button></a>
  `;

  pesananList.appendChild(item);

  // Langsung buka WA saat submit
  window.open(linkWA, "_blank");

  form.reset();
});
