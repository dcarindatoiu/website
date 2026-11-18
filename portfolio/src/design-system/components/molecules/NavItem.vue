
<script setup lang="ts">
withDefaults(
  defineProps<{
    href: string
    active?: boolean
  }>(),
  {
    active: false,
  }
)
</script>

<template>
    <a
        :href="href"
        class="nav-item"
        :class="{ 'nav-item--active': active }"
    >
        <slot />
    </a>
</template>

<style scoped>

.nav-item {
    /* Display Style */
    display: flex;
    align-items: center;
    justify-content: center;
  
    /* Padding and width */
    width: fit-content;
    padding: var(--space-1) var(--space-3);

    /* Font Style */
    color: var(--text-muted);
    font-family: var(--font-mono);
    text-transform: uppercase;
    letter-spacing: var(--tracking-caps);
    font-size: var(--text-xs);
    font-weight: var(--font-weight-regular);

  
    cursor: pointer;
    position: relative;
}

.nav-item--active {
    /* Glass Effect */
    color: var(--text);
    background: var(--glass-accent);
    border-radius: var(--radius-pill);
}

.nav-item--active::before {
    /* Glass effect */
    background: var(--glass-outline);
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
