<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <div class="nav mt-4 ml-4">
        <div class="logo">
          <!-- 로고 -->
          <img src="./assets/img/logo.png" alt="로고">
        </div>
        <hr class="horizontal dark mb-4" />

        <v-expansion-panels style="width:230px;">
          <v-expansion-panel style="background: #f8f9fa;">
            <v-expansion-panel-header class="menu">
              <div class="meneicon">
                <svg viewBox="0 0 24 24">
                  <path fill="currentColor" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
                </svg>
              </div>
              <span class="menu-txt">Dashboards</span>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="mt-3">
              <ul class="router-tag">
                <li>
                  <a href="#">Default</a>
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
            <v-expansion-panel-header class="menu">
              <div class="meneicon">
                <svg viewBox="0 0 24 24">
                  <path fill="currentColor" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
                </svg>
              </div>
              <span class="menu-txt">Dashboards</span>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="mt-3">
              <ul class="router-tag">
                <li>
                  <a href="#">Default</a>
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
            <v-expansion-panel-header class="menu">
              <div class="meneicon">
                <svg viewBox="0 0 24 24">
                  <path fill="currentColor" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
                </svg>
              </div>
              <span class="menu-txt">Dashboards</span>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="mt-3">
              <ul class="router-tag">
                <li>
                  <a href="#">Default</a>
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


        </v-expansion-panels>
        <hr class="horizontal dark mb-4" />

        <div class="card pa-5">
          <div class="row">
            <div class="col">
              <h3>도움이 필요하신가요?</h3>
              <h6>아래 버튼을 눌러 다운로드 받으세요.</h6>
              <a href="#" style="font-size:14px;font-weight: 700;padding-left: 10px;">사용자 메뉴얼 다운로드</a>
            </div>
          </div>
        </div>
      </div>

    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>

      <v-breadcrumbs>라우터 주소/Dashboards</v-breadcrumbs>

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
    test(e) {
      console.log(e.path);
      console.log(e.path[0].children[0]);
      const menu = e.path[0].children[0];
      menu.classList.toggle('hide')
    }
  }
};
</script>
<style lang="scss">
@font-face {
  font-family: "scoreDream";
  font-display: swap;
  src: url("./assets/fonts/S-Core_Dream_OTF/SCDream6.otf") format("truetype");
}

@font-face {
  font-family: "scoreDream2";
  font-display: swap;
  src: url("./assets/fonts/S-Core_Dream_OTF/SCDream5.otf") format("truetype");
}

@font-face {
  font-family: "Noto Sans KR Bold";
  font-display: swap;
  src: url("./assets/fonts/Noto_Sans_KR/NotoSansKR-Bold.otf") format("truetype");
}

@font-face {
  font-family: "Noto Sans KR Medium";
  font-display: swap;
  src: url("./assets/fonts/Noto_Sans_KR/NotoSansKR-Medium.otf") format("truetype");
}

@font-face {
  font-family: "Noto Sans KR Regular";
  font-display: swap;
  src: url("./assets/fonts/Noto_Sans_KR/NotoSansKR-Regular.otf") format("truetype");
}

.scoreDream {
  font-family: "scoreDream", "Noto Sans KR", sans-serif !important;
  color: #504e4e;
}

.noto-sans {
  font-family: "Noto Sans KR", sans-serif !important;
}

ul,
li {
  list-style: none;
}

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

.v-expansion-panel-header--active {
  background-color: white;
  box-shadow: 0 20px 27px 0 rgb(0 0 0 / 5%);

  .meneicon {
    background-image: linear-gradient(310deg, #82d616, #82d616);

    svg {
      filter: invert(100%) sepia(1%) saturate(2403%) hue-rotate(4deg) brightness(118%) contrast(100%);
    }
  }

  .menu-txt {
    color: #67748e;
    font-weight: 500;
  }
}

.v-expansion-panel-header {
  border-radius: 16px;
}

.menu {
  position: relative;
}

.meneicon {
  position: relative;
  width: 32px;
  height: 32px;
  padding: 10px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 4px 6px -1px rgba(20, 20, 20, .12), 0 2px 4px -1px rgba(20, 20, 20, .07);

  svg {
    width: 20px;
    height: 20px;
    margin-top: -4px;
    margin-left: -4px;
    filter: invert(23%) sepia(53%) saturate(452%) hue-rotate(192deg) brightness(100%) contrast(96%);
  }
}

.menu-txt {
  width: 134px;
  line-height: 27px;
  margin-left: 12px;
  color: #67748e;
}

.hide {
  display: none;
}

.v-expansion-panel-content__wrap {
  padding: 0px 40px !important;
  flex: 1 1 auto;
  max-width: 100%;
}

.router-tag{
  li{
    a{
      color: rgba(58,65,111,.5);
      transition: all .1s ease 0s;
    }
  }
}
</style>