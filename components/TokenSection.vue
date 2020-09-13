<template>
  <section class="bg-indigo-600 text-white pt-12 md:py-16 xl:py-20" id="token">
    <div class="max-w-screen-xl mx-auto px-8 md:px-16 xl:px-0 flex flex-col space-y-12 xl:flex-row xl:justify-between xl:space-x-12 xl:space-y-0">

      <div class="">
        <h2 class="text-3xl font-bold mb-6">Token</h2>
        <p class="text-xl font-normal tracking-wide leading-relaxed max-w-2xl">VYBE must be purchased to utilize melodies, providing intrinsic value to VYBE. You can stake your VYBE to enable the ecosystem and increase your holdings.<br/>
        </br/>Every month, 5% of the VYBE supply is issued, and 4.75% is distributed to stakers. The remaining 0.25% funds future development to ensure the platform's long-term viability.<br/>
        </br/>The staking rate will decrease over the next six months from the current 5% to the final staking rate of 2% of the VYBE supply.</p>
      </div>

      <div class="bg-white md:rounded-md shadow-lg text-black flex-1 py-12 px-8 md:py-8 -mx-8 md:mx-0">
        <h4 class="text-xl text-black font-bold pb-4 border-b border-gray-400 mb-4">
          VYBE
          <span class="text-gray-700 font-medium ml-4">ERC-20</span>
        </h4>

        <div class="space-y-3 pb-4 border-b border-gray-400 mb-4">
          <div class="flex items-center space-x-8">
            <div class="text-lg font-bold uppercase w-56 flex-0">Price</div>
            <div v-if="price" class="font-medium text-gray-700 flex-1">${{ price }}</div>
            <div v-else class="font-medium text-gray-700 flex-1">Loading..</div>
          </div>

          <div class="flex items-center space-x-8">
            <div class="text-lg font-bold uppercase w-56 flex-0">24HR Volume</div>
            <div v-if="volume" class="font-medium text-gray-700 flex-1">${{ volume }}</div>
            <div v-else class="font-medium text-gray-700 flex-1">Loading..</div>
          </div>

          <div class="flex items-center space-x-8">
            <div class="text-lg font-bold uppercase w-56 flex-0">Circulating Supply</div>
            <div v-if="supply" class="font-medium text-gray-700 flex-1">{{ supply }}</div>
            <div v-else class="font-medium text-gray-700 flex-1">Loading..</div>
          </div>

          <div class="flex items-center space-x-8">
            <div class="text-lg font-bold uppercase w-56 flex-0">Presale?</div>
            <div class="font-medium text-gray-700 flex-1">No</div>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 items-center sm:space-x-4">
          <a
            class="flex text-lg font-semibold border-2 border-black text-black py-1 px-5 rounded-full hover:bg-black hover:text-white"
            href="#"
            target="_blank"
          >
            <img src="~assets/icons/uniswap.svg" alt="Uniswap Logo" class="mr-1 h-6">
            Trade on Uniswap
          </a>
          <a
            class="flex text-lg font-semibold border-2 border-black text-black py-1 px-5 rounded-full hover:bg-black hover:text-white"
            href="#"
            target="_blank"
          >
            Trade on ForkDelta
          </a>
        </div>

        <div class="mt-4">
          <a href="https://etherscan.io/address/0x3A1c1d1c06bE03cDDC4d3332F7C20e1B37c97CE9" target="_blank" class="text-indigo-600 font-bold">View the VYBE token contract on Github</a>
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
      supply: null
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

      this.price = res.data.market_data.current_price.usd;
      this.volume = formatNumber(res.data.market_data.total_volume.usd);

    } catch (err) {

      console.log(err);

    }

    try {

      // const etherscan = await axios.get("https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=0x57d90b64a1a57749b0f932f1a3395792e12e7055&apikey=HXZCSJ1N2J1CGCWD3PKYXSCI2FX2G9PWSW", config);
      //
      // // rawSupply = etherscan.data.result.match(/.{1,10}(\s|$)/g);
      //
      // // this.supply = parseInt(rawSupply);
      // this.supply = etherscan;

    } catch (err) {

      console.log(err);

    }

  }
}
</script>
