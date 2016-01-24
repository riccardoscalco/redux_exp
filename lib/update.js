import d3 from "d3"
import { store } from 'lib/store'

import '../css/circles.css!'

export function update() {
  const state = store.getState()
  const viz = d3.select("#vizg")
  let circle = viz.selectAll(".circle")
      .data([state.x.present])
  circle
      .attr("transform", (d, i) => 'translate(' + (d * 3) + ',0)')
  circle.enter()
    .append("circle")
      .attr("class", "circle")
      .attr("r", 2)
      .attr("transform", (d, i) => 'translate(' + (d * 3) + ',0)')
  circle.exit().remove()
}