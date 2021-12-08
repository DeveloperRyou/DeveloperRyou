<template lang="html">
    <h1>Projects</h1>
    <div class="title_bar"></div>
    <div class="project_container">
        <div class="card" v-for="(item,idx) in items" :key=idx >
            <div class="sub_title bold">
                <p>{{item.title}}</p>
            </div>
            <div class="period">
                <p>{{item.period}}</p>
            </div>
            <div class="project_info">
                <div class="project_img">
                    <img :src="item.img">
                </div>
                <div class="project_content">
                    <div class="description" v-html="item.description"></div>
                    <div class="button">
                        <a class="ui basic button">View More ></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'projects',
    setup(){
        const items = [
            {
                title: 'DeveloperRyou',
                period: '2021.11~2022.2',
                img: require('@/assets/background_img.png'),
                description: 'Sed ut perspiciatis, unde omnis iste natus error d exprehenderit, qui in eaAt vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
            }
        ]
        return {items}
    }
}
</script>
<style lang="css">
.project_container{}
.project_container .card{
    margin-top: 2rem;
}
.project_container .sub_title{
    font-size: 2rem;
    padding-bottom: 0.5rem;
}
.project_container .period{
    margin-bottom: 1rem;
    color: #969696;
}
.project_container .project_info{
    display: flex;
}
.project_container .project_img{
    width: 45%;
    margin-right: 2rem;
}
.project_container .project_img img{
    width: 100%;
}
.project_container .project_content{
    width: calc(55% - 2rem);
}
.project_container .description{
    text-align: left;
}
.project_container .button{
    float: right;
    margin-top: 1rem;
}
.project_container .view_more_projects{

}

</style>