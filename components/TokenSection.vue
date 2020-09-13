<template>
  <section class="bg-indigo-600 text-white py-16" id="token">
    <div class="max-w-screen-xl mx-auto px-8 md:px-16 xl:px-0 flex flex-col space-y-12 xl:flex-row xl:justify-between xl:space-x-12 xl:space-y-0">

      <div class="">
        <h2 class="text-3xl font-bold mb-6">{{ $t('nav-token') }}</h2>
        <p class="text-xl font-normal tracking-wide leading-relaxed max-w-2xl"><br/>{{ $t('token-copy-one') }}
        </br/>{{ $t('token-copy-two') }}<br/>
        </br/>{{ $t('token-copy-three') }}</p>
      </div>

      <div class="bg-white rounded-md shadow-lg text-black flex-1 p-8">
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
            <div class="font-medium text-gray-700 flex-1">{{ max_supply }}</div>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 items-center sm:space-x-4">
          <a
            class="flex text-lg font-semibold border-2 border-black text-black py-1 px-5 rounded-full hover:bg-black hover:text-white"
            href="#"
            target="_blank"
          >
            <img src="~assets/icons/uniswap.svg" alt="Uniswap Logo" class="mr-1 h-6">
            {{ $t('token-uniswap') }}
          </a>
          <a
            class="flex text-lg font-semibold border-2 border-black text-black py-1 px-5 rounded-full hover:bg-black hover:text-white"
            href="#"
            target="_blank"
          >
            {{ $t('token-forkdelta') }}
          </a>
        </div>

        <div class="mt-4">
          <a href="https://etherscan.io/address/0x3A1c1d1c06bE03cDDC4d3332F7C20e1B37c97CE9" target="_blank" class="text-indigo-600 font-bold">{{ $t('token-github') }}</a>
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
      max_supply: null
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

      const res = await axios.get("https://api.coingecko.com/api/v3/coins/vybe?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false", config);

      this.price = res.data.market_data.current_price.usd.toFixed(2);
      this.volume = formatNumber(res.data.market_data.total_volume.usd);
      this.max_supply = formatNumber(res.data.market_data.total_supply.toFixed(0));

    } catch (err) {

      console.log(err);

    }

  }
}
</script>
