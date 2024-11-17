import { ShapeComponents, type ShapeComponentProps } from "./types/page";

export default function Shape({ type, width, height, ...svgAttributes }: ShapeComponentProps) {
  const ShapeComponent = ShapeComponents[type];

  if (!ShapeComponent || !width || !height) {
    return null;
  }

  const strokeWidth = svgAttributes.strokeWidth
    ? +svgAttributes.strokeWidth
    : 0;

  // Subtracting the strokeWidth to make sure the shape is not cut off
  const innerWidth = width - 2 * strokeWidth;
  const innerHeight = height - 2 * strokeWidth;

  return (
    <svg width={width} height={height} className="shape-svg">
      {/* Offsets the shape by the strokeWidth so that we have enough space for the stroke */}
      <g
        transform={`translate(${svgAttributes.strokeWidth ?? 0}, ${
          svgAttributes.strokeWidth ?? 0
        })`}
      >
        <ShapeComponent
          width={innerWidth}
          height={innerHeight}
          {...svgAttributes}
        />
      </g>
    </svg>
  );
}
