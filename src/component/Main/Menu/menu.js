import "./Menu.css";

function Menu() {
  return (
    <>
      <header id="head d-flex w-100">
        <div class="main-header w-100">
          <div class="main-header-center d-flex grow align-items-center justify-content-between">
            <div class="right-items d-flex align-items-center">
              <a class="logo" href="">
                <img src="./assets/img/Digikala-logo.svg" alt="Digikala-logo" />
              </a>
              <div class="search-box d-flex grow">
                <div class="search-box-input">
                  <div class="search-box-part d-flex grow align-items-center">
                    <div class="search-icon d-flex">
                      <img
                        src="./assets/img/search-box.svg"
                        alt="search-icon"
                      />
                    </div>
                    <span class="search-text">
                      <div class="search-text-part">جستجو</div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="left-items d-flex justify-content-end align-items-center">
              <a class="login-part" href="">
                <button class="login-button d-flex align-items-center">
                  <div class="login-text d-flex align-items-center justify-content-center">
                    <div class="login-icon d-flex">
                      <img src="./assets/img/login.svg" alt="login-icon" />
                    </div>
                    ورود | ثبت‌نام
                  </div>
                </button>
              </a>
              <span class="margin-span"></span>
              <div class="cart-part">
                <a href="" class="cart-link d-flex">
                  <img src="./assets/img/cart.svg" alt="cart-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Menu;
