
document.addEventListener("DOMContentLoaded", () => {
  const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
  const userGreeting = document.getElementById("userGreeting");
  const recentContainer = document.getElementById("recentIngredients");
  const likedContainer = document.getElementById("likedRecipes");

  if (!currentUser) {
    alert("로그인이 필요합니다.");
    window.location.href = "login.html";
    return;
  }

  userGreeting.textContent = `${currentUser.name}님의 마이페이지`;

  const ingredients = JSON.parse(localStorage.getItem("ingredients")) || [];
  if (ingredients.length > 0) {
    ingredients.forEach((item) => {
      const tag = document.createElement("span");
      tag.classList.add("tag");
      tag.textContent = item;
      recentContainer.appendChild(tag);
    });
  } else {
    recentContainer.innerHTML = "<p class='empty'>최근 재료가 없습니다.</p>";
  }

  const liked = JSON.parse(localStorage.getItem("likedRecipes")) || [];
  if (liked.length > 0) {
    liked.forEach((r) => {
      const card = document.createElement("div");
      card.classList.add("recipe-card-popular");
      card.innerHTML = `
        <img src="${r.img}" alt="${r.title}" class="popular-img" />
        <h3 class="popular-name">${r.title}</h3>
        <a href="popular_detail.html?id=${r.id}" class="btn-view">레시피 보기</a>
      `;
      likedContainer.appendChild(card);
    });
  } else {
    likedContainer.innerHTML = "<p class='empty'>좋아요한 레시피가 없습니다.</p>";
  }

  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
});
