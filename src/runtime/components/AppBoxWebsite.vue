<!-- c5t_docs_intro 
This component should contain all the content of the app.
It is always filling 100% of the viewport, non matter what.

-->
<template>
    <div class="appBoxWebsite">
        <slot />
    </div>
</template>

<style scoped>
.appBoxWebsite {
  display: flow-root; /* contains children's margins so they don't push the box down */
  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;
}
</style>
