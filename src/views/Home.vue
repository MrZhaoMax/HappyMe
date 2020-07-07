<template>
 
</template>

 <!-- <div class="home">
    <headTP></headTP>
    <bodyTP></bodyTP>
    <footTP></footTP>
    <editor v-model="detail" :isClear="isClear" @change="change" v-if="false"></editor>
    <avdTP></avdTP>
  </div> -->

  
<script>
// @ is an alias to /src
import bodyTP from '@/components/body.vue'
import headTP from '@/components/header.vue'
import footTP from '@/components/footer.vue'
import editor from '../components/editor.vue'
import avdTP from '@/components/adp-footer.vue'
export default {
  name: 'home',
  components: {
    bodyTP,headTP,footTP,editor,avdTP
  },
  data() {
      return {
        isClear: false,
        detail:""
        }
      },
      methods: {
        change(val) {
            console.log(val)
            
          },
      },
   created(){
       
    },
}
</script>
