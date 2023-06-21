<template>
  <div class="mb-20">
    <Header :backControl="true">
      <div class="w-full pl-10">
        <Step :steps="steps" :index="0" />
      </div>
    </Header>
    <div class="pb-6">
      <div class="h-28 bg-[#F0F3F6] rounded-b-[36px] -mt-9 flex items-end">
        <div class="w-full flex justify-between items-center py-6 px-5">
          <Button>
            <img src="~/assets/images/icons/back.svg" alt="" />
          </Button>
          <span>Januar</span>
          <Button>
            <img
              src="~/assets/images/icons/back.svg"
              alt=""
              class="transform rotate-180"
            />
          </Button>
        </div>
      </div>
      <div
        class="
          bg-white
          shadow-theme
          rounded-b-[36px]
          h-40
          flex
          items-center
          p-5
          mb-9
        "
      >
        <div class="w-full">
          <div class="flex flex-col items-center text-[#19110B]">
            <span class="text-xl font-bold">18</span>
            <span class="text-xs font-semibold">mon</span>
          </div>
        </div>
        <div class="w-full">
          <div class="flex flex-col items-center text-[#19110B]">
            <span class="text-xl font-bold">19</span>
            <span class="text-xs font-semibold">tue</span>
          </div>
        </div>
        <div class="w-full">
          <div
            class="
              flex flex-col
              items-center
              text-white
              p-2.5
              bg-[#19110B]
              rounded-[18px]
              w-12
              box-content
            "
          >
            <span class="text-4xl font-bold leading-8">20</span>
            <span class="text-base font-semibold leading-5">wed</span>
          </div>
        </div>
        <div class="w-full">
          <div class="flex flex-col items-center text-[#19110B]">
            <span class="text-xl font-bold">21</span>
            <span class="text-xs font-semibold">thu</span>
          </div>
        </div>
        <div class="w-full">
          <div class="flex flex-col items-center text-[#19110B]">
            <span class="text-xl font-bold">22</span>
            <span class="text-xs font-semibold">fri</span>
          </div>
        </div>
        <div class="w-full">
          <div class="flex flex-col items-center text-[#19110B]">
            <span class="text-xl font-bold">23</span>
            <span class="text-xs font-semibold">sat</span>
          </div>
        </div>
      </div>
      <div class="px-5">
        <p class="text-lg font-bold text-[#19110B] mb-4">Freie Termine</p>
        <div class="shadow-theme flex flex-wrap">
          <div
            v-for="(available, index) in availables"
            :key="index"
            class="w-1/3 p-2"
          >
            <TimeCard :time="available" />
          </div>
        </div>
      </div>
    </div>
    <div class="fixed bottom-0 left-0 w-full py-5 flex bg-white">
      <Button className="w-full">
        <img src="~/assets/images/icons/share.svg" alt="" />
      </Button>
      <Button className="w-full">
        <img src="~/assets/images/icons/layer.svg" alt="" />
      </Button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      steps: [
        {
          id: "1",
          name: "Termin",
        },
        {
          id: "2",
          name: "Zahlung",
        },
        {
          id: "3",
          name: "Zusammenfassung",
        },
      ],
      availables: [
        {
          time: "01:30",
          active: false,
          ampm: "PM",
        },
        {
          time: "02:15",
          active: true,
          ampm: "PM",
        },
        {
          time: "03:00",
          active: true,
          ampm: "PM",
        },
        {
          time: "03:30",
          active: true,
          ampm: "PM",
        },
        {
          time: "03:45",
          active: true,
          ampm: "PM",
        },
        {
          time: "04:00",
          active: false,
          ampm: "PM",
        },
        {
          time: "04:15",
          active: true,
          ampm: "PM",
        },
        {
          time: "04:30",
          active: true,
          ampm: "PM",
        },
        {
          time: "04:45",
          active: true,
          ampm: "PM",
        },
        {
          time: "05:00",
          active: false,
          ampm: "PM",
        },
        {
          time: "05:15",
          active: false,
          ampm: "PM",
        },
        {
          time: "05:30",
          active: false,
          ampm: "PM",
        },
      ],
    };
  },
};
</script>