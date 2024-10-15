import "./form.css";

function Form() {
  return (
    <>
      <div class="form-size d-flex">
        <div class="form-size-border">
          <div class="form-title">
            <div class="form-title-p">
              <p>تماس با دیجی‌کالا</p>
            </div>
            <div class="form-line"></div>
          </div>
          <div class="form-info d-flex justify-content-between align-items-center">
            <p class="form-info-text">
              لطفاً پیش از ارسال ایمیل یا تماس تلفنی، ابتدا
              <a href="">پرسش‌‌های متداول</a> را مشاهده کنید.
            </p>
            <a href="" class="form-info-button d-flex align-items-center">
              <div>پرسش‌‌های متداول</div>
            </a>
          </div>
          <form class="d-flex">
            <label class="form-info-topic">
              <div class="form-info-topic-title d-flex align-items-center">
                موضوع
              </div>
              <input
                type="text"
                class="form-info-topic-input d-flex align-items-center"
              />
            </label>
            <label class="form-info-name">
              <div class="form-info-name-title d-flex align-items-center">
                نام و نام خانوادگی
              </div>
              <input
                type="text"
                class="form-info-name-input d-flex align-items-center"
              />
            </label>
            <label class="form-info-email">
              <div class="form-info-email-title d-flex align-items-center">
                ایمیل
              </div>
              <input
                type="email"
                class="form-info-email-input d-flex align-items-center"
              />
            </label>
            <label class="form-info-number">
              <div class="form-info-number-title d-flex align-items-center">
                تلفن تماس
              </div>
              <input
                type="tel"
                class="form-info-number-input d-flex align-items-center"
              />
            </label>
            <label class="form-info-order-number">
              <div class="form-info-order-number-title d-flex align-items-center">
                شماره سفارش
              </div>
              <input
                type="text"
                class="form-info-order-number-input d-flex align-items-center"
              />
            </label>
            <label class="form-info-txt">
              <div class="form-info-txt-title align-items-center">متن پیام</div>
              <textarea row="4" class="form-info-txt-input" />
            </label>
            <div class="form-info-upload">
              <p class="form-info-upload-text">
                حداکثر ۵ تصویر jpeg یا PNG حداکثر یک مگابایت، یک ویدیو MP4
                حداکثر ۵۰ مگابایت
              </p>
              <label class="form-info-upload-button d-flex justify-content-center">
                <div class="form-info-upload-button-style d-flex">
                  <div class="form-info-upload-button-icon">
                    <img src="" alt="" />
                  </div>
                  افزودن عکس یا ویدئو
                </div>
              </label>
            </div>
          </form>
          <div class="sub-form d-flex justify-content-end">
            <button class="sub-form-button">ثبت و ارسال</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
