<template>
  <div>
    <Header />
    <section>
      <div class="container">
        <div class="row">
          <div class="image">
            <img src="./assets/person.svg" alt="person" />
          </div>
          <router-view />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: { Header },
};
</script>
