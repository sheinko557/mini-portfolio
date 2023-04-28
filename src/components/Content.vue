<script setup>
import Project from './Project.vue';
import Skill from './Skill.vue';

import { useSkillStore } from '../stores/'
const skill = useSkillStore()

defineProps({
    projects: Array,
    skills: Array
})

</script>

<template>
    <main class="main">
        <section class="filters container">
            <!--=============== FILTERS TABS ===============-->
            <ul class="filters__content">
                <button class="filters__button" :class="{ 'filter-tab-active': !skill.status }"
                    @click="skill.changeStatus(false)">
                    Projects
                </button>
                <button class="filters__button" :class="{ 'filter-tab-active': skill.status }"
                    @click="skill.changeStatus(true)">
                    Skills
                </button>
            </ul>

            <div class="filters__sections">
                <Skill :skills="skills" />
                <Project :projects="projects" />

            </div>
        </section>
    </main>
</template>

<script>
export default {
    name: "Content",
    data() {
        return {
            isSkill: false,
        };
    }
};
</script>
