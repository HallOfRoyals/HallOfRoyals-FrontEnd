<template>
  <header id="home" class="header-area">
    <NavMenu />
  </header>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NavMenu from "@/components/NavMenu.vue"; // @ is an alias to /src

@Options({
  components: {
    NavMenu,
  },
})
export default class NavOnlyHeader extends Vue {}
</script>
<style>
.logo {
  height: 35px;
}
.header-area {
  position: relative;
}
.navbar-area {
  padding: 20px 20px;
}
.nav-anchors li + li {
  margin-left: 30px;
}
.nav-anchors .action {
  background: rgba(196, 196, 196, 0.2);
  border: 0.5px solid rgba(255, 196, 119, 0.2);
  box-sizing: border-box;
  font-family: "Offside", cursive;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  padding: 7px 12px;
  color: #ffffff;
  text-decoration: none;
}
.nav-anchors img {
  height: 30px;
  width: 30px;
}
.header-hero-content {
  position: relative;
  margin-top: 230px;
  padding-bottom: 220px;
  z-index: 1;
}
.header-hero-content h1 {
  font-family: "Offside", cursive;
  font-style: normal;
  font-weight: normal;
  font-size: 90px;
  line-height: 114px;
  color: #ffffff;
}
.header-hero-content p {
  margin-top: 15px;
  font-size: 15px;
  line-height: 22px;
  color: #ffffff;
}
@media (max-width: 1200px) {
  .header-hero-content h1 {
    font-size: 65px;
    line-height: 84px;
  }
}
@media (max-width: 486px) {
  .header-hero-content h1 {
    font-size: 52px;
    line-height: 63px;
  }
}
</style>
