
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

  width: fit-content;

  /* Frosted Glass */
  background: var(--glass-fill);
  border-radius: var(--radius-pill);
  border: var(--focus-ring);
  backdrop-filter: blur(--glass-blur);
  -webkit-backdrop-filter: blur(--glass-blur);

  position:  relative;
  
  cursor: pointer;
}

.icon-button::before {
  
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
