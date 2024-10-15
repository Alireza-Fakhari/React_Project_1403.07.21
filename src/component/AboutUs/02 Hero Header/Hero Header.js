import "./Hero Header.css";

function HeroHeader() {
  return (
    <>
      <div class="breadCrumbSpacer"></div>
      <div class="headerImageWrapper">
        <img src="./assets/img/header.jpg" alt="" />
      </div>
      <h1 class="HeroTitle text-center w-100">دیجی‌کالا از گذشته تا امروز</h1>
      <div class="paragraphStaticPages">
        <p class="text-center">
          از سال ۱۳۸۵ با فروش آنلاین محصولات الکترونیک و دیجیتال شروع به کار
          کردیم اما بعد از تغییر به مدل مارکت‌پِلیس از سال ۱۳۹۵ به مرحله‌ای
          جدید، عجیب و البته پر از یادگیری و مسئولیت وارد شدیم. آنچه که حالا به
          عنوان گروه دیجی‌کالا شناخته می‌شود زنجیره گسترده‌ای از خرید و فروش
          آنلاین تمامی کالا‌ها با تنوع بسیار بالاست و نیز در برگیرنده پلتفرم‌ها
          و سرویس‌های مختلف است که هر کدام در مسیر خلق ارزش در اقتصاد دیجیتال
          ایران گام بر‌می‌دارند. تاریخچه گروه دیجی‌کالا داستانی دارد که ما برای
          شما تعریف می‌کنیم.
        </p>
      </div>
    </>
  );
}

export default HeroHeader;
