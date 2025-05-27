function renderCards(list) {
  const container = document.getElementById("cardsContainer");
  container.innerHTML = "";
  list.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="card-content">
        <h2>${item.name} (${item.city})</h2>
        <div class="meta">${item.grade || "无评级"} | ${item.category}</div>
        <p>🕒 ${item.opening.day || item.opening.default || "未知时间"}</p>
        <p>💰 ${typeof item.price === "object" ? 
            `日场：${item.price.day} 元 / 夜场：${item.price.night} 元` : 
            (item.price === 0 ? "免费" : item.price + " 元")}</p>
        <p>⭐ ${item.features.join("、")}</p>
        <p>${item.culture.desc}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

document.getElementById("searchInput").addEventListener("input", (e) => {
  const keyword = e.target.value.trim().toLowerCase();
  const filtered = HUBEI_ATTRACTIONS.filter((item) =>
    item.name.toLowerCase().includes(keyword) ||
    item.city.toLowerCase().includes(keyword) ||
    (item.category && item.category.toLowerCase().includes(keyword))
  );
  renderCards(filtered);
});

// 页面初始渲染
renderCards(HUBEI_ATTRACTIONS);
