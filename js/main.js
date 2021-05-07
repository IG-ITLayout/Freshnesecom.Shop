//Dropdown menu

let menu = document.getElementsByClassName("product__menu-item");
for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("mouseenter", showSub, false);
  menu[i].addEventListener("mouseleave", hideSub, false);
  function showSub() {
    if (this.children.length > 1) {
      this.children[1].style.display = "block";
    } else {
      return false;
    }
  }
  function hideSub() {
    if (this.children.length > 1) {
      this.children[1].style.display = "none";
    } else {
      return false;
    }
  }
}

//Tabs
let tab = function () {
  let tabNav = document.querySelectorAll(".tabs__item"),
    tabContent = document.querySelectorAll(".tabs__content-item"),
    tabName;
  tabNav.forEach((item) => {
    item.addEventListener("mouseenter", selectTabNav);
  });
  function selectTabNav() {
    tabNav.forEach((item) => {
      item.classList.remove("active");
    });
    this.classList.add("active");
    tabName = this.getAttribute("data-tab-name");
    selectTabName(tabName);
  }
  function selectTabName(tabName) {
    tabContent.forEach((item) => {
      item.classList.contains(tabName)
        ? item.classList.add("active")
        : item.classList.remove("active");
    });
  }
};
let tabBestellers = function () {
  let tabNav = document.querySelectorAll(".menu-name-item"),
    tabContent = document.querySelectorAll(".best-selling__content-item"),
    tabName;
  tabNav.forEach((item) => {
    item.addEventListener("mouseenter", selectTabNav);
  });
  function selectTabNav() {
    tabNav.forEach((item) => {
      item.classList.remove("active");
    });
    this.classList.add("active");
    tabName = this.getAttribute("data-tab-name");
    selectTabName(tabName);
  }
  function selectTabName(tabName) {
    tabContent.forEach((item) => {
      item.classList.contains(tabName)
        ? item.classList.add("active")
        : item.classList.remove("active");
    });
  }
};

let tabFarmers = function () {
  let tabNav = document.querySelectorAll(".from-farmers__menu-name-item"),
    tabContent = document.querySelectorAll(".from-farmers__content-item"),
    tabName;
  tabNav.forEach((item) => {
    item.addEventListener("mouseenter", selectTabNav);
  });
  function selectTabNav() {
    tabNav.forEach((item) => {
      item.classList.remove("active");
    });
    this.classList.add("active");
    tabName = this.getAttribute("data-tab-name");
    selectTabName(tabName);
  }
  function selectTabName(tabName) {
    tabContent.forEach((item) => {
      item.classList.contains(tabName)
        ? item.classList.add("active")
        : item.classList.remove("active");
    });
  }
};
tabBestellers();
tabFarmers();
tab();
