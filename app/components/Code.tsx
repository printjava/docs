"use client";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export function Code({ children, language = "bash" }: { children: React.ReactNode, language?: string }) {
  return (
    <SyntaxHighlighter language={language} style={vscDarkPlus} customStyle={{
      borderRadius: '6px',
      fontSize: '1rem',
      margin: '1.2rem 0',
      padding: '1rem',
    }}>
      {String(children)}
    </SyntaxHighlighter>
  );
}