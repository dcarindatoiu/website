<script setup lang="ts">

import HeaderSection from '@/design-system/components/molecules/HeaderSection.vue';
import EntryList from '@/design-system/components/molecules/EntryList.vue';
import FrostContainer from '@/design-system/components/atoms/FrostContainer.vue';

import ExperienceEntry from '@/design-system/components/molecules/ExperienceEntry.vue';
import EducationEntry from '@/design-system/components/molecules/EducationEntry.vue';

import { experiences } from '@/data/experiences';
import { education } from '@/data/education';

</script>

<template>
    <main class="page">
        
        <!-- Hero Section -->
        <section class="section section--hero">
            <p class="text-hero">
                El desarrollo comienza en<br />la creatividad para<br />convertirse en código.
            </p>
            <img src="@/assets/images/identification_card.png" class="img_id">
        </section>

        <!-- Aboute Me Section -->
        <section class="section">
            <HeaderSection label="01 - sobre mí" title="Sobre mí" />
            <div class="section-content">
                <p class="text-bio">
                    Llevo programando desde hace mucho<br />
                    tiempo y he descubierto que un buen<br />
                    programa no se trata solo de<br />
                    programar, sino de crear experiencias<br />
                    y diseños únicos para cada usuario.
                </p>
            </div>
        </section>

        <!-- Projects Section -->
        <section class="section full-section">
            <div class="section">
                <HeaderSection label="02 - proyectos" title="Proyectos destacados" />
            </div>
            <div class="section-content" style="width: 100%;">
                <img src="@/assets/images/libros.png" style="width: 100%;">
            </div>
        </section>

        <!-- Experience Section -->
        <section class="section section--full">
            <HeaderSection label="03 - Experiencia" title="Experiencia laboral" />
            <EntryList :items="experiences" v-slot="{ item }">
                <ExperienceEntry :item="item" />
            </EntryList>    
        </section>

        <!-- Habilities Section -->
        <section class="section section--full">
            <HeaderSection label="04 - habilidades" title="Habilidades" />
            <div class="section-content">
                <FrostContainer items="Hola">
                    <div>
                        <img src="@/assets/icons/github.svg" alt="">
                        <span>Vue</span>
                    </div>
                </FrostContainer>
            </div>
        </section>

        <!-- Soft Skills Section -->
        <section class="section">
            <HeaderSection label="05 - soft skills" title="Mi constelación" />
            <div class="section-content">
                
            </div>
        </section>

        <!-- Education Section -->
        <section class="section">
            <HeaderSection label="06 - estudios" title="Estudios" />
            <EntryList :items="education" v-slot="{ item }">
                <EducationEntry :item="item"/>
            </EntryList>
        </section>

        <!-- Certificates Section -->
        <section class="section">
            <HeaderSection label="07 - certificados" title="Certificados" />
            <div class="section-content">
                <img src="@/assets/images/billetes_3d.png" style="height: 30.9375rem;">
            </div>
        </section>
    
        <img src="@/assets/images/BlackHole2k.png" style="width: 100%; z-index: -999; position: absolute;">
    </main>
</template>

<style scoped>

.page {
    display: flex;
    flex-direction: column;
    gap: var(--space-section);
    position: relative;
}

.section {
    padding: 0rem 4.6875rem;
}

.full-section {
    padding: 0;
}

.section-header {
    gap: var(--space-2);
}

.section--hero {
    padding: 4.6875rem 3.5rem;
    display: flex;
    height: 100svh;
    align-items: end;
    justify-content: start;
}

.img_id {
    position: absolute;
    height: 154svh;
    top: -7rem;
    right: 0rem;
    z-index: -9;
}

.text-hero {
    font-family: var(--font-sans);
    line-height: 3.875rem;
    font-size: var(--text-3xl);
}

.text-bio {
    font-family: var(--font-sans);
    font-size: var(--text-2xl);
    text-align: end;
}

.section-content {
    height: 100svh;
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>