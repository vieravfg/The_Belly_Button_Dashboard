//function to build gauge chart
function buildgauge(wfreq) {
    var data = [
        {
          domain: { x: [0, 1], y: [0, 1] },
          type: "indicator",
          mode: "gauge+number",
          value: wfreq,
          title: { text: "Scrubs per Week", font: { size: 34 } },
          gauge: {
            axis: { range: [null, 9], tickwidth: 1, tickcolor: "darkblue", nticks:10 },
            bar: { color: "darkblue" },
            bgcolor: "white",
            borderwidth: 2,
            bordercolor: "yellow",
            steps: [
              { range: [0, 4.5], color: "cyan" },
              { range: [4.5, 9], color: "orange" }
            ],
            threshold: {
              line: { color: "yellow", width: 4 },
              thickness: 0.75,
              value: 490
            }
          }
        }
    ];
      
var layout = {
        width: 500,
        height: 400,
        margin: { t: 25, r: 25, l: 25, b: 25 },
        font: { color: "darkblue", family: "Arial" }
    };
      

    //plot
    Plotly.newPlot("gauge", data, layout);
}