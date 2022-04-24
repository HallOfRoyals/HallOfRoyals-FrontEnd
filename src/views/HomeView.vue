<template>
  <Header />
  <div class="container">
    <ActionTray />
    <img src="../assets/images/shape-14.png" alt="" className="shape-14" />
    <ShowCase />
    <StorySection />
    <img src="../assets/images/shape-15.png" alt="" className="shape-15" />
    <RoadMap />
    <TeamSection />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "@/components/Header.vue"; // @ is an alias to /src
import ShowCase from "@/components/ShowCase.vue"; // @ is an alias to /src
import StorySection from "@/components/StorySection.vue"; // @ is an alias to /src
import ActionTray from "@/components/ActionTray.vue"; // @ is an alias to /src
import RoadMap from "@/components/RoadMap.vue"; // @ is an alias to /src
import TeamSection from "@/components/TeamSection.vue"; // @ is an alias to /src

@Options({
  components: {
    Header,
    ShowCase,
    StorySection,
    ActionTray,
    RoadMap,
    TeamSection,
  },
})
export default class HomeView extends Vue {}
</script>
