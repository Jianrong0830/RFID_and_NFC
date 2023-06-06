// 在這裡撰寫你的 JavaScript 代碼
// 可以使用 DOM 操作或其他相關功能來實現互動性和動態效果

// 範例：在點擊導航欄連結時滾動到相應區塊
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
  
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
  
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });
  