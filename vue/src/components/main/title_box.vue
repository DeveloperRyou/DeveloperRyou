<template>
    <div class="title-box"> 
        <div class="pretitle">
            <p>Hello, I’m</p>
        </div>
        <div class="title neonText">
            <p>Developer</p>
            <p>Ryou</p>
        </div>
        <div class="descript">
            <p>안녕하세요.</p>
            <p>Web / Algorithm / AI 에 흥미있는</p>
            <p>DeveloperRyou의 Portfolio + Blog입니다.</p>
        </div>
        <div class="button">
            <a class="ui inverted basic button">More</a>
        </div>
    </div>  
</template>
<script>
export default {
    name: 'title_box'
}
</script>

<style lang="css">
.title-box{
  position: absolute;
  top: 20%;
  left: 10%;
  text-align: left;
  color: #fff;
}

.title-box .pretitle{
    font-weight: 700;
    font-size: 2rem;
}
.title-box .title{
  font-size: 6rem;
  letter-spacing: 0.3rem;
  margin-top: 1.5rem;
}
.title-box .title p{
  line-height: 7rem;
}
.title-box .neonText{
  font-family: neon;
  color: #fff;
  text-shadow: 0 0 1px #50CFD6, 0 0 3px #50CFD6, 0 0 10px #50CFD6, 0 0 20px #50CFD6;
}
.title-box .descript{
    margin-top: 2rem;
    font-size: 1.2rem;
}
.title-box .button{
    margin-top:1rem;
}
.title-box .button a{
    width: 13rem;
}
</style>