
document.addEventListener("DOMContentLoaded", () => {
  const btnLogin = document.querySelector(".btn-login");

  btnLogin.addEventListener("click", () => {
    const id = document.getElementById("login-id").value.trim();
    const pw = document.getElementById("login-pw").value.trim();

    if (!id || !pw) {
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.id === id && u.pw === pw);

    if (user) {
      sessionStorage.setItem("currentUser", JSON.stringify(user));
      alert(`${user.name}님 환영합니다!`);
      window.location.href = "master_recipe.html"; // 로그인 성공 시 메인으로 이동
    } else {
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
  });
});

