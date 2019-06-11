<template>
  <div id="app">
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">BNK48</a>
        <button class="navbar-toggler"  type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">{{ $route.params.name }} <span class="sr-only">(current)</span></a>
            </li>
          </ul>  
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <router-link to="/" class="nav-link" tabindex="-1" aria-disabled="true">Home</router-link>
            </li>
            <li class="nav-item active">
              <router-link to="/login/Noey" class="nav-link" tabindex="-1" aria-disabled="true">login</router-link>
            </li>
            <li class="nav-item active">
              <router-link to="/login/Noey/child" class="nav-link" tabindex="-1" aria-disabled="true">submit</router-link>
            </li>
          </ul>  
        </div>
      </div>
    </nav>
    <img class="imgtest" src="./assets/(7).png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.imgtest{
  width: 30%;
  height: auto;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
