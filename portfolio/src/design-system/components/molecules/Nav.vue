
<script setup lang="ts">
withDefaults(
  defineProps<{
  }>(),
  {}
)
</script>

<template>
    <ul
        class="nav"
    >
        <slot />
    </ul>
</template>

<style scoped>

.nav {
    /* Display Style */
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
  
    /* Padding and width */
    width: fit-content;
    gap: var(--space-1);
}

</style>
