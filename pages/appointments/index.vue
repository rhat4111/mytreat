<template>
  <div class="mb-20">
    <div class="flex flex-col items-center py-3 sticky top-0">
      <img src="~/assets/images/logo.png" class="mb-2" />
      <span class="text-2xl font-bold text-[#19110B]">Meine Termine</span>
    </div>
    <div class="px-5">
      <div class="mb-5">
        <Tab :options="tabs" />
      </div>
      <div>
        <div v-for="(event, index) in events" :key="index" class="mb-5">
          <AppointmentCard
            :id="event.id"
            :date="event.date"
            :name="event.name"
            :salon="event.salon"
          />
        </div>
      </div>
    </div>
    <Footer active="appointments" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { id: "pending", name: "Anstehend" },
        { id: "completed", name: "Beendet" },
      ],
      events: [
        {
          id: 1,
          date: "20 Jan | 11:15 Uhr",
          name: "Lomi Lomi Massage",
          salon: "Kosmetik Salon Angermeier | Fürth",
        },
        {
          id: 2,
          date: "20 Jan | 17:30 Uhr",
          name: "Haarentfernung",
          salon: "1001 Frisöre | Nürnberg",
        },
        {
          id: 3,
          date: "11 Sep | 13:45 Uhr",
          name: "Haarverlängerung (60cm)",
          salon: "Haarstube | Erlangen",
        },
      ],
    };
  },
};
</script>