<template>
  <v-container class="pa-6">
    <v-layout class="pa-6">
      <v-row>
        <v-col class="px-5" cols="12" sm="12" md="6">
          <v-text-field label="Field 1" outlined></v-text-field>
        </v-col>
        <v-col class="px-5" cols="12" sm="12" md="6">
          <v-text-field label="Field 2" outlined></v-text-field>
        </v-col>
        <v-col class="px-5" cols="12" sm="12" md="6">
          <v-text-field label="Field 3" outlined></v-text-field>
        </v-col>
        <v-col class="px-5" cols="12" sm="12" md="6">
          <v-text-field label="Field 4" outlined></v-text-field>
        </v-col>
        <v-col class="px-5" cols="12" sm="12" md="6">
          <v-text-field label="Field 5" outlined></v-text-field>
        </v-col>
        <v-col class="px-5" cols="12" sm="12" md="6">
          <v-text-field label="Field 6" outlined></v-text-field>
        </v-col>
        <v-col class="px-5" cols="12" sm="12" md="6">
          <v-text-field label="Field 7" outlined></v-text-field>
        </v-col>
        <v-col class="px-5" cols="12" sm="12" md="6">
          <v-text-field label="Field 8" outlined></v-text-field>
        </v-col>
        <v-col class="px-5" cols="12" sm="12" md="6">
          <v-text-field label="Field 9" outlined></v-text-field>
        </v-col>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({
    name: 0,
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader",
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify",
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
      },
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com",
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com",
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify",
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs",
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify",
      },
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer",
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions",
      },
    ],
  }),
  methods: {
    greet() {
      alert(`Hello Sam!`);
    },
  },
};
</script>
