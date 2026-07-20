/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { GamePage, Question, UserInfo } from './types';
import { questionBank } from './data/questions';
import WorksheetContainer from './components/WorksheetContainer';
import LoginScreen from './components/LoginScreen';
import ChapterSelectionScreen from './components/ChapterSelectionScreen';
import QuizScreen from './components/QuizScreen';

// Helper to shuffle and pick N items
function shuffleAndPick(array: Question[], count: number): Question[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<GamePage>(GamePage.Login);
  const [userInfo, setUserInfo] = useState<UserInfo>({ name: '', className: '' });
  const [selectedLesson, setSelectedLesson] = useState('');
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [usingFallback, setUsingFallback] = useState(false);

  const handleStartGame = (info: UserInfo) => {
    setUserInfo(info);
    setCurrentPage(GamePage.LessonSelection);
  };

  const handleSelectLesson = (lessonName: string) => {
    setSelectedLesson(lessonName);
    
    // Retrieve questions for this lesson
    const questions = questionBank[lessonName] || [];
    setUsingFallback(questions.length === 0);

    const sourceQs = questions.length > 0 ? questions : (questionBank["Bài 1: Ester – Lipid"] || []);
    
    // Select exactly 5 "biet", 12 "hieu" questions, and 3 "vandung" questions
    const bietQs = sourceQs.filter(q => q.level === 'biet');
    const hieuQs = sourceQs.filter(q => q.level === 'hieu');
    const vandungQs = sourceQs.filter(q => q.level === 'vandung');
    
    const pickedBiet = shuffleAndPick(bietQs, 5);
    const pickedHieu = shuffleAndPick(hieuQs, 12);
    const pickedVandung = shuffleAndPick(vandungQs, 3);
    
    const combined = [...pickedBiet, ...pickedHieu, ...pickedVandung];
    const finalQuestions = shuffleAndPick(combined, combined.length);

    setCurrentQuestions(finalQuestions);
    setCurrentPage(GamePage.Quiz);
  };

  const handleRetake = () => {
    const questions = questionBank[selectedLesson] || [];
    const sourceQs = questions.length > 0 ? questions : (questionBank["Bài 1: Ester – Lipid"] || []);
    
    const bietQs = sourceQs.filter(q => q.level === 'biet');
    const hieuQs = sourceQs.filter(q => q.level === 'hieu');
    const vandungQs = sourceQs.filter(q => q.level === 'vandung');
    
    const pickedBiet = shuffleAndPick(bietQs, 5);
    const pickedHieu = shuffleAndPick(hieuQs, 12);
    const pickedVandung = shuffleAndPick(vandungQs, 3);
    
    const combined = [...pickedBiet, ...pickedHieu, ...pickedVandung];
    const finalQuestions = shuffleAndPick(combined, combined.length);
    
    setCurrentQuestions(finalQuestions);
  };

  const handleReset = () => {
    // Go back to lesson selection screen
    setCurrentPage(GamePage.LessonSelection);
  };

  return (
    <WorksheetContainer>
      {/* Toast alert if utilizing fallback questions */}
      {currentPage === GamePage.Quiz && usingFallback && (
        <div className="mb-4 p-3 bg-amber-50 border border-amber-200 text-amber-800 text-xs sm:text-sm font-semibold rounded-xl text-center shadow-sm animate-pulse">
          💡 Bài học này đang trống dữ liệu câu hỏi. Hệ thống tự động bốc ngẫu nhiên 20 câu thuộc <span className="underline">Bài 1: Ester – Lipid</span> để thầy cô thử nghiệm tính năng!
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="w-full flex-grow flex flex-col justify-center"
        >
          {currentPage === GamePage.Login && (
            <LoginScreen onStart={handleStartGame} />
          )}

          {currentPage === GamePage.LessonSelection && (
            <ChapterSelectionScreen
              userInfo={userInfo}
              onSelectLesson={handleSelectLesson}
              onBackToLogin={() => setCurrentPage(GamePage.Login)}
            />
          )}

          {currentPage === GamePage.Quiz && (
            <QuizScreen
              userInfo={userInfo}
              lessonName={selectedLesson}
              selectedQuestions={currentQuestions}
              onReset={handleReset}
              onRetake={handleRetake}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </WorksheetContainer>
  );
}
