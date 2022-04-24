<template>
  <header id="home" class="header-area">
    <NavMenu />
    <div class="container header-hero-content">
      <div class="d-flex">
        <div class="col-md-9">
          <h1>Hall Of Royals</h1>
          <p>
            Inspired by the Bronze heads of the ancient Benin Kingdom which were
            cast in honor of Kings and Queens
          </p>
          <ul class="mt-15 nav-anchors d-md-none">
            <li class="d-inline-block">
              <a
                href="https://twitter.com/HallofRoyals?s=09"
                target="_blank"
                rel="noreferrer"
                ><img src="../assets/images/social-1.png" alt=""
              /></a>
            </li>
            <li class="d-inline-block">
              <a
                href="https://discord.gg/hall-of-royals"
                target="_blank"
                rel="noreferrer"
                ><img src="../assets/images/social-2.png" alt=""
              /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <img src="../assets/images/shape-1.png" alt="shape-1" class="shape-1" />
    <img src="../assets/images/shape-2.png" alt="shape-2" class="shape-2" />
    <img src="../assets/images/shape-3.png" alt="shape-3" class="shape-3" />
    <img
      src="../assets/images/shape-4.png"
      alt="shape-4"
      class="d-none d-sm-block shape-4"
    />
    <img src="../assets/images/shape-5.png" alt="shape-5" class="shape-5" />
    <img src="../assets/images/shape-6.png" alt="shape-6" class="shape-6" />
    <img src="../assets/images/shape-7.png" alt="shape-7" class="shape-7" />
    <img src="../assets/images/shape-8.png" alt="shape-8" class="shape-8" />
    <img src="../assets/images/shape-9.png" alt="shape-9" class="shape-9" />
    <img src="../assets/images/shape-10.png" alt="shape-10" class="shape-10" />
    <img src="../assets/images/shape-11.png" alt="shape-11" class="shape-11" />
    <img src="../assets/images/shape-12.png" alt="shape-12" class="shape-12" />
    <img src="../assets/images/shape-13.png" alt="shape-13" class="shape-13" />
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
export default class Header extends Vue {}
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
