<template lang="html">
    <h1>Contact</h1>
    <div class="title_bar"></div>
    <div class="contact_container">
        <div class="emailform">
            <div class="sub_title">
                Have a question?
            </div>
            <form class="ui form">
                <div class="name">
                    <input type="text" name="name" placeholder="Name">
                </div>
                <div class="email">
                    <input type="text" name="email" placeholder="Your Email">
                </div>
                <div class="content">
                    <textarea name="content" rows="5" placeholder="Content"></textarea>
                </div>
                <div class="send">
                    <button class="ui basic button" type="submit">Send</button>
                </div>
            </form>
        </div>
        <div class="account">
            <div class="git card">
                <img src="@/assets/contact/github.png">
                <div class="text bold">Github</div>
            </div>
            <div class="codeforces card">
                <img src="@/assets/contact/codeforces.png">
                <div class="text bold">Codeforces</div>
            </div>
            <div class="solvedac card">
                <img src="@/assets/contact/solvedac.png">
                <div class="text bold">Solved.ac</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'contact'
}
</script>
<style lang="css">
.contact_container{
    display: flex;
    margin-top:2rem;
}
.contact_container .emailform, .account{
    width: 50%;
    padding: 0 1rem;
}
.emailform form{
    margin-top:1rem;
}
.emailform form div{
    margin-top:0.5rem;
}
.emailform form .send{
    float: right;
}
.account .card{
    height: 5rem;
    margin-bottom: 1rem;
    display: flex;
}
.account .card img{
    height: 100%;
    margin-right: 3rem;
    margin-left: 2rem;
}
.account .card .text{
    line-height: 3rem;
    vertical-align: middle;
    font-size: 2rem;
}

</style>