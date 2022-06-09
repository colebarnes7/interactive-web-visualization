// URL containing data
const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json';

// Grabs data from URL, everything will be inside this function
d3.json(url).then(function(data){
  console.log(data);
  let samples = data.samples;
  
  let sample_values = [];
  let otu_ids = [];
  let otu_labels = [];
  for (let i = 0; i < samples.length; i++) {
    sample_values.push(samples[i].sample_values);
    otu_ids.push(samples[i].otu_ids);
    otu_labels.push(samples[i].otu_labels);
  }
});
