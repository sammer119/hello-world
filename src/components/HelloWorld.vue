<template>
  <v-container>
    <v-layout class="py-6">
      <v-row>
        <!-- Vuetify seems similar to bootstrap in the way the screen is split up into 12 sections. For small screens will be 1 col, for medium and larger will be 3 cols (ie. 4/12 = 3) -->
        <v-col class="px-5" cols="12" sm="12" md="4">
          <v-text-field label="Name" outlined></v-text-field>
        </v-col>
        <v-col class="px-5" cols="12" sm="12" md="4">
          <v-text-field label="Age" outlined></v-text-field>
        </v-col>
        <v-col class="px-5" cols="12" sm="12" md="4">
          <v-text-field label="Birthplace" outlined></v-text-field>
        </v-col>
        <v-col class="px-5" cols="12" sm="12" md="4">
          <v-text-field label="Gender" outlined></v-text-field>
        </v-col>
        <v-col class="px-5" cols="12" sm="12" md="4">
          <v-text-field label="Nationality" outlined></v-text-field>
        </v-col>
        <v-col class="px-5" cols="12" sm="12" md="4">
          <v-text-field label="Religion" outlined></v-text-field>
        </v-col>
        <v-col class="px-5" cols="12" sm="12" md="4">
          <v-text-field label="Height" outlined></v-text-field>
        </v-col>
        <v-col class="px-5" cols="12" sm="12" md="4">
          <v-text-field label="Weight" outlined></v-text-field>
        </v-col>
        <v-col class="px-5" cols="12" sm="12" md="4">
          <v-text-field label="Memorable Information" outlined></v-text-field>
        </v-col>

        <!-- added this spacer so no fields were cut off in mobile view. -->
        <v-col class="py-16 my-16" cols="12">
          <div></div>
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
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer",
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
