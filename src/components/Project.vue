<script setup>

import { useSkillStore } from '../stores/'
const skill = useSkillStore()

defineProps({
    projects: Array,
})


</script>
<template>
    <div class="projects__content grid" :class="{ 'filters__active': !skill.status }" data-content id="projects">
        <article v-for="project in projects" class="projects__card">
            <img :src="project.thumbnail" alt="Project Thumbnail" class="projects__img" title="Project Thumbnail" />
            <div class="projects__modal">
                <div>
                    <h3 class="projects__title">{{ project.name }}</h3>
                    <span v-for="item in project.languages" class="projects__subtitle">{{ item }}</span>
                    <a :href="project.link" target="_blank" class="projects__button button button__small">
                        <i class="ri-link"></i>
                    </a>
                </div>
            </div>
        </article>
    </div>
</template>