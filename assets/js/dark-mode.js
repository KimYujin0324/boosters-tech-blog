document.addEventListener('DOMContentLoaded', (event) => {
  const sunIcon = document.querySelector('.theme-icon.sun');
  const moonIcon = document.querySelector('.theme-icon.moon');
  const logo = document.getElementById('logo');
  const currentTheme = localStorage.getItem('theme');

  // _config.yml에서 가져온 데이터
  const lightLogo = "{{ site.baseurl }}/{{ site.logo }}";
  const darkLogo = "{{ site.baseurl }}/{{ site.logo_dark }}";

  // 초기 로고 설정
  if (currentTheme === 'dark-mode') {
      document.body.classList.add('dark-mode');
      logo.src = darkLogo;
  } else {
      document.body.classList.add('light-mode');
      logo.src = lightLogo;
  }

  // 라이트 모드 버튼 클릭 이벤트
  sunIcon.addEventListener('click', () => {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light-mode');
      logo.src = lightLogo; // 라이트 모드 로고
  });

  // 다크 모드 버튼 클릭 이벤트
  moonIcon.addEventListener('click', () => {
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark-mode');
      logo.src = darkLogo; // 다크 모드 로고
  });
});