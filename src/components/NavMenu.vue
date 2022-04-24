<template>
  <div class="navbar-area">
    <div class="container">
      <div class="d-flex justify-content-between justify-content-md-start">
        <router-link to="/">
          <img src="../assets/images/logo.png" alt="HOR" class="logo" />
        </router-link>
        <ul class="ml-md-200 nav-anchors">
          <li class="d-inline-block">
            <a href="#" class="btn btn-primary btn-cap" v-if="!isWalletConnected" @click="connectWallet">Connect Wallet</a>
            <a href="#" class="btn btn-primary btn-cap" @click="resetApp" v-else>Logout</a>
          </li>
          <li class="d-none d-md-inline-block">
            <a
              href="https://twitter.com/HallofRoyals?s=09"
              target="_blank"
              rel="noreferrer"
              ><img src="../assets/images/social-1.png" alt=""
            /></a>
          </li>
          <li class="d-none d-md-inline-block">
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
</template>
<script lang="ts">
import Web3Mixins from "@/helpers/mixins/web3Mixin";

export default class ActionTray extends Web3Mixins {
}
</script>
