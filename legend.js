function legend(){
    // add a legend
    var w = 140, h = 300;
    var lowColor = '#ffffd4';
    var highColor = '#8c2d04';

    var key = d3.select("body")
        .append("svg")
        .attr("width", w)
        .attr("height", h)
        .attr("class", "legend");

    var legend = key.append("defs")
    .append("svg:linearGradient")
    .attr("id", "gradient")
    .attr("x1", "100%")
    .attr("y1", "0%")
    .attr("x2", "100%")
    .attr("y2", "100%")
    .attr("spreadMethod", "pad");

    legend.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", highColor)
    .attr("stop-opacity", 1);

    legend.append("stop")
        .attr("offset", "100%")
        .attr("stop-color", lowColor)
        .attr("stop-opacity", 1);

    key.append("rect")
        .attr("width", w - 100)
        .attr("height", h)
        .style("fill", "url(#gradient)")
        .attr("transform", "translate(0,10)");

    var y = d3.scaleLinear()
        .range([h, 0])
        .domain([21, 36]);

    var yAxis = d3.axisRight(y);

    key.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(41,10)")
        .call(yAxis);

    key.append("text")
        .attr("class", "obesityLabel")
        .attr("transform", "translate(75,110) rotate(90)")
        .style("font-family", "sans-serif")
        .style("font-size", 14)
        .text("Obesity Rate");
}