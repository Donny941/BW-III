const MY_TOKEN = import.meta.env.VITE_MY_TOKEN;
const MY_TOKEN_COMMENTS = import.meta.env.VITE_MY_TOKEN_COMMENTS;

// const URL = import.meta.env.URL;
export const TAKE_PROFILE = "TAKE_PROFILE";
export const TAKE_MY_PROFILE = "TAKE_MY_PROFILE";
export const TAKE_ALL_PROFILES = "TAKE_ALL_PROFILES";
export const TAKE_EXPERIENCES = "TAKE_EXPERIENCES";
export const POST_EXPERIENCES = "POST_EXPERIENCES";
export const NEW_EXPERIENCES = "POST_EXPERIENCES";
export const TAKE_POST = "TAKE_POST";
export const TAKE_MY_POST = "TAKE_MY_POST";
export const TAKE_COMMENTS = "TAKE_COMMENTS";

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
        console.log("myProfile", profiledata);
        dispatchEvent({ type: TAKE_MY_PROFILE, payload: profiledata });
      } else {
        throw new Error("Fetch non riuscita");
      }
    } catch (err) {
      console.log(err);
    }
  };
};
export const getProfile = (url) => {
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

// --------------------------------------------------------------------------------------------

// get posts

export const getPosts = (url, n1, n2) => {
  return async (dispatch, getState) => {
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
        let postData = await response.json();
        const slicedPosts = postData.slice(n1, n2);
        console.log("post", slicedPosts);
        dispatch({ type: TAKE_POST, payload: slicedPosts });
      } else {
        throw new Error("Fetch non riuscita");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const handlePost = (url, post, type) => {
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
        console.log("risposta ok", response);
        const URL_POSTS = "https://striveschool-api.herokuapp.com/api/posts/";
        dispatch(getMyPost(URL_POSTS));
      } else {
        throw new Error("Fetch non riuscita");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const getMyPost = (url) => {
  return async (dispatch, getState) => {
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
        let postData = await response.json();

        dispatch({ type: TAKE_MY_POST, payload: postData });
      } else {
        throw new Error("Fetch non riuscita");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const createPostWithImage = (url, postText, imageFile) => {
  return async (dispatch) => {
    try {
      let response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(postText),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${MY_TOKEN}`,
        },
      });

      if (!response.ok) {
        throw new Error("Errore nella creazione del post");
      }

      let newPost = await response.json();
      let postId = newPost._id;

      if (imageFile) {
        const formData = new FormData();
        formData.append("post", imageFile);

        let imgResponse = await fetch(`${url}${postId}`, {
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Bearer ${MY_TOKEN}`,
          },
        });

        if (!imgResponse.ok) {
          throw new Error("Errore caricamentodell'immagine ");
        }
      }

      dispatch(getMyPost(url));
      dispatch(getPosts(url, 0, 10));
    } catch (err) {
      console.log(err);
    }
  };
};

export const deletePost = (url) => {
  return async (dispatch) => {
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
        const URL_POSTS = "https://striveschool-api.herokuapp.com/api/posts/";
        dispatch(getMyPost(URL_POSTS));
      } else {
        throw new Error("Fetch non riuscita");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

// comment action
export const getComments = (url) => {
  return async (dispatch, getState) => {
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
        let commentsData = await response.json();
        console.log("commenti forse", commentsData);

        dispatch({ type: TAKE_COMMENTS, payload: commentsData });
      } else {
        throw new Error("Fetch non riuscita");
      }
    } catch (err) {
      console.log(err);
    }
  };
};
