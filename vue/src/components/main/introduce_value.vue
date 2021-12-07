<template>
    <div class="value">
        <div class="column">
            <i class="fas fa-angle-double-up"></i>
            <div class="caption">
                <div class="bold">상승지향</div>
                <p>하며 계속적인 발전 추구</p>
            </div>
        </div>
        <div class="column">
            <i class="fas fa-rocket"></i>
            <div class="caption">
                <p>새로운 기술, 분야에 </p>
                <div class="bold">도전</div>
            </div>
        </div>
        <div class="column">
            <i class="far fa-comments"></i>
            <div class="caption">
                <div class="bold">소통</div>
                <p>을 통한 의견 조율</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'introduce_value'
}
</script>
<style lang="css">
.value{
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
}
.value .bold{
    font-size: 1.2rem;
}
.value i{
    border-radius: 100%;
    border: 0.6rem solid black;
    width: 9rem;
    height: 9rem;
    font-size: 5.5rem;
    padding: 1rem 0;
}
.value i.fa-rocket{
    padding: 1.4rem 0;
}
</style>