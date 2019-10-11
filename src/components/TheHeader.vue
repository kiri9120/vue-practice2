<template>
   <header class="header">
      <div class="header__logo">
         <a href="https://plusline-exp.jp/" class="logo">
            <img src="../assets/header-logo.png" alt="">
         </a>
      </div>
      <div class="header__menu">
         <nav class="nav">
            <ul class="headerNav">
               <li class="headerNav__item">
                  <router-link to="/">ホーム</router-link> |
               </li>
               <li class="headerNav__item">
                  <router-link to="/about">プラスラインとは</router-link> |
               </li>
               <li class="headerNav__item">
                  <router-link to="/business">事業内容</router-link> |
               </li>
               <li class="headerNav__item">
                  <router-link to="/safety">安全への取り組み</router-link> |
               </li>
               <li class="headerNav__item">
                  <router-link to="/company">会社概要</router-link> |
               </li>
               <li class="headerNav__item">
                  <router-link to="/blog">ブログ</router-link>
               </li>
            </ul>
         </nav>
      </div>
      <div class="header__btn">
         <router-link to="/contact">
            <a href="" class="btn btn-small btn-orange">
               <i class="fas fa-envelope icon"></i>お問い合わせ
            </a>
         </router-link>
         <router-link to="/recruit">
            <a href="" class="btn btn-small btn-green">
               <i class="fas fa-user-alt icon"></i>採用情報</a>
         </router-link>
      </div>
   </header>
</template>

<script>
</script>
<style lang="scss">


   .header {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #d6d6d6;
      padding: 10px 30px;
   }


   .logo {
      display: block;
   }
   .nav {

      .headerNav {
         display: flex;
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

   .header__btn {
      position: absolute;
      right: 30px;

      .btn {
         margin: 0 10px;
      }
   }

   .btn {
      display: inline-block;
      color: #fff;
      text-decoration: none;
      box-sizing: border-box;

      &:hover {
         opacity: 0.8;
      }

      &.btn-small {
         padding: 10px;
         width: 177px;
      }

      &.btn-orange {
         background: orange;
      }
      &.btn-green {
         background: #82d055;
      }
   }

   .icon {
      margin-right: 10px;
   }
</style>