<template>
<div>
  <el-row type="flex" class="project_item">
    <el-col :md="9" :sm="12" :xs="15">
      <div class="project_title">PCA-based Face Recognition System</div>
      <div class="project_person">Joint work with Jisu Park</div>
      <div class="project_desc">
        <p>In this work, we developed a training and recognizing system for face recognition with Principal Components Analysis(PCA) method.</p>
      </div>
    </el-col>
    <el-col :span="1"></el-col>
    <el-col :span="8" class="project_img">
      <img src="../assets/prj/pca_face.jpg" width="320px">
    </el-col>
  </el-row>

  <el-row type="flex" class="project_item">
    <el-col :md="9" :sm="12" :xs="15">
      <div class="project_title">Unrealistic map based campus navigation system </div>
      <div class="project_person">A Part of IT/SW Research Project </div>
      <div class="project_desc">
        <p>This work is to develop a navigation application based on a disproportionate map. Several matching algorithms are presented for matching GPS coordinates with disproportionate map.</p>
      </div>
    </el-col>
    <el-col :span="1"></el-col>
    <el-col :span="8" class="project_img">
      <img src="../assets/prj/campus_navigation.png" width="320px">
    </el-col>
  </el-row>

  <el-row type="flex" class="project_item">
    <el-col :md="9" :sm="12" :xs="15">
      <div class="project_title">Archery Application in Virtual Environment</div>
      <div class="project_person">WorldViz + SonyHMD + Kinect</div>
      <div class="project_desc">
        <p></p>
      </div>
    </el-col>
    <el-col :span="1"></el-col>
    <el-col :span="8" class="project_img">
      <img src="../assets/prj/archery_vr.png" width="320px">
    </el-col>
  </el-row>

  <el-row type="flex" class="project_item">
    <el-col :md="9" :sm="12" :xs="15">
      <div class="project_title">Unity3D and Kinect Based Gesture Recognition Application</div>
      <div class="project_person">Gesture Recognition</div>
      <div class="project_desc">
        <p></p>
      </div>
    </el-col>
    <el-col :span="1"></el-col>
    <el-col :span="8" class="project_img">
      <img src="../assets/prj/kinect_gestures.png" width="320px">
    </el-col>
  </el-row>

  <el-row type="flex" class="project_item">
    <el-col :md="9" :sm="12" :xs="15">
      <div class="project_title">Number Recognition Application</div>
      <div class="project_person">Number Recognition/Training Application</div>
      <div class="project_desc">
        <p>This work is to develop a training and recognizing application for number recognition.</p>
      </div>
    </el-col>
    <el-col :span="1"></el-col>
    <el-col :span="8" class="project_img">
      <img src="../assets/prj/number_train.png" width="320px">
      <img src="../assets/prj/number_reco.png" width="320px">
    </el-col>
  </el-row>
  
  <el-row type="flex" class="project_item">
    <el-col :md="9" :sm="12" :xs="15">
      <div class="project_title">Accelerometer Sensor based Game controller</div>
      <div class="project_person">LM3s811 Board(ARMv9) + LIS3DH Accelerometer Sensor + OpenGL</div>
      <div class="project_desc">
        <p>In this work, we built a Game controller with LIS3DH Accelerometer Sensor on LM3s811 Board for somatosensory gaming.</p>
      </div>
    </el-col>
    <el-col :span="1"></el-col>
    <el-col :span="8" class="project_img">
      <img src="../assets/prj/game_ctl.jpg" width="125px">
      <img src="../assets/prj/game_ctl_demo.png" width="185px">
    </el-col>
  </el-row>
</div>
</template>

<script>

export default {
  name: 'Projects'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.project_item{
    font-family: 'Roboto', Geneva, Verdana, sans-serif;
    margin-bottom: 30px;
}
.project_title{
    font-size: 22px;
    font-weight: 300;
    color: #4c4c4c;
    margin: 10px 0;
    line-height: 28px;
}
.project_person{
    font-size: 12px;
    margin: 10px 0;
    color: #777;
}
.project_desc{
    font-size: 13px;
    color: #777;
}
.project_img{
    width: 320px;
}
</style>
