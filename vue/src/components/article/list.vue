<template lang="html">
    <div class="list_control">
        <div class="project_name">
            {{data.project}}
        </div>
        <div class="button">
            <i class="fas fa-angle-left"></i>
        </div>
    </div>
    <div class="list_item">
        <a v-for="(title,idx) in data.list" :key="idx" class="list_item">
            <p>{{title}}</p>
        </a>
    </div>
</template>

<script>
export default {    
    name: 'list',
    setup(){
        const data = {
            project: 'DeveloperRyou',
            list: ['기획','프런트엔드 개발','백엔드 개발', '배포']    
        }
        return {data}
    }
}
</script>

<style lang="css">
.list_control{
    display: flex;
    height: 2rem;
    line-height: 2rem;
    margin-bottom: 0.5rem;
}
.list_control .project_name{
    text-align: left;
    padding: 0 0.8rem;
    width: 80%;
}
.list_control .button{
    width: 20%;
    cursor: pointer;
}
.list_item a{
    text-align: left;
    color:#555;
    display: block;
    padding: 0.5rem 0.8rem;
    cursor: pointer;
}
.list_item a:hover{
    background-color: #eee;
}
</style>