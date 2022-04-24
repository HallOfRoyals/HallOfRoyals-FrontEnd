<template>
  <ModalDialog
    :class="'classic-modal'"
    v-model:visible="display"
    :modal="true"
    :breakpoints="{ '960px': '75vw', '640px': '97vw' }"
    :style="{ width: '50vw' }"
  >
    <template #header>
      <h4 class="text-center">Mint a Royal</h4>
    </template>

    <div class="pt-15">
      <div class="col-12 col-sm-10 mx-auto d-flex justify-content-center">
        <div class="">
          <div class="d-flex align-items-center input-holder">
            <span class="label text-center">Max: 5</span>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Amount"
              value="1"
            />
          </div>
          <p class="text-center text-black mt-2">
            How many Royals do you want to mint?
          </p>
        </div>
        <div>
          <button
            v-if="!isWalletConnected"
            type="button"
            class="btn btn-big btn-mute btn-cap big-resp ml-10"
            @click="connectWallet"
          >
            Connect Wallet
          </button>
          <button
            type="button"
            class="btn btn-big btn-mute btn-cap big-resp ml-10"
            v-else
          >
            Mint
          </button>
        </div>
      </div>
    </div>
  </ModalDialog>
  <section id="mint" class="glassy-wrapper x-section mt-120">
    <h1 class="section-title">Get a Royal</h1>
    <div class="row mt-20">
      <div class="col-12">
        <span
          @click="display = true"
          class="
            pl-5
            pr-5
            -actiontray-actions
            text-center
            d-flex
            justify-content-center
            align-items-center
            btn-cap
          "
        >
          <span>Mint a Royal</span>
          <img src="../assets/images/logo-icon-dark.png" alt="opensea" />
        </span>
        <p class="text-center mt-10">Join our free community airdrop</p>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { Options } from "vue-class-component";
import ModalDialog from "primevue/dialog";
import Web3Mixins from "@/helpers/mixins/web3Mixin";

@Options({
  components: {
    ModalDialog,
  },
})
export default class ActionTray extends Web3Mixins {
  display = false;
}
</script>
