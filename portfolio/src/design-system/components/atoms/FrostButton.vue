
<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: 'sm' | 'md' | 'lg'
    disabled?: boolean
    type?: 'button' | 'submit' | 'reset'
  }>(),
  {
    size: 'md',
    disabled: false,
    type: 'button',
  }
)
</script>

<template>
  <button
    class="button"
    :class="`button--${size}`"
    :disabled="disabled"
    :type="type"
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
  background: var(--glass-fill);
  border-radius: var(--radius-pill);
  
  width: fit-content;

  border: var(--focus-ring);
  
  backdrop-filter: blur(--glass-blur);
  -webkit-backdrop-filter: blur(--glass-blur);

  position:  relative;
  
  cursor: pointer;
}

.button::before {
  
  background: var(--glass-outline);
  border-radius: inherit;
  content: "";
  inset: 0;
  
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  padding: 1px;
  pointer-events: none;
  position: absolute;
}

/* Sizes */
.button--sm {
  padding: var(--space-2) var(--space-3);

  /* Font style */
  font-family: var(--font-inter);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
}

.button--md {
  padding: var(--space-3) var(--space-4);

  /* Font style */
  font-family: var(--font-inter);
  font-size: var(--text-md);
  font-weight: var(--font-weight-medium);
}

.button--lg {
  padding: var(--space-4) var(--space-5);

  /* Font style */
  font-family: var(--font-inter);
  font-size: var(--text-lg);
  font-weight: var(--font-weight-medium);
}

/* States */
.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
