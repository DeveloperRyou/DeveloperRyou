<template>
    <nav>
        <div class="menu" :class="{isScrolled:data.isScrolled}">
            <div class="item left">
                <div class="active item">Home</div>
                <div class="item">Project</div>
            </div>
            <div class="item right">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    </nav>
</template>
<script>
import {reactive} from 'vue'
export default {
    name: 'navigator',
    setup() {
        const data = reactive({
            isScrolled: false
        })
        const checkScrolled = function(){
            var scrollY = window.scrollY || document.documentElement.scrollTop;
            if(scrollY>0) data.isScrolled = true;
            else data.isScrolled = false;
        }
        return{
            data,
            checkScrolled
        }
    },
    mounted(){
        this.checkScrolled();
        window.addEventListener('scroll', this.checkScrolled);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.checkScrolled);
    }
}
</script>

<style lang="css">
nav{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    color: #ffffffbb
}
.menu{
    width: 100%;
    max-width: 100rem;
    height: 4rem;
    line-height: 4rem;
    margin: 0 auto;
}
.menu.isScrolled{
    background-color: #fff;
    color: #000;
    box-shadow: 0 1px 0.3rem #ffffffbb
}
.menu .item{
    padding: 0 1rem;
    display: inline-block;
    font-size: 1.5rem;
    font-weight: 700;
}

</style>