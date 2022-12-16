function getUrl() {
  if (window.location.hostname === "localhost") {
    return "http://localhost:3001";
  }
    return "";
}

module.exports = getUrl;