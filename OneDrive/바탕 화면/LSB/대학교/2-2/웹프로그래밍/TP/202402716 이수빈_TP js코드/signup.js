
document.addEventListener("DOMContentLoaded", () => {
  const btnJoin = document.querySelector(".btn-join");

  btnJoin.addEventListener("click", () => {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const id = document.getElementById("id").value.trim();
    const pw = document.getElementById("pw").value.trim();
    const pw2 = document.getElementById("pw2").value.trim();

    if (!name || !email || !id || !pw || !pw2) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    if (pw !== pw2) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some((u) => u.id === id)) {
      alert("이미 존재하는 아이디입니다.");
      return;
    }

    if (users.some((u) => u.email === email)) {
      alert("이미 가입된 이메일입니다.");
      return;
    }

    const newUser = { name, email, id, pw };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert(`${name}님, 회원가입이 완료되었습니다! 로그인 페이지로 이동합니다.`);
    window.location.href = "login.html";
  });
});
