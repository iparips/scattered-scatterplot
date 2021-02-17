const main = () => {
  const width = 800
  const height = 450
  const data = [1, 2, 3, 3, 4, 2, 34, 234, 23, 42, 3, 23, 4, 23, 4, 465, 67];
  const xScalingFn = d3.scaleLinear()
    .domain([0, d3.max(data)]) // min and max values in our dataset
    .range([0, width]) // scale domain from 0 to the width of our svg
  const yScalingFn = d3.scaleLinear()
    .domain([0, data.length])
    .range([0, height])

  const svg = d3.select("body").append("svg")
    .attr("id", "chart")
    .attr("width", width)
    .attr("height", height)

  svg.selectAll(".bar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", 0)
    .attr("y", (element, index) => yScalingFn(index))
    .attr("width", (element, index) => xScalingFn(element))
    .attr("height", yScalingFn(1) - 1)

}

main();
