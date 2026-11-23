
<script setup lang="ts">
withDefaults(
  defineProps<{
    items: String
  }>(),
  {
  }
)
</script>

<template>
    <div class="container">
        <slot />
    </div>
</template>

<style scoped>
.container {
    /* Display Style */
    display: grid;
    grid-template-columns: repeat(9, max-content);
    align-items: center;

    padding: var(--space-2);

    /* Glass Effect */
    background: var(--glass-dark-fill);
    border-radius: 1.75rem;
    backdrop-filter: var(--glass-blur);
}

.container::before {
    /* Glass effect */
    background: var(--glass-dark-outline);
    border-radius: inherit;
    content: "";

    /* Frosted Padding */
    inset: calc(-1 * var(--outline-stroke-width));
    padding: var(--outline-stroke-width);
    
    /* Frosted Glass Stroke Composite */
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;

    pointer-events: none;
    position: absolute;
}
</style>
