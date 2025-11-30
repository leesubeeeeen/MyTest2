
document.addEventListener("DOMContentLoaded", () => {
  const recipeGrid = document.getElementById("recipeGrid");

  const recipes = [
    { id: 1, title: "제육볶음", img: "제육볶음.png", likes: 124, link: "popular_detail.html" },
    { id: 2, title: "삼계탕", img: "삼계탕.png", likes: 87, link: "#" },
    { id: 3, title: "마라탕", img: "마라탕.png", likes: 65, link: "#" },
    { id: 4, title: "냉우동", img: "냉우동.png", likes: 115, link: "#" },
  ];

  // [수정] 좋아요 목록을 저장하는 likedRecipes 변수 생성
  let likedRecipes = JSON.parse(localStorage.getItem("likedRecipes")) || [];

  recipes.forEach((r) => {
    const card = document.createElement("div");
    card.classList.add("recipe-card-popular");

    const isLiked = likedRecipes.some((item) => item.title === r.title);

    //[추가] 이미 좋아요 한 레시피라면 +1 증가된 상태로 표시하는 기능 추가 
    const displayLikes = isLiked ? r.likes + 1 : r.likes;

    card.innerHTML = `
      <img src="${r.img}" alt="${r.title}" class="popular-img" />
      <h3 class="popular-name">${r.title}</h3>
      <p class="popular-likes">♥ <span class="like-count">${displayLikes}</span></p>
      <button class="heart-btn ${isLiked ? "active" : ""}" data-title="${r.title}" data-img="${r.img}">❤</button>
      <a href="${r.link}" class="btn-view">레시피 보기</a>
    `;

    recipeGrid.appendChild(card);
  });

  recipeGrid.addEventListener("click", (e) => {
    if (e.target.classList.contains("heart-btn")) {
      const button = e.target;
      const card = button.closest(".recipe-card-popular");
      const title = button.getAttribute("data-title");
      const img = button.getAttribute("data-img");
      const likeCountEl = card.querySelector(".like-count");
      let likeCount = parseInt(likeCountEl.textContent);

      const liked = button.classList.toggle("active");

      if (liked) {
        likeCount++;
        likedRecipes.push({ id: Date.now(), title, img });
        alert(`❤️ ${title}이(가) 좋아요 목록에 추가되었습니다!`);
      } else {
        likeCount--;
        likedRecipes = likedRecipes.filter((r) => r.title !== title);
        alert(`💔 ${title} 좋아요가 해제되었습니다.`);
      }

      likeCountEl.textContent = likeCount;

      localStorage.setItem("likedRecipes", JSON.stringify(likedRecipes));
    }
  });
});
