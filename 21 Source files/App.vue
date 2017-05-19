<template>
  <div id="app">

    <nav>
      <router-link to="/"> Todo </router-link>
      <router-link :to="{
          path:'/list/0/item/20',
          query:{ isList:true, isItem:false }
      }"> Item </router-link>

      <button @click=" $router.replace({
          path:'/list/0/item/20',
          query:{ isList:true, isItem:false }
      })">
        Route Change
      </button>

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

  button
  {
    background: #4f5b66;
    border:none;
    padding: 5px 10px;
    margin-right: 10px;
    color: white;
    border-radius: 3px;
    font-size: 16px;
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
