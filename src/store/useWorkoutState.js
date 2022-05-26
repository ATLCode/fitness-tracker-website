import { reactive } from "vue";
import { getWorkoutTemplates, createWorkoutTemplate } from "../lib/api";

const state = reactive({
  templates: null,
  selected: null,
});

function useWorkoutState() {
  const getTemplates = async () => {
    try {
      state.templates = await getWorkoutTemplates();
    } catch (error) {
      state.templates = null;
    }
  };

  const createTemplate = async (body) => {
    await createWorkoutTemplate(body);
  };

  const selectWorkout = (workout) => {
    state.selected = workout;
  };

  return { state, getTemplates, createTemplate, selectWorkout };
}

export default useWorkoutState;
