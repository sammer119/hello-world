import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        // light and dark theme
        themes: {
            light: {
                primary: '#03DAC6',
                secondary: '#b0bec5',
                accent: '#002642',
                error: '#b71c1c',
            },
            dark: {
                primary: '#8B008B',
                secondary: '#E5DADA',
                accent: '#000000',
                error: '#840032',
                yellow: '#F1C01A'
            },  
        }
    }
});
