/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo } from 'react';
import katex from 'katex';

interface MathTextProps {
  text: string;
  className?: string;
}

export const MathText: React.FC<MathTextProps> = ({ text, className = '' }) => {
  const renderedElements = useMemo(() => {
    if (!text) return null;

    // Split text by LaTeX math delimiters: $$...$$, $...$, \(...\)
    const regex = /(\$\$[\s\S]+?\$\$|\$[^\$\n]+?\$|\\\(.*?\\\))/g;
    const parts = text.split(regex);

    return parts.map((part, index) => {
      if (!part) return null;

      let isMath = false;
      let displayMode = false;
      let mathContent = part;

      if (part.startsWith('$$') && part.endsWith('$$')) {
        isMath = true;
        displayMode = true;
        mathContent = part.slice(2, -2);
      } else if (part.startsWith('\\(') && part.endsWith('\\)')) {
        isMath = true;
        displayMode = false;
        mathContent = part.slice(2, -2);
      } else if (part.startsWith('$') && part.endsWith('$')) {
        isMath = true;
        displayMode = false;
        mathContent = part.slice(1, -1);
      }

      if (isMath) {
        try {
          const html = katex.renderToString(mathContent, {
            throwOnError: false,
            strict: false,
            displayMode,
          });
          return (
            <span
              key={index}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } catch {
          return <span key={index}>{part}</span>;
        }
      }

      return <span key={index}>{part}</span>;
    });
  }, [text]);

  return <span className={`math-text inline ${className}`}>{renderedElements}</span>;
};

export default MathText;
