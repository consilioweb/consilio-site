export default function({ $axios, redirect }) {
  $axios.defaults.baseURL = process.env.API_URL;

  $axios.onRequest(config => {
    if (config.method === "get") {
      config.data && (config.progress = config.data.progress);
      config.data = null;
    } else {
      let contentType = config.headers["Content-Type"];
      if (contentType && contentType.indexOf("multipart/form-data") === -1) {
        let data = {};
        for (let [key, value] of Object.entries(config.data)) {
          key !== "progress" && (data[key] = value);
        }
        config.data = data;
      }
      config.progress = config.headers.progress;
      delete config.headers.progress;
    }
    return console.log("[axios] onRequest: " + response) && config;
  });

  $axios.onResponse(response => {
    response.data = {
      data: response.data,
      status: response.status,
      headers: response.headers,
      statusText: response.statusText
    };
    return console.log("[axios] onResponse: " + response) && response;
  });

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);
    code >= 400 && redirect(`/${code}`);
    return console.log("[axios] onError: " + response) && Promise.reject(error);
  });
}
