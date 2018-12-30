<template>
    <Form />
</template>

<script>
import Form from "@/components/Form";
export default {
  components: {
    Form
  },
  mounted() {
    this.$store.dispatch("aboutStyle", this.$route.name);
  }
};
</script>

<style scoped>

</style>