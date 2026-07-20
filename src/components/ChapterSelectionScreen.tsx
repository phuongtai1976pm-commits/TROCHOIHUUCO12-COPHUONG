/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { UserInfo } from '../types';
import { 
  FlaskConical, 
  Beaker, 
  Dna, 
  Layers, 
  GraduationCap, 
  LogOut, 
  Sparkles, 
  ChevronRight, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp,
  Atom,
  BookOpen,
  ArrowLeft
} from 'lucide-react';

interface Lesson {
  id: string;
  name: string;
  desc?: string;
}

interface Chapter {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  accentColor: string;
  lessons: Lesson[];
}

interface ChapterSelectionScreenProps {
  userInfo: UserInfo;
  onSelectLesson: (lessonName: string) => void;
  onBackToLogin: () => void;
}

const chaptersData: Chapter[] = [
  {
    id: 1,
    title: "Chương 1: Ester - Lipid",
    subtitle: "Chất béo, xà phòng & chất giặt rửa tổng hợp",
    icon: FlaskConical,
    color: "from-blue-500 to-indigo-600",
    accentColor: "text-blue-600 bg-blue-50 border-blue-100",
    lessons: [
      { id: "Bài 1", name: "Bài 1: Ester – Lipid", desc: "Khái niệm, cấu trúc, danh pháp, tính chất hóa học và ứng dụng" },
      { id: "Bài 2", name: "Bài 2: Xà phòng và chất giặt rửa", desc: "Cơ chế tẩy rửa, xà phòng thiên nhiên và chất giặt rửa tổng hợp" },
      { id: "Bài 3", name: "Bài 3: Ôn tập chương 1", desc: "Tổng hợp sơ đồ tư duy & luyện tập câu hỏi tổng hợp Chương 1" }
    ]
  },
  {
    id: 2,
    title: "Chương 2: Carbohydrate",
    subtitle: "Glucose, fructose, saccharose, tinh bột & cellulose",
    icon: Beaker,
    color: "from-emerald-500 to-teal-600",
    accentColor: "text-emerald-600 bg-emerald-50 border-emerald-100",
    lessons: [
      { id: "Bài 4", name: "Bài 4: Giới thiệu về carbohydrate. Glucose và fructose", desc: "Cấu trúc vòng/mở, phản ứng tráng bạc và tính chất của monosaccharide" },
      { id: "Bài 5", name: "Bài 5: Saccharose và maltose", desc: "Cấu tạo gốc disaccharide và phản ứng thủy phân đặc trưng" },
      { id: "Bài 6", name: "Bài 6: Tinh bột và cellulose", desc: "Cấu trúc polymer thiên nhiên, sợi bông và tơ nhân tạo" },
      { id: "Bài 7", name: "Bài 7: Ôn tập chương 2", desc: "Hệ thống hóa tính chất hóa học các nhóm carbohydrate" }
    ]
  },
  {
    id: 3,
    title: "Chương 3: Hợp chất chứa nitrogen",
    subtitle: "Amine, amino acid, peptide, protein & enzyme",
    icon: Dna,
    color: "from-purple-500 to-pink-600",
    accentColor: "text-purple-600 bg-purple-50 border-purple-100",
    lessons: [
      { id: "Bài 8", name: "Bài 8: Amine", desc: "Tính base của aniline, alkylamine và phản ứng thế vòng thơm" },
      { id: "Bài 9", name: "Bài 9: Amino acid và peptide", desc: "Hợp chất lưỡng tính, liên kết peptide và danh pháp" },
      { id: "Bài 10", name: "Bài 10: Protein và enzyme", desc: "Sự đông tụ, phản ứng màu biuret và vai trò xúc tác sinh học" },
      { id: "Bài 11", name: "Bài 11: Ôn tập chương 3", desc: "Liên kết mắt xích & giải bài tập lý thuyết/vận dụng chứa Nitơ" }
    ]
  },
  {
    id: 4,
    title: "Chương 4: Polymer",
    subtitle: "Chất dẻo, cao su, tơ sợi & vật liệu polymer mới",
    icon: Layers,
    color: "from-amber-500 to-orange-600",
    accentColor: "text-amber-600 bg-amber-50 border-amber-100",
    lessons: [
      { id: "Bài 12", name: "Bài 12: Đại cương về polymer", desc: "Phản ứng trùng hợp, trùng ngưng, cấu trúc mạch thẳng/nhánh/không gian" },
      { id: "Bài 13", name: "Bài 13: Vật liệu polymer", desc: "Chất dẻo thông dụng, cao su lưu hóa, tơ nylon-6,6 và keo dán" },
      { id: "Bài 14", name: "Bài 14: Ôn tập chương 4", desc: "Tổng ôn hệ số polymer hóa, tính khối lượng mắt xích & tơ sợi" }
    ]
  }
];

