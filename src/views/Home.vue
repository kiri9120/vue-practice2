<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <div class="section__policy py-50">
      <p class="text--policy"><span>policy</span> | 創業の精神</p>
      <p>アルファグループは祖業である運送業において、常にサービス業を行っている気持ちで事業展開してきました。<br>社名の「アルファ」は荷物を運ぶだけでなく、“プラスアルファ”のサービスをお客様に提供したいという<br>創業からの思いを忘れないために、アルファの精神として社名に託しました。</p>
    </div>
    <div class="section__business">
      <div class="container py-50">
        <h2>事業内容</h2>
        <p class="headline-info">ー <span>Works</span> ー</p>
        <p>チャーター便・貸切便などの運送サービスから自社倉庫内での保管管理業務や入出荷業務まで<br>お客様の物流ニーズや物流形態に合わせたサービスをご提供いたします。<br>豊富な経験とノウハウや多岐に広がるネットワークを活かして、コスト削減のみならず<br>作業の効率化や品質の向上など、お客様にとって最適なロジスティクスを実現いたします。</p>
      </div>
      <div class="bg-cream">
        <div class="container py-50">
          <div class="box-items">
            <div class="box-item" v-for="(item, index) in businessItems" :key="index">
              <div class="box__img">
                <img :src="item.image" alt="">
              </div>
              <div class="box__content">
                <h3 class="box__ttl">{{item.name}}</h3>
                <p class="box__txt" v-html="item.description"></p>
              </div>
            </div>
          </div>
          <router-link to="/about" class="btn btn-green btn-medium icon-arrow">事業内容</router-link>
        </div>
      </div>
    </div>
    <div class="section__blog py-50">
      <div class="container">
        <h2>ブログ</h2>
        <p class="headline-info">ー <span>Blog</span> ー</p>
        <div class="blog-items">
          <div class="blog-item" v-for="(item, index) in businessItems" :key="index">
            <div class="blog__img">
              <img :src="item.image" alt="">
            </div>
            <div class="blog__content">
              <h3 class="blog__ttl">{{item.name}}</h3>
              <p class="blog__txt" v-html="item.description"></p>
            </div>
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
      businessItems: [
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
    };
  }
}
</script>

<style scoped lang="scss">
  .box-items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background: #f7f5f1;

    .box-item {
      box-sizing: border-box;
      margin-bottom: 30px;
      border: 1px solid gray;
      width: calc( calc(100% - 30px) / 2);

      .box__img img {
        width: 100%;
      }

      .box__content {
        padding: 20px;

        .box__ttl {
          margin-bottom: 10px;
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

  .blog-items {
    display: flex;
    justify-content: space-between;

    .blog-item {
      width: calc( calc(100% - 20px * 3) / 4);

      .blog__img img {
        width: 100%;
      }

      .blog__content {
        padding: 10px;
        text-align: left;

        .blog__ttl {
          margin-bottom: 10px;
          font-size: 15px;
          font-weight: bold;
        }

        .blog__txt {
          font-size: 14px;
        }
      }
    }
  }

  .section__policy {
    font-size: 18px;
    border-bottom: 4px solid orange;

    .text--policy {
    font-size: 24px;
    margin-bottom: 30px;

    span {
      font-size: 50px;
      font-weight: bold;
    }
  }

  }

</style>