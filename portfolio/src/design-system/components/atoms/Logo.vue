
<script setup lang="ts">
withDefaults(
  defineProps<{
  }>(),
  {}
)
</script>

<template>
    <a
        class="display-logo"
    >
        Carindatoiu
    </a>
</template>

<style scoped>

.display-logo {
    /* Padding and width */
    width: fit-content;

    /* Font Style */
    color: var(--colors-text);
    font-family: var(--font-display);
    text-transform: capitalize;
    font-style: italic;
    font-size: var(--font-lg);
}

</style>