export default function ChapterSelectionScreen({ userInfo, onSelectLesson, onBackToLogin }: ChapterSelectionScreenProps) {
  const [expandedChapter, setExpandedChapter] = useState<number | null>(1); // Default Chapter 1 open

  const toggleChapter = (chapterId: number) => {
    setExpandedChapter(expandedChapter === chapterId ? null : chapterId);
  };

  return (
    <div className="flex flex-col w-full space-y-6">
      
      {/* Top navigation bar */}
      <div className="flex items-center justify-start">
        <button
          onClick={onBackToLogin}
          className="flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 border border-blue-100 rounded-xl px-4 py-2.5 transition-all active:scale-95 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Về giao diện chính
        </button>
      </div>
      
      {/* Upper Dashboard Header (Welcome & Status) */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl p-6 shadow-md border border-slate-700/50 gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-400/30 text-blue-400 shrink-0">
            <GraduationCap className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-extrabold tracking-widest text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded-full border border-blue-500/20">
                Học sinh
              </span>
              <span className="text-xs font-mono text-slate-400">ID: #HUC12</span>
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white mt-1">
              {userInfo.name}
            </h3>
            <p className="text-slate-400 text-xs mt-0.5 font-medium">
              Lớp học trực tuyến: <span className="text-blue-300 font-semibold">{userInfo.className}</span>
            </p>
          </div>
        </div>

        <button
          onClick={onBackToLogin}
          className="flex items-center justify-center gap-2 text-xs font-bold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-slate-600 px-4 py-2.5 rounded-xl transition-all shadow-sm shrink-0 active:scale-95"
        >
          <LogOut className="w-4 h-4" />
          Thay đổi thông tin
        </button>
      </div>

      {/* Chapters Title Section */}
      <div className="pt-2">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
          <span className="w-1.5 h-6 rounded bg-blue-600 block"></span>
          Danh mục bài ôn luyện trắc nghiệm
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
          Mỗi bài học chứa kho 25 câu hỏi được phân loại Biết - Hiểu - Vận dụng. Hệ thống sẽ bốc ngẫu nhiên 10 câu hỏi để tạo đề thi.
        </p>
      </div>

      {/* Chapters list */}
      <div className="w-full space-y-4">
        {chaptersData.map((chapter) => {
          const isExpanded = expandedChapter === chapter.id;
          const IconComponent = chapter.icon;
          return (
            <div 
              key={chapter.id}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 shadow-sm
                ${isExpanded 
                  ? 'border-blue-600/30 bg-white ring-4 ring-blue-500/5' 
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md'
                }
              `}
            >
              {/* Chapter Header Button */}
              <button
                id={`chapter-${chapter.id}`}
                onClick={() => toggleChapter(chapter.id)}
                className="w-full flex items-center justify-between px-5 py-4 text-left font-bold transition-all focus:outline-none cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  {/* Styled Icon Container */}
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${chapter.color} text-white flex items-center justify-center shadow-sm shrink-0`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className={`text-base sm:text-lg font-bold tracking-tight ${isExpanded ? "text-blue-900" : "text-slate-800"}`}>
                      {chapter.title}
                    </h3>
                    <p className="text-slate-400 text-xs font-normal mt-0.5 sm:mt-1 hidden sm:block">
                      {chapter.subtitle}
                    </p>
                  </div>
                </div>

                {/* Expansion Icon */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300
                  ${isExpanded 
                    ? 'border-blue-200 bg-blue-50 text-blue-600 rotate-180' 
                    : 'border-slate-200 bg-slate-50 text-slate-400'
                  }
                `}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {/* Lessons Inner Container */}
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isExpanded ? 'max-h-[600px] border-t border-slate-100 bg-slate-50/50' : 'max-h-0'
                }`}
              >
                <div className="p-4 space-y-3">
                  {chapter.lessons.map((lesson) => (
                    <div
                      key={lesson.id}
                      onClick={() => onSelectLesson(lesson.name)}
                      className="group flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-white hover:bg-slate-50 border border-slate-200/70 hover:border-blue-400 rounded-xl transition-all shadow-xs cursor-pointer active:scale-[0.99]"
                    >
                      <div className="flex-grow pr-4">
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded border ${chapter.accentColor}`}>
                            {lesson.id}
                          </span>
                          <h4 className="text-sm font-bold text-slate-800 group-hover:text-blue-900 transition-colors">
                            {lesson.name}
                          </h4>
                        </div>
                        {lesson.desc && (
                          <p className="text-xs text-slate-400 mt-1.5 font-medium leading-relaxed">
                            {lesson.desc}
                          </p>
                        )}
                      </div>

                      <div className="mt-3 sm:mt-0 flex items-center justify-end shrink-0 gap-2.5">
                        <span className="text-[11px] font-semibold text-slate-400 hidden md:block">
                          Chuẩn bị 25 câu hỏi
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 group-hover:bg-blue-600 group-hover:text-white border border-blue-100 group-hover:border-blue-600 px-3.5 py-2 rounded-lg transition-all shadow-2xs">
                          Luyện tập
                          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
