/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question } from '../types';
import { ch1Explanations } from '../data/explanations_ch1';
import { ch2Explanations } from '../data/explanations_ch2';
import { ch3Explanations } from '../data/explanations_ch3';
import { ch4Explanations } from '../data/explanations_ch4';

export function getQuestionExplanation(q: Question): string {
  // 1. If the question object itself defines an explicit explanation, prioritize it
  if (q.explanation) {
    return q.explanation;
  }

  const qText = q.question.trim();

  // 2. Check exact matches in chapter maps
  if (ch1Explanations[qText]) return ch1Explanations[qText];
  if (ch2Explanations[qText]) return ch2Explanations[qText];
  if (ch3Explanations[qText]) return ch3Explanations[qText];
  if (ch4Explanations[qText]) return ch4Explanations[qText];

  // 3. Check fuzzy/substring matches in chapter maps
  const allMaps = [ch1Explanations, ch2Explanations, ch3Explanations, ch4Explanations];
  for (const map of allMaps) {
    for (const [key, exp] of Object.entries(map)) {
      if (qText.includes(key) || key.includes(qText)) {
        return exp;
      }
    }
  }

  // 4. Dynamic fallback with accurate equations
  const correctOption = q.options[q.correct];

  if (qText.includes("tráng bạc") || qText.includes("tráng gương") || qText.includes("AgNO_3")) {
    return `**Phương trình phản ứng minh họa:**
$$HCOOR + 2AgNO_3 + 3NH_3 + H_2O \\xrightarrow{t^\\circ} HCOONH_4 + 2Ag\\downarrow + 2NH_4NO_3 + ROH$$
$$R-CHO + 2AgNO_3 + 3NH_3 + H_2O \\xrightarrow{t^\\circ} R-COONH_4 + 2Ag\\downarrow + 2NH_4NO_3$$
- **Giải thích:** Nhóm $-CHO$ hoặc gốc ester formic $HCOOR$ phản ứng với dung dịch $AgNO_3/NH_3$ đun nóng giải phóng kim loại bạc $Ag$.
- **Đáp án đúng:** **${correctOption}**`;
  }

  if (qText.includes("thủy phân") || qText.includes("xà phòng hóa")) {
    return `**Phương trình phản ứng minh họa:**
$$RCOOR' + NaOH \\xrightarrow{t^\\circ} RCOONa + R'OH$$
$$C_{12}H_{22}O_{11} + H_2O \\xrightarrow{H^+, t^\\circ} C_6H_{12}O_6 \\text{ (glucose)} + C_6H_{12}O_6 \\text{ (fructose)}$$
- **Giải thích:** Phản ứng thủy phân bẻ gãy liên kết ester hoặc liên kết glycoside trong môi trường thích hợp.
- **Đáp án đúng:** **${correctOption}**`;
  }

  return `**Hướng dẫn giải chi tiết:**
- Phản ứng hóa học diễn ra tuân theo quy luật tính chất đặc trưng của nhóm chức trong chương trình Hóa học 12.
- **Đáp án đúng:** **${correctOption}**`;
}
