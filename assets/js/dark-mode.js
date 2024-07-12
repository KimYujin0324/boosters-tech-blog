// document.addEventListener('DOMContentLoaded', (event) => {
//   const sunIcon = document.querySelector('.theme-icon.sun');
//   const moonIcon = document.querySelector('.theme-icon.moon');
//   const currentTheme = localStorage.getItem('theme');

//   if (currentTheme) {
//     document.body.classList.add(currentTheme);
//   }

//   sunIcon.addEventListener('click', () => {
//     document.body.classList.remove('dark-mode');
//     localStorage.setItem('theme', 'light-mode');
//   });

//   moonIcon.addEventListener('click', () => {
//     document.body.classList.add('dark-mode');
//     localStorage.setItem('theme', 'dark-mode');
//   });
// });
document.addEventListener('DOMContentLoaded', (event) => {
  const sunIcon = document.querySelector('.theme-icon.sun');
  const moonIcon = document.querySelector('.theme-icon.moon');
  const currentTheme = localStorage.getItem('theme');

  const setActiveIcon = () => {
    if (document.body.classList.contains('dark-mode')) {
      sunIcon.classList.remove('active');
      moonIcon.classList.add('active');
    } else {
      sunIcon.classList.add('active');
      moonIcon.classList.remove('active');
    }
  };

  if (currentTheme) {
    document.body.classList.add(currentTheme);
  }

  setActiveIcon(); // 초기 아이콘 설정

  sunIcon.addEventListener('click', () => {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    localStorage.setItem('theme', 'light-mode');
    setActiveIcon();
  });

  moonIcon.addEventListener('click', () => {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
    localStorage.setItem('theme', 'dark-mode');
    setActiveIcon();
  });
});