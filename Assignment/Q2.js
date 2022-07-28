function getUrlParameterValue(url, parameter) {
    const urlParams = new URLSearchParams(url);
    const page_type = urlParams.get(parameter)
    console.log(page_type);
}

const url_string="https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby";

const queryString = url_string;
getUrlParameterValue(url_string,"utm_medium");
