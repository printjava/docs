import React from "react";
import { Example3D } from "../components/Example3D";

export default function Example1() {
  return (
    <div>
      <h1>Example 1</h1>
      <p>This is the content for Example 1.</p>
      <Example3D
        stlUrl="/example-models/example-1.stl"
        codeUrl="https://github.com/your-repo/example1-source"
      />
    </div>
  );
}
