<script setup lang="ts">
import type { Education } from '@/data/education';

withDefaults(
  defineProps<{
    item: Education
  }>(),
  {}
)
</script>

<template>
    <div class="education-entry__meta">
        <span class="education-entry__date">{{item.year}}</span>
        <div class="education-entry__content">
            <h4 class="education-entry__title">{{item.title}}</h4>
            <p class="education-entry__description"> {{ item.description }} </p>
        </div>
    </div>
</template>

<style scoped>

.education-entry__meta {
    display: flex;
    flex-direction: row;
    gap: var(--space-9);
    align-items: center;
}

.education-entry__content {
    flex: 1;
}

.education-entry__date {
    font-family: var(--font-display);
    font-size: var(--text-5xl);
    font-weight: var(--font-weight-regular);
    color: transparent;
    -webkit-text-stroke: 1.2px var(--accent-text);
}

.education-entry__title {
    font-family: var(--font-display);
    font-size: var(--text-xl);
    font-weight: var(--font-weight-regular);
    width: 25vw;
}

.education-entry__description {
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    font-weight: var(--font-weight-regular);
}

</style>
