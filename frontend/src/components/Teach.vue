<template>
<div>
  <el-row class="teach_item">
    <el-col :sm="1" :xs="2">
      <fa-icon name="book" class="teach_icon" scale="1.5" />
    </el-col>
    <el-col :sm="23" :xs="22">
      <div class="teach_term">Fall 2019</div>
      <div class="teach_content">Mentoring for Unity Shader Programming</div>
    </el-col>
  </el-row>
  <el-row class="teach_item">
    <el-col :sm="1" :xs="2">
      <fa-icon name="book" class="teach_icon" scale="1.5" />
    </el-col>
    <el-col :sm="23" :xs="22">
      <div class="teach_term">Winter 2018</div>
      <div class="teach_content">Mentoring for Web Application Development</div>
    </el-col>
  </el-row>
  <el-row class="teach_item">
    <el-col :sm="1" :xs="2">
      <fa-icon name="graduation-cap" class="teach_icon" scale="1.5" />
    </el-col>
    <el-col :sm="23" :xs="22">
      <div class="teach_term">Spring 2013</div>
      <div class="teach_content">TA for Computer Graphics</div>
      <div class="teach_content">TA for Smartphone Programming(iOS)</div>
    </el-col>
  </el-row>
  <el-row class="teach_item">
    <el-col :sm="1" :xs="2">
      <fa-icon name="graduation-cap" class="teach_icon" scale="1.5" />
    </el-col>
    <el-col :sm="23" :xs="22">
      <div class="teach_term">Fall 2012</div>
      <div class="teach_content">TA for Game Programming(DirectX 11)</div>
    <div class="teach_content">TA for Smartphone Programming(iOS)</div>
    </el-col>
  </el-row>
  <el-row class="teach_item">
    <el-col :sm="1" :xs="2">
      <fa-icon name="graduation-cap" class="teach_icon" scale="1.5" />
    </el-col>
    <el-col :sm="23" :xs="22">
      <div class="teach_term">Spring 2012</div>
      <div class="teach_content">TA for Computer Programming(Java)</div>
      <div class="teach_content">TA for Data Structure</div>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: 'Teach'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.teach_item{
    font-family: 'Roboto', Geneva, Verdana, sans-serif;
    margin-bottom: 10px;
}
.teach_icon{
    padding: 8%;
}
.teach_term{
    font-size: 14px;
    font-weight: bold;
    color: #777;
}
.teach_content{
    font-size: 14px;
    color: #777;
}
</style>
