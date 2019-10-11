<template>
   <div class="container">
      <div class="box-items">
         <div class="box-item">
            <div class="box__img">
               <img src="../assets/business_01.png" alt="">
            </div>
            <div class="box__content">
               <h3 class="box__ttl">aaa</h3>
               <p class="box__txt">テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
</script>

<style scoped lang="scss">
   .container {
      width: 90%;
      margin: 0 auto;
   }
   .box-items {
      display: flex;
      justify-content: space-between;

      .box-item {
         width: 45%;
         border: 1px solid gray;

         .box__img img {
            width: 100%;
         }

         .box__content {

            padding: 10px;

            .box__ttl {
               color: orange;
               font-size: 18px;
               font-weight: bold;
            }

            .box__txt {
               font-size: 14px;
            }
         }
      }
   }
</style>