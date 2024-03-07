import React from 'react';
import SquarePattern from './SquarePattern';
import LeftTrianglePattern from './LeftTrianglePattern';
import DownwardTrianglePattern from './DownwardTrianglePattern';
import HollowSquarePattern from './HollowSquarePattern';
import HollowTrianglePattern from './HollowTrianglePattern';
import PyramidStarPattern from './PyramidStarPattern';
import ReversedPyramidStarPattern from './ReversedPyramidStarPattern';
import HollowPyramidStarPattern from './HollowPyramidStarPattern';
import DiamondPattern from './DiamondPattern';
import HollowDiamondPattern from './HollowDiamondPattern';
import RightPascalStarPattern from './RightPascalStarPattern';
import HourGlassPattern from './HourGlassPattern';
import RightTriangleStarPattern from './RightTriangleStarPattern';
import LeftPascalStarPattern from './LeftPascalStarPattern';

function App() {
  return (
    <>
      <SquarePattern />
      <HollowSquarePattern/>
      <RightTriangleStarPattern/>
      <LeftTrianglePattern/>
      <DownwardTrianglePattern/>
      <HollowTrianglePattern/>
      <PyramidStarPattern/>
      <ReversedPyramidStarPattern/>
      <HollowPyramidStarPattern/>
      <DiamondPattern/>
      <HollowDiamondPattern/>
      <HourGlassPattern/>
      <RightPascalStarPattern/>
      <LeftPascalStarPattern/>
    </>
  );
}

export default App;

