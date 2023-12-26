const sideNav = document.querySelector("#side-nav");
const settingsDropdown = document.querySelector("#setting-dropdown");
const hamburger = document.querySelector("#hamburger");

function toggleSideNav() {
  if (sideNav.classList.contains("open")) {
    closeSideNav();
  }
  else {
    openSideNav();
  }
}

function openSideNav() {

  sideNav.classList.add("open");
  document.body.classList.add("menu-open");
}
const closeSideNav = () => {
  sideNav.classList.remove("open");
  document.body.classList.remove("menu-open");

};



function toggleSettingsDropdown() {
  // Toggle the display of the settings dropdown
  settingsDropdown.style.display = settingsDropdown.style.display === "block" ? "none" : "block";
}



