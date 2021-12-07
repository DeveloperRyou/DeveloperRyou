<template>
    <div class=background_img>
        <img alt="background_img" src="@/assets/background_img_N.png">
    </div>
    <!--<a href='https://.pngtree.com/so/사업'>사업 png에서 .pngtree.com/</a>-->
</template>
<script>
export default {
    name: 'background_img'
}
</script>

<style lang="css">
.background_img{
    position: relative;
    height: 100%;
}
.background_img img{
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50%;
    min-width: 25rem;
    object-fit: cover;
}
</style>