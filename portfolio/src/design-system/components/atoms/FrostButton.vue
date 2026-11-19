
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
    class="button"
    :class="`button--${size}`"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<style scoped>
.button {
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

.button::before {
  
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
.button--sm {
  padding: var(--space-2) var(--space-4);

  /* Font style */
  font-size: var(--text-sm);
  
}

.button--md {
  padding: var(--space-3) var(--space-4);

  /* Font style */
  font-size: var(--text-md);
}

.button--lg {
  padding: var(--space-4) var(--space-5);

  /* Font style */
  font-size: var(--text-lg);
}

/* States */
.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
