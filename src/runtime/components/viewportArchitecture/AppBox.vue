<!-- c5t_docs_intro 
    This component should contain all the content of the app.
    It is always filling 100% of the viewport, non matter what.

    It's the ancestor of all components.
    Set the backdrop color here.
-->

<script setup>

const props = defineProps({
    backdropColor: {
        type: String,
        required: false,
        default: "rgb(24, 24, 24)"
    }
})

</script>

<template>
    <div
        id="appBox"
        class="
            flex center
        "
    >
        <div 
            class="contentFrame"
        >
            <slot />
        </div>
    </div>
</template>

<style scoped>
#appBox {
  display: flow-root; /* contains children's margins so they don't push the box down */
  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;
  background-color: v-bind("backdropColor");
}



</style>
