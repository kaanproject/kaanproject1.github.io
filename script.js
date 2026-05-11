const sorularDiv = document.getElementById("questions");

if(sorularDiv){

  for(let i=1; i<=20; i++){

    sorularDiv.innerHTML += `
      <div class="question">
        <p>${i}. Günlük yaşamınızda çevre dostu davranıyor musunuz?</p>

        <select>
          <option value="1">Evet</option>
          <option value="3">Bazen</option>
          <option value="5">Hayır</option>
        </select>
      </div>
    `;
  }
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
