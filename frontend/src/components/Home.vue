<template>
<el-container>
  <el-row type="flex">
  <el-col :xl="9" :md="6" class="hidden-sm-and-down">
  <el-aside width="25%" class="md-aside">
    <el-row>
      <img class="avatar" src="../assets/avatar02.jpg" />
    </el-row>
    <el-row class="name">
      Zong-Sheng Wang (王宗晟 / 왕종성), PhD
    </el-row>
    <el-row class="description">
      Research Fellow @ Hallym Unv.
    </el-row>
    <el-footer class="lg-footer">
      <Footer />
    </el-footer>
  </el-aside>
  </el-col>
  
  <el-col :xl="15" :md="18" :xs="24">
  <el-main>
    <el-row type="flex" class="hidden-md-and-up sm-header">
      <el-col :span="8">
        <img class="sm-avatar" src="../assets/avatar02.jpg" />
      </el-col>
      <el-col :span="12">
      <el-row class="sm-name">
        Zong-Sheng Wang (王宗晟 / 왕종성), PhD
      </el-row>
      <el-row class="sm-description">
        Research Fellow @ Hallym Unv.
      </el-row>
      </el-col>
    </el-row>
    <div class="md-main"> 
    <el-row type="flex">
      <el-col :md="10" :sm="12" :xs="13" class="basic_info">
        <p>I am a PhD Fellow at Hallym University. I received my B.S. and M.S. degrees in computer engineering and Ph.D. degree in convergence software 
    from Hallym University, Chuncheon, South Korea, in 2012, 2014, and 2021, respectively.</p>
        <p>My research interests lie in Computer Graphics, Machine Learning, Virtual Reality, and Optimization Algorithms.</p>
      </el-col>
      <el-col :md="1" :sm="1" :xs="1"></el-col>
      <el-col :md="8" :sm="10" :xs="9" class="address">
        <p>A1208 Engineering Building, <br/>Hallym University, Chuncheon, Gangwon-do, 24252, Republic of Korea</p>
        <p>wzs (at) hallym.ac.kr<br/>wang (at) zongsheng.im</p>
      </el-col>       
    </el-row>

    <el-row>
      <el-collapse v-model="active_names" >
          <el-collapse-item  name="0">
          <template slot="title">
            <div class="collapse-title">SKILLS</div>
          </template>
          <Skills></Skills>
        </el-collapse-item>
        <el-collapse-item  name="1">
          <template slot="title">
            <div class="collapse-title">PUBLICATIONS</div>
          </template>
          <Publications />
        </el-collapse-item>  
        <el-collapse-item name="2">
          <template slot="title">
            <div class="collapse-title">TEACHING</div>
          </template>
          <Teach />
        </el-collapse-item>
        <el-collapse-item name="3">
          <template slot="title">
            <div class="collapse-title">LANGUAGES</div>
          </template>
          <div>
            <el-tag type="success">Mandarin ✿✿✿✿✿ </el-tag>
            <el-tag>Korean ✿✿✿✿❀ </el-tag>
            <el-tag type="danger">English ✿✿✿❀❀ </el-tag>
            <el-tag type="warning">Japanese ✿❀❀❀❀❀ </el-tag>
        </div>
        </el-collapse-item>
        <el-collapse-item name="4">
          <template slot="title">
            <div class="collapse-title">MISC & OPEN-SOURCE</div>
          </template>
          <Misc />
        </el-collapse-item>
        <el-collapse-item name="5">
          <template slot="title">
            <div class="collapse-title">EARLY PROJECTS</div>
          </template>
          <Projects />
        </el-collapse-item>
      </el-collapse>        
    </el-row>
    </div>
  </el-main>
  <el-footer class="hidden-md-and-up">
    <Footer class="sm-footer" />
  </el-footer>
  </el-col>
  </el-row>
</el-container>
</template>

<script>
import Footer from './Footer.vue'
import Skills from './Skills.vue'
import Publications from './Publications.vue'
import Teach from './Teach.vue'
import Projects from './Projects.vue'
import Misc from './Misc.vue'
import 'element-ui/lib/theme-chalk/display.css'

export default {
  name: 'Home',
  components: {
    Footer, Skills, Publications, Teach, Projects, Misc
  },
  data () {
    return {
      active_names: ['0', '1', '2', '3', '4']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.md-main{
    text-align: left;
    font-family: 'Roboto', Geneva, Verdana, sans-serif;
    font-size: 14px;
    line-height: 1.42857143;
    color: #777; 
    margin: 15px;
}
.md-aside {
    background-color: #555555;
    background: url(../assets/bg04.jpg) no-repeat right 49% top;
    background-size: cover;
    color: #333;
    text-align: center;
    overflow: hidden;
    position: fixed;
    border-right: 1px solid #886E50;
    height: 100%;
}
.collapse-title{
    font-weight: bold;
    font-size: 16px;
    color:#939393;
}
.h2{
    font-family: 'Roboto', Geneva, Verdana, sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 16px;
    color: #939393;
    border-bottom: 1px #dedede solid;
    padding: 5px 0;
    margin-top: 5px;
    margin-bottom: 2px;
}
.basic_info{
    font-size: 15px;
}
.address{
    font-size: 15px;
}
.avatar{
  margin-top: 15%;
  width: 35%;
  border-radius: 100%;
  border: 3px solid #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
}
.name{
  font-family: 'Roboto', Arial, sans-serif, 'Microsoft YaHei';
  font-size: 18px;
  font-weight: bold;
  padding: 8px 0;
  color: #fff;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
}
.description{
  font-family: 'Roboto', Arial, sans-serif;
  color: #fff;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
}
.lg-footer {
    position:absolute;
    bottom: 40px;
    width:100%;
    height:200px;
    font-family: 'Roboto', Arial, sans-serif;
    font-size: 12px;
    color: #fff;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.sm-footer {
    width:100%;
    text-align: center;
    background-color: #111;
    padding: 5px 40px; 
    font-family: 'Roboto', Arial, sans-serif;
    font-size: 12px;
    color: #fff;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.sm-header {
    background-color: #555555;
    background: url(../assets/bg01.jpg) no-repeat right top 35%;
    background-size: cover;
    color: #333;
    text-align: center;
    overflow: hidden;
    border-right: 1px solid #886E50;
    width: 100%;
}
.sm-avatar{
  margin: 10% 0%;
  width: 35%;
  border-radius: 100%;
  border: 3px solid #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
}
.sm-name{
  margin-top: 10%;
  font-family: 'Roboto', Arial, sans-serif, 'Microsoft YaHei';
  font-size: 18px;
  font-weight: bold;
  padding: 8px 0;
  color: #fff;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
}
.sm-description{
  font-family: 'Roboto', Arial, sans-serif;
  color: #fff;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  margin-bottom: 10%;
}
</style>
