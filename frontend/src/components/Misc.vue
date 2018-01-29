<template>
<div>
  <el-row class="misc_item">
    <el-col :sm="1" :xs="2">
      <fa-icon name="file-code-o" class="misc_icon" scale="1.5" />
    </el-col>
    <el-col :sm="23" :xs="22">
      <div class="misc_title"> WebGL Tutorials</div>
      <div class="misc_desc">WebGL & Three.js Tutorial Code</div>
      <div class="misc_github">  
        <a href="https://github.com/wzsh/webgl_tutorials" target="_blank" > <el-button class="btn-round" ><fa-icon name="github" scale="1.2" /> View on Github</el-button> </a>
      </div>
    </el-col>
  </el-row>
</div>
</template>

<script>

export default {
  name: 'Misc'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.misc_item{
    font-family: 'Roboto', Geneva, Verdana, sans-serif;
    margin-bottom: 30px;
}
.misc_icon{
    padding: 8%;
}
.misc_title{
    font-size: 16px;
    font-weight: 300;
    color: #4c4c4c;
    margin: 5px 0;
    line-height: 28px;
}
.misc_desc{
    font-size: 13px;
    color: #777;
}
.misc_github{
    margin: 5px 0;
    color:#4c4c4c;  
}
.fa-icon {
  width: auto;
  max-width: 100%;
  max-height: 100%;
  vertical-align: middle;
}
.btn-round, .btn-round:visited {
    padding: 5px 15px;
    border-radius: 15px;
    border-style: solid;
    font-family: 'Roboto', Geneva, Verdana, sans-serif;
    font-size: 10px;
    color: #999;
    background: none;
    border: 1px solid #dcdfe6;
}
.btn-round:hover, .btn-round:focus, .btn-round.focus {
    color: #333;
    text-decoration: none;
    background: none;
    border: 1px solid #dcdfe6;
}
.btn-round:active{
    background: none;
    outline: 0;
    -webkit-box-shadow: inset 0 3px 5px rgba(0,0,0,.125);
    box-shadow: inset 0 3px 5px rgba(0,0,0,.125);
    border: 1px solid #dcdfe6;
}
</style>
