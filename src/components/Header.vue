<script setup>

defineProps({
    name: String,
    profile: String,
    resume: String,
    position: String,
    experience: String,
    complete_projects: String,
    socials: Array,
    contact_me: Array
})

</script>
<template>
    <header class="profile container">
        <div class="profile__container grid">
            <div class="profile__data">
                <div class="profile__border">
                    <div class="profile__perfil">
                        <img :src="profile" alt="Profile Photo" title="Profile Photo" id="profile__image" />
                    </div>
                </div>
                <h2 class="profile__name">{{ name }}</h2>
                <h3 class="profile__profession">{{ position }}</h3>

                <ul class="profile__social">
                    <a v-for="social in socials" :href="social.src" target="_blank" class="profile__social-link"
                        :title="social.name">
                        <i :class="social.icon"></i>
                    </a>
                </ul>
            </div>

            <div class="profile__info grid">
                <div class="profile__info-group">
                    <h3 class="profile__info-number">{{ experience }}</h3>
                    <p class="profile__info-description">
                        Years of <br />
                        work
                    </p>
                </div>
                <div class="profile__info-group">
                    <h3 class="profile__info-number">{{ complete_projects }}</h3>
                    <p class="profile__info-description">
                        Completed <br />
                        Projects
                    </p>
                </div>
            </div>

            <div class="profile__buttons">
                <a :href="resume" class="button">
                    Download CV <i class="ri-download-line"></i>
                </a>

                <div class="profile__buttons__small">
                    <a v-for="contact in contact_me" :href="contact.src" target="_blank"
                        class="button button__small button__gray" :title="contact.name">
                        <i :class="contact.icon"></i>
                    </a>
                </div>
            </div>
        </div>
    </header>
</template>