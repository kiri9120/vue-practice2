<template>
  <div id="app">
    <TheHeader/>
    <router-view/>
    <TheFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  name: 'home',
  components: {
    TheHeader,
    TheFooter
  }
}
</script>


<style lang="scss">
  body {
    margin: 0;
  }
  a {
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  .headline-info {
    margin-bottom: 20px;

    span {
      color: orange;
    }
  }
  .container {
    width: 80%;
    margin: 0 auto;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .bg-cream {
    background: #f7f5f1;
  }

  .btn {
    display: inline-block;
    color: #fff;
    text-decoration: none;
    box-sizing: border-box;
    position: relative;

    &:hover {
      opacity: 0.8;
    }

    &.btn-small {
      padding: 10px;
      width: 177px;
    }

    &.btn-medium {
      padding: 5px;
      width: 300px;
      border-radius: 17px;
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

  .icon-arrow::after {
    font-family: "Font Awesome 5 Free";
    content: "\f054";
    font-weight: 900;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
  }

  .py-50 {
    padding: 50px 0;
  }

  .mb-50 {
    margin-bottom: 50px;
  }

</style>
