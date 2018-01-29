<template>
<div>
  <div class="paper_item">
    <div class="paper_title"> Unrealistic map based navigation system for pedestrian.</div>
    <div class="paper_desc">
      Zong-Sheng Wang, Seon-Woo Lee, Chang Geun Song.<br /> 
      Life Science Journal. 11. 73-78. (2014) [<a href="http://www.lifesciencesite.com/lsj/life1107s/012_24406life1107s14_73_78.pdf">pdf</a>]
    </div> 
  </div>
  <div class="paper_item">
    <div class="paper_title"> GP-GPU based Smoothed Particle Hydrodynamic Fluid Simulation.</div>
    <div class="paper_desc">
      Zong-Sheng Wang.<br /> 
      Master Thesis. (2013)
    </div> 
  </div>
  <div class="paper_item">
    <div class="paper_title"> Using a Smart Phone as input device for PC.</div>
    <div class="paper_desc">
      Zong-Sheng Wang, Ji-Hoon Choi, Youngwoong Ko, Chang Geun Song.<br /> 
      The 2012 international Workshop on Advanced Image Technology (IWAIT 2012).
    </div> 
  </div>
</div>
</template>

<script>

export default {
  name: 'Publications'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.paper_item{
    font-family: 'Roboto', Geneva, Verdana, sans-serif;
    margin-bottom: 20px;
}
.paper_item a, a:active, a:visited{
    border-bottom: dashed 1px #ccc;
    text-decoration: none;
    color: #555;
}
.paper_title{
    font-size: 15px;
    font-weight: bold;
    color: #000;
}
.paper_desc{
    font-size: 14px;
    color: #777;
}
</style>
