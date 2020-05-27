function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names; //the 'names' key in the json is actually an ID
      sampleNames.forEach((sample) => {
        // For each sample name (ID), d3 selector will append a new option, with a display text as sample (ID), a its value property also as ID.
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
})};

// first run the init() right after loading the page:
init();

function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
  };

function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      // get the metadata key value only
      var metadata = data.metadata;
      // filter to get the object containing the ID needed only:
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      // Since it returns an array of 1 item, we need to retrieve index 0 to get the final object:
      var result = resultArray[0];      

      // select tag id=sample-metadata
      var PANEL = d3.select("#sample-metadata");  
      // clear the Panel first, before inserting any new result:
      PANEL.html("");
      // Append an h6 heading tag into the PANEL tag, and insert the demographic:
      Object.entries(result).forEach( ([key, pair]) => {
        PANEL.append("h6").text(`${key.toUpperCase()}: ${pair}`)    
    });
      console.log(textResult)
    });
  }