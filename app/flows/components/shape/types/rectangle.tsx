import { type ShapeProps } from "./page";

export default function Rectangle({ width, height, ...svgAttributes }: ShapeProps) {
  return <rect x={0} y={0} width={width} height={height} {...svgAttributes} />;
}
