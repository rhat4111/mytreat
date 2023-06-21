<template>
  <div>
    <Header :backControl="true">
      <div class="w-full flex flex-col">
        <div class="w-full pl-10 mb-12">
          <Step :steps="steps" :index="0" />
        </div>
        <div class="flex">
          <img
            src="~/assets/images/room_1.png"
            alt=""
            class="shadow-theme mr-5"
          />
          <div>
            <p class="text-base font-bold text-[#19110B] mb-1">Haarstube</p>
            <p class="text-sm font-semibold text-[#B6C5D1]">
              Friseur | Erlangen
            </p>
          </div>
        </div>
      </div>
    </Header>
    <div
      class="
        py-4
        flex
        justify-center
        items-end
        bg-[#F0F3F6]
        rounded-b-[36px]
        h-24
        -mt-9
      "
    >
      <span class="text-base font-semibold text-[#19110B]">
        Zahlen sie bequem vorab oder vor Ort
      </span>
    </div>
    <div class="px-5 pt-5 pb-14 shadow-theme rounded-b-[36px] mb-9">
      <table class="w-full text-[#19110B]">
        <thead>
          <tr>
            <th align="left" class="text-xs font-semibold">Leistungen</th>
            <th width="100" align="right" class="text-xs font-semibold">
              Betrag
            </th>
            <th width="50"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-base leading-5 font-bold">
              Coloration mit Schnitt und Styling
            </td>
            <td class="text-lg font-bold" align="right">17,00 €</td>
            <td align="center">
              <img src="~/assets/images/icons/trash.svg" alt="" />
            </td>
          </tr>
          <tr>
            <td class="text-base leading-5 font-bold">Augenbrauen zupfen</td>
            <td class="text-lg font-bold" align="right">9,00 €</td>
            <td align="center">
              <img src="~/assets/images/icons/trash.svg" alt="" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="px-5">
      <div>
        <p class="text-lg font-bold text-[#19110B] mb-5">Zahlungsmethoden</p>
        <div
          class="
            rounded-[9px]
            p-2.5
            flex
            justify-between
            items-center
            mb-1.5
            bg-[#76767640]
          "
        >
          <div class="flex items-center">
            <img src="~/assets/images/paypal.png" class="mr-5" />
            <span class="text-base font-semibold text-[#19110B]">PayPal</span>
          </div>
          <img src="~/assets/images/icons/check_dark.svg" alt="" />
        </div>
        <div class="rounded-[9px] p-2.5 flex justify-between items-center mb-5">
          <div class="flex items-center">
            <img src="~/assets/images/room_2.png" class="mr-5" />
            <span class="text-base font-semibold text-[#19110B]"
              >vor Ort bezahlen</span
            >
          </div>
        </div>
        <Button className="w-full h-10 rounded-full bg-[#19110B] mb-10">
          <NuxtLink to="/payment/success">
            <div class="w-full flex justify-center items-center relative">
              <span class="text-white text-base font-bold">
                Zahlung fortsetzen
              </span>
              <img
                src="~/assets/images/icons/arrow_right.svg"
                alt=""
                class="absolute right-5"
              />
            </div>
          </NuxtLink>
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      steps: [
        {
          id: 3,
          name: "Payment",
        },
        {
          id: 4,
          name: "Review order",
        },
      ],
    };
  },
};
</script>