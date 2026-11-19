
<script setup lang="ts">

withDefaults(
  defineProps<{
  }>(),
  {}
)
</script>

<template>
    <div
        class="identity-block"
    >

        <span>CV · 2026</span>

        <h3>Desarrollador Full-Stack & Mobile Developer</h3>

        <span>Zaragoza, Spain · 30.13° N 118.17° E</span>

    </div>
</template>

<style scoped>

.identity-block {
    /* Fixed Header */
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 100;

    /* Padding */
    padding: var(--space-10) var(--space-10);

    /* Display Style */
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: fit-content;
    gap: var(--space-2)
}

span {
    /* Text Style */
    color: var(--text-muted);
    font-family: var(--font-mono);
    text-transform: capitalize;
    letter-spacing: var(--tracking-caps);
    font-size: var(--text-xs);
    font-weight: var(--font-weight-regular);
}

h3 {
    /* Text Style */
    color: var(--text);
    font-family: var(--font-sans);
    text-transform: capitalize;
    font-size: var(--text-md);
    font-weight: var(--font-weight-regular);
    line-height: 1.2;
}

</style>
