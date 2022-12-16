function getUrl() {
  if (window.location.hostname === "localhost") {
    return "http://localhost:3001";
  }
    return "";
}

function normliseCarName(name) {
  if (name == 1){
    return "ASCAR Evolution"
  }
  if (name == 2){
    return "Random Car 1"
  }
  if (name == 3){
    return "Random Car 2"
  }
}

module.exports = {getUrl, normliseCarName};