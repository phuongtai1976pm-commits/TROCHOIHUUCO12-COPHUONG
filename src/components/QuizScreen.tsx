/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Question, UserInfo } from '../types';
import { audioSynth } from '../utils/audio';
import { triggerMathJax } from '../utils/mathjax';
import { ArrowLeft, RotateCcw, Check, Sparkles, LogOut, FileText } from 'lucide-react';

interface QuizScreenProps {
  userInfo: UserInfo;
  lessonName: string;
  selectedQuestions: Question[];
  onReset: () => void;
  onRetake: () => void;
}

export default function QuizScreen({ userInfo, lessonName, selectedQuestions, onReset, onRetake }: QuizScreenProps) {
  // Store user answers: { [questionIndex]: selectedOptionIndex }
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);
  const [showConfirmSubmitModal, setShowConfirmSubmitModal] = useState(false);

  // Trigger MathJax rendering when component mounts or questions are randomized
  useEffect(() => {
    triggerMathJax();
  }, [selectedQuestions]);

  const handleSelectOption = (qIndex: number, optionIndex: number) => {
    if (isSubmitted) return; // Prevent change after scoring

    // Set answer
    setAnswers(prev => ({
      ...prev,
      [qIndex]: optionIndex
    }));
  };

  const getOptionLetter = (index: number) => {
    return ['A', 'B', 'C', 'D'][index];
  };

  const calculateScore = () => {
    const answeredCount = Object.keys(answers).length;
    if (answeredCount < selectedQuestions.length) {
      return 0; // Strict 0 if not fully completed
    }
    let score = 0;
    selectedQuestions.forEach((q, idx) => {
      if (answers[idx] === q.correct) {
        score += 1;
      }
    });
    return score;
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    setShowScoreModal(true);

    const totalScore = calculateScore();
    // Trigger celebratory sound & confetti on submission if score is 5 or more!
    if (totalScore >= 5) {
      audioSynth.playSuccess();
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
      });
    } else {
      audioSynth.playFailure();
    }
  };

  const handleAttemptSubmit = () => {
    const answeredCount = Object.keys(answers).length;
    if (answeredCount < selectedQuestions.length) {
      setShowConfirmSubmitModal(true);
    } else {
      handleSubmit();
    }
  };

  const score = calculateScore();

  // Review status
  const getFeedbackMessage = (scoreValue: number) => {
    const answeredCount = Object.keys(answers).length;
    if (answeredCount < selectedQuestions.length) {
      return "Bạn nhận điểm 0 do chưa hoàn thành đầy đủ tất cả các câu hỏi của bài kiểm tra.";
    }
    if (scoreValue >= 9) return "Xuất sắc! Bạn nắm kiến thức hữu cơ cực tốt.";
    if (scoreValue >= 7) return "Khá giỏi! Tiếp tục phát huy nhé.";
    if (scoreValue >= 5) return "Đạt yêu cầu. Hãy ôn tập kỹ hơn.";
    return "Cần cố gắng thêm! Xem lại SGK Hoá học 12 nhé.";
  };

  return (
    <div className="flex flex-col w-full py-2">
      {/* Top navigation bar */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
        <button
          onClick={onReset}
          className="flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 border border-blue-100 rounded-xl px-4 py-2.5 transition-all active:scale-95 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Về giao diện chính
        </button>
        <span className="text-[11px] sm:text-xs font-bold text-slate-400 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 flex items-center gap-1.5">
          <FileText className="w-3.5 h-3.5" />
          Chủ đề Hóa 12
        </span>
      </div>

      {/* Quiz Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-900 tracking-wide uppercase">
          PHIẾU KIỂM TRA 1 TIẾT
        </h2>
        <p className="text-slate-500 font-medium text-sm sm:text-base mt-1">
          Chủ đề: <span className="text-blue-600 font-bold">{lessonName}</span>
        </p>
        
        {/* Student metadata bar */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-2 mt-3 inline-flex flex-wrap gap-4 text-sm font-semibold text-slate-700">
          <div>Họ và tên: <span className="text-slate-900 font-bold">{userInfo.name}</span></div>
          <div className="hidden sm:block text-slate-300">|</div>
          <div>Lớp: <span className="text-slate-900 font-bold">{userInfo.className}</span></div>
        </div>
      </div>

      {/* Questions list container */}
      <div className="space-y-8 my-4">
        {selectedQuestions.map((q, qIdx) => {
          const selectedOption = answers[qIdx];
          const hasAnswered = selectedOption !== undefined;
          const isCorrect = hasAnswered && selectedOption === q.correct;

          return (
            <div 
              key={qIdx}
              className={`p-5 rounded-xl border-2 transition-all flex flex-col sm:flex-row items-start justify-between gap-4
                ${
                  showAnswers 
                    ? isCorrect
                      ? 'border-green-300 bg-green-50/40'
                      : 'border-red-300 bg-red-50/40'
                    : hasAnswered
                      ? 'border-[#cbd5e1] bg-slate-50/30'
                      : 'border-slate-100 bg-slate-50/50'
                }
              `}
            >
              {/* Question contents & options */}
              <div className="flex-grow space-y-4">
                {/* Question Text */}
                <h3 className="text-xl font-bold text-[#0f172a] leading-snug">
                  Câu {qIdx + 1}. <span className="tex2jax_process">{q.question}</span>
                </h3>

                {/* Options Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {q.options.map((opt, oIdx) => {
                    const isSelected = selectedOption === oIdx;
                    let btnStyle = "border-[#cbd5e1] bg-white text-slate-700 hover:border-[#1e3a8a] hover:bg-[#f1f5f9]";
                    
                    if (showAnswers) {
                      if (isSelected) {
                        btnStyle = isCorrect
                          ? "border-2 border-green-600 bg-green-100/70 text-green-950 font-bold"
                          : "border-2 border-red-600 bg-red-100/70 text-red-950 font-bold";
                      } else if (oIdx === q.correct) {
                        btnStyle = "border-2 border-green-600 bg-green-50 text-green-950 font-bold animate-pulse";
                      } else {
                        btnStyle = "border-[#cbd5e1] bg-white text-slate-400 opacity-60";
                      }
                    } else {
                      if (isSelected) {
                        btnStyle = "border-2 border-[#d4af37] bg-[#fefce8] text-[#0f172a] font-bold";
                      }
                    }

                    return (
                      <button
                        key={oIdx}
                        disabled={isSubmitted}
                        onClick={() => handleSelectOption(qIdx, oIdx)}
                        className={`w-full text-left px-4 py-3 rounded-lg border transition-all text-sm sm:text-base flex items-center gap-3 focus:outline-none ${btnStyle}`}
                      >
                        <span className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm shrink-0 border
                          ${isSelected 
                            ? showAnswers
                              ? isCorrect
                                ? 'bg-green-600 text-white border-green-600'
                                : 'bg-red-600 text-white border-red-600'
                              : 'bg-[#d4af37] text-white border-[#d4af37]' 
                            : 'bg-slate-100 text-slate-600 border-slate-200'
                          }
                        `}>
                          {getOptionLetter(oIdx)}
                        </span>
                        <span className="tex2jax_process">{opt}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dashed bubble choice indicator on the right */}
              <div className="shrink-0 flex items-center justify-center self-center sm:self-start">
                <div 
                  className={`border-[2.5px] border-dashed rounded-full w-12 h-16 flex flex-col items-center justify-center select-none shadow-sm transition-all duration-300
                    ${
                      showAnswers
                        ? isCorrect
                          ? 'border-green-500 bg-green-100/50 text-green-700'
                          : 'border-red-500 bg-red-100/50 text-red-700'
                        : hasAnswered
                          ? 'border-[#d4af37] bg-yellow-50 text-[#d4af37]'
                          : 'border-[#1e3a8a] bg-transparent text-[#1e3a8a]'
                    }
                  `}
                >
                  <span className="text-xs font-bold font-sans opacity-70">Ý</span>
                  <span className="text-lg font-black tracking-tighter">
                    {hasAnswered ? getOptionLetter(selectedOption) : "?"}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Action buttons footer */}
      <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-center gap-4">
        {/* Home Button - always visible, lets student return to chapter selection */}
        <button
          id="btn-back-home"
          onClick={onReset}
          className="w-full sm:w-auto px-6 py-3.5 rounded-lg font-bold border-2 border-[#1e3a8a] text-[#1e3a8a] bg-white hover:bg-slate-50 shadow-sm active:scale-95 transition-all text-center tracking-wide uppercase cursor-pointer flex items-center justify-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Về giao diện chính
        </button>

        {!isSubmitted ? (
          /* "TÍNH ĐIỂM" button is always active now so students don't get stuck if they miss/skip a question */
          <button
            id="btn-submit"
            onClick={handleAttemptSubmit}
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg font-bold shadow-md bg-[#d4af37] hover:bg-[#b8962e] text-white active:scale-95 transition-all text-center tracking-wide uppercase cursor-pointer"
          >
            TÍNH ĐIỂM
          </button>
        ) : (
          <>
            {/* "LÀM LẠI" bốc một bộ 10 câu hỏi ngẫu nhiên mới từ kho 25 câu của chính bài học đó */}
            <button
              id="btn-retake-quiz"
              onClick={() => {
                setAnswers({});
                setIsSubmitted(false);
                setShowAnswers(false);
                onRetake();
              }}
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg font-bold bg-[#1e3a8a] hover:bg-[#152e6f] text-white shadow-md active:scale-95 transition-all text-center tracking-wide uppercase cursor-pointer"
            >
              Làm lại bài này
            </button>

            {/* "KIỂM TRA ĐÁP ÁN" button shows up only after submitted and when they haven't chosen to review yet */}
            {!showAnswers && (
              <button
                id="btn-reveal-answers"
                onClick={() => setShowAnswers(true)}
                className="w-full sm:w-auto px-6 py-3.5 rounded-lg font-bold bg-green-600 hover:bg-green-700 text-white shadow-md active:scale-95 transition-all text-center tracking-wide uppercase cursor-pointer animate-pulse"
              >
                Kiểm tra đáp án
              </button>
            )}
          </>
        )}
      </div>

      {/* Confirmation Modal for Incomplete Submissions */}
      {showConfirmSubmitModal && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white border-[3px] border-dashed border-red-500 rounded-[20px] max-w-md w-full p-6 sm:p-8 shadow-2xl relative text-center">
            <div className="text-5xl mb-4">⚠️</div>
            <h3 className="text-2xl font-black text-red-700 uppercase tracking-tight mb-2">
              XÁC NHẬN NỘP BÀI
            </h3>
            <p className="text-slate-600 text-sm font-medium mb-6 leading-relaxed">
              Bạn mới trả lời được <span className="font-bold text-red-600">{Object.keys(answers).length} / {selectedQuestions.length}</span> câu hỏi.
              <br />
              Nếu nộp bài ngay, điểm kiểm tra của bạn sẽ <span className="font-bold text-red-600">bị tính là 0 ĐIỂM</span> do chưa hoàn thành đầy đủ tất cả các câu hỏi.
              <br />
              <span className="text-slate-500 italic mt-2 block">(Vui lòng quay lại trả lời đầy đủ {selectedQuestions.length} câu hỏi để được chấm điểm thực tế nhé!)</span>
            </p>

            <div className="space-y-3">
              <button
                id="btn-confirm-submit-yes"
                onClick={() => {
                  setShowConfirmSubmitModal(false);
                  handleSubmit();
                }}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-3 rounded-lg shadow-md transition-all active:scale-95 uppercase text-sm tracking-wide cursor-pointer"
              >
                VẪN NỘP BÀI & TÍNH ĐIỂM
              </button>
              
              <button
                id="btn-confirm-submit-no"
                onClick={() => setShowConfirmSubmitModal(false)}
                className="w-full bg-slate-100 border border-slate-300 text-slate-700 hover:bg-slate-200 font-bold py-2.5 rounded-lg shadow-sm transition-all active:scale-95 uppercase text-sm tracking-wide cursor-pointer"
              >
                Làm tiếp
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Score Results Modal Overlay */}
      {showScoreModal && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white border-[3px] border-dashed border-[#d4af37] rounded-[20px] max-w-md w-full p-6 sm:p-8 shadow-2xl relative text-center transform scale-100 transition-all">
            {/* Celebration emoji */}
            <div className="text-5xl mb-4">
              {score >= 8 ? '🎉' : score >= 5 ? '👏' : '📚'}
            </div>

            <h3 className="text-3xl font-black text-[#1e3a8a] uppercase tracking-tight mb-2">
              KẾT QUẢ
            </h3>
            <p className="text-slate-500 text-sm font-semibold mb-6">
              Môn học: Hóa học hữu cơ 12 (Kết nối tri thức)
            </p>

            {/* Student card info */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left space-y-2 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 font-semibold">Học sinh:</span>
                <span className="text-slate-900 font-bold">{userInfo.name}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 font-semibold">Lớp:</span>
                <span className="text-slate-900 font-bold">{userInfo.className}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 font-semibold">Bài học:</span>
                <span className="text-slate-900 font-bold truncate max-w-[200px]">{lessonName}</span>
              </div>
              <div className="border-t border-slate-200 pt-3 flex justify-between items-center mt-3">
                <span className="text-slate-700 font-bold text-base">Điểm kiểm tra:</span>
                <span className="text-4xl font-black text-[#d4af37]">
                  {score} / {selectedQuestions.length}
                </span>
              </div>
            </div>

            {/* Personalized feedback */}
            <p className="text-slate-800 font-semibold text-base mb-6 px-2">
              {getFeedbackMessage(score)}
            </p>

            {/* Action buttons inside Modal */}
            <div className="space-y-3">
              <button
                id="modal-btn-review-answers"
                onClick={() => {
                  setShowScoreModal(false);
                  setShowAnswers(true); // Auto-show detailed answers when clicked
                }}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-black py-3 rounded-lg shadow-md transition-all active:scale-95 uppercase text-sm tracking-wide"
              >
                KỂM TRA CHI TIẾT ĐÁP ÁN
              </button>
              
              <button
                id="modal-btn-go-home"
                onClick={() => {
                  setShowScoreModal(false);
                  onReset(); // Returns back to home (Lesson Selection)
                }}
                className="w-full bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 font-bold py-2.5 rounded-lg shadow-sm transition-all active:scale-95 uppercase text-sm tracking-wide flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Về giao diện chính
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
