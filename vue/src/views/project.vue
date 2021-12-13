<template lang="html">
    <Navigator></Navigator>
    <section>
        <article class="projects">
            <div class="container">
                <Projects></Projects>
            </div>
        </article>
    </section>
    <footer>
        <Footer></Footer>
    </footer>
</template>
<script>
import Navigator from '@/components/navigator'
import Projects from '@/components/main/projects'
import Footer from '@/components/footer'
export default {
    name: 'project',
    components: {Navigator,Projects,Footer}
}
</script>

<style lang="css">

</style>