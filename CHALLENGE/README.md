# CHALLENGE:

The page shows all metadata, bar chart, bubble chart, and gauge chart, live updating as end-user selects the ID number. The page will load default on ID 940.

The only one assumption in the page is that the samples data have been already sorted, in descending order, in the samples.json data source. Therefore, the bar chart is showing the top 10  bacterial species from that sample list. If the datasource had not been sorted in that order yet, the bar chart might have shown incorrect data.