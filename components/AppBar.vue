<template>
    <nav
        class="
            flex
            w-full
            items-center
            justify-between
            flex-wrap
            bg-green-500
            p-6
        "
    >
        <a
            href="https://tailwindcss.com/"
            class="flex items-center flex-shrink-0 text-white mr-6"
        >
            <svg
                class="fill-current h-8 w-8 mr-2"
                width="54"
                height="54"
                viewBox="0 0 54 54"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
                />
            </svg>
            <span class="font-semibold text-xl tracking-tight"
                >Tailwind CSS</span
            >
        </a>
        <div class="block lg:hidden">
            <button
                class="
                    flex
                    items-center
                    px-3
                    py-2
                    border
                    rounded
                    text-green-200
                    border-green-400
                    hover:text-white hover:border-white
                "
            >
                <svg
                    class="fill-current h-3 w-3"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
            </button>
        </div>
        <div
            class="
                hidden
                w-full
                block
                flex-grow
                lg:flex lg:items-center lg:w-auto
            "
        >
            <div class="text-sm lg:flex-grow">
                <div
                    v-for="(column, index) in appBarColumns"
                    v-bind:key="column.name"
                    v-bind:class="
                        index < appBarColumns.length - 1
                            ? 'app-bar-column'
                            : 'app-bar-column-last'
                    "
                >
                    <a
                        v-if="isAdminMode(column.adminOnly)"
                        v-bind:href="column.ref"
                    >
                        {{ column.name }}
                    </a>
                </div>
            </div>
            <div>
                <button
                    v-on:click="onClick"
                    class="
                        inline-block
                        text-sm
                        px-4
                        py-2
                        leading-none
                        border
                        rounded
                        text-white
                        border-white
                        hover:border-transparent
                        hover:text-green-500
                        hover:bg-white
                        mt-4
                        lg:mt-0
                    "
                >
                    Login
                </button>
            </div>
        </div>
    </nav>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
    name: "AppBar",
    setup() {},
    data() {
        return {
            appBarColumns: [
                {
                    name: "Top",
                    ref: "/",
                },
                {
                    name: "Library",
                    ref: "/library",
                },
                {
                    name: "recipes",
                    ref: "/recipes",
                },
                {
                    name: "ContentsManager",
                    ref: "/admin",
                    adminOnly: true,
                },
            ],
        };
    },
    methods: {
        async onClick() {
            await this.$router.push("/login");
        },
        isAdminMode(adminOnly) {
            const isAdmin = this.$store.getters["isAdmin"];

            if (adminOnly) {
                return isAdmin;
            }

            return true;
        },
    },
});
</script>

<style lang="postcss" scoped>
.app-bar-column {
    @apply block mt-4 lg:inline-block lg:mt-0 text-green-200 hover:text-white mr-4;
}

.app-bar-column-last {
    @apply block mt-4 lg:inline-block lg:mt-0 text-green-200 hover:text-white;
}
</style>
