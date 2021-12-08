<template>
    <div class="footer">
        <div class="descript">
            <div class="icons">
            </div>
            <div class="copyright">
                © 2021. DeveloperRyou. All rights reserved.
            </div>
        </div>
        <div class="admin">
            <a class="ui inverted basic button">
                Admin
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'footer'
}
</script>

<style lang="css">
.footer{
    height: 5rem;
    padding:0 2rem;
    line-height: 5rem;
    background-color: #111;
    color: white;
}
.footer .descript{
    float: left;
}
.footer .admin{
    float: right;
}
</style>