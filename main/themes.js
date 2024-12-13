if (!localStorage.themed) localStorage.setItem("themed", "default"); // Basically, if there's no theme name saved into localStorage.. set it to default automatically.

if (localStorage.themed == "enby") thelogo.src = "assets/logo-enby.gif";

const themeLink = document.getElementById("css-link"),
  holidays = ["christmas", "halloween", "newyears", "aprilfools"];

function setTheme(name) {
  themeLink.href = `themes/${name}.css`;
  document.getElementById("activateIframe").contentWindow.location.reload();

  // If it's not a holiday, set it to localStorage
  if (!name.includes(holidays)) {
    localStorage.setItem("themed", name);
  }
}
