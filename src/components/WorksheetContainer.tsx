/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface WorksheetContainerProps {
  children: React.ReactNode;
}

export default function WorksheetContainer({ children }: WorksheetContainerProps) {
  return (
    <div className="min-h-screen bg-[#1a1c23] text-slate-900 flex flex-col items-center justify-center p-4 sm:p-6 font-sans">
      <div 
        id="worksheet-card"
        className="w-full max-w-4xl bg-white border-[3px] border-dashed border-[#1e3a8a] rounded-[20px] p-6 sm:p-10 shadow-2xl relative flex flex-col justify-between min-h-[580px] transition-all duration-300"
      >
        {/* Red italicized text in the top right */}
        <div className="absolute top-6 right-8 text-right select-none">
          <span className="text-[#ef4444] font-semibold italic text-[14px] tracking-wide">
            Lớp học: Cô Ngọc Phượng
          </span>
        </div>

        {/* Content area */}
        <div className="mt-8 flex-grow flex flex-col justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}
