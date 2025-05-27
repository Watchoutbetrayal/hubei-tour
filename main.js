function renderCards(list) {
  const container = document.getElementById('cardsContainer');
  container.innerHTML = '';
  list.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name_en}">
      <div class="card-content">
        <h2>${item.name_cn} / ${item.name_en}</h2>
        <div class="meta">${item.city} | ${item.level} | ${item.type}</div>
        <p>⏰ ${item.hours}</p>
        <p>💰 ${item.price}</p>
        <p>⭐ ${item.highlights_cn} / ${item.highlights_en}</p>
        <p>${item.description_cn}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

// 实现搜索过滤
document.getElementById('searchInput').addEventListener('input', e => {
  const keyword = e.target.value.trim().toLowerCase();
  const filtered = attractions.filter(item =>
    item.name_cn.includes(keyword) ||
    item.name_en.toLowerCase().includes(keyword) ||
    item.city.toLowerCase().includes(keyword)
  );
  renderCards(filtered);
});

// 初始渲染
renderCards(attractions);