// document.addEventListener('DOMContentLoaded', (event) => {
//   const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
//   const currentTheme = localStorage.getItem('theme');

//   if (currentTheme) {
//     document.body.classList.add(currentTheme);

//     if (currentTheme === 'dark-mode') {
//       toggleSwitch.checked = true;
//     }
//   }

//   toggleSwitch.addEventListener('change', (e) => {
//     if (e.target.checked) {
//       document.body.classList.add('dark-mode');
//       localStorage.setItem('theme', 'dark-mode');
//     } else {
//       document.body.classList.remove('dark-mode');
//       localStorage.setItem('theme', 'light-mode');
//     }
//   });
// });
document.addEventListener('DOMContentLoaded', () => {
  const sunIcon = document.getElementById('sun-icon');
  const moonIcon = document.getElementById('moon-icon');
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme) {
    document.body.classList.add(currentTheme);
  } else {
    document.body.classList.add('light-mode'); // 기본적으로 라이트 모드로 설정
  }

  sunIcon.addEventListener('click', () => {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    localStorage.setItem('theme', 'light-mode');
  });

  moonIcon.addEventListener('click', () => {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark-mode');
  });
});
