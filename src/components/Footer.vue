
Search Vuetify
#Footers
The v-footer component is used for displaying general information that a user might want to access from any page within your site.

#Usage
The v-footer component in its simplest form is a container.

2022 — Vuetify
Variant
default
#API
v-footer
#Examples
#Props
#Padless Footer
The padless prop removes all default padding from the footer component.

2022 — Vuetify
#Misc
#Company Footer
The footer component as a basic company footer with links.

2022 — Vuetify
#Indigo Footer
The footer component with Indigo background color and social media icons and button.

<template>
  <v-footer dark padless>
    <v-card flat tile class="indigo lighten-1 white--text text-center">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  name: "HelloWorld",
  data: () => ({
    name: 0,
    icons: ["mid-facebook"],
  }),
  methods: {
    greet() {
      alert(`Hello Sam!`);
    },
  },
};
</script>
