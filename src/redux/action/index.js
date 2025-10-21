// const MY_TOKEN = import.meta.env.VITE_MY_TOKEN;

// const URL = import.meta.env.URL;
export const TAKE_PROFILE = "TAKE_PROFILE";
export const TAKE_ALL_PROFILES = "TAKE_ALL_PROFILES";
// const URL = "https://striveschool-api.herokuapp.com/api/profile/me";

export const getMyProfile = (url) => {
  return async (dispatchEvent, getState) => {
    console.log(getState());
    try {
      let response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGY3Mzg1ZDljMDhiMTAwMTUzNTEzYmIiLCJpYXQiOjE3NjEwMzIyODUsImV4cCI6MTc2MjI0MTg4NX0.5hdu_F96Cs_rQ58tR2EG2O18DfDJl8UMu5YtoGdnWXg
`,
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
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGY3Mzg1ZDljMDhiMTAwMTUzNTEzYmIiLCJpYXQiOjE3NjEwMzIyODUsImV4cCI6MTc2MjI0MTg4NX0.5hdu_F96Cs_rQ58tR2EG2O18DfDJl8UMu5YtoGdnWXg
`,
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
