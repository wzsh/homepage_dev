<template>
<div>
  <div class="social-container">
    <a href="https://www.linkedin.com/in/wangzs/" title="Linkedin">      
      <fa-icon label="Email" class="social-btn">
        <fa-icon name="circle" scale="2" class="social-btn-circle" />
        <fa-icon name="linkedin" class="social-btn-inner"/>  
      </fa-icon>
    </a>
    <a href="https://github.com/wzsh" target="_blank" title="My Github">      
      <fa-icon label="Github" class="social-btn">
        <fa-icon name="circle" scale="2" class="social-btn-circle" />
        <fa-icon name="github-alt" class="social-btn-inner"/>  
      </fa-icon>
    </a>
    <a href="cv_wzs_eng.pdf" target="_blank" title="Brief CV">      
      <fa-icon label="CV" class="social-btn">
        <fa-icon name="circle" scale="2" class="social-btn-circle" />
        <fa-icon name="file-text" class="social-btn-inner"/>  
      </fa-icon>
    </a>
  </div>
  <div>
  Last Updated: Sep. 30th, 2021<br>
  Built with  <a href="https://vuejs.org/" target="_blank">Vue.js</a> & hosted on  <a href="https://pages.github.com" target="_blank">Github Pages</a>.
  </div>
</div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a, a:active, a:visited{
    border-bottom: dashed 1px #ccc;
    text-decoration: none;
    color: #ccc;
}

.social-container a, a:active, a:visited{
    border: none;
}
.social-btn{
    margin: 10px;
}
.social-btn-circle {
    color: black;
}
.social-btn-circle:hover {
    color: #999;
}
.social-btn-inner{
    color: #fff;
}
</style>
