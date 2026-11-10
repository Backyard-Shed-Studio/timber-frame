<!-- c5t_docs_intro 
    this sets the structure of the app.
    topbar, bottombar, main scroll container, 
    width of main content container

    Note that top and bottom bar might be wider than the
    main width of the content.
-->

<script setup>

const props = defineProps({
    mainWidth: {
        min: {
            type: String,
            required: false,
            default: "850px"
        },
        max: {
            type: String,
            required: false,
            default: "100%"
        }
    },
    topBarFullViewport : {
        type: Boolean,
        reqyuired: false,
        default: false
    }
})


</script>

<template>
    <div
        id="topBar"
    >
        <slot name="topBar"></slot>
    </div>

    <div id="scrollBox">
        <header>
            <slot name="header"></slot>
        </header>

        <main>
            <slot name="main"></slot>
        </main>
        
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<style scoped>


</style>
