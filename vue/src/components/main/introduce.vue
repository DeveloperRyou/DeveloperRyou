<template lang="html">
    <h1>Introduce</h1>
    <div class="title_bar"></div>
    <Value></Value>
    <Information :send="items"></Information>
</template>
<script>
import Value from '@/components/main/introduce_value'
import Information from '@/components/main/introduce_information'
export default {
    name: 'introduce',
    components: {Value,Information},
    setup() {
        const items = [
            {
                icon: 'fas fa-user',
                label: 'Name',
                data: '류성민'
            },
            {
                icon: 'fas fa-calendar',
                label: 'Birth',
                data: '99.04.27'
            },
            {
                icon: 'fas fa-map-marker-alt',
                label: 'Address',
                data: '서울특별시 서대문구'
            },
            {
                icon: 'fas fa-phone-alt ',
                label: 'Contact',
                data: '010-4949-0297'
            },
            {
                icon: 'fas fa-envelope-open',
                label: 'Email',
                data: 'DeveloperRyou</br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; @gmail.com'
            },
            {
                icon: 'fas fa-university',
                label: 'Education',
                data: '연세대학교 컴퓨터과학과'
            }
        ]
        return {items}
    }
}
</script>
<style lang="css">
</style>