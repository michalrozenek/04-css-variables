const changeTheme = () => {
  const themeWrapper = document.querySelector('.theme-wrapper');
  themeWrapper.classList.toggle('theme-wrapper--dark');
};

const themeButtonListener = () => {
  const button = document.getElementById('theme-button');
  button.addEventListener('click', changeTheme);
};

const initListeners = () => {
  themeButtonListener();
};

initListeners();
