
<script setup lang="ts">

import FrostButton from '../atoms/FrostButton.vue';
import FrostIcon from '../atoms/FrostIcon.vue';
import { Mail } from 'lucide-vue-next';

import Github from '../../../assets/icons/github.svg'
import Linkedin from '../../../assets/icons/linkedin.svg'

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

        <div class="identity-group">

            <span>CV · 2026</span>

            <h3>Desarrollador Full-Stack & Mobile Developer</h3>

            <span>Zaragoza, Spain · 30.13° N 118.17° E</span>

        </div>

        <div class="social-group">
            <FrostIcon size="sm">
                <Mail class="icon--sm" />
            </FrostIcon>
            <FrostIcon size="sm">
                <img
                    :src="Github"
                    :alt="`Github logo`"
                    class="icon--sm"
                    style="width: 1rem; height: 1rem;"
                />
            </FrostIcon>
            <FrostIcon size="sm">
                <img
                    :src="Linkedin"
                    :alt="`Linkedin logo`"
                    class="icon--sm"
                    style="width: 1rem; height: 1rem; color: #fff;"
                />
            </FrostIcon>
        </div>

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
    gap: var(--space-5)
}

.identity-group {
    /* Display Style */
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: fit-content;
    gap: var(--space-1)
}

.social-group {
    display: flex;
    flex-direction: row;
    align-items: center;

    /* Padding */
    width: fit-content;
    gap: var(--space-2);
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
