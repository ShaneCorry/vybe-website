<template>
  <section class="bg-indigo-600 text-white pt-12 md:py-16 xl:py-20" id="token">
    <div class="max-w-screen-xl mx-auto px-8 md:px-16 xl:px-0 flex flex-col space-y-12 xl:flex-row xl:justify-between xl:space-x-12 xl:space-y-0">

      <div class="">
        <h2 class="text-3xl font-bold mb-6">{{ $t('nav-token') }}</h2>
        <p class="text-xl font-normal tracking-wide leading-relaxed max-w-2xl">{{ $t('token-copy-one') }}<br/>
        </br/>{{ $t('token-copy-two') }}<br/>
        </br/>{{ $t('token-copy-three') }}</p>
      </div>

      <div class="bg-white md:rounded-md max-w-2xl shadow-lg text-black flex-1 py-12 px-8 md:py-8 -mx-8 md:mx-0">
        <h4 class="text-xl text-black font-bold pb-4 border-b border-gray-400 mb-4">
          VYBE
          <span class="text-gray-700 font-medium ml-4">ERC-20</span>
        </h4>

        <div class="space-y-3 pb-4 border-b border-gray-400 mb-4">
          <div class="flex items-center space-x-8">
            <div class="text-lg font-bold uppercase w-56 flex-0">{{ $t('token-price') }}</div>
            <div v-if="price" class="font-medium text-gray-700 flex-1">${{ price }}</div>
            <div v-else class="font-medium text-gray-700 flex-1">{{ $t('token-loading') }}</div>
          </div>

          <div class="flex items-center space-x-8">
            <div class="text-lg font-bold uppercase w-56 flex-0">{{ $t('token-volume') }}</div>
            <div v-if="volume" class="font-medium text-gray-700 flex-1">${{ volume }}</div>
            <div v-else class="font-medium text-gray-700 flex-1">{{ $t('token-loading') }}</div>
          </div>

          <div class="flex items-center space-x-8">
            <div class="text-lg font-bold uppercase w-56 flex-0">{{ $t('token-supply') }}</div>
            <div v-if="supply" class="font-medium text-gray-700 flex-1">{{ supply }}</div>
            <div v-else class="font-medium text-gray-700 flex-1">{{ $t('token-loading') }}</div>
          </div>

          <div class="flex items-center space-x-8">
            <div class="text-lg font-bold uppercase w-56 flex-0">{{ $t('token-total-supply') }}</div>
            <div v-if="total_supply" class="font-medium text-gray-700 flex-1">{{ total_supply }}</div>
            <div v-else class="font-medium text-gray-700 flex-1">{{ $t('token-loading') }}</div>
          </div>

          <div class="flex items-center space-x-8">
            <div class="text-lg font-bold uppercase w-56 flex-0">{{ $t('token-mcap') }}</div>
            <div v-if="market_cap" class="font-medium text-gray-700 flex-1">${{ market_cap }}</div>
            <div v-else class="font-medium text-gray-700 flex-1">{{ $t('token-loading') }}</div>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 items-center sm:space-x-4">
          <a
            class="flex text-lg font-semibold border-2 border-black text-black py-1 px-5 rounded-full hover:bg-black hover:text-white"
            href="https://app.uniswap.org/#/swap?outputCurrency=0x3a1c1d1c06be03cddc4d3332f7c20e1b37c97ce9"
            target="_blank"
          >
            <img src="~assets/icons/uniswap.svg" alt="Uniswap Logo" class="mr-1 h-6">
            {{ $t('token-uniswap') }}
          </a>
          <a
            class="flex text-lg font-semibold border-2 border-black text-black py-1 px-5 rounded-full hover:bg-black hover:text-white"
            href="https://forkdelta.app/#!/trade/0x3a1c1d1c06be03cddc4d3332f7c20e1b37c97ce9-ETH"
            target="_blank"
          >
            {{ $t('token-forkdelta') }}
          </a>
        </div>

        <div class="mt-4">
          <a href="https://etherscan.io/address/0x3A1c1d1c06bE03cDDC4d3332F7C20e1B37c97CE9" target="_blank" class="text-center md:text-left text-indigo-600 font-bold">{{ $t('token-github') }}</a>
        </div>

      </div>

    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data () {
    return {
      price: null,
      volume: null,
      supply: null,
      total_supply: null,
      market_cap: null
    };
  },

  async created() {

    const config = {
      headers: {
        Accept: "application/json"
      }
    };

    function formatNumber(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    try {

      const res = await axios.get("https://api.vybe.finance/api/data", config);

      this.price = res.data.price;
      this.volume = formatNumber(res.data.volume.toFixed(0));
      this.total_supply = formatNumber(res.data.total_supply.toFixed(0));
      this.supply = formatNumber(res.data.circulating_supply.toFixed(0));
      this.market_cap = formatNumber((res.data.circulating_supply * res.data.price).toFixed(2));

    } catch (err) {

      console.log(err);

    }

  }
}
</script>
