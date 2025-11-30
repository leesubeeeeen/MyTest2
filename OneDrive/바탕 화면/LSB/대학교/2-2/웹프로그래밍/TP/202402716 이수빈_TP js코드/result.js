
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("recommendContainer");

  const recipes = [
    {
      name: "계란말이",
      img: "계란말이.png",
      desc: "달걀을 풀어 팬에 얇게 부친 뒤 여러 겹으로 말아 익힌 요리로, 부드럽고 담백한 맛이 특징이에요.",
    },
    {
      name: "야채볶음밥",
      img: "야채볶음밥.png",
      desc: "밥에 각종 채소를 넣고 함께 볶아 만든 한 그릇 요리에요. 간단히 간장이나 소금으로 간을 맞춰 담백하게 즐길 수 있습니다.",
    },
  ];

  recipes.forEach((r) => {
    const card = document.createElement("div");
    card.classList.add("recipe-card");

    card.innerHTML = `
      <img src="${r.img}" alt="${r.name}" class="recipe-img" />
      <div class="recipe-info">
        <h3 class="recipe-name">${r.name}</h3>
        <p class="recipe-desc">${r.desc}</p>
        <a href="recipe_detail.html?name=${encodeURIComponent(r.name)}" class="btn-view">레시피 보기</a>
      </div>
    `;

    container.appendChild(card);
  });
});
