/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { UserInfo } from '../types';
import { User, School, Atom, Sparkles } from 'lucide-react';

interface LoginScreenProps {
  onStart: (info: UserInfo) => void;
}

export default function LoginScreen({ onStart }: LoginScreenProps) {
  const [name, setName] = useState('');
  const [className, setClassName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !className.trim()) {
      setError('Vui lòng nhập đầy đủ Họ tên và Lớp để bắt đầu!');
      return;
    }
    onStart({ name: name.trim(), className: className.trim() });
  };

  return (
    <div className="flex flex-col items-center justify-center text-center max-w-lg mx-auto py-6 space-y-6">
      
      {/* Chemical Graphic Emblem */}
      <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg animate-bounce duration-[3000ms]">
        <Atom className="w-9 h-9" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full animate-ping" />
      </div>

      {/* Main Title Block */}
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight uppercase leading-none">
          HÓA HỌC HỮU CƠ 12
        </h1>
        <p className="text-sm font-bold tracking-widest text-blue-600 uppercase">
          HỆ THỐNG LUYỆN THI TRẮC NGHIỆM - BẢN QUYỀN TRÒ CHƠI THUỘC VỀ CÔ NGỌC PHƯỢNG @ NTT
        </p>
      </div>

      {/* Curricular & School Metadata Card */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 w-full text-center space-y-1 shadow-2xs">
        <p className="text-xs font-extrabold text-slate-700">
          Chương trình Giáo dục phổ thông mới (2018)
        </p>
        <p className="text-[11px] font-semibold text-slate-400">
          Đo lường thể tích chất khí bám sát quy chuẩn Điều kiện chuẩn (đkc: 25 °C, 1 bar)
        </p>
      </div>

      {/* Student credentials card */}
      <div className="w-full bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm text-left">
        <h2 className="text-base font-bold text-slate-800 mb-6 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#d4af37]" />
          Nhập thông tin học sinh
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Input 1: Student Name */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500" htmlFor="student-name">
              Họ và tên học sinh:
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <User className="w-5 h-5" />
              </div>
              <input
                id="student-name"
                type="text"
                className="w-full pl-11 pr-4 py-3 bg-slate-50 hover:bg-slate-50/50 border-2 border-slate-200 rounded-xl text-slate-900 font-bold text-base placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all shadow-2xs"
                placeholder="Nhập đầy đủ Họ và tên..."
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (error) setError('');
                }}
              />
            </div>
          </div>

          {/* Input 2: Student Class */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500" htmlFor="student-class">
              Lớp học:
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <School className="w-5 h-5" />
              </div>
              <input
                id="student-class"
                type="text"
                className="w-full pl-11 pr-4 py-3 bg-slate-50 hover:bg-slate-50/50 border-2 border-slate-200 rounded-xl text-slate-900 font-bold text-base placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all shadow-2xs"
                placeholder="Ví dụ: 12A1, 12 chuyên Hóa..."
                value={className}
                onChange={(e) => {
                  setClassName(e.target.value);
                  if (error) setError('');
                }}
              />
            </div>
          </div>

          {error && (
            <div className="p-3 bg-red-50 border border-red-100 rounded-xl text-red-600 text-xs font-bold text-center animate-pulse">
              ⚠️ {error}
            </div>
          )}

          {/* Start Button */}
          <div className="pt-4 flex justify-center">
            <button
              id="btn-start"
              type="submit"
              className={`w-full font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-md active:scale-95 transition-all text-center tracking-wider uppercase flex items-center justify-center gap-2
                ${
                  name.trim() && className.trim()
                    ? 'bg-blue-600 hover:bg-blue-700 text-white cursor-pointer hover:shadow-lg'
                    : 'bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed'
                }
              `}
            >
              VÀO HỆ THỐNG ÔN LUYỆN
            </button>
          </div>
        </form>
      </div>

      <div className="text-[11px] font-medium text-slate-400">
        Giáo án & câu hỏi: <span className="font-semibold text-slate-500">Cô Ngọc Phượng</span> • Phiên bản 2.0 (Ổn định)
      </div>

    </div>
  );
}
