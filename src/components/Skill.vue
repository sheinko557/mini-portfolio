<script setup>

import { useSkillStore } from '../stores/'
const skill = useSkillStore()

defineProps({
    skills: Array
})

</script>

<template>
    <div class="skills__content grid" :class="{ 'filters__active': skill.status }" data-content id="skills">
        <div v-for="skill in skills" class="skills__area">
            <h3 class="skills__title">{{ skill.name }}</h3>
            <div class="skills__box">
                <div class="skills__group" v-for="data in getList(skill.data)">
                    <div class="skills__data" v-for="item in data">
                        <i class="ri-checkbox-circle-line"></i>
                        <div>
                            <h3 class="skills__name">{{ item.name }}</h3>
                            <span class="skills__level">{{ item.level }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            test: []
        };
    },
    methods: {
        getList(arr) {
            var res = []
            var tmp = []
            arr.forEach(element => {
                tmp.push(element)
                if (tmp.length == 3) {
                    res.push(tmp)
                    tmp = []
                }
            });
            if (tmp.length != 0) {
                res.push(tmp)
            }
            return res
        }
    }
};
</script>
