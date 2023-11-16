<template>
  <div
    :class="{
      'input-field': true,
      warning: fieldMessage,
      succes: true,
    }"
  >
    <label for="login"></label>
    <div class="input-box">
      <input v-model="value" :placeholder="placeholder" />
      <EyesSvg
        v-if="fieldType === 'password' || fieldType === 'confirmPassword'"
      />
    </div>
    <div class="message" v-if="fieldMessage">
      <WarningSvg />
      {{ fieldMessage }}
    </div>
  </div>
</template>

<script>
import EyesSvg from "./EyesSvg.vue";
import WarningSvg from "./WarningSvg.vue";

export default {
  components: { EyesSvg, WarningSvg },
  props: ["fieldType", "fieldStatus", "fieldMessage", "placeholder"],
  data() {
    return { value: "" };
  },
  watch: {
    value(value) {
      this.$emit("update", { type: this.fieldType, value });
    },
  },
};
</script>
