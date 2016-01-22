import d3 from "d3"

export function update(store) {
  const state = store.getState()
  const viz = d3.select("#vizg")
  let circle = viz.selectAll(".circle")
      .data([state.x])
  circle
      .attr("transform", (d, i) => 'translate(' + (d * 3) + ',0)')
  circle.enter()
    .append("circle")
      .attr("class", "circle")
      .attr("r", 2)
      .attr("transform", (d, i) => 'translate(' + (d * 3) + ',0)')
  circle.exit().remove()
}