import { createStore } from "vuex";
import web3Store from "@/modules/web3Store";

export interface IVueState {
  web3?: any;
  toast: any
}

export default createStore<IVueState>({
  state: {
    toast: null
  },
  getters: {},
  mutations: {
    setToast(state, toast) {
      state.toast = toast;
    }
  },
  actions: {},
  modules: {
    web3: web3Store,
  },
});
