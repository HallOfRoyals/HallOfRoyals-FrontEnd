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
              v-model="NFTId"
              placeholder="Enter NFT ID"
            />
            <Button
              type="submit"
              class="
                btn btn-primary btn-cap
                justify-content-center
                align-items-center
              "
              label="Reveal"
              @click="revealNFT"
              :loading="isLoading"
            />
          </div>
        </div>
      </section>
      <section className="glassy-wrapper x-section mt-30" v-if="NFTMetaDataURI">
        <div
          className="col-12 col-sm-11 mx-auto d-block d-sm-flex justify-content-center text-white"
        >
          <div className="col-12 col-sm-6">
            <div className="gallery-img mx-auto">
              <img src="/gallery/1.png" className="gallery-img" alt="" />
              <h6 className="text-white text-center mt-2">
                Owner: {{NFTData.owner}}
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
import { Options } from "vue-class-component";
import { ethers } from "ethers";
import multicall from "@/utils/multicall";
import { getHORTokenAddress } from "../utils/addressHelpers";
import horAbi from "../config/abis/hor.json";
import NavOnlyHeader from "@/components/NavOnlyHeader.vue"; // @ is an alias to /src
import GallerySection from "@/components/GallerySection.vue"; // @ is an alias to /src
import Button from "primevue/button";
import Web3Mixins from "@/helpers/mixins/web3Mixin";
import axios from 'axios';

@Options({
  components: {
    NavOnlyHeader,
    GallerySection,
    Button,
  },
})
export default class GalleryView extends Web3Mixins {
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

  isLoading: boolean = false;
  hasError: boolean = false;

  NFTId: number;
  NFTMetaDataURI: string;
  NFTData: any;
  
  getIPFSURI(uri: string) {
    return uri.split('ipfs://')[1];
  }

  async revealNFT() {
    if (!this.NFTId || this.NFTId < 1) {
      return;
    }

    this.isLoading = true;
    this.NFTMetaDataURI = null;
    this.NFTData = null
    try {
      const calls = [
        {
          address: getHORTokenAddress(),
          name: "tokenURI",
          params: [this.NFTId],
        },
        {
          address: getHORTokenAddress(),
          name: "ownerOf",
          params: [this.NFTId],
        },
      ];
      const result = await multicall(horAbi, calls);

      this.NFTMetaDataURI = result[0].toString();
      const httpResult = await axios.get(`https://ipfs.io/ipfs/${this.getIPFSURI(this.NFTMetaDataURI)}`);

      this.NFTData = {owner: result[1].toString(), ...httpResult.data};
      this.NFTData.image = `https://ipfs.io/ipfs/${this.getIPFSURI(this.NFTData.image)}`;
      console.log(this.NFTData);
      this.isLoading = false;
      this.hasError = false;
    } catch (err: any) {
      this.isLoading = false;
      console.log(err);
    }
  }
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
