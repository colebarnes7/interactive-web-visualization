// URL containing data
const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json';

// Grabs data from URL, everything will be inside this function
d3.json(url).then(function(data){
  //Print data to console and then pull each array into its own variable
  console.log(data);
  let metadata = data.metadata;
  let names = data.names;
  let samples = data.samples;
  
  // function that contains instructions at page load/refresh
  // function does not run until called
  function init(){
    // code that runs once (only on page load or refresh)
    
    // this checks that our initial function runs.
    console.log("The Init() function ran");
    
    // create dropdown/select
    
    // run functions to generate plots
    createScatter('940');
    createBar('940');
    createSummary('940');
  };

  // function that runs whenever the dropdown is changed
  // this function is in the HTML and is called with an input called 'this.value'
  // that comes from the select element (dropdown)
  function optionChanged(newID){
    // code that updates graphics
    // one way is to recall each function
    createScatter(newID);
    createBar(newID);
    createSummary(newID);
  };
  
  function createScatter(id){
    // code that makes scatter plot at id='bubble'
  
    // checking to see if function is running
    console.log(`This function generates scatter plot of ${id} `);
  };
  
  // Function to create a horizontal bar chart at a specific id
  function createBar(id){
    for (let i = 0; i < names.length; i++){
      // finds the index where the current id is
      if (id == names[i]){
        // Stores top 10 OTUs at current id
        let sample_values = samples[i].sample_values.slice(0, 10);
        let temp = samples[i].otu_ids.slice(0, 10);
        let otu_ids = temp.map(function (x) {
          return "OTU " + x;
        })
        let otu_labels = samples[i].otu_labels.slice(0, 10);
        // Sets up the data for horizontal bar chart at current id
        let data = [{
        type: 'bar',
        x: sample_values,
        y: otu_ids,
        text: otu_labels,
        transforms: [{
          type: 'sort',
          target: 'x',
          order: 'ascending'
        }],
        orientation: 'h'
        }]
        //Creates the bar chart with plotly at id='bar'
        Plotly.newPlot("bar", data);
        //Exits the loop
        break;
      };
    };
    // checking to see if function is running
    console.log(`This function generates bar chart of ${id} `);
  };
  
  function createSummary(id){
    // code that makes list, paragraph, text/linebreaks at id='sample-meta'
    
    // checking to see if function is running
    console.log(`This function generates summary info of ${id} `);
  };
  
  // function called, runs init instructions
  // runs only on load and refresh of browser page
  init();
});
