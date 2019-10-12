<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <div class="container">
      <div class="box-items" v-for="(library, index) in libraries" :key="index">
        <div class="box-item" v-for="(item, index) in library.list" :key="index">
          <div class="box__img">
            <img :src="item.image" alt="">
          </div>
          <div class="box__content">
            <h3 class="box__ttl">{{item.name}}</h3>
            <p class="box__txt" v-html="item.description"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    message: ''
    return {
      libraries: [
        {
          name: 'Vue Libraries',
          list: [
            {
              name: 'タイトル1',
              image: require('../assets/business_01.png'),
              description: 'ここにテキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。<br>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。',
            },
            {
              name: 'タイトル2',
              image: require('../assets/business_02.png'),
              description: 'ここにテキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。<br>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。',
            },
            {
              name: 'タイトル3',
              image: require('../assets/business_03.png'),
              description: 'ここにテキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。<br>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。',
            },
            {
              name: 'タイトル4',
              image: require('../assets/business_04.png'),
              description: 'ここにテキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。<br>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。',
            }
          ]
        }
      ]
    };
  }
}
</script>

<style scoped lang="scss">
   .box-items {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .box-item {
        margin-bottom: 30px;
        border: 1px solid gray;
        width: calc( calc(100% - 30px) / 2);

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
              text-align: left;
            }
         }
      }
   }
</style>