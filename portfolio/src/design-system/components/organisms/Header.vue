
<script setup lang="ts">

import NavItem from '../molecules/NavItem.vue';
import Nav from '../molecules/Nav.vue';
import Logo from '../atoms/Logo.vue';
import FrostButton from '../atoms/FrostButton.vue';
import FrostIcon from '../atoms/FrostIcon.vue';
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
        <Logo/>

        <Nav>
            <NavItem href="/" :active="true"> Home </NavItem>
            <NavItem href="/projects"> Projects </NavItem>
            <NavItem href="/contact"> Contact </NavItem>
        </Nav>

        <div
            class = "header-actions"
        >
            <FrostIcon size="sm">
                <VolumeX class = "icon icon--sm"/>
            </FrostIcon>

            <FrostButton size="sm">
                Contáctame
            </FrostButton>
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
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.header-actions {
    display: flex;
    flex-direction: row;
    align-items: center;

    /* Padding */
    width: fit-content;
    gap: var(--space-2);
}

.icon {
  display: inline-block;
  flex-shrink: 0;
}

.icon--sm {
  width: 1rem;
  height: 1rem;
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
