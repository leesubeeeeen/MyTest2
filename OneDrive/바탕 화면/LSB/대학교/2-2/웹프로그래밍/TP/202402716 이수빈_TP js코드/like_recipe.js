
document.addEventListener("DOMContentLoaded", () => {
  const likeBtn = document.getElementById("likeBtn");
  const title = document.getElementById("recipeTitle").textContent.trim();
  const imgSrc = document.querySelector(".detail-img").getAttribute("src");

  let likedRecipes = JSON.parse(localStorage.getItem("likedRecipes")) || [];
  let isLiked = likedRecipes.some((r) => r.title === title);

  if (isLiked) likeBtn.classList.add("active");

  likeBtn.addEventListener("click", () => {
    isLiked = !isLiked;
    likeBtn.classList.toggle("active", isLiked);

    if (isLiked) {
      likedRecipes.push({
        id: Date.now(),
        title,
        img: imgSrc,
      });
      alert(`❤️ '${title}'이(가) 좋아요 목록에 추가되었습니다!`);
    } else {
      likedRecipes = likedRecipes.filter((r) => r.title !== title);
      alert(`💔 '${title}' 좋아요가 해제되었습니다.`);
    }

    localStorage.setItem("likedRecipes", JSON.stringify(likedRecipes));
  });
});
