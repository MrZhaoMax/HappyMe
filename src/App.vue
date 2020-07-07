<template>
  <div id="app">
    <!-- <router-view/> -->
    <headerPage></headerPage>
    <index></index>
  </div>
</template>
<script>
import user from './DAL/user'
import index from './components/index/index.vue'
import headerPage from '../src/components/header/header'

import '../src/assets/css/style.css'

import '../src/assets/css/bootstrap.min.css'
export default {
  components:{index,headerPage},
  created() { 
  
  },
}
</script>
