import axios from "./axios";

export async function getExerciseTemplates() {
  try {
    const { data } = await axios.get("/exercise/template/list");
    return data;
  } catch (error) {
    if (error.response) {
      throw new Error("Unable to find data: " + error.response.data.message);
    } else {
      console.error(error);
    }
  }
}

export async function createExerciseTemplate(body) {
  try {
    await axios.post("/exercise/create-template", body);
    console.log("success");
  } catch (error) {
    if (error.response) {
      throw new Error(
        "Unable to create exercise template: " + error.response.data.message
      );
    } else {
      console.error(error);
    }
  }
}

export async function getWorkoutTemplates() {
  try {
    const { data } = await axios.get("/workout/template/list");
    return data;
  } catch (error) {
    if (error.response) {
      throw new Error("Unable to find data: " + error.response.data.message);
    } else {
      console.error(error);
    }
  }
}

export async function getWorkoutList() {
  try {
    const { data } = await axios.get("/workout/list");
    return data;
  } catch (error) {
    if (error.response) {
      throw new Error("Unable to find data: " + error.response.data.message);
    } else {
      console.error(error);
    }
  }
}

export async function createWorkoutTemplate(body) {
  try {
    await axios.post("/workout/create-template", body);
    console.log("success");
  } catch (error) {
    if (error.response) {
      throw new Error(
        "Unable to create workout template: " + error.response.data.message
      );
    } else {
      console.error(error);
    }
  }
}
