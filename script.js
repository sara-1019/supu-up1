document.addEventListener("DOMContentLoaded", () => {
    const mapEl = document.getElementById("map");
    const MAP_SIZE = 20;
    let position = 0;        // プレイヤー位置
    const monsterPos = MAP_SIZE - 1; // モンスターは右端に常駐（あとで移動させる）
  
    function renderMap() {
      mapEl.innerHTML = "";
      for (let i = 0; i < MAP_SIZE; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.textContent = i; // デバッグ用にマス番号
        if (i === position) cell.classList.add("player");
        if (i === monsterPos) cell.classList.add("monster");
        mapEl.appendChild(cell);
      }
    }
  
    renderMap();
  });