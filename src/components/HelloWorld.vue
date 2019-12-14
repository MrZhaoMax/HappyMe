<template>
  <div class="container">
      <div class="row">

      </div>
      <div class="row" v-for="item in 3 " :key="item" style="margin-top:30px;">
        <div class="col-xs-6 col-sm-3" >
          <img src="/img/logo.82b9c7a5.png" alt="" srcset="" style="width:200px;height:200px;">
          <div class="row">
              <div class="col-xs-6 col-sm-3">
                  <h1> {{item}}</h1>
              </div>
          </div>
        </div>
        <div class="col-xs-6 col-sm-3">
           <img src="/img/logo.82b9c7a5.png" alt="" srcset="" style="width:200px;height:200px;">
           {{item}}
        </div>

        <!-- Add the extra clearfix for only the required viewport -->
        <div class="clearfix visible-xs-block"></div>

        <div class="col-xs-6 col-sm-3" >
           <img src="/img/logo.82b9c7a5.png" alt="" srcset="" style="width:200px;height:200px;">
             {{item}}
        </div>
        <div class="col-xs-6 col-sm-3" >
           <img src="/img/logo.82b9c7a5.png" alt="" srcset="" style="width:200px;height:200px;">
             {{item}}
        </div>
      </div>
  </div>
</template>

<style >
  
@media (max-width: 575.98px) { 

 }

@media (min-width: 576px) and (max-width: 767.98px) { 
  
 }

@media (min-width: 768px) and (max-width: 991.98px) { 
  
 }

@media (min-width: 992px) and (max-width: 1199.98px) { 
  
 }

@media (min-width: 1200px) {
  
  
 }
</style>