<template>
  <div class="position-relative hide-side">
    <web3-modal-vue
      :disableInjectedProvider="true"
      ref="web3modal"
      :providerOptions="providerOptions"
      :cacheProvider="true"
      network="binance"
    />
    <router-view />
    <PageFooter />
  </div>
  <Toast ref="toast" />
</template>

<script lang="ts">
import { Options } from "vue-class-component";
import PageFooter from "@/components/PageFooter.vue"; // @ is an alias to /src
import Toast from "primevue/toast";
import Web3ModalVue from "@/components/Web3ModalVue.vue";
import WalletConnectProvider from "@walletconnect/web3-provider";
import ConnectToTrustWallect from "@/providers/connectors/trust";
import injection from "@/providers/connectors/injected";
import Web3Mixins from "./helpers/mixins/web3Mixin";

declare global {
  interface Window {
    BinanceChain: any;
  }
}

@Options({
  components: {
    PageFooter,
    Web3ModalVue,
    Toast,
  },
})
export default class App extends Web3Mixins {
  providerOptions = {
    "custom-metamask": {
      display: {
        logo: "/img/logos/metamask.svg",
        name: "MetaMask",
        description: "Connect to your MetaMask",
      },
      package: true,
      connector: async () => injection(),
    },
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        rpc: {
          56: "https://bsc-dataseed.binance.org/",
        },
        network: "binance",
        chainId: 56,
      },
    },
    "custom-trustwallet": {
      display: {
        logo: "/img/logos/trust.svg",
        name: "TrustWallet",
        description: "Connect to your TrustWallet",
      },
      package: true,
      connector: async (_, __, opt) =>
        ConnectToTrustWallect(
          WalletConnectProvider,
          {
            rpc: {
              56: "https://bsc-dataseed.binance.org/",
            },
            network: "binance",
            chainId: 56,
          },
          opt
        ),
    },
    "custom-binancechainwallet": {
      display: {
        logo: "/img/logos/binance.png",
        name: "Binance Chain Wallet",
        description: "Connect to your Binance Chain Wallet",
      },
      package: true,
      connector: async () => {
        let provider = null;
        if (typeof window.BinanceChain !== "undefined") {
          provider = window.BinanceChain;
          try {
            await provider.request({ method: "eth_requestAccounts" });
          } catch (error) {
            throw new Error("User Rejected");
          }
        } else {
          throw new Error("No Binance Chain Wallet found");
        }
        return provider;
      },
    },
  };

  declare $refs: {
    web3modal: any;
    toast: any;
  };

  mounted() {
    this.$store.commit('setToast', this.$refs.toast);
    this.$nextTick(async () => {
      const web3modal = this.$refs.web3modal;
      this.$store.commit("setWeb3Modal", web3modal);
      if (web3modal.cachedProvider) {
        this.$store.dispatch("connect");
      }
    });
  }
}
</script>
