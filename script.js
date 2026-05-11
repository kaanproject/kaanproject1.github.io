const sorularDiv = document.getElementById("questions");

if(sorularDiv){

  const sorular = [
  "Günlük ulaşımınızda toplu taşıma kullanıyor musunuz?",
  "Evde gereksiz ışıkları kapatır mısınız?",
  "Plastik kullanımını azaltmaya çalışıyor musunuz?",
  "Kısa mesafelerde yürümeyi tercih eder misiniz?",
  "Geri dönüşüm yapıyor musunuz?",
  "Enerji tasarruflu ampul kullanıyor musunuz?",
  "Su tasarrufuna dikkat ediyor musunuz?",
  "Sık sık uçak yolculuğu yapar mısınız?",
  "Tek kullanımlık ürünlerden kaçınır mısınız?",
  "Doğayı korumak için çevre etkinliklerine katılır mısınız?"
];

sorular.forEach((soru, index) => {

  sorularDiv.innerHTML += `
    <div class="question">
      <p>${index + 1}. ${soru}</p>

      <select>
        <option value="1">Evet</option>
        <option value="3">Bazen</option>
        <option value="5">Hayır</option>
      </select>
    </div>
  `;

});
}

function hesapla(){

  let toplam = 0;

  const selectler = document.querySelectorAll("select");

  selectler.forEach(secim => {
    toplam += Number(secim.value);
  });

  let sonuc = "";

  if(toplam <= 30){
    sonuc = "Karbon ayak iziniz çok düşük 🌱";
  }
  else if(toplam <= 60){
    sonuc = "Karbon ayak iziniz orta seviyede 🌍";
  }
  else{
    sonuc = "Karbon ayak iziniz yüksek ⚠️";
  }

  document.getElementById("sonuc").innerHTML = `
    <h2>${sonuc}</h2>
    <p>Toplam Puan: ${toplam}</p>
  `;
}
