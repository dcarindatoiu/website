
<script setup lang="ts">

import NavItem from '../molecules/NavItem.vue';
import Nav from '../molecules/Nav.vue';
import { VolumeX } from 'lucide-vue-next';

withDefaults(
  defineProps<{
  }>(),
  {}
)
</script>

<template>
    <div
        class="header"
    >
        <div class="bar">

            <div class="icon-group logo-container">
                <img src="../../../assets/icons/logo.svg" class="icon--md"/>
            </div>

            <Nav>
                <NavItem href="/" :active="true"> Home </NavItem>
                <NavItem href="/projects"> Projects </NavItem>
                <NavItem href="/about-me"> About Me </NavItem>
                <NavItem href="/contact"> Contact </NavItem>
            </Nav>

            <div class="icon-group">
                <VolumeX class="icon--sm"/>
            </div>
            

        </div>

    </div>
</template>

<style scoped>

.header {
    /* Padding */
    padding: var(--space-6) var(--space-10);

    /* Fixed Header */
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;

    /* Display Style */
    display: inline-flex;
    align-items: center;
    justify-content: center;

}

.bar {
    /* Display Style */
    width: max-content;
    display: flex;
    align-items: stretch;
    gap: var(--space-9);

    padding: var(--space-2);

    /* Glass Effect */
    background: var(--glass-dark-fill);
    border-radius: var(--radius-pill);
    backdrop-filter: var(--glass-blur);
}

.bar::before {
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

.icon-group {
    /* Display Style */
    display: flex; 
    justify-content: center; 
    align-items: center;

    /* Square */
    height: 1.6243rem;
    aspect-ratio: 1; 
}

.logo-container {
    /* Accent Container */
    color: var(--text);
    background: var(--glass-accent);
    border-radius: var(--radius-pill);
}

.icon {
  display: inline-block;
  flex-shrink: 0;
}

.icon--sm {
  width: var(--icon-size-sm);
  height: var(--icon-size-sm);
}

.icon--md {
  width: 1.25rem;
  height: 1.25rem;
}

.icon--lg {
  width: 1.5rem;
  height: 1.5rem;
}

</style>
