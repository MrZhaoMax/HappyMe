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
export default {
  components:{index,headerPage},
  created() { 
  
  },
}
</script>
