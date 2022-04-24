<template>
  <footer
    class="x-glassy-wrapper mt-60 mb-30 position-relative pl-30 pr-30 pb-30 pt-100"
  >
    <img src="../assets/images/shape-18.png" alt="" class="shape-18" />
    <img src="../assets/images/shape-19.png" alt="" class="shape-19" />
    <div class="container x-container">
      <div class="row justify-content-center footer-nav">
        <div class="col-md-4">
          <h2>Project</h2>
          <ul>
            <li>
              <span @click="moveToElement('mint')" class="clickable">Mint</span>
            </li>
            <li>
              <span @click="moveToElement('story')" class="clickable"
                >Story</span
              >
            </li>
            <li>
              <span @click="moveToElement('roadmap')" class="clickable"
                >Roadmap</span
              >
            </li>
            <li>
              <span @click="moveToElement('team')" class="clickable">Team</span>
            </li>
          </ul>
        </div>
        <div
          class="col-md-4 d-md-flex flex-column justify-content-center align-items-center"
        >
          <h2>Socials</h2>
          <ul>
            <li>
              <a
                href="https://discord.gg/hall-of-royals"
                target="_blank"
                rel="noreferrer"
                >Discord</a
              >
            </li>
            <li>
              <a
                href="https://twitter.com/HallofRoyals?s=09"
                target="_blank"
                rel="noreferrer"
                >Twitter</a
              >
            </li>
            <li>
              <a
                href="https://instagram.com/hall_of_royals?utm_medium=copy_link"
                target="_blank"
                rel="noreferrer"
                >Instagram</a
              >
            </li>
            <li>
              <a href="//" target="_blank" rel="noreferrer">Facebook</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-50 d-flex justify-content-center">
        <div class="d-flex align-items-center footer-logo">
          <img src="../assets/images/logo-icon.png" alt="" />
          <h3>Hall Of Royals</h3>
          <img src="../assets/images/logo-icon.png" alt="" />
        </div>
      </div>
      <div class="mt-10 d-flex justify-content-center">
        <p>A royal hall of fame</p>
      </div>
      <div class="mt-40 d-flex justify-content-center">
        <p class="copyright">&copy; 2022 Hall Of Royals. All rights reserved</p>
      </div>
    </div>
  </footer>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";

export default class PageFooter extends Vue {
  moveToElement(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
}
</script>
<style>
.clickable {
  cursor: pointer;
}
</style>
