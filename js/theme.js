function toggleTheme() {
  const tagTema = document.querySelector('link[data-theme="theme"]');
  const menuIcon = document.getElementById("menuIcon");
  const themeButton = document.getElementById("theme_dark");

  if (tagTema.href.includes("Light")) {
    tagTema.href = "../css/themeDark.css";
    menuIcon.classList.add("dark");
    themeButton.classList.add("active");
  } else {
    tagTema.href = "../css/themeLight.css";
    menuIcon.classList.remove("dark");
    themeButton.classList.remove("active");
  }
}
