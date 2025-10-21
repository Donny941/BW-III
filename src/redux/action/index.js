// const MY_TOKEN = import.meta.env.VITE_MY_TOKEN;
// const URL = import.meta.env.URL;
export const TAKE_PROFILE = "TAKE_PROFILE";
// const URL = "https://striveschool-api.herokuapp.com/api/profile/me";

export const getMyProfile = (url) => {
  return async (dispatchEvent, getState) => {
    console.log(getState());
    try {
      let response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGY3MjA2YjljMDhiMTAwMTUzNTEzYjciLCJpYXQiOjE3NjEwMjYyMjcsImV4cCI6MTc2MjIzNTgyN30.3RmMOHGpeVrzLmY3Uzfb_myoJw6IB2vANNQZn_EPGWc
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
