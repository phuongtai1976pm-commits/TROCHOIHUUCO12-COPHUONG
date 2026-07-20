/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { QuestionBank } from '../types';
import { chapter1Questions } from './questions_chapter1';
import { chapter2Questions } from './questions_chapter2';
import { chapter3Questions } from './questions_chapter3';
import { chapter4Questions } from './questions_chapter4';

export const questionBank: QuestionBank = {
  ...chapter1Questions,
  ...chapter2Questions,
  ...chapter3Questions,
  ...chapter4Questions
};
