<template>
  <div class="hello"> 
     <div id="components-demo">
      <button-counter></button-counter>
    </div>
  </div>
</template>

<script>


export default {
  name: 'child',
  data () {
    return {
      msg: 'child'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
