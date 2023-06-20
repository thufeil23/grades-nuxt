<template>
  <div class="py-4">
    <!-- <Header /> -->
    <div class="container">
      <FormSiswa class="mb-4" @formSubmitted="handleFormSubmitted" />
    </div>
    <div class="container">
      <GradesCard class="mb-4" :grades="grades" />
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import FormSiswa from "~/components/Form.vue";
import GradesCard from "~/components/GradesCard.vue";
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  // props: {
  //   grades: {
  //     type: Array,
  //     required: true,
  //   },
  // },
  data() {
    return {
      grades: [
        {
          id: 1,
          nis: "00133224",
          name: "Andy",
          grade: 90,
          status: "success",
        },
        {
          id: 2,
          nis: "00233224",
          name: "Bob",
          grade: 20,
          status: "danger",
        },
        {
          id: 3,
          nis: "00333224",
          name: "Carlo",
          grade: 70,
          status: "warning",
        },
      ],
    };
  },
  methods: {
    autoCalculateStatus(grade) {
      if (grade >= 75) {
        return "success";
      } else if (grade >= 60) {
        return "warning";
      } else if (grade <= 60) {
        return "danger";
      }
    },
    handleFormSubmitted(formData) {
      console.log("Form Data: ", formData);
      this.grades.push({
        id: this.grades.length + 1,
        nis: formData.nis,
        name: formData.name,
        grade: Number(formData.grade),
        status: this.autoCalculateStatus(Number(formData.grade)),
      });
    },
  },
  components: {
    FormSiswa,
    GradesCard,
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
</style>