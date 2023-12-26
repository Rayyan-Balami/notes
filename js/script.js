function toggleSideNav() {
  const sideNav = document.querySelector("#side-nav");
  const hamburger = document.querySelector("#hamburger");


  if (window.innerWidth < 640) {
    sideNav.style.left = sideNav.style.left == "0px" ? "-100%" : "0";
  } else if (window.innerWidth >= 640 && window.innerWidth < 1024) {
    sideNav.style.left = sideNav.style.left == "0px" ? "-16rem" : "0";
  } else {
    sideNav.style.left = "0";
  }

  const isCross = hamburger.getAttribute("data-is-cross") === "false";

  if (isCross) {
    hamburger.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.3" d="M4 5h16M4 12h16m-7 7h7" /></svg>`;
    hamburger.setAttribute("data-is-cross", "true");
  } else {
    hamburger.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M20 20L4 4m16 0L4 20"/></svg>`;
    hamburger.setAttribute("data-is-cross", "false");
  }

}



function toggleSettingsDropdown() {
  // Toggle the display of the settings dropdown
  const settingsDropdown = document.querySelector("#setting-dropdown");
  settingsDropdown.style.display = settingsDropdown.style.display === "block" ? "none" : "block";
}



