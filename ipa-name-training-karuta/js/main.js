// --- IPA-Name-Training-Karuta main.js ---
// 17母音カードを生成し、クリックで反転（表＝名称、裏＝IPA＋例単語）

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("card-container");
  container.innerHTML = "";

  vowels.forEach(v => {
    const card = document.createElement("div");
    card.className = "flip-card";

    card.innerHTML = `
      <div class="flip-inner">
        <div class="flip-front">${v.name}</div>
        <div class="flip-back">
          <div>${v.ipa}</div>
          <div>${v.example.replace(/[aeiou]/gi, '<span class="redvowel">$&</span>')}</div>
        </div>
      </div>
    `;

    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });

    container.appendChild(card);
  });
});
