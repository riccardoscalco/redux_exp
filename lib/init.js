import d3 from "d3"

export function init() {
  const width = 100
  const height = 100
  const m = {
    top: 10,
    bottom: 10,
    right: 10,
    left: 10
  }
  const w = width - m.left - m.right
  const h = height - m.top - m.bottom

  d3.select("#viz")
    .append("svg")
      .attr({
        "viewBox": "0 0 " + width + " " + height,
        "preserveAspectRatio": "xMidYMin slice",
        "width": "100%"
      })
      .style({
        "padding-bottom": (100 * height / width) + "%",
        "height": "1px",
        "overflow": "visible"
      })
    .append("g")
      .attr("id", "vizg")
      .attr("transform", "translate(" + m.left + "," + m.top + ")")
}