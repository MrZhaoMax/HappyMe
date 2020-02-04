<template>
  <div class="home">
    <headTP></headTP>
    <bodyTP></bodyTP>
    <footTP></footTP>
  </div>
</template>

<script>
// @ is an alias to /src
import bodyTP from '@/components/body.vue'
import headTP from '@/components/header.vue'
import footTP from '@/components/footer.vue'
export default {
  name: 'home',
  components: {
    bodyTP,headTP,footTP
  }
}
</script>
