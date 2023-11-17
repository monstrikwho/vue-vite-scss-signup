<template>
  <div
    :class="{
      'input-field': true,
      warning: fieldMessage,
      succes: value && !fieldMessage,
    }"
  >
    <label for="login"></label>
    <div class="input-box">
      <input v-model="value" :placeholder="placeholder" :type="inputType()" />
      <EyesSvg
        :class="{ active: eyesStatus }"
        v-if="isPassword()"
        v-on:click="changeColorEyes()"
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
  props: ["fieldType", "fieldMessage", "placeholder"],
  data() {
    return { value: "", eyesStatus: false };
  },
  watch: {
    value(value) {
      this.$emit("update", { type: this.fieldType, value });
    },
  },
  methods: {
    changeColorEyes() {
      this.eyesStatus = !this.eyesStatus;
    },
    isPassword() {
      return (
        this.fieldType === "password" || this.fieldType === "confirmPassword"
      );
    },
    inputType() {
      return (this.fieldType === "password" ||
        this.fieldType === "confirmPassword") &&
        !this.eyesStatus
        ? "password"
        : "text";
    },
  },
};
</script>
