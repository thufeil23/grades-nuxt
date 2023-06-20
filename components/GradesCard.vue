<template>
  <div class="container">
    <div class="card-header py-2">
      <h2>Grades</h2>
    </div>
    <table class="table table-borderless table-hover table-dark">
      <thead>
        <tr>
          <th>#</th>
          <th>NIS</th>
          <th>Name</th>
          <th>Grade</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(grade, index) in grades" :key="index" class="m-4">
          <th>{{ grade.id }}</th>
          <td>{{ grade.nis }}</td>
          <td>{{ grade.name }}</td>
          <td>{{ grade.grade }}</td>
          <td :class="getGradeClass(grade)">{{  getStatusText(grade.status)  }}</td>
        </tr>
      </tbody>
    </table>
    <div v-if="grades.length > 0">
      <p>Rata-rata Nilai Tugas: {{ calculateAverage() }}</p>
    </div>
  </div>
</template>
  
<script>
export default {
  props: {
    grades: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getStatusText(status) {
      if (status === "success") {
        return "Passed";
      } else if (status === "warning") {
        return "Warning";
      } else {
        return "Failed";
      }
    },
    getGradeClass(grade) {
      return {
        "bg-success": grade.status === "success",
        "bg-warning": grade.status === "warning",
        "bg-danger": grade.status === "danger",
      };
    },
    autoCalculateStatus(grade) {
      if (grade >= 75) {
        return "success";
      } else if (grade >= 60) {
        return "warning";
      } else if (grade <= 60) {
        return "danger";
      }
    },
    calculateAverage() {
      if (this.grades.length === 0) {
        return 0;
      }
      const totalNilai = this.grades.reduce((total, siswa) => {
        return total + siswa.grade;
      }, 0);
      return (totalNilai / this.grades.length).toFixed(2);
    },
  },
};
</script>
  
  <style lang="scss" scoped>
</style>