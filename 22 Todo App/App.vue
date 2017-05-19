<template>
  <section id="app">

    <router-view></router-view>

  </section>
</template>


<style>

  html, body
  {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    font-family: 'helvetica';
    font-size: 16px;
    font-weight: normal;
    line-height: 1.2em;
    color: #333;
  }

  a
  {
    text-decoration: none;
  }

  *
  {
    box-sizing: border-box;
  }
</style>


<script>

  export default { name : 'App' }

</script>
