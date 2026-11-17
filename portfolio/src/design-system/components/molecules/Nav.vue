
<script setup lang="ts">
withDefaults(
  defineProps<{
  }>(),
  {}
)
</script>

<template>
    <div
        class="nav"
    >
        <slot />
    </div>
</template>

<style scoped>

.nav {
    position: relative;
}

.nav {
    /* Display Style */
    display: flex;
    align-items: center;
    justify-content: center;
  
    /* Padding and width */
    width: fit-content;
    padding: var(--space-1);
    gap: var(--space-1);

    /* Glass Effect */
    background: var(--glass-background);
    border-radius: var(--radius-pill);
}

.nav::before {
    /* Glass effect */
    background: var(--glass-outline-bg);
    border-radius: inherit;
    content: "";
    inset: 0;
    
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    padding: 1px;
    pointer-events: none;
    position: absolute;
}
</style>
