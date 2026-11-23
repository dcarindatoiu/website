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
            <div class="section-content__about">
                <img src="@/assets/images/ipod.png" class="about__ipod">
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
                <img src="@/assets/images/books.png" style="width: 100%;">
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
            <div class="section-content__keyboard">
                <FrostContainer items="Hola">
                    <div class="habilities__container">
                        <img src="@/assets/icons/brands/vue.svg" alt="">
                        <span class="habilities__span" >Vue</span>
                    </div>
                    <div class="habilities__container">
                        <img src="@/assets/icons/brands/nextjs_icon_dark.svg" alt="">
                        <span class="habilities__span" >Next.js</span>
                    </div>
                    <div class="habilities__container">
                        <img src="@/assets/icons/brands/figma.svg" alt="">
                        <span class="habilities__span" >Figma</span>
                    </div>
                    <div class="habilities__container">
                        <img src="@/assets/icons/brands/google-analytics.svg" alt="">
                        <span class="habilities__span" >Google Analytics</span>
                    </div>
                    <div class="habilities__container">
                        <img src="@/assets/icons/brands/git.svg" alt="">
                        <span class="habilities__span" >Git</span>
                    </div>
                    <div class="habilities__container">
                        <img src="@/assets/icons/brands/androidstudio.svg" alt="">
                        <span class="habilities__span" >Android Studio</span>
                    </div>
                    <div class="habilities__container">
                        <img src="@/assets/icons/brands/photoshop.svg" alt="">
                        <span class="habilities__span" >Photoshop</span>
                    </div>
                    <div class="habilities__container">
                        <img src="@/assets/icons/brands/notion.svg" alt="">
                        <span class="habilities__span" >Notion</span>
                    </div>
                    <div class="habilities__container">
                        <img src="@/assets/icons/brands/firebase.svg" alt="">
                        <span class="habilities__span" >Firebase</span>
                    </div>
                </FrostContainer>
                <img src="@/assets/images/keyboard.png" style="height: 30.9375rem;">
                <div class="keyboard__meta" >
                    <span class="keyboard__meta-title">Vue</span>
                    <span class="keyboard__meta-description" >Interfaces interactivas</span>
                </div>
            </div>
        </section>

        <!-- Soft Skills Section -->
        <section class="section__stella">
            <HeaderSection label="05 - soft skills" title="Mi constelación" />
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

.section__stella {
    height: 100svh;
    padding: 0rem 4.6875rem;
    background-image: url('@/assets/images/constelacion.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
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

.section-content__about {
    height: 100svh;
    display: flex;
    align-items: center;
    justify-content: end;
}

.section-content__keyboard {
    
    height: 100svh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.habilities__container {
    display: flex;
    flex-direction: column; 
    padding: 4px 12px;
    gap: var(--space-3);
}

.habilities__container img {
    height: 2.5rem;
}

.habilities__span {
    font-family: var(--font-mono);
    font-size: var(--font-xs);
    color: var(--text-muted);
    text-align: center;
}

.keyboard__meta {
    display: flex;
    gap: var(--space-4);
    align-items: end;
}

.keyboard__meta-title {
    font-family: var(--font-display);
    font-size: var(--text-2xl);
    line-height: var(--leading-relaxed);
}

.keyboard__meta-description {
    font-family: var(--font-mono);
    font-size: var(--text-md);
    color: var(--accent-text);
}

.about__ipod {
    position: absolute;
    left: var(--space-10);
    height: 47.125rem;
}

</style>