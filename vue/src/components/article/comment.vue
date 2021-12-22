<template lang="html">
    <div class="comment">
        <div class="comment_info">댓글 3 보기</div>
        <div class="comment_group">
            <div class="comment_item">
                <div class="comment_content">
                    안녕하세요 댓글입니다.
                </div>
                <div class="flex">
                    <div class="author_date">
                        DeveloperRyou, 2021-12-12 17:20
                    </div>
                    <div class="control">
                        수정 삭제 답글
                    </div>
                </div>
            </div>
        </div>
        <div class="comment_form">
            <form action="" class="ui form">
                <div class="name">
                    <input type="text" name="name" placeholder="Name">
                </div>
                <div class="password">
                    <input type="password" name="password" placeholder="password">
                </div>
                <div class="email">
                    <input type="text" name="email" placeholder="Your Email (Selective)">
                </div>
                <div class="content">
                    <textarea name="content" rows="5" placeholder="Content"></textarea>
                </div>
                <div class="submit">
                    <button class="ui basic button" type="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'comment',
    components: {}
}
</script>
<style>
.comment{
    text-align: left;
    font-size: 0.8rem;
}
.comment_info{
    font-weight: 700;
}
.comment_item{
    padding: 0.5rem 0;
    border-bottom: 1px solid #999;
}
.comment_item .flex{
    display: flex;
    justify-content: space-between;
}
.comment_item .author_date{
    color: #999;
}
.comment_item .comment_content{
    margin-top:0.3rem;
}
.comment_item .control{
    text-align: right;
    margin-top:0.3rem;
    color: #333;
}

.comment_form{
    margin-top:1rem;
}
.comment_form form div{
    margin-top:0.5rem;
}

</style>