const plot = ({canvas, data, width, height}) => {
  const xScalingFn = d3.scaleLinear()
    .domain([0, d3.max(data)]) // min and max values in our dataset
    .range([0, width]) // scale domain from 0 to the width of our svg

  const yScalingFn = d3.scaleLinear()
    .domain([0, data.length])
    .range([0, height])

  canvas.selectAll(".bar")
    .data(data)
    .enter()
    .append("rect")
    .classed("bar", true)
    .attr("x", 0)
    .attr("y", (element, index) => yScalingFn(index))
    .attr("width", (element, index) => xScalingFn(element))
    .attr("height", yScalingFn(1) - 1)

  canvas.selectAll('.bar-label')
    .data(data)
    .enter()
    .append("text")
    .classed('.bar-label', true)
    .attr("x", 0)
    .attr("y", (e, i) => yScalingFn(i))
    .attr("dy", (d, i) => yScalingFn(1) / 1.5 + 2)
    .text((item, _) => item)
}

const main = () => {
  const width = 800
  const height = 450
  const data = [1, 2, 3, 3, 4, 2, 34, 234, 23, 42, 3, 23, 4, 23, 4, 465, 67];

  const svg = d3.select("body").append("svg")
    .attr("id", "chart")
    .attr("width", width)
    .attr("height", height)

  plot({
    canvas: svg,
    data,
    width,
    height
  })

}

main();
