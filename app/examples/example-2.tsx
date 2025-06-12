import React from "react";
import { Example3D } from "../components/Example3D";

export default function Example2() {
  return (
    <div>
      <h1>Example 2</h1>
      <p>This is the content for Example 2.</p>
      <Example3D
        stlUrl="/example-models/example-2.stl"
        codeUrl="https://github.com/dylandibeneditto/printjava/example2-source"
      />
    </div>
  );
}
