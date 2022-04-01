<template>
  <v-app>
    <v-app-bar app color="primary">
      <div class="d-flex align-center">
        <!-- conditionally have padding on the h1, this seems a bit verbose but haven't found a different way to do it yet -->
        <h1
          alt="Vuetify Name"
          :class="{
            'pl-0': $vuetify.breakpoint.smAndDown,
            'px-16': $vuetify.breakpoint.mdAndUp,
          }"
          contain
          max-width="100"
          width="100"
        >
          <!-- This is what I usually do in React if I want to conditionally render something. Have seen the v-if v-else though -->
          {{ appTitle }} {{ $vuetify.theme.dark ? "🌚" : "🌞" }}
        </h1>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <!-- Main form component, HelloWorld because first Vue component -->
      <HelloWorld />
    </v-main>
    <!-- Footer Component -->
    <!-- passing the prop of appTitle to it as well -->
    <Footer :title="appTitle" />
  </v-app>
</template>

<script>
// import components
import HelloWorld from "./components/HelloWorld";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    HelloWorld,
    Footer,
  },

  data: () => ({
    appTitle: "helloWorld",
  }),
  methods: {},
};
</script>
<style>
/* import Montserrat from Google fonts */
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap");

/* setting v-app default font to Montserrat */
.v-application {
  font-family: "Montserrat", sans-serif;
}
</style>