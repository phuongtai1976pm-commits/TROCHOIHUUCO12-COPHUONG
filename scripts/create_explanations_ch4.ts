import fs from 'fs';
import path from 'path';

function writeModule(filePath: string, exportName: string, map: Record<string, string>) {
  let code = `/**\n * @license\n * SPDX-License-Identifier: Apache-2.0\n */\n\n`;
  code += `export const ${exportName}: Record<string, string> = {\n`;
  for (const [key, val] of Object.entries(map)) {
    code += `  ${JSON.stringify(key)}:\n    ${JSON.stringify(val)},\n\n`;
  }
  code += `};\n`;
  fs.writeFileSync(filePath, code, 'utf-8');
  console.log(`Wrote ${Object.keys(map).length} explanations to ${filePath}`);
}

const ch4Map: Record<string, string> = {
  "Để tổng hợp được $100\\text{ kg}$ cao su buna từ butadiene-1,3 với hiệu suất phản ứng đạt $80\\%$, khối lượng monomer cần dùng tối thiểu là:":
    `**Phương trình phản ứng & Các bước giải:**
$$n CH_2=CH-CH=CH_2 \\xrightarrow{Na, t^\\circ} -(CH_2-CH=CH-CH_2)_n-$$
- $m_{\\text{monomer LT}} = 100\\text{ kg}$.
- $m_{\\text{monomer thực tế (H=80\\%)}} = \\frac{100}{80\\%} = 125\\text{ kg}$.
- **Đáp án đúng:** **125 kg**`,

  "Trùng ngưng m gam adipic acid và hexamethylenediamine thu được $11,3\\text{ kg}$ nylon-6,6 ($M=226$ của một mắt xích). Biết hiệu suất phản ứng đạt $100\\%$. Số mol mỗi monomer đã phản ứng là:":
    `**Phương trình phản ứng & Các bước giải:**
$$n HOOC-(CH_2)_4-COOH + n H_2N-(CH_2)_6-NH_2 \\xrightarrow{t^\\circ} -(CO-(CH_2)_4-CONH-(CH_2)_6-NH)_n- + 2n H_2O$$
- $n_{\\text{mắt xích nylon-6,6}} = \\frac{11,3\\text{ kg}}{226\\text{ g/mol}} = 0,05\\text{ kmol} = 50\\text{ mol}$.
- Theo tỉ lệ phương trình trùng ngưng: $n_{\\text{adipic acid}} = n_{\\text{hexamethylenediamine}} = 50\\text{ mol}$.
- **Đáp án đúng:** **50 mol**`,

  "Đốt cháy hoàn toàn $0,1\\text{ mol}$ mắt xích cao su isoprene ($C_5H_8$) cần dùng vừa đủ bao nhiêu lít khí oxygen ở điều kiện chuẩn (đkc)?":
    `**Phương trình phản ứng & Các bước giải:**
$$C_5H_8 + 7 O_2 \\xrightarrow{t^\\circ} 5 CO_2 + 4 H_2O$$
- $n_{O_2} = 7 \\times n_{\\text{mắt xích}} = 7 \\times 0,1 = 0,7\\text{ mol}$.
- $V_{O_2} = 0,7 \\times 24,79 = 17,353\\text{ lít}$.
- **Đáp án đúng:** **17,353 lít**`,

  "Một loại tơ capron chứa $12,39\\%$ nitơ về khối lượng. Phân tử khối mắt xích của tơ capron đó là:":
    `**Công thức & Các bước giải:**
- Công thức mắt xích tơ capron (nylon-6): $-(NH-(CH_2)_5-CO)-$.
- Số nguyên tử N trong một mắt xích = 1 ($M_N = 14$).
- $M_{\\text{mắt xích}} = \\frac{14}{12,39\\%} = 113\\text{ g/mol}$.
- **Đáp án đúng:** **113**`,

  "Để sản xuất $100\\text{ kg}$ thủy tinh hữu cơ PMM ($M=100$) từ methyl methacrylate cần bao nhiêu kg monomer nếu hiệu suất phản ứng đạt $90\\%$?":
    `**Phương trình phản ứng & Các bước giải:**
$$n CH_2=C(CH_3)COOCH_3 \\xrightarrow{t^\\circ, p, xt} -(CH_2-C(CH_3)(COOCH_3))_n-$$
- $m_{\\text{monomer LT}} = 100\\text{ kg}$.
- $m_{\\text{monomer thực tế (H=90\\%)}} = \\frac{100}{90\\%} = 111,11 \\approx 111,1\\text{ kg}$.
- **Đáp án đúng:** **111,1 kg**`,

  "Trùng hợp $10,4\\text{ kg}$ styrene thu được polystyrene (PS) với hiệu suất phản ứng đạt $85\\%$. Khối lượng PS thực tế thu được là:":
    `**Phương trình phản ứng & Các bước giải:**
$$n C_6H_5-CH=CH_2 \\xrightarrow{t^\\circ, p, xt} -(CH(C_6H_5)-CH_2)_n-$$
- $m_{\\text{PS LT}} = m_{\\text{styrene}} = 10,4\\text{ kg}$.
- $m_{\\text{PS thực tế (H=85\\%)}} = 10,4 \\times 85\\% = 8,84\\text{ kg}$.
- **Đáp án đúng:** **8,84 kg**`,

  "Đốt cháy hoàn toàn một lượng polymer polyethylene (PE) thu được $4,4\\text{ gam } CO_2$. Khối lượng nước thu được sau phản ứng là:":
    `**Phương trình phản ứng & Các bước giải:**
$$(C_2H_4)_n + 3n O_2 \\xrightarrow{t^\\circ} 2n CO_2 + 2n H_2O$$
- Polyethylene có công thức mắt xích $-(CH_2-CH_2)-$, khi đốt cháy luôn cho $n_{H_2O} = n_{CO_2}$.
- $n_{CO_2} = \\frac{4,4}{44} = 0,1\\text{ mol} \\Rightarrow n_{H_2O} = 0,1\\text{ mol}$.
- $m_{H_2O} = 0,1 \\times 18 = 1,8\\text{ gam}$.
- **Đáp án đúng:** **1,8 gam**`,

  "Để tổng hợp được $1\\text{ tấn}$ nylon-6 từ caprolactam với hiệu suất phản ứng trùng hợp đạt $90\\%$, khối lượng monomer cần dùng tối thiểu là:":
    `**Phương trình phản ứng & Các bước giải:**
$$n C_6H_{11}NO\\text{ (caprolactam)} \\xrightarrow{t^\\circ, xt} -(NH-(CH_2)_5-CO)_n-\\text{ (nylon-6)}$$
- $m_{\\text{caprolactam LT}} = 1\\text{ tấn}$.
- $m_{\\text{caprolactam thực tế (H=90\\%)}} = \\frac{1}{90\\%} = 1,111 \\approx 1,11\\text{ tấn}$.
- **Đáp án đúng:** **1,11 tấn**`,

  "Đốt cháy hoàn toàn $1\\text{ mol}$ mắt xích của cao su buna ($C_4H_6$) cần dùng vừa đủ bao nhiêu mol khí oxygen?":
    `**Phương trình phản ứng & Các bước giải:**
$$C_4H_6 + 5,5 O_2 \\xrightarrow{t^\\circ} 4 CO_2 + 3 H_2O$$
- $n_{O_2} = 5,5 \\times n_{\\text{mắt xích}} = 5,5 \\times 1 = 5,5\\text{ mol}$.
- **Đáp án đúng:** **5,5 mol**`,

  "Trùng ngưng $13,1\\text{ gam}$ aminocaproic acid ($M=131$) thu được nylon-6 và nước với hiệu suất phản ứng đạt $90\\%$. Khối lượng polymer thu được thực tế là:":
    `**Phương trình phản ứng & Các bước giải:**
$$n H_2N-(CH_2)_5-COOH \\xrightarrow{t^\\circ} -(NH-(CH_2)_5-CO)_n- + n H_2O$$
- $n_{\\text{mắt xích LT}} = \\frac{13,1}{131} = 0,1\\text{ mol}$.
- $m_{\\text{nylon-6 LT}} = 0,1 \\times 113 = 11,3\\text{ gam}$.
- $m_{\\text{thực tế (H=90\\%)}} = 11,3 \\times 90\\% = 10,17\\text{ gam}$.
- **Đáp án đúng:** **10,17 gam**`
};

writeModule(path.join(process.cwd(), 'src/data/explanations_ch4.ts'), 'ch4Explanations', ch4Map);
