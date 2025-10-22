const MY_TOKEN = import.meta.env.VITE_MY_TOKEN;

// const URL = import.meta.env.URL;
export const TAKE_PROFILE = "TAKE_PROFILE";
export const TAKE_ALL_PROFILES = "TAKE_ALL_PROFILES";
export const TAKE_EXPERIENCES = "TAKE_EXPERIENCES";
export const POST_EXPERIENCES = "POST_EXPERIENCES";
export const NEW_EXPERIENCES = "POST_EXPERIENCES";

// const URL = "https://striveschool-api.herokuapp.com/api/profile/me";

export const getMyProfile = (url) => {
  return async (dispatchEvent, getState) => {
    console.log(getState());
    try {
      let response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${MY_TOKEN}`,
        },
      });
      if (response.ok) {
        // console.log(response);
        let profiledata = await response.json();
        console.log(profiledata);
        dispatchEvent({ type: TAKE_PROFILE, payload: profiledata });
      } else {
        throw new Error("Fetch non riuscita");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

// ----------------------------------------get  allprofile
export const getAllProfiles = (url, n1, n2) => {
  return async (dispatchEvent, getState) => {
    console.log(getState());
    try {
      let response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer  ${MY_TOKEN}`,
        },
      });
      if (response.ok) {
        // console.log(response);
        let allProfilesdata = await response.json();
        const slicedProfiles = allProfilesdata.slice(n1, n2);
        console.log("ädsadas", slicedProfiles);
        dispatchEvent({ type: TAKE_ALL_PROFILES, payload: slicedProfiles });
      } else {
        throw new Error("Fetch non riuscita");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

// get experiences

export const getExperiences = () => {
  return async (dispatchEvent, getState) => {
    console.log(getState());
    const state = getState();
    const URL_GET = `https://striveschool-api.herokuapp.com/api/profile/${state.profile.currentprofile._id}/experiences`;
    try {
      let response = await fetch(URL_GET, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${MY_TOKEN}`,
        },
      });
      if (response.ok) {
        // console.log(response);
        let experiences = await response.json();
        console.log("GET!!!!!", experiences);
        dispatchEvent({ type: TAKE_EXPERIENCES, payload: experiences });
      } else {
        throw new Error("Fetch non riuscita");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const handleExperiences = (url, post, type) => {
  return async (dispatch) => {
    try {
      let response = await fetch(url, {
        method: type,
        body: JSON.stringify(post),

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer  ${MY_TOKEN}`,
        },
      });
      if (response.ok) {
        console.log("risposta", response);

        dispatch(getExperiences());
      } else {
        throw new Error("Fetch non riuscita");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteExperiences = (url) => {
  return async () => {
    try {
      let response = await fetch(url, {
        method: "DELETE",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer  ${MY_TOKEN}`,
        },
      });
      if (response.ok) {
        console.log("risposta", response);
      } else {
        throw new Error("Fetch non riuscita");
      }
    } catch (err) {
      console.log(err);
    }
  };
};
