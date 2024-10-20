// Array nama hari dan bulan
const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', `jum'at`, 'Sabtu'];
const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 
                'July', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

// Ambil tanggal saat ini
const today = new Date();
const dayName = days[today.getDay()];
const monthName = months[today.getMonth()];
const date = today.getDate();

const formattedDate = `${dayName}, ${date} ${monthName}`;

// Tampilkan di elemen dengan id="date"
document.getElementById('date').textContent = formattedDate;
