<template>
  <div class="signup-form">
    <div class="title">Регистрация</div>

    <InputField
      fieldType="login"
      :fieldMessage="formErors.login"
      placeholder="Логин"
      @update="update($event)"
    />
    <InputField
      fieldType="email"
      :fieldMessage="formErors.email"
      placeholder="Email"
      @update="update($event)"
    />
    <InputField
      fieldType="password"
      :fieldMessage="formErors.password"
      placeholder="Пароль"
      @update="update($event)"
    />
    <InputField
      fieldType="confirmPassword"
      :fieldMessage="formErors.confirmPassword"
      placeholder="Подтвердите пароль"
      @update="update($event)"
    />
    <div class="actions">
      <a
        :class="{
          button: true,
          disabled: invalid,
        }"
        v-on:click="sendForm()"
        >Зарегистрироваться
      </a>
    </div>
  </div>
</template>

<script>
import InputField from "./InputField.vue";
import useValidate from "../../utils/useValidate";

export default {
  components: { InputField },
  data() {
    return {
      formData: {
        login: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      formErors: {
        login: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      invalid: true,
    };
  },
  methods: {
    update(event) {
      this.formData[event.type] = event.value;

      const result = useValidate(
        event.type,
        event.value,
        this.formData.password,
        this.formData.confirmPassword
      );

      this.formErors[event.type] = result.message;

      if (result.confirm) {
        this.formErors.password = result.message;
        this.formErors.confirmPassword = result.message;
      }

      const keys = Object.values(this.formData);
      const filter = keys.filter((value) => value.length > 0);

      const keys2 = Object.values(this.formErors);
      const filter2 = keys2.filter((value) => value.length);

      this.invalid = filter.length < 4 || filter2.length !== 0;
    },
    sendForm() {
      if (this.invalid) return;

      this.$router.push("/succes");
    },
  },
};
</script>
