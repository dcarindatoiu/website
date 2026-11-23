<script setup lang="ts">

withDefaults(
  defineProps<{
    label: string
    title: string
  }>(),
  {}
)
</script>

<template>
    <div class="section__header">
        <span class="section__label">{{ label }}</span>
        <h2 class="section__title">{{title}}</h2>
    </div>
</template>

<style scoped>

.section__header {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
}

.section__label {
    font-family: var(--font-mono);
    text-transform: uppercase;
    font-size: var(--text-sm);
    color: var(--accent-text);
}

.section__title {
    font-family: var(--font-display);
    font-size: var(--text-4xl);
    color: var(--text);
    font-weight: var(--font-weight-regular);
    font-style: italic;
}

</style>
