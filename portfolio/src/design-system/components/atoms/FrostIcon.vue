
<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: 'sm' | 'md' | 'lg'
    disabled?: boolean
  }>(),
  {
    size: 'md',
    disabled: false,
  }
)
</script>

<template>
  <button
    class="icon-button"
    :class="`icon-button--${size}`"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<style scoped>

.icon-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);

  width: fit-content;

  /* Font details */
  font-family: var(--font-sans);
  font-weight: var(--font-weight-regular);

  /* Frosted Glass */
  background: var(--glass-fill);
  border-radius: var(--radius-pill);
  backdrop-filter: blur(--glass-blur);
  -webkit-backdrop-filter: blur(--glass-blur);

  position:  relative;
  
  cursor: pointer;
}

.icon-button::before {
  
  /* Frosted Glass Stroke */
  background: var(--glass-outline);
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

/* Sizes */
.icon-button--sm {
  width: var(--icon-button-size-sm);
  height: var(--icon-button-size-sm);
}

.icon-button--md {
  width: var(--icon-button-size-md);
  height: var(--icon-button-size-md);
}

.icon-button--lg {
  width: var(--icon-button-size-lg);
  height: var(--icon-button-size-lg);
}

/* States */
.icon-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
