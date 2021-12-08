<template lang="html">
    <header>
        <BackgroundImg></BackgroundImg>
        <TitleBox></TitleBox>
        <Navigator></Navigator>
    </header>
    <main>
        <article class="introduce">
            <div class="container">
                <Introduce></Introduce>
            </div>
        </article>
        <article class="skills">
            <div class="container">
                <Skills></Skills>
            </div>
        </article>
        <article class="projects">
            <div class="container">
                <Projects></Projects>
                <div class="view_more_projects">
                    <a class="ui basic button" href=""><p>view more projects</p></a>
                </div>
            </div>
        </article>
        <article class="contact">
            <div class="container">
                <Contact></Contact>
            </div>
        </article>
    </main>
    <footer>
        <Footer></Footer>
    </footer>
</template>
<script>
import TitleBox from '@/components/main/title_box'
import BackgroundImg from '@/components/main/background_img'
import Navigator from '@/components/navigator'
import Introduce from '@/components/main/introduce'
import Skills from '@/components/main/skills'
import Projects from '@/components/main/projects'
import Contact from '@/components/main/contact'
import Footer from '@/components/footer'
export default {
    name: 'main',
    components: {TitleBox,BackgroundImg,Navigator,Introduce,Skills,Projects,Contact,Footer}
}
</script>
<style lang="css">
header{
    position: relative;
    height: 100%;  
    background-color: #000a30;
}
article{
    padding: 4rem 0;
    text-align: center;
}
article .title_bar{
    background: black;
    height: 4px;
    width: 100px;
    display: inline-block;
}

.introduce{
    background-color: #fff;
}
.projects{
    background-color: #bdc7f1;
}
.skills, .contact{
    background-color: #f5f5f5;
}

.container{
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 2rem;
}
.container .view_more_projects{
    margin-top: 2rem;
    width: 100%;
}
.container .view_more_projects p{
    font-size: 1.5rem;
}
</style>