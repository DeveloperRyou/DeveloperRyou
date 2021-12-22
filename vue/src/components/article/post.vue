<template lang="html">
    <div class="post_title">
        <p>
            DeveloperRyou 기획
        </p>
    </div>
    <div class="post_content">
        <p>나는 이렇게 기획하고 이렇게 만들었다.</p>
    </div>
    <div class="date_published">
        <p>2021년 11월 25일 11:02</p>
    </div>
    <div class="page_prev_next">
        <ui>
            <li>
                <strong>이전</strong>:
            </li>
            <li>
                <strong>다음</strong>:
            </li>
        </ui>
    </div>
</template>

<script>
export default {
    name: 'post',
    components: {}
}
</script>

<style lang="css">
.post_title{
    font-size: 2rem;
    font-weight: 700;
    padding-bottom: 1rem;
    border-bottom: solid 1px #666;
    margin-bottom: 1rem;
}
.post_content{
    text-align: left;
}
.date_published{
    text-align: right;
    font-size: 0.8rem;
}
.page_prev_next{
    margin-top:1rem;
    padding: 0.5rem 0;
    border-top: 1px solid black;
    font-size: 0.8rem;
    text-align: left;
}
.page_prev_next li{
    list-style: none;
}
</style>