<script setup lang="ts">
import FrostedButton from './design-system/components/atoms/FrostButton.vue'
import Header from './design-system/components/organisms/Header.vue';

</script>

<template>
  <FrostedButton size='sm'>
    Botón sm
  </FrostedButton>
  <FrostedButton size='sm', :disabled = true>
    Botón sm
  </FrostedButton>
  <FrostedButton size='md'>
    Botón md
  </FrostedButton>
  <FrostedButton size='md' :disabled= true>
    Botón md
  </FrostedButton>
  <FrostedButton size='lg'>
    Botón lg
  </FrostedButton>
  <FrostedButton size='lg' :disabled= true>
    Botón lg
  </FrostedButton>

  <Header/>

  
</template>