
<script setup lang="ts">

import type { RouteLocationRaw } from 'vue-router'

withDefaults(
  defineProps<{
    label: string
    to: RouteLocationRaw
    active?: boolean
  }>(),
  {
    active: false,
  }
)
</script>

<template>
    <li>
        <RouterLink :to="to" 
            class="nav-item" 
            :class="{ 'nav-item--active': active }"
        >
            {{ label }}
        </RouterLink>
    </li>
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

</style>
