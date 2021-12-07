<template lang="html">
    <div class="information">
        <div class="wrapper" v-for="(item,idx) in this.send" :key="idx">
            <div class="flex-box">
                <div class="icon">
                    <i v-bind:class="item.icon"></i>
                </div>
                <div>
                    <div class="label bold">{{item.label}}</div>
                    <div class="data" v-html="item.data"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'introduce_information',
    props: ["send"]
}
</script>

<style lang="css">
.information{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: 2rem auto 0 ;
    align-items: center;
    max-width: 55rem;
    min-width: 35rem;
}
.information .wrapper{
    margin-bottom: 2rem;
    width:33.33%;
}
.information .wrapper .flex-box{
    display: flex;
    flex-wrap: wrap;
    text-align: left;
    margin: auto;
    max-width: 14rem;
}

.information .wrapper .flex-box .icon{
    font-size: 2rem;
    margin-right: 1rem;
    min-width: 2rem;
}
.information .wrapper .flex-box .label{
    font-size:1.2rem;
    margin-bottom: 1.1rem;
}
</style>