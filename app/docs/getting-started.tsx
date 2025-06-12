import React from "react";
import { Code } from "../components/Code";

export default function GettingStarted() {
  return (
    <div>
      <h1>Getting Started</h1>
      <p>To get started, <a href="https://github.com/dylandibeneditto/printjava" target="_blank">download the .jar file</a>.</p>
      <p>After downloading, add the .jar file to your project as a library. This step will vary based on your IDE.</p>
      <p>The .jar file holds all of the code provided by the library</p>
      <p>All of this code can be accessed through the following imports:</p>
      <Code language="java">{`import printjava.*;\nimport printjava.Meshes.*;`}</Code>
    </div>
  );
}
