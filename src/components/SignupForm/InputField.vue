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
      <input
        v-model="value"
        :placeholder="placeholder"
        :type="
          (fieldType === 'password' || fieldType === 'confirmPassword') &&
          !eyesStatus
            ? 'password'
            : 'text'
        "
      />
      <EyesSvg
        :class="{ active: eyesStatus }"
        v-if="fieldType === 'password' || fieldType === 'confirmPassword'"
        v-on:click="changeEyes()"
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
    return { value: "", eyesStatus: false };
  },
  watch: {
    value(value) {
      this.$emit("update", { type: this.fieldType, value });
    },
  },
  methods: {
    changeEyes() {
      this.eyesStatus = !this.eyesStatus;
    },
  },
};
</script>
