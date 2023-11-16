<template>
  <div class="signup-form">
    <div class="title">Регистрация</div>

    <InputField
      fieldType="login"
      fieldStatus=""
      :fieldMessage="formErors.login"
      placeholder="Логин"
      @update="update($event)"
    />
    <InputField
      fieldType="email"
      fieldStatus=""
      :fieldMessage="formErors.email"
      placeholder="Email"
      @update="update($event)"
    />
    <InputField
      fieldType="password"
      fieldStatus=""
      :fieldMessage="formErors.password"
      placeholder="Пароль"
      @update="update($event)"
    />
    <InputField
      fieldType="confirmPassword"
      fieldStatus=""
      :fieldMessage="formErors.confirmPassword"
      placeholder="Подтвердите пароль"
      @update="update($event)"
    />
    <div class="actions">
      <a class="button disabled">Зарегистрироваться</a>
    </div>
  </div>
</template>

<script>
import InputField from "./InputField.vue";

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
    },
  },
};
</script>
