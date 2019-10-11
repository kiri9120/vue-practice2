<template>
   <footer class="footer">
      <div class="footer__menu">
         <nav class="nav">
            <ul class="footerNav">
               <li class="footerNav__item">
                  <router-link to="/">ホーム</router-link> /
               </li>
               <li class="footerNav__item">
                  <router-link to="/about">プラスラインとは</router-link> /
               </li>
               <li class="footerNav__item">
                  <router-link to="/business">事業内容</router-link> /
               </li>
               <li class="footerNav__item">
                  <router-link to="/safety">安全への取り組み</router-link> /
               </li>
               <li class="footerNav__item">
                  <router-link to="/company">会社概要</router-link> /
               </li>
               <li class="footerNav__item">
                  <router-link to="/blog">ブログ</router-link> /
               </li>
               <li class="footerNav__item">
                  <router-link to="/recruit">採用情報</router-link> /
               </li>
               <li class="footerNav__item">
                  <router-link to="/contact">お問い合わせ</router-link>
               </li>
            </ul>
         </nav>
      </div>
      <div class="footer__main">
         <div class="footer__logo">
            <img src="../assets/header-logo.png" alt="">
         </div>
         <div class="footer__info">
            <p>株式会社プラスライントランスポート</p>
            <p>〒578-0981 大阪府東大阪市島之内1丁目6番15号</p>
            <p>TEL：072-966-0157　FAX：072-966-0156</p>
         </div>
         <div class="copyright">
            <p>Copyright ©2019 PLUSLINE TRANSPORT All rights Reserved.</p>
         </div>
      </div>
   </footer>
</template>

<script>
</script>
<style scoped lang="scss">

   .footer__main {
      background: #fdfaf6;

      .footer__logo {
         padding-top: 30px;
      }

      .footer__info {
         p {
            font-size: 14px;
         }
      }

      .copyright {
         font-size: 13px;
         border-top: 1px solid #dfddd9;
         padding: 10px 0;
         color: #ada8a1;
      }
   }

   .nav {

      .footerNav {
         margin: 50px 0;
         padding-left: 0;
         display: flex;
         flex-wrap: wrap;
         justify-content: center;
         list-style: none;

         a {
            font-size: 15px;
            padding: 10px;
            color: black;
            &.router-link-exact-active {
               color: #ff7713;
            }
         }
      }
   }

</style>