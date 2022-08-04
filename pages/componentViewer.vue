
<template>
    <div>
        <AppBar />
        <div class="flex">
            <Recipes :recipes="recipes"></Recipes>
            <Recipes :recipes="recipes"></Recipes>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import VueYoutube from "vue-youtube";

Vue.use(VueYoutube);

export default {
    name: "componentViewer",
    setup() {},
    data() {
        return {
            backgroundImageUrl: require("@/assets/common/bg_1.jpg"),
            recipes: [
                {
                    id: 1,
                    title: "Hank's Juiciest Beef Burger",
                    time: 20,
                    difficulty: "Easy",
                    servings: 4,
                    auther: "Hank Douglas",
                    image: require("@/assets/recipes/video/night.mp4"),
                },
                {
                    id: 2,
                    title: "Hank's Juiciest Beef Burger",
                    time: 20,
                    difficulty: "Easy",
                    servings: 4,
                    auther: "Hank Douglas",
                    image: require("@/assets/recipes/video/night.mp4"),
                },
                {
                    id: 3,
                    title: "Hank's Juiciest Beef Burger",
                    time: 20,
                    difficulty: "Easy",
                    servings: 4,
                    auther: "Hank Douglas",
                    image: require("@/assets/recipes/video/night.mp4"),
                },
            ],
        };
    },
    methods: {},
    computed: {},
};
</script>

<style lang="postcss" scoped>
</style>
