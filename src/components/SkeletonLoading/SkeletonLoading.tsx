import React from "react";

import { SkeletonContainer } from "./SkeletonLoading.styles";

interface SkeletonComponentProps {
  height?: number;
  width: number;
  variant?: "text" | "rectangular" | "rounded" | "circular";
}

const SkeletonComponent = ({
  height,
  width,
  variant,
}: SkeletonComponentProps) => {
  return (
    <SkeletonContainer
      height={height}
      width={width}
      sx={{ bgcolor: "#1C2F41" }}
      variant={variant}
    />
  );
};

export default SkeletonComponent;
