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
      
      // build default metadata and charts:
      let _defaultID = data.metadata[0].id;
      optionChanged(_defaultID);
    }
)};

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
      
      // build metadata PANEL:
        // select tag id=sample-metadata
        var PANEL = d3.select("#sample-metadata");  
        // clear the Panel first, before inserting any new result:
        PANEL.html("");
        // Append an h6 heading tag into the PANEL tag, and insert the demographic:
        Object.entries(result).forEach( ([key, pair]) => {
          PANEL.append("h6").text(`${key}: ${pair}`)    
        });

      // build Washing frequency GAUGE:
        var washFreq = parseInt(result.wfreq);
        var gaugeTrace ={
            value: washFreq,
            title: { text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week" },
            type: "indicator",
            mode: "gauge+number+marker",            
            gauge: {
              axis: { range: [null, 9], tickmode: "linear", ticks: "" },
              bar: { color: "#0489B1" },
              text: [
                "0-1",
                "1-2",
                "2-3",
                "3-4",
                "4-5",
                "5-6",
                "6-7",
                "7-8",
                "8-9"
              ],
              steps: [
                { range: [0, 1], name: '0-1', color: "rgba(100,149,237,.1)" },
                { range: [1, 2], color: "rgba(100,149,237,.2)" },
                { range: [2, 3], color: "rgba(100,149,237,.3)" },
                { range: [3, 4], color: "rgba(100,149,237,.4)" },
                { range: [4, 5], color: "rgba(100,149,237,.5)" },
                { range: [5, 6], color: "rgba(100,149,237,.6)" },
                { range: [6, 7], color: "rgba(100,149,237,.7)" },
                { range: [7, 8], color: "rgba(100,149,237,.8)" },
                { range: [8, 9], color: "rgba(100,149,237,.9)" }
              ]
              
            }
        };
        Plotly.react("gauge", [gaugeTrace]);
      
    });
  };

function buildCharts(sample) {
  d3.json("samples.json").then((data) => {
      //test:
      //let sample = '940';
      
      // get the metadata key value only
      var dataSamples = data.samples;
      // filter to get the object containing the ID needed only:
      var resultArray = dataSamples.filter(sampleObj => sampleObj.id == sample);
      // Since it returns an array of 1 item, we need to retrieve index 0 to get the final object:
      var result = resultArray[0];
      // NOTE: ASSUMING  the samples data has already been sorted!
      
      // BAR CHART:
        // otu_ids array as labels:
        var resultLabels = []
        result.otu_ids.slice(0,10).forEach( i => resultLabels.push(`OTU ${i}`));
        // sample_values array as values:
        var resultValues = result.sample_values.slice(0,10);
        // otu_labels as text hover:
        var resultText = result.otu_labels.slice(0,10);
        
        // build bar chart:
        var trace = {
          y: resultLabels,
          x: resultValues,
          text: resultText,
          type: 'bar',
          orientation: 'h'
        };            
        Plotly.react("bar", [trace], barLayout);

      // BUBBLE CHART:
        // Use otu_ids for the x-axis values.
        var x_axis = result.otu_ids;
        // Use sample_values for the y-axis values.
        var y_axis = result.sample_values;
        // Use sample_values for the marker size.
        var marker_size = result.sample_values;
        // Use otu_ids for the marker colors.
        var marker_colors = result.otu_ids;
        // Use otu_labels for the text values.
        var text_values = result.otu_labels
        
        // build bubble chart:
        var bubbleTrace = {
          x: x_axis,
          y: y_axis,
          text: text_values,
          mode: 'markers',
          marker: {
            color: marker_colors,
            colorscale: 'Earth',
            size: marker_size
          }
        };
        Plotly.react("bubble", [bubbleTrace], bubbleLayout);
  }); 
};


  // first run the init() right after loading the page:
  // horizontla bar chart:
  var barLayout = {
    title: "Top 10 OTUs",
    yaxis: { autorange:'reversed' }
  };
  var bubbleLayout = {
    title: 'OTUs bubble chart',
    xaxis: { title: 'OTU IDs' }
  };
  init()

  