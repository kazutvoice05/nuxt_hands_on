<template>
    <div class="flex border border-gray-500 max-w-xl">
        <div class="flex-auto w-24 md:w-48 relative">
            <img :src="require('@/assets/cards/simple.jpeg')" alt="" class="absolute inset-0 w-full h-full object-cover">
        </div>
        <form class="flex-auto p-2 sm:p-6">
            <div class="flex flex-col sm:flex-row flex-wrap">
                <h1 class="flex-auto text-xl font-semibold">
                    Classic Utility Jacket
                </h1>
                <div class="mt-2 sm:mt-0 text-xl font-semibold text-gray-500">
                    $110.000
                </div>
                <div class="w-full flex-none text-sm font-medium text-gray-500 sm:mt-2">
                    In Stock
                </div>
            </div>
            <div class="flex items-center mt-2 sm:mt-4 mb-2 sm:mb-6">
                <div class="flex space-x-2">
                    <div class="hidden sm:block relative">
                        <label class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            XS
                        </label>
                        <input class="size-input bg-gray-100 rounded-lg" name="size" type="radio" value="xs" checked>
                    </div>
                    <div class="relative">
                        <label class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            S
                        </label>
                        <input class="size-input" name="size" type="radio" value="xs" checked>
                    </div>
                    <div class="relative">
                        <label class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            M
                        </label>
                        <input class="size-input" name="size" type="radio" value="xs" checked>
                    </div>
                    <div class="relative">
                        <label class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            L
                        </label>
                        <input class="size-input" name="size" type="radio" value="xs" checked>
                    </div>
                    <div class="hidden sm:block relative">
                        <label class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            XL
                        </label>
                        <input class="size-input" name="size" type="radio" value="xs" checked>
                    </div>
                </div>
                <div class="ml-auto text-sm text-gray-500 underline">
                    Size Guide
                </div>
            </div>
            <div class="flex space-x-3">
                <div class="flex flex-auto space-x-3">
                    <button class="shopping-button primary-button" type="submit">Buy now</button>
                    <button class="shopping-button secondary-button" type="button">Add to bag</button>
                </div>
                <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400 border border-gray-300" type="button" aria-label="like">
                    <svg width="20" height="20" fill="currentColor">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                    </svg>
                </button>
            </div>
            <p class="text-xs sm:text-sm text-gray-500 mt-4">
                Free shopping on all continental US orders.
            </p>
        </form>
    </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
    name: "SimpleCard",
    setup() {},
    data() {
        return {
        };
    },
    methods: {
    },
});
</script>

<style lang="postcss" scoped>
input {
    -webkit-appearance: none;
    -moz-appearance: node;
    appearance: none;
}

.size-input {
    @apply w-9 h-9 block
}

.shopping-button {
    @apply flex w-1/2 items-center justify-center rounded-md text-sm sm:text-base
}

.primary-button {
    @apply bg-black text-white
}

.secondary-button {
    @apply border border-gray-300
}
</style>