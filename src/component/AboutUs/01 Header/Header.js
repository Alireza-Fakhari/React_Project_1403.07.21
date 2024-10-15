import "./Header.css";

function HeroHeader() {
  return (
    <>
      <div class="MainNavbar d-flex">
        <div class="d-flex align-items-center w-100">
          <div class="MainNavbar_logo d-flex align-items-center justify-content-center">
            <img src="./assets/img/logo.svg" alt="" />
            <h3 class="MainNavbar_logo_title">درباره گروه دیجی‌کالا</h3>
            <span class="MainNavbar_logo_line"></span>
          </div>
          <div class="MainNavbar_menuContainer d-flex aling-items-center justify-content-start flex-fill">
            <div>
              <button class="MainNavbar_btn d-flex align-items-center justify-content-center">
                خانه
              </button>
            </div>
            <div>
              <button class="MainNavbar_btn d-flex align-items-center justify-content-center">
                محصولات
              </button>
            </div>
            <div>
              <button class="MainNavbar_btn d-flex align-items-center justify-content-center">
                درباره ما
              </button>
            </div>
            <div>
              <button class="MainNavbar_btn d-flex align-items-center justify-content-center">
                تماس باما
              </button>
            </div>
          </div>
          <div class="MainNavbar_lang">
            <button class="MainNavbar_btn d-flex align-items-center justify-content-center">
              <a href="">En</a>
            </button>
          </div>
        </div>
      </div>
      <div class="BreadcrumbScroll d-flex align-items-center justify-content-between BreadcrumbScroll_Stick">
        <h3 class="BreadcrumbScroll_title">تاریخچه ما</h3>
        <div class="d-flex align-items-center justify-content-center">
          <a href="" class="BreadcrumbScroll_homeIcon d-flex">
            <img src="./assets/img/home-icon.svg" alt="" />
          </a>
          <span class="BreadcrumbScroll_lefIcon">
            <img src="./assets/img/left-arrow.svg" alt="" />
          </span>
          <a href="" class="BreadcrumbScroll_link">تاریخچه ما</a>
        </div>
      </div>
    </>
  );
}

export default HeroHeader;
