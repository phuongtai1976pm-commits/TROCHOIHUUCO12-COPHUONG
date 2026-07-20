/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Question {
  level: 'biet' | 'hieu' | 'vandung';
  question: string;
  options: string[];
  correct: number;
}

export interface QuestionBank {
  [key: string]: Question[];
}

export interface UserInfo {
  name: string;
  className: string;
}

export enum GamePage {
  Login = 0,
  LessonSelection = 1,
  Quiz = 2
}
