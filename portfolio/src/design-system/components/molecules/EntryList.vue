<script setup lang="ts" generic="T extends { id: string }">
withDefaults(
  defineProps<{
    items: T[]
  }>(),
  {}
)
</script>

<template>
    <ol class="entry-list">
        <li v-for="(item, index) in items" :key="item.id" class="entry-list__item">
            <slot :item="item" :index="index"></slot>
        </li>
    </ol>
</template>

<style scoped>

.entry-list {
    border-top: var(--outline-stroke-width) solid var(--border);
}

.entry-list__item {
    padding: var(--space-2) 0px;
    border-bottom: var(--outline-stroke-width) solid var(--border);
}


</style>
