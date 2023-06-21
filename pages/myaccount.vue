<template>
  <div>
    <Header :backControl="true">
      <span class="text-base font-bold text-[#19110B]">Mein Account</span>
    </Header>
    <div class="px-5 py-8">
      <div class="flex flex-col items-center mb-1">
        <img
          src="~/assets/images/profile.png"
          class="w-18 h-18 rounded-full mb-4"
          alt=""
        />
        <div class="relative flex items-center">
          <span class="text-xl font-bold text-[#19110B]">Jasmin Hering</span>
          <Button
            class="
              absolute
              -right-14
              w-9
              h-9
              rounded-[9px]
              bg-whie
              flex
              justify-center
              items-center
            "
          >
            <img src="~/assets/images/icons/pencil.svg" />
          </Button>
        </div>
      </div>
      <div class="px-4 py-10">
        <ul class="flex justify-between">
          <li class="flex flex-col items-center">
            <img
              class="mb-2.5"
              src="~/assets/images/icons/clipboard.svg"
              alt=""
            />
            <span class="text-lg font-bold text-[#19110B]">7</span>
            <span class="text-sm font-semibold text-[#B6C5D1]">Termine</span>
          </li>
          <li class="flex flex-col items-center">
            <img class="mb-2.5" src="~/assets/images/icons/time.svg" alt="" />
            <span class="text-lg font-bold text-[#19110B]">10,5</span>
            <span class="text-sm font-semibold text-[#B6C5D1]">Stunden</span>
          </li>
          <li class="flex flex-col items-center">
            <img
              class="mb-2.5"
              src="~/assets/images/icons/credit_card.svg"
              alt=""
            />
            <span class="text-lg font-bold text-[#19110B]">917€</span>
            <span class="text-sm font-semibold text-[#B6C5D1]">investiert</span>
          </li>
        </ul>
      </div>
      <div class="rounded-t-[18px] bg-white p-5 shadow-theme">
        <div class="flex justify-between items-center mb-2.5">
          <span class="text-lg font-bold text-[#19110B]">
            Persönliche Daten
          </span>
          <Button
            className="h-8 px-4 rounded-full border border-[#19110B]"
            @click="handleEdit(true)"
          >
            <span class="text-sm font-bold text-[#19110B]">ändern</span>
          </Button>
        </div>
        <div class="mb-2.5 text-[#19110B]">
          <p class="text-sm mb-0.5">Telefon (Handy)</p>
          <p class="text-base font-semibold">0171 74 75 674</p>
        </div>
        <div class="mb-2.5 text-[#19110B]">
          <p class="text-sm mb-0.5">Email</p>
          <p class="text-base font-semibold">jh@gmx.de</p>
        </div>
        <div class="mb-2.5 text-[#19110B]">
          <p class="text-sm mb-0.5">Geschlecht</p>
          <p class="text-base font-semibold">Geschlecht</p>
        </div>
        <div class="mb-2.5 text-[#19110B]">
          <p class="text-sm mb-0.5">Geburtstag</p>
          <p class="text-base font-semibold">23 August 1992</p>
        </div>
      </div>
    </div>
    <div v-if="isEdit" class="absolute top-0 left-0 z-50 w-screen">
      <img
        class="absolute top-0 left-0"
        src="~/assets/images/blur_overlay.png"
      />
      <div class="w-full pt-9 relative z-10">
        <div class="px-5 flex items-center mb-16">
          <Button
            className="w-12 h-12 rounded-[18px] bg-white flex justify-center items-center mr-5 shadow-theme"
            @click="handleEdit(false)"
          >
            <img src="~/assets/images/icons/arrow_left.svg" alt="" />
          </Button>
          <span class="text-2xl font-bold text-[#19110B]">
            Persönliche Daten
          </span>
        </div>
        <div class="rounded-t-[36px] bg-white px-5 py-8 mt-1">
          <p class="text-lg font-bold text-[#19110B] mb-5">Meine Daten</p>
          <div class="rounded-[18px] bg-[#F6F5F3] mb-5 px-5 py-2 flex flex-col">
            <span class="text-xs text-[#19110B] font-semibold">Vorname</span>
            <input
              type="text"
              class="
                text-base text-[#767676]
                bg-transparent
                w-full
                outline-none
              "
              v-model="profile.firstname"
            />
          </div>
          <div class="rounded-[18px] bg-[#F6F5F3] mb-5 px-5 py-2 flex flex-col">
            <span class="text-xs text-[#19110B] font-semibold">Nachname</span>
            <input
              type="text"
              class="
                text-base text-[#767676]
                bg-transparent
                w-full
                outline-none
              "
              v-model="profile.lastname"
            />
          </div>
          <div class="mb-5 px-5 py-2 pb-0 flex flex-col">
            <span class="text-xs text-[#19110B] font-semibold mb-2.5">
              Geschlecht
            </span>
            <div class="flex items-center">
              <div class="w-full">
                <Radio
                  label="Male"
                  value="male"
                  :isChecked="profile.gender === 'male'"
                  @handleChange="handleChangeGender"
                />
              </div>
              <div class="w-full">
                <Radio
                  label="Female"
                  value="female"
                  :isChecked="profile.gender === 'female'"
                  @handleChange="handleChangeGender"
                />
              </div>
            </div>
          </div>
          <div
            class="
              rounded-[18px]
              bg-[#F6F5F3]
              mb-5
              px-5
              py-2
              flex flex-col
              relative
            "
          >
            <span class="text-xs text-[#19110B] font-semibold">Geburtstag</span>
            <Datepicker
              inputClass="text-base text-[#767676]
                bg-transparent
                w-full
                outline-none"
              calendar-button-icon="fa fa-calendar"
            />
            <img
              src="~/assets/images/navs/calendar.svg"
              class="absolute right-5 bottom-3"
            />
          </div>
          <div class="rounded-[18px] bg-[#F6F5F3] mb-5 px-5 py-2 flex flex-col">
            <span class="text-xs text-[#19110B] font-semibold">E-Mail</span>
            <input
              type="text"
              class="
                text-base text-[#767676]
                bg-transparent
                w-full
                outline-none
              "
              placeholder="Pdf or Doc files allowed"
              v-model="profile.email"
            />
          </div>
          <div class="rounded-[18px] bg-[#F6F5F3] mb-5 px-5 py-2 flex flex-col">
            <span class="text-xs text-[#19110B] font-semibold">Telefon</span>
            <input
              type="text"
              class="
                text-base text-[#767676]
                bg-transparent
                w-full
                outline-none
              "
              v-model="profile.phone"
            />
          </div>
          <Button class="w-full h-10 rounded-full bg-[#19110B] mt-40">
            <span class="text-base font-bold text-white">SPEICHERN</span>
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker/dist/vuejs-datepicker.esm.js";
export default {
  components: { Datepicker },
  data() {
    return {
      isEdit: false,
      profile: {
        firstname: "Jasmin",
        lastname: "Hering",
        gender: "female",
        birthday: "",
        email: "",
        phone: "0171 74 75 674",
      },
    };
  },
  methods: {
    handleChangeGender(value) {
      this.profile.gender = value;
    },
    handleEdit(value) {
      this.isEdit = value;
    },
  },
};
</script>