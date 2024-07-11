/* 해와 달 아이콘 스타일 */
.theme-switch-wrapper {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.theme-icon {
  font-size: 24px;
  margin: 0 10px;
  transition: opacity 0.3s;
}

.theme-icon.sun {
  color: #f39c12;
}

.theme-icon.moon {
  color: #f1c40f;
}

body.dark-mode .theme-icon.sun {
  opacity: 0.3;
}

body:not(.dark-mode) .theme-icon.moon {
  opacity: 0.3;
}
