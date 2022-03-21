<template>
  <div class="container">
    <div class="calendar">
      <calendar
        class="custom-calendar max-w-full"
        :attributes="attributes"
        is-expanded
        :first-day-of-week="2"
        color="blue"
        @dayclick="selectDate"
      />
    </div>

    <div class="info">
      <div class="date">17/03/2022</div>
      <div class="controls">
        <CustomButton height="50px">Add Workout</CustomButton>
      </div>
    </div>
  </div>
</template>

<script setup>
//Calendar Widget
import { ref } from "vue";
import { Calendar } from "v-calendar";
import CustomButton from "@/components/CustomButton.vue";
const data = [
  {
    dates: new Date("2022-03-07"),
    description: "Monday  morning workout",
    isComplete: true,
  },
  {
    dates: new Date("2022-03-07"),
    description: "Monday evening run",
    isComplete: true,
    color: "#ad0068",
  },
  {
    dates: new Date("2022-03-14"),
    description: "Monday  morning workout",
    isComplete: false,
  },
  {
    dates: new Date("2022-03-21"),
    description: "Monday  morning workout",
    isComplete: false,
  },
  {
    dates: new Date("2022-03-28"),
    description: "Monday  morning workout",
    isComplete: false,
  },
];
const attributes = ref([
  {
    highlight: {
      fillMode: "outline",
    },
    dates: new Date(),
  },
  { highlight: true, dates: new Date() },
  ...data.map((item) => ({
    dates: item.dates,
    dot: {
      style: {
        backgroundColor: item.color || "yellow",
      },
    },
    bar: item.isComplete
      ? undefined
      : {
          color: "red",
        },
    popover: {
      label: item.description,
    },
  })),
]);

function selectDate(data) {
  attributes.value[0] = {
    highlight: {
      fillMode: "outline",
      style: {
        backgroundColor: "hsl(0, 0%, 30%) !important",
      },
    },
    dates: new Date(data.id),
  };
}
</script>

<style scoped lang="scss">
.container {
  background-image: linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)),
    url("~@/assets/forest.jpg");
  background-size: cover;
  display: grid;
  grid-template-areas:
    "A calendar B"
    "info info info";
  grid-template-columns: 35% 1fr 35%;
  grid-template-rows: 500px 1fr;
  gap: 5px;
}
// .calendar {
//   max-width: 90vw;
//   width: 400px;
// }
.info {
  background-color: $bg-content;
  border: 5px solid $border;
  color: white;
  border-radius: 12px;
  grid-area: info;
  margin: 0px 20px 20px 20px;
  display: grid;
  grid-template-areas:
    "Date"
    "einfo"
    "controls";
}

.date {
  grid-area: Date;
  font-size: 1.5rem;
  margin-top: 5px;
}

.controls {
  grid-area: controls;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 20px;
}

.calendar {
  grid-area: calendar;
}

/deep/ .custom-calendar.vc-container {
  --day-border: 1px solid #222222;
  --day-border-highlight: 1px solid #222222;
  --day-width: 70px;
  --day-height: 70px;
  --weekday-bg: hsl(0, 0%, 15%);
  --weekday-border: 1px solid hsl(0, 0%, 15%);
  border-radius: 0;
  border: 2px solid hsl(0, 0%, 15%);
  width: 100%;
  background: transparent;
  & .vc-title {
    color: whitesmoke;
  }

  & .vc-header {
    background-color: rgba(39, 39, 39, 0.9);
    padding: 10px 0;
    width: 100%;
  }
  & .vc-weeks {
    padding: 0;
  }
  & .vc-weekday {
    background-color: var(--weekday-bg);
    border-bottom: var(--weekday-border);
    border-top: var(--weekday-border);
    padding: 5px 0;
    color: whitesmoke;
  }
  & .vc-day {
    // padding: 0 5px 3px 5px;
    text-align: left;
    height: var(--day-height);
    min-width: var(--day-width);
    background-color: hsla(0, 0%, 30%, 0.9);
    color: whitesmoke;
    font-size: 2rem;
    &:not(.on-bottom) {
      border-bottom: var(--day-border);
    }
    &:not(.on-right) {
      border-right: var(--day-border);
    }
  }
  & .vc-dots {
    margin-bottom: 15px;
  }
  & .vc-bars {
    margin-bottom: 5px;
    width: 50%;
  }

  & .vc-day-content {
    color: whitesmoke !important;
  }

  & .vc-highlight {
    background-color: #ad0068 !important;
    border-color: #ad0068 !important;
  }
}

@media only screen and (min-width: 3000px) {
  .container {
    grid-template-columns: 42% 1fr 42%;
    grid-template-rows: 550px 1fr;
  }
}
</style>
