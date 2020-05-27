// API call:
const url = "https://api.spacexdata.com/v2/launchpads";

    // d3 get the json file from the url. 'Then' means only execute the () after the json is sucessfully received:
d3.json(url).then(receivedData => console.log(receivedData));

    // get the full name of the first item in the json array:
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

    // try importing local json:
    // IMPORTANT!!! In order to run json, we need to run a local server. 
        // (The reason is html by default, for security reason, does not allow sources not coming from another reliable http(s).
        // So we need python to create a virtual local http server for our current folder, so the json file is considered coming from an http web, and bypass the security).
    // Open Anaconda Python terminal (cannot run this on VS Code), cd to the correct folder, then run python -m http.server
d3.json("samples.json").then(function(data){
    console.log(data);
});

    // get metadata of the first person:
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});