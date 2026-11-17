
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
  padding: 10px 16px;
  font-size: 12px;
}

.button--md {
  padding: 14px 24px;
  font-size: 14px;
}

.button--lg {
  padding: 18px 32px;
  font-size: 16px;
}

/* States */
.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
