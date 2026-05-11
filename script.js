const sorularDiv = document.getElementById("questions");

if (sorularDiv) {

  const sorular = [

    {
      soru: "Günlük ulaşımınızda toplu taşıma kullanıyor musunuz?",
      cevaplar: [
        { text: "Evet", value: 1 },
        { text: "Bazen", value: 3 },
        { text: "Hayır", value: 5 }
      ]
    },

    {
      soru: "Evde gereksiz ışıkları kapatır mısınız?",
      cevaplar: [
        { text: "Evet", value: 1 },
        { text: "Bazen", value: 3 },
        { text: "Hayır", value: 5 }
      ]
    },

    {
      soru: "Plastik kullanımını azaltmaya çalışıyor musunuz?",
      cevaplar: [
        { text: "Evet", value: 1 },
        { text: "Bazen", value: 3 },
        { text: "Hayır", value: 5 }
      ]
    },

    {
      soru: "Kısa mesafelerde yürümeyi tercih eder misiniz?",
      cevaplar: [
        { text: "Evet", value: 1 },
        { text: "Bazen", value: 3 },
        { text: "Hayır", value: 5 }
      ]
    },

    {
      soru: "Geri dönüşüm yapıyor musunuz?",
      cevaplar: [
        { text: "Evet", value: 1 },
        { text: "Bazen", value: 3 },
        { text: "Hayır", value: 5 }
      ]
    },

    {
      soru: "Enerji tasarruflu ampul kullanıyor musunuz?",
      cevaplar: [
        { text: "Evet", value: 1 },
        { text: "Bazen", value: 3 },
        { text: "Hayır", value: 5 }
      ]
    },

    {
      soru: "Su tasarrufuna dikkat ediyor musunuz?",
      cevaplar: [
        { text: "Evet", value: 1 },
        { text: "Bazen", value: 3 },
        { text: "Hayır", value: 5 }
      ]
    },

    // TERS PUANLAMA
    {
      soru: "Sık sık uçak yolculuğu yapar mısınız?",
      cevaplar: [
        { text: "Evet", value: 5 },
        { text: "Bazen", value: 3 },
        { text: "Hayır", value: 1 }
      ]
    },

    {
      soru: "Tek kullanımlık ürünlerden kaçınır mısınız?",
      cevaplar: [
        { text: "Evet", value: 1 },
        { text: "Bazen", value: 3 },
        { text: "Hayır", value: 5 }
      ]
    },

    {
      soru: "Doğayı korumak için çevre etkinliklerine katılır mısınız?",
      cevaplar: [
        { text: "Evet", value: 1 },
        { text: "Bazen", value: 3 },
        { text: "Hayır", value: 5 }
      ]
    }

  ];

  sorular.forEach((item, index) => {

    let optionsHTML = "";

    item.cevaplar.forEach(cevap => {

      optionsHTML += `
        <option value="${cevap.value}">
          ${cevap.text}
        </option>
      `;

    });

    sorularDiv.innerHTML += `
      <div class="question">

        <p>${index + 1}. ${item.soru}</p>

        <select>
          ${optionsHTML}
        </select>

      </div>
    `;

  });

}

function hesapla() {

  let toplam = 0;

  const selectler = document.querySelectorAll("select");

  selectler.forEach(secim => {
    toplam += Number(secim.value);
  });

  let sonuc = "";
  let oneriler = "";

  if (toplam <= 20) {

    sonuc = "Karbon ayak iziniz çok düşük 🌱";

    oneriler = `
      <ul>
        <li>Çevre dostu alışkanlıklarınızı sürdürmeye devam edin.</li>
        <li>Toplu taşıma ve yürüyüş tercihlerinizi koruyun.</li>
        <li>Geri dönüşüm yapmaya devam edin.</li>
        <li>Enerji tasarrufuna dikkat etmeyi sürdürün.</li>
      </ul>
    `;
  }

  else if (toplam <= 35) {

    sonuc = "Karbon ayak iziniz orta seviyede 🌍";

    oneriler = `
      <ul>
        <li>Elektrik ve su tüketimini azaltabilirsiniz.</li>
        <li>Tek kullanımlık plastikleri azaltmaya çalışın.</li>
        <li>Kısa mesafelerde araç yerine yürüyüş tercih edin.</li>
        <li>Daha fazla geri dönüşüm yapabilirsiniz.</li>
      </ul>
    `;
  }

  else {

    sonuc = "Karbon ayak iziniz yüksek ⚠️";

    oneriler = `
      <ul>
        <li>Özel araç kullanımını azaltabilirsiniz.</li>
        <li>Uçak yolculuklarını mümkün olduğunca azaltın.</li>
        <li>Enerji tasarruflu ürünler kullanın.</li>
        <li>Su tasarrufuna dikkat edin.</li>
        <li>Tek kullanımlık ürünlerden kaçının.</li>
      </ul>
    `;
  }

  document.getElementById("sonuc").innerHTML = `
    <h2>${sonuc}</h2>

    <p><strong>Toplam Puan:</strong> ${toplam}</p>

    <div class="oneriler">
      <h3>Dikkat Etmeniz Gerekenler</h3>

      ${oneriler}
    </div>
  `;
}
