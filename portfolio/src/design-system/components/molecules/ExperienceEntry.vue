<script setup lang="ts">
import type { Experience } from '@/data/experiences';

withDefaults(
  defineProps<{
    item: Experience
  }>(),
  {}
)
</script>

<template>
    <div class="experience-entry__meta">
        <span class="experience-entry__meta-text">{{item.period}}</span>
        <div class="experience-entry__content">
            <h4 class="experience__title">{{item.title}} <em> {{ item.highlight }} </em> </h4>
            <p class="experience__description"> {{ item.description }} </p>
        </div>
        <span class="experience-entry__meta-text"> {{ item.company }} </span>
    </div>
</template>

<style scoped>

.experience-entry__meta {
    display: flex;
    flex-direction: row;
    gap: var(--space-9);
    align-items: center;
}


.experience-entry__meta-text {
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    font-weight: var(--font-weight-regular);
    text-transform: uppercase;
    color: var(--text-muted);
}

.experience-entry__content {
    flex: 1;
}

.experience__title {
    font-family: var(--font-display);
    font-size: var(--text-4xl);
    font-weight: var(--font-weight-regular);
}

.experience__title em {
    color: var(--accent-text);
}

.experience__description {
    font-family: var(--font-sans);
    font-size: var(--text-md);
    font-weight: var(--font-weight-regular);
    width: 25vw;
}

</style>
