<template lang="html">
    <h1>Skills</h1>
    <div class="title_bar"></div>
    <div class="skill_container">
        <div class="card" v-for="(list,title) in items" :key=title :class="title">
            <div class="sub_title bold">
                <p>{{title}}</p>
            </div>
            <div class="skill_img" v-for="img in list" :key=img >
                <img :src="img">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'skills',
    setup() {
        const items = {
            'FrontEnd': [
                require('@/assets/skills/htmljscss.png'),
                require('@/assets/skills/jquery.png'),
                require('@/assets/skills/vue.png')
             ],
            'BackEnd': [
                require('@/assets/skills/python.png'),
                require('@/assets/skills/django.png'),
                require('@/assets/skills/nodejs.png'),
                require('@/assets/skills/express.png'),
                require('@/assets/skills/mysql.png')
            ],
            'Algorithm & AI':[
                require('@/assets/skills/c.png'),
                require('@/assets/skills/c++.png'),
                require('@/assets/skills/python.png'),
                require('@/assets/skills/tensorflow.png'),
                require('@/assets/skills/keras.png')
            ]
        }
            
        return {items}
    }
}
</script>
<style lang="css">
.skill_container{
}
.skill_container .card{
    margin-top: 2rem;
    min-height: 8rem;
    text-align: left;
}
.skill_container .sub_title{
    font-size: 1.5rem;
    border-bottom: solid 1px #bbb;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
}
.skill_container .skill_img{
    height: 6rem;
    display: inline-block;
    margin: 0 2rem 1rem 0;
}
.skill_container .skill_img img{ 
    height: 100%;
}
</style>
