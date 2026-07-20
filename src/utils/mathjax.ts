/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export function triggerMathJax() {
  const mj = (window as any).MathJax;
  if (mj && typeof mj.typesetPromise === 'function') {
    // Wait a tiny bit for React rendering to complete, then typeset
    setTimeout(() => {
      mj.typesetPromise()
        .then(() => {
          // Success
        })
        .catch((err: any) => {
          console.error("MathJax typesetting error:", err);
        });
    }, 50);
  } else if (mj && typeof mj.typeset === 'function') {
    setTimeout(() => {
      try {
        mj.typeset();
      } catch (err) {
        console.error("MathJax typesetting sync error:", err);
      }
    }, 50);
  }
}
