
document.addEventListener("DOMContentLoaded", () => {
  const noticeBox = document.getElementById("noticeBox");

  const notices = [
    {
      title: "만능레시피 서비스 점검 안내",
      date: "2025-10-12",
      content: "보다 안정적인 서비스 제공을 위해 10월 15일 02:00~05:00 동안 점검이 진행됩니다."
    },
    {
      title: "AI 추천 기능 업그레이드",
      date: "2025-09-30",
      content: "사용자별 맞춤 레시피 추천 정확도를 개선한 새 알고리즘이 적용되었습니다."
    },
    {
      title: "이벤트 당첨자 발표 🎉",
      date: "2025-09-01",
      content: "‘나만의 레시피 공유 이벤트’ 당첨자를 공지합니다. 자세한 내용은 마이페이지 > 공지사항을 확인하세요."
    }
  ];

  if (notices.length > 0) {
    notices.forEach((n) => {
      const noticeEl = document.createElement("div");
      noticeEl.classList.add("notice-item");
      noticeEl.innerHTML = `
        <h3 class="notice-title">📢 ${n.title}</h3>
        <p class="notice-date">${n.date}</p>
        <p class="notice-content">${n.content}</p>
        <hr>
      `;
      noticeBox.appendChild(noticeEl);
    });
  } else {
    noticeBox.innerHTML = "<p class='empty'>등록된 공지사항이 없습니다.</p>";
  }
});

