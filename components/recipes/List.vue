<template>
    <ul class="devide-y devide-gray-100">
        <slot></slot>
    </ul>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: "List",
    setup() {
    }, 
    props: {
    },
    data() {
        return {
        }
    },
    methods: {
    },
})
</script>

<style lang="postcss" scoped>

</style>
