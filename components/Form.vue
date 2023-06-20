<template>
  <div class="container">
    <div class="card-header py-2">
      <h2>Form Nilai Tugas Siswa</h2>
    </div>
    <form @submit.prevent="handleSubmit">
      <div>
        <a href="#" class="add-button" v-if="!isCreating" @click="handleCreate">
          Add Grade
        </a>
        <div class="add-card" v-else>
          <div class="card-body mb-2">
            <div class="form-group row mb-2">
              <label for="nis" class="col-sm-2 col-form-label">NIS</label>
              <div class="col-sm-10">
                <input
                  v-model.number="nisValue"
                  class="form-control"
                  placeholder="Enter Nomor Induk Siswa"
                  type="number"
                />
              </div>
            </div>
            <div class="form-group row mb-2">
              <label for="name" class="col-sm-2 col-form-label">Name</label>
              <div class="col-sm-10">
                <input
                  v-model="nameValue"
                  class="form-control"
                  placeholder="Enter Name"
                  type="text"
                />
              </div>
            </div>
            <div class="form-group row mb-2">
              <label for="grade" class="col-sm-2 col-form-label">Grade</label>
              <div class="col-sm-10">
                <input
                  v-model.number="gradeValue"
                  class="form-control"
                  placeholder="Enter Grade"
                  type="number"
                />
              </div>
            </div>
            <!-- <div class="form-group row mb-2">
              <label for="status" class="col-sm-2 col-form-label">Status</label>
              <div class="col-sm-10">
                <select v-model="statusValue" class="form-select">
                  <option disabled value="">Choose Status</option>
                  <option
                    v-for="(option, i) in options.inquiry"
                    v-bind:value="option.value"
                    :key="i"
                  >
                    {{ option.text }}
                  </option>
                </select>
                <small class="form-text text-muted"
                  >Lulus= success, KKM=warning, Tidak lulus=danger</small
                >
              </div>
            </div> -->
            <div class="button-wrapper d-flex justify-content-end">
              <button class="btn btn-primary me-2" type="submit">Save</button>
              <button
                class="btn btn-outline-secondary"
                @click="isCreating = !isCreating"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  props: {
    grades: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      nisValue: "",
      nameValue: "",
      gradeValue: "",
      statusValue: "",
      form: {
        status: "",
      },
      options: {
        inquiry: [
          { value: "success", text: "success" },
          { value: "warning", text: "warning" },
          { value: "danger", text: "danger" },
        ],
      },
      isCreating: false,
    };
  },
  methods: {
    handleSubmit() {
      console.log("nis: ", this.nisValue);
      console.log("name: ", this.nameValue);
      console.log("grade: ", this.gradeValue);
      console.log("status: ", this.statusValue);
      this.$emit("formSubmitted", {
        nis: this.nisValue,
        name: this.nameValue,
        grade: this.gradeValue,
        status: this.statusValue,
      });
    },
    handleCreate() {
      this.isCreating = !this.isCreating;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>