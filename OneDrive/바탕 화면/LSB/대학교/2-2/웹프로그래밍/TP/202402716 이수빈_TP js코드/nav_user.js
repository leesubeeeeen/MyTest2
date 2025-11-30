
document.addEventListener("DOMContentLoaded", () => {
  const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
  const loginArea = document.querySelector(".topbar .login-area");

  if (!loginArea) return;

  if (currentUser) {
    loginArea.innerHTML = `
      <span class="welcome" style="cursor:pointer;">${currentUser.name}님 환영합니다!</span>
      <button class="logout-btn">로그아웃</button>
    `;

    loginArea.querySelector(".welcome").addEventListener("click", () => {
      window.location.href = "mypage.html";
    });

    loginArea.querySelector(".logout-btn").addEventListener("click", () => {
      sessionStorage.removeItem("currentUser");
      alert("로그아웃되었습니다.");
      window.location.reload();
    });
  } else {
    loginArea.innerHTML = `
      <a href="login.html" class="link">로그인</a> /
      <a href="signup.html" class="link">회원가입</a>
    `;
  }
});

