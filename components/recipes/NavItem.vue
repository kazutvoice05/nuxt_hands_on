<template>
    <li>
        <a
            :href="href"
            :class="[
                'block px-4 py-2 rounded-md',
                { 'bg-indigo-100 text-indigo-700': isActive },
            ]"
        >
            <slot></slot>
        </a>
    </li>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
    name: "NavItem",
    props: {
        href: {
            type: String,
            required: true,
        },
        isActive: Boolean,
    },
});
</script>

<style lang="postcss" scoped>
</style>
