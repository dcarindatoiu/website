
<script setup lang="ts">

import NavItem from '../molecules/NavItem.vue';
import Nav from '../molecules/Nav.vue';
import Logo from '../atoms/Logo.vue';
import FrostButton from '../atoms/FrostButton.vue';

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
            <FrostButton size="md">
                Contact me
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
    /* Padding */
    width: fit-content;
    gap: var(--space-2);
}

</style>
