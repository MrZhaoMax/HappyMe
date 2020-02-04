<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">静夜繁星</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarTogglerDemo02"
      aria-controls="navbarTogglerDemo02"
      aria-expanded="false"
      aria-label="Toggle navigation"
      @click="changeMune"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse"  ref="toggler"> 
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <a class="nav-link" href="#">
            回到主页
            <span class="sr-only">(current)</span>
          </a>
        </li>
         <li class="nav-item active" >
          <a class="nav-link" href="#">
            进入后台
            <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item" v-if="false">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item" v-if="false">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="您的问题都可放在此处" />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">忘记</button>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
    data() {
        return {
            flexcolumn:false,
        }
    },
    methods: {
       changeMune(){
          // alert('123');
         // console.log(this.$refs.toggler.getAttribute('style'))
         if( this.$refs.toggler.getAttribute('style')==null ||
                 this.$refs.toggler.getAttribute('style')=='display: none;'){
              this.$refs.toggler.setAttribute('style',"display: block;");
              return;
          }
          this.$refs.toggler.setAttribute('style',"display: none;");
          
          //this.flexcolumn =!this.flexcolumn;
       }
    },
}
</script>