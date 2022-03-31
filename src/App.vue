<template>
  <v-app>
    <v-app-bar app color="indigo" dark>
      <div class="d-flex align-center">
        <h1
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          width="100"
        >
          helloWorld 👨‍💻
        </h1>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <HelloWorld />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    HelloWorld,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
