/**
 * Script to generate precise, custom explanations for all 350 questions across Chapters 1-4.
 */
import fs from 'fs';
import path from 'path';

import { chapter1Questions } from '../src/data/questions_chapter1';
import { chapter2Questions } from '../src/data/questions_chapter2';
import { chapter3Questions } from '../src/data/questions_chapter3';
import { chapter4Questions } from '../src/data/questions_chapter4';

console.log("Generating explanations files...");
