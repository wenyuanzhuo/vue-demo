<template>
<div id="app">

<router-view></router-view>
</div>
</template>
<script>
    export default {
       name: 'app'
   }
</script>
<style >
     html{
    height: 100%;
    font-size: 50px;
  }
  *{
    margin: 0;
    padding: 0;
  }
  body, #app{
    min-height: 100%;
  }
  body{
    font-size: 0.3rem;
  }
</style>