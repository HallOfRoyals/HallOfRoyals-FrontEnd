/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>
  export default component
}

import { IVueState } from '@/store';
import { Store } from 'vuex'
import { Router, _RouteLocationBase } from 'vue-router';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<IVueState>;
    $toast: any,
    $router: Router,
    $route: _RouteLocationBase,
  }
}
