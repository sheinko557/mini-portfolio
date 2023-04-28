import { defineStore } from 'pinia';

export const useSkillStore = defineStore('status', {
  state: () => {
    return { status: false };
  },
  actions: {
    changeStatus(val) {
      this.status = val;
    },
  },
});
