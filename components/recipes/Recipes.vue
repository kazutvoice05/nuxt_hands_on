<template>
    <div class="divide-y devide-gray-100">
        <Nav>
            <NavItem href="/componentViewer" isActive>Featured</NavItem>
            <NavItem href="/componentViewer">Popular</NavItem>
            <NavItem href="/componentViewer">Recent</NavItem>
        </Nav>
        <List>
            <ListItem
                v-for="recipe in recipes"
                :key="recipe.id"
                :recipe="recipe"
            />
        </List>
    </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

import Nav from "./Nav.vue";
import NavItem from "./NavItem.vue";
import List from "./List.vue";
import ListItem from "./ListItem.vue";

export default defineComponent({
    name: "Recipes",
    components: {
        Nav,
        NavItem,
        List,
        ListItem,
    },
    setup() {},
    props: ["recipes"],
    data() {
        return {};
    },
    methods: {},
});
</script>

<style lang="postcss" scoped>
</style>
