<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <div class="nav mt-4 ml-4">
        <div class="logo">
          <!-- 로고 -->
          <img src="./assets/img/logo.png" alt="로고">
        </div>
        <hr class="horizontal dark mb-4" />

        <v-expansion-panels multiple style="width:230px;">
          <v-expansion-panel style="background: #f8f9fa;">
            <v-expansion-panel-header>Panel 1</v-expansion-panel-header>
            <v-expansion-panel-content>
              <ul class="route-tag">
                <li>
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">1</a>
                </li>
              </ul>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel style="background: #f8f9fa;">
            <v-expansion-panel-header>Panel 2</v-expansion-panel-header>
            <v-expansion-panel-content>
              Some content
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel style="background: #f8f9fa;">
            <v-expansion-panel-header>Panel 3</v-expansion-panel-header>
            <v-expansion-panel-content>
              Some content
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <hr class="horizontal dark mb-4" />
      </div>

    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-avatar class="app-bar-right" color="red">
        <span class="white--text text-h5">CJ</span>
      </v-avatar>

    </v-app-bar>

    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    drawer: null,
  }),
  methods: {
  }
};
</script>
<style lang="scss">
.theme--light.v-application {
  background: #f8f9fa;
  // color: rgba(0,0,0,.87);
}

.v-navigation-drawer__content {
  background: #f8f9fa;
}

.v-application ul,
.v-application ol {
  list-style: none;
  padding-left: 0px;
}

.v-application a {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87);
}

.route-tag>li>a {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87);
}

nav {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}

hr.horizontal {
  background-color: transparent;
  opacity: .25;
  border: none;
  height: 1px;
}

hr.horizontal.dark {
  background-image: linear-gradient(90deg, transparent, rgba(0, 0, 0, .4), transparent);
}

.logo {
  width: 240px;
  height: 75px;
  padding: 20px;
}

.v-expansion-panel::before {
  box-shadow: none;
}

.theme--light.v-expansion-panels .v-expansion-panel:not(:first-child)::after {
  border-color: rgba(0, 0, 0, 0);
}
</style>