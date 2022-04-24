<template>
  <div className="position-relative gallery-wrapper">
    <NavOnlyHeader />
    <img
      src="../assets/images/shape-1.png"
      alt="shape-1"
      className="shape-1 shape-movement"
    />
    <img src="../assets/images/shape-2.png" alt="shape-2" className="shape-2" />
    <img
      src="../assets/images/shape-3.png"
      alt="shape-3"
      className="shape-3 shape-pulsating"
    />
    <div className="container">
      <section className="glassy-wrapper x-section mt-120">
        <h2 className="section-title">View Your Royal NFT</h2>
        <div className="mt-20">
          <div
            className="col-12 col-sm-10 mx-auto d-flex justify-content-center"
          >
            <input
              type="text"
              className="form-control"
              placeholder="Enter your NFT ID"
            />
            <button type="button" className="btn btn-primary btn-cap ml-10">
              Reveal
            </button>
          </div>
        </div>
      </section>
      <section className="glassy-wrapper x-section mt-30">
        <div
          className="col-12 col-sm-11 mx-auto d-block d-sm-flex justify-content-center text-white"
        >
          <div className="col-12 col-sm-6">
            <div className="gallery-img mx-auto">
              <img src="/gallery/1.png" className="gallery-img" alt="" />
              <h6 className="text-white text-center mt-2">
                Owner: 0xjnefu84f84949393nfn
              </h6>
            </div>
          </div>
          <div className="col-12 col-sm-6 px-5 mt-mobile-35">
            <h4 className="text-white">Attributes</h4>
            <div className="d-flex justify-content-between mt-20">
              <div className="">Attribute:&nbsp;</div>
              <div className="">Value</div>
            </div>
            <div className="d-flex justify-content-between mt-20">
              <div className="">Attribute:&nbsp;</div>
              <div className="">Value</div>
            </div>
          </div>
        </div>
      </section>
      <section className="glassy-wrapper x-section mt-60">
        <h2 className="section-title">Royal Gallery</h2>
        <h4 className="text-center sub-title mt-10">
          Sneak Peek of some Royals
        </h4>
        <GallerySection
          v-for="(item, index) in gallery"
          :item="item"
          :key="index"
        />
      </section>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NavOnlyHeader from "@/components/NavOnlyHeader.vue"; // @ is an alias to /src
import GallerySection from "@/components/GallerySection.vue"; // @ is an alias to /src

@Options({
  components: {
    NavOnlyHeader,
    GallerySection,
  },
})
export default class GalleryView extends Vue {
  gallery = [
    {
      title: "Legendary Royals",
      items: [
        {
          image: "/gallery/1.png",
          name: "Bob Marley",
        },
        {
          image: "/gallery/2.png",
          name: "Brenda Fassie",
        },
        {
          image: "/gallery/3.png",
          name: "Steve Jobs",
        },
        {
          image: "/gallery/4.png",
          name: "Kobe Bryant",
        },
      ],
    },
    {
      title: "Honorary Royals",
      items: [
        {
          image: "/gallery/5.png",
          name: "Snoop Dogg",
        },
        {
          image: "/gallery/6.png",
          name: "Asa",
        },
        {
          image: "/gallery/7.png",
          name: "Burna Boy",
        },
        {
          image: "/gallery/8.png",
          name: "Rema",
        },
      ],
    },
    {
      title: "Ancient Royals",
      items: [
        {
          image: "/gallery/9.png",
        },
        {
          image: "/gallery/10.png",
        },
        {
          image: "/gallery/11.png",
        },
        {
          image: "/gallery/12.png",
        },
      ],
    },
    {
      title: "Meta Royals",
      items: [
        {
          image: "/gallery/13.png",
        },
        {
          image: "/gallery/14.png",
        },
        {
          image: "/gallery/15.png",
        },
        {
          image: "/gallery/16.png",
        },
      ],
    },
  ];
}
</script>
<style scoped>
.gallery-wrapper .shape-2 {
  position: absolute;
  top: 9%;
  height: 500px;
  opacity: 0.5;
}
.gallery-wrapper .shape-3 {
  position: absolute;
  top: 15%;
  left: -3%;
  height: 500px;
  z-index: -4;
}
</style>
