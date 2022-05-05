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
      <div class="alert alert-success mb-2" v-if="isSuccess">
        Transaction completed!
        <a :href="`${BASE_BSC_SCAN_URL}/tx/${transactionHash}`" target="_blank"
          >Check your transaction on BSCScan</a
        >
      </div>
      <div class="alert alert-warning mb-2" v-if="hasError">
        Transaction failed!
        <a :href="`${BASE_BSC_SCAN_URL}/tx/${transactionHash}`" target="_blank"
          >Check your transaction on BSCScan</a
        >
      </div>
      <div class="col-12 col-sm-10 mx-auto d-flex justify-content-center mt-3">
        <div class="">
          <div class="d-flex align-items-center input-holder">
            <span class="label text-center">Max: 5</span>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Amount"
              v-model="amount"
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
          <Button
            type="submit"
            class="btn btn-big btn-mute btn-cap big-resp ml-10"
            label="Mint"
            @click="mintToken"
            :loading="isLoading"
            v-else
          />
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
  <Toast ref="toast" />
</template>
<script lang="ts">
import { Options } from "vue-class-component";
import ModalDialog from "primevue/dialog";
import Button from "primevue/button";
import Toast from "primevue/toast";
import { ethers } from "ethers";
import Web3Mixins from "@/helpers/mixins/web3Mixin";
import { BASE_BSC_SCAN_URL } from "../config/index";
import { getHORTokenContract } from "../utils/contractHelpers";
import { invoke } from "lodash";

@Options({
  components: {
    ModalDialog,
    Toast,
    Button,
  },
})
export default class ActionTray extends Web3Mixins {
  declare $refs: {
    toast: any;
  };

  display = false;

  isLoading: boolean = false;
  hasError: boolean = false;
  isSuccess: boolean = false;

  amount: number = 1;

  transactionHash = null;

  BASE_BSC_SCAN_URL = BASE_BSC_SCAN_URL;

  async reason(tx) {
    const provider = new ethers.providers.Web3Provider(
      this.$store.state.web3.provider
    );
    try {
      await provider.call(tx, tx.blockNumber);
    } catch (err) {
      const reason = invoke(
        err,
        "error.message.replace",
        "Returned error: execution reverted: ",
        ""
      );
      return reason;
    }
  }

  async mintToken() {
    if (this.isWalletConnected && this.amount) {
      this.transactionHash = null;
      this.isSuccess = false;
      this.hasError = false;

      if (isNaN(this.amount) || this.amount == 0) {
        this.$refs.toast.add({
          severity: "error",
          life: 5000,
          summary: "Incorrect Input",
          detail: `Enter a valid amount in BNB`,
        });
        return;
      }

      this.isLoading = true;
      try {
        const provider = new ethers.providers.Web3Provider(this.web3.provider);

        const contract = getHORTokenContract(provider);
        const signer = contract.connect(provider.getSigner());

        const options = {
          value: ethers.utils.parseEther("0.018925831202046"),
        };
        let tx = await signer.mint(this.amount, options);
        await tx.wait();
        this.amount = 1;
        this.isLoading = false;
        this.isSuccess = true;
        this.hasError = false;
        this.transactionHash = tx.hash;
        this.$refs.toast.add({
          severity: "success",
          life: 5000,
          summary: "Transaction Successful",
          detail: `Transaction carried out successfully`,
        });
      } catch (err: any) {
        this.isLoading = false;
        this.isSuccess = false;
        let reason;
        switch (err?.code) {
          case "INSUFFICIENT_FUNDS":
            this.$refs.toast.add({
              severity: "error",
              life: 5000,
              summary: "Insufficient Fund",
              detail: `Sorry you don't have sufficient to carry out the transaction`,
            });
            break;
          case "CALL_EXCEPTION":
            this.hasError = true;
            this.transactionHash = err.transactionHash;
            reason = await this.reason(err.transaction);
            this.$refs.toast.add({
              severity: "error",
              life: 5000,
              summary: "Transaction Error",
              detail: reason,
            });
            break;
          case "UNPREDICTABLE_GAS_LIMIT":
            reason = await this.reason(err.transaction);
            this.$refs.toast.add({
              severity: "error",
              life: 5000,
              summary: "Transaction Error",
              detail: reason,
            });
            break;
          default:
            this.$refs.toast.add({
              severity: "error",
              life: 5000,
              summary: "Transaction Error",
              detail: `An unknown error occurred in the transaction`,
            });
            break;
        }
      }
    }
  }
}
</script>
