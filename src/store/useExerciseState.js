import { reactive } from "vue";
import { getExerciseTemplates, createExerciseTemplate } from "../lib/api";

const state = reactive({
  templates: null,
});

function useExerciseState() {
  const getTemplates = async () => {
    try {
      state.templates = await getExerciseTemplates();
    } catch (error) {
      state.templates = null;
    }
  };

  const createTemplate = async (body) => {
    await createExerciseTemplate(body);
    getTemplates();
  };

  return { state, getTemplates, createTemplate };
}

export default useExerciseState;
