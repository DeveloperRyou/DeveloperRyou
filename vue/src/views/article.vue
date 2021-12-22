<template lang="html">
    <Navigator></Navigator>
    <div class="container_post">
        <div class="list">
            <List></List>
        </div>
        <div class="post">
            <Post></Post>
            <Comment></Comment>
        </div>
    </div>
    <footer>
        <Footer></Footer>
    </footer>
</template>
<script>
import Navigator from '@/components/navigator'
import List from '@/components/article/list'
import Post from '@/components/article/post'
import Comment from '@/components/article/comment'
import Footer from '@/components/footer'
export default {
    name: 'article',
    components: {Navigator,List,Post,Comment,Footer}
}
</script>

<style lang="css">
.container_post{
    min-height: 100%;
    display: flex;
    margin-top: 4rem;
}
.list{
    padding-top:1rem;
    width:20%;
    border-right:1px solid black;
}
.post{
    padding-top:1rem;
    width:80%;
    margin: 0 2rem;
}
</style>