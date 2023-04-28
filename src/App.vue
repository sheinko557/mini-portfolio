<script setup>
import Header from './components/Header.vue'
import Content from './components/Content.vue'
import Footer from './components/Footer.vue'
import http from "./http";

</script>

<template>
  <div v-if="isLoading">
    <div id="loading"></div>
  </div>
  <div v-else>
    <Header :name="response.name" :position="response.position" :profile="response.profile_img"
      :experience="response.experience" :complete_projects="response.completed_project" :socials="response.socials"
      :contact_me="response.contact_me" :resume="response.resume_link" />
    <Content :skills="response.skills" :projects="response.project_list" />
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      response: null,
      isLoading: true
    };
  },
  methods: {
    async getData() {
      var httpResp = await http.get("/data.json")
      this.response = httpResp.data
      document.title = `${this.response.name} | Mini Portfolio`
      this.isLoading = false
    }
  },
  mounted() {
    this.getData()
  },
};
</script>

