<template>
    <div class="p-4">
        <ul class="flex space-x-2">
            <slot></slot>
        </ul>
    </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
    name: "Nav",
    setup() {},
    props: {},
    data() {
        return {};
    },
    methods: {},
});
</script>

<style lang="postcss" scoped>
</style>
