<template>
    <article class="p-4 flex space-x-4">
        <video
            :src="recipe.image"
            loop
            autoplay
            muted
            playsinline
            alt=""
            class="flex-none w-18 h-18 rounded-lg object-cover"
            width="144"
            height="144"
        />
        <div class="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
            <h2 class="text-lg font-semibold text-black mb-0.5">
                {{ recipe.title }}
            </h2>
            <dl class="flex flex-wrap text-sm font-medium whitespace-pre">
                <div>
                    <dt class="sr-only">Time</dt>
                    <dd>
                        <abbr :title="`${recipe.time} minutes`"
                            >{{ recipe.time }}m</abbr
                        >
                    </dd>
                </div>
                <div>
                    <dt class="sr-only">Difficulty</dt>
                    <dd>· {{ recipe.difficulty }}</dd>
                </div>
                <div>
                    <dt class="sr-only">Servings</dt>
                    <dd>· {{ recipe.servings }} servings</dd>
                </div>
                <div class="flex-none w-full mt-0.5 font-normal">
                    <dt class="inline">By</dt>
                    <dd class="inline text-black">{{ recipe.auther }}</dd>
                </div>
            </dl>
        </div>
    </article>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
    name: "ListItem",
    props: ["recipe"],
});
</script>

<style lang="postcss" scoped>
</style>
