<template>
  <div id="app">

    <nav>
      <router-link to="/"> Todo </router-link>
      <router-link to="/Item"> Item </router-link>
    </nav>

    <router-view></router-view>

  </div>
</template>

<script>

export default { name: 'app' }

</script>

<style>

  body
  {
    padding: 25px;
    font-family: "helvetica";
    box-sizing: border-box;
    text-align: center;
  }

  #app > section
  {
    margin: 25px;
    
  }

  nav
  {
    margin-bottom: 45px;
  }

  a
  {
    display: inline-block;
    padding: 5px 10px;
    margin-right: 10px;
    border-radius: 3px;
    background: #38ad6b;
    color: white;
    text-decoration: none;
    text-align: center;
  }

  h1
  {
    font-size:20px;
    font-weight: normal;
    color: #333;
    text-align: center;
  }

  #app > h1
  {
    margin: 0;
    font-size: 25px;
  }

  section
  {
    margin: 25px 0 0 0;
    padding: 25px;
    border-radius: 5px;
    background: rgba(200,200,200,0.4);
  }

  section h1
  {
    padding: 0;
    margin: 0;
  }
</style>
