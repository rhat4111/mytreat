<template>
  <div class="px-5 mb-5">
    <div class="py-8 flex justify-center items-center">
      <img src="~/assets/images/success.png" />
    </div>
    <div class="px-5 pt-8 pb-6 shadow-theme rounded-[36px]">
      <p class="text-lg font-bold text-[#19110B] text-center mb-7">
        Terminbuchung abgeschlossen
      </p>
      <div
        class="
          flex
          justify-between
          items-center
          mt-0.5
          pb-6
          border-b-2 border-dashed border-b-#B6C5D1
        "
      >
        <div class="flex flex-col items-start text-[#19110B] font-semibold">
          <span class="text-xs mb-1">Order ID</span>
          <span class="text-base">873839302</span>
        </div>
        <div class="flex flex-col items-end text-[#19110B] font-semibold">
          <span class="text-xs mb-1">Order date</span>
          <span class="text-base">16 January 2020</span>
        </div>
      </div>
      <div class="flex flex-col items-center pt-11 text-[#19110B]">
        <span class="text-lg font-bold mb-5">Bezahlter Betrag</span>
        <span class="text-4xl font-bold mb-5">159,99€</span>
        <span class="flex items-center mb-5">
          <img src="~/assets/images/icons/download.svg" class="mr-2" alt="" />
          <span class="text-sm font-bold">Rechnung</span>
        </span>
        <Button className="w-[148px] h-9 rounded-full bg-[#19110B]">
          <span class="text-white text-sm font-bold">OK</span>
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>