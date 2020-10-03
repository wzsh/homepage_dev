<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted () {
     // 创建cnzz统计js
    const script = document.createElement('script')
    script.src = 'https://s4.cnzz.com/z_stat.php?id=1279313203&web_id=1279313203'
    script.language = 'JavaScript'
    document.body.appendChild(script)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
