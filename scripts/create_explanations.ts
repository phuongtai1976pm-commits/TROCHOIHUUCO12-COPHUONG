import fs from 'fs';
import path from 'path';

// Helper to write file safely
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

// ============================================================================
// CHAPTER 1
// ============================================================================
const ch1Map: Record<string, string> = {
  "Công thức phân tử tổng quát của ester no, đơn chức, mạch hở là:":
    `**Phương trình tổng quát & Giải thích:**
Ester no, đơn chức, mạch hở được tạo từ carboxylic acid no, đơn chức ($C_kH_{2k+1}COOH$) và alcohol no, đơn chức ($C_mH_{2m+1}OH$).
- Công thức cấu tạo tổng quát: $C_kH_{2k+1}COOC_mH_{2m+1}$ với $k \\ge 0, m \\ge 1$.
- Công thức phân tử tổng quát: $C_nH_{2n}O_2$ với điều kiện $n \\ge 2$.
- **Đáp án đúng:** **$C_nH_{2n}O_2\\ (n \\ge 2)$**`,

  "Công thức phân tử của triolein là chất nào sau đây?":
    `**Giải thích & Công thức:**
Triolein là triester của glycerol với oleic acid ($C_{17}H_{33}COOH$).
- Công thức cấu tạo: $(C_{17}H_{33}COO)_3C_3H_5$.
- Tổng số nguyên tử: $C = 17 \\times 3 + 3 + 3 = 57$; $H = 33 \\times 3 + 5 = 104$; $O = 6$.
- Công thức phân tử: $C_{57}H_{104}O_6$.
- **Đáp án đúng:** **$C_{57}H_{104}O_6$**`,

  "Chất béo (lipid) là triester của alcohol nào sau đây với các acid béo?":
    `**Giải thích & Định nghĩa:**
Chất béo (triacylglycerol) là triester của glycerol ($C_3H_5(OH)_3$) với các acid béo (carboxylic acid đơn chức, mạch carbon dài, không phân nhánh, số C chẵn).
- **Đáp án đúng:** **glycerol**`,

  "Tên gọi thay thế (tên IUPAC) của ester có công thức cấu tạo $CH_3COOCH_3$ là:":
    `**Phương trình & Đọc tên:**
- Gốc alcohol: $-CH_3$ (methyl).
- Gốc acid: $CH_3COO-$ (acetate hay ethanoate).
- Tên gọi của $CH_3COOCH_3$: methyl acetate.
- **Đáp án đúng:** **methyl acetate**`,

  "Công thức cấu tạo thu gọn của ethyl acetate là:":
    `**Giải thích & Công thức:**
Ethyl acetate gồm gốc acid acetic ($CH_3COO-$) liên kết với gốc ethyl ($-C_2H_5$).
- Công thức cấu tạo thu gọn: $CH_3COOC_2H_5$.
- **Đáp án đúng:** **$CH_3COOC_2H_5$**`,

  "Acid béo nào sau đây là acid béo bão hòa (no)?":
    `**Phân loại acid béo:**
- Stearic acid ($C_{17}H_{35}COOH$) và Palmitic acid ($C_{15}H_{31}COOH$) là các acid béo bão hòa (no).
- Oleic acid ($C_{17}H_{33}COOH$), Linoleic acid ($C_{17}H_{31}COOH$) là acid béo không bão hòa.
- **Đáp án đúng:** **stearic acid**`,

  "Phản ứng thủy phân ester trong môi trường kiềm ($NaOH$, $KOH$) đun nóng được gọi là phản ứng gì?":
    `**Phương trình phản ứng minh họa:**
$$CH_3COOC_2H_5 + NaOH \\xrightarrow{t^\\circ} CH_3COONa + C_2H_5OH$$
- Phản ứng thủy phân ester trong môi trường kiềm là phản ứng một chiều đun nóng sinh ra muối và alcohol. Phản ứng này được gọi là **phản ứng xà phòng hóa**.
- **Đáp án đúng:** **Phản ứng xà phòng hóa**`,

  "Nhiệt độ sôi của các ester thường thấp hơn hẳn so với alcohol và carboxylic acid có cùng phân tử khối vì:":
    `**Giải thích tính chất vật lý:**
Các phân tử ester không có nguyên tử H linh động liên kết với nguyên tử O nên **không tạo được liên kết hydrogen liên phân tử** giữa các phân tử ester với nhau. Do đó nhiệt độ sôi của ester thấp hơn nhiều so với alcohol và carboxylic acid có cùng phân tử khối.
- **Đáp án đúng:** **Giữa các phân tử ester không tạo được liên kết hydrogen liên phân tử**`,

  "Khi thủy phân hoàn toàn phenyl acetate trong dung dịch $NaOH$ dư, sản phẩm thu được cuối cùng gồm những chất nào?":
    `**Phương trình phản ứng xảy ra:**
$$CH_3COOC_6H_5 + 2NaOH \\xrightarrow{t^\\circ} CH_3COONa + C_6H_5ONa + H_2O$$
- Phenyl acetate ($CH_3COOC_6H_5$) là ester của phenol. Khi phản ứng với $NaOH$ dư đun nóng:
  1. Thủy phân tạo $CH_3COONa$ và phenol ($C_6H_5OH$).
  2. $C_6H_5OH$ có tính acid yếu phản ứng tiếp với $NaOH$ dư tạo $C_6H_5ONa + H_2O$.
- Tỉ lệ mol phản ứng: $n_{\\text{phenyl acetate}} : n_{NaOH} = 1 : 2$.
- Sản phẩm cuối cùng gồm: $CH_3COONa$, $C_6H_5ONa$ và $H_2O$.
- **Đáp án đúng:** **$CH_3COONa$, $C_6H_5ONa$ và $H_2O$**`,

  "Thủy phân phenyl acetate trong dung dịch $NaOH$ dư tạo sản phẩm gì?":
    `**Phương trình phản ứng xảy ra:**
$$CH_3COOC_6H_5 + 2NaOH \\xrightarrow{t^\\circ} CH_3COONa + C_6H_5ONa + H_2O$$
- Phenyl acetate ($CH_3COOC_6H_5$) phản ứng với $NaOH$ theo tỉ lệ mol $1 : 2$ tạo hai muối sodium acetate ($CH_3COONa$), sodium phenolate ($C_6H_5ONa$) và nước ($H_2O$).
- **Đáp án đúng:** **$CH_3COONa$, $C_6H_5ONa$ và $H_2O$**`,

  "Thủy phân hoàn toàn ethyl formate bằng dung dịch $NaOH$ đun nóng, sản phẩm hữu cơ thu được gồm:":
    `**Phương trình phản ứng xảy ra:**
$$HCOOC_2H_5 + NaOH \\xrightarrow{t^\\circ} HCOONa + C_2H_5OH$$
- Thủy phân ethyl formate ($HCOOC_2H_5$) trong dung dịch $NaOH$ thu được muối sodium formate ($HCOONa$) và alcohol $C_2H_5OH$ (ethanol).
- **Đáp án đúng:** **$HCOONa$ và $C_2H_5OH$**`,

  "Đun nóng triolein với dung dịch $NaOH$ dư, cô cạn dung dịch sau phản ứng thu được muối nào sau đây?":
    `**Phương trình phản ứng xảy ra:**
$$(C_{17}H_{33}COO)_3C_3H_5 + 3NaOH \\xrightarrow{t^\\circ} 3C_{17}H_{33}COONa + C_3H_5(OH)_3$$
- Triolein xà phòng hóa với $NaOH$ sinh ra muối sodium oleate ($C_{17}H_{33}COONa$) và glycerol.
- **Đáp án đúng:** **$C_{17}H_{33}COONa$**`,

  "Cho sơ đồ phản ứng sau: chất béo lỏng + $H_2\\ (t^\\circ, Ni, p) \\to$ bơ nhân tạo (chất béo rắn). Phát biểu nào sau đây đúng về quá trình này?":
    `**Phương trình phản ứng minh họa:**
$$(C_{17}H_{33}COO)_3C_3H_5\\text{ (triolein - lỏng)} + 3H_2 \\xrightarrow{Ni, t^\\circ, p} (C_{17}H_{35}COO)_3C_3H_5\\text{ (tristearin - rắn)}$$
- Quá trình chuyển hóa chất béo lỏng thành chất béo rắn trong công nghiệp thực phẩm là phản ứng cộng $H_2$ (hydrogen hóa) vào gốc acid béo không bão hòa.
- **Đáp án đúng:** **Đây là phản ứng hydrogen hóa chất béo chứa gốc acid béo không bão hòa để tạo chất béo bão hòa**`,

  "Phản ứng nào dùng để chuyển hóa chất béo lỏng thành chất béo rắn trong công nghiệp?":
    `**Phương trình phản ứng minh họa:**
$$(C_{17}H_{33}COO)_3C_3H_5 + 3H_2 \\xrightarrow{Ni, t^\\circ, p} (C_{17}H_{35}COO)_3C_3H_5$$
- Trong công nghiệp, người ta tiến hành hydrogen hóa chất béo lỏng (cộng $H_2$ vào liên kết đôi $C=C$ của gốc acid béo không bão hòa) để tạo thành chất béo rắn (bơ nhân tạo).
- **Đáp án đúng:** **Hydrogen hóa (cộng $H_2$ vào liên kết đôi)**`,

  "Ester nào sau đây có khả năng tham gia phản ứng tráng bạc với dung dịch $AgNO_3$ trong $NH_3$, đun nóng?":
    `**Phương trình phản ứng xảy ra:**
$$HCOOCH_3 + 2AgNO_3 + 3NH_3 + H_2O \\xrightarrow{t^\\circ} NH_4OCOOCH_3 + 2Ag\\downarrow + 2NH_4NO_3$$
- Chỉ có các ester chứa nhóm formate $HCOOR$ (như $HCOOCH_3$) mới có nhóm $-CHO$ trong phân tử để tham gia phản ứng tráng bạc.
- **Đáp án đúng:** **methyl formate**`,

  "Đun nóng ester ethyl acetate ($CH_3COOCH_2CH_3$) với dung dịch $H_2SO_4$ loãng (phản ứng thuận nghịch) tạo ra sản phẩm gồm:":
    `**Phương trình phản ứng xảy ra:**
$$CH_3COOCH_2CH_3 + H_2O \\stackrel{H_2SO_4, t^\\circ}{\\rightleftharpoons} CH_3COOH + C_2H_5OH$$
- Thủy phân ethyl acetate trong môi trường acid đun nóng thu được acetic acid ($CH_3COOH$) và ethyl alcohol ($C_2H_5OH$).
- **Đáp án đúng:** **$CH_3COOH$ và $C_2H_5OH$**`,

  "Các chất béo bão hòa (chứa gốc acid béo no như stearic acid, palmitic acid) thường tồn tại ở trạng thái nào ở điều kiện thường?":
    `**Giải thích tính chất:**
- Các gốc acid béo no (stearic, palmitic) có cấu trúc mạch hydrocarbon duỗi thẳng dễ xếp chặt, nhiệt độ nóng chảy cao nên ở điều kiện thường chất béo tồn tại ở **trạng thái rắn**.
- **Đáp án đúng:** **Trạng thái rắn**`,

  "Số đồng phân cấu tạo ester ứng với công thức phân tử $C_3H_6O_2$ là bao nhiêu?":
    `**Các công thức cấu tạo ester $C_3H_6O_2$:**
1. $HCOOCH_2CH_3$ (ethyl formate)
2. $CH_3COOCH_3$ (methyl acetate)
- Tổng số đồng phân cấu tạo ester = 2.
- **Đáp án đúng:** **2**`,

  "Số đồng phân cấu tạo ester ứng với công thức $C_3H_6O_2$ là:":
    `**Các công thức cấu tạo ester $C_3H_6O_2$:**
1. $HCOOCH_2CH_3$ (ethyl formate)
2. $CH_3COOCH_3$ (methyl acetate)
- Tổng số đồng phân cấu tạo ester = 2.
- **Đáp án đúng:** **2**`,

  "Thủy phân hoàn toàn hợp chất hữu cơ X mạch hở có công thức cấu tạo $CH_3COOCH=CH_2$ trong môi trường acid thu được sản phẩm gồm:":
    `**Phương trình phản ứng xảy ra:**
$$CH_3COOCH=CH_2 + H_2O \\xrightarrow{H^+, t^\\circ} CH_3COOH + CH_3CHO$$
- $CH_3COOCH=CH_2$ (vinyl acetate) khi thủy phân sinh ra $CH_3COOH$ và alcohol $CH_2=CH-OH$ không bền lập tức chuyển thành $CH_3CHO$ (acetaldehyde).
- **Đáp án đúng:** **$CH_3COOH$ và $CH_3CHO$**`,

  "Thủy phân ester $CH_3COOCH=CH_2$ trong môi trường acid đun nóng thu được sản phẩm gì?":
    `**Phương trình phản ứng xảy ra:**
$$CH_3COOCH=CH_2 + H_2O \\xrightarrow{H^+, t^\\circ} CH_3COOH + CH_3CHO$$
- Vinyl acetate khi thủy phân trong môi trường acid sinh ra acetic acid ($CH_3COOH$) và acetaldehyde ($CH_3CHO$).
- **Đáp án đúng:** **$CH_3COOH$ và $CH_3CHO$**`,

  "Phát biểu nào sau đây KHÔNG đúng khi nói về lipid và chất béo?":
    `**Giải thích:**
Chất béo là triester của glycerol với các **acid béo** (mạch dài, không phân nhánh), không phải với acid vô cơ. do đó phát biểu "Chất béo là triester của glycerol với các acid vô cơ mạnh" là sai.
- **Đáp án đúng:** **Chất béo là triester của glycerol với các acid vô cơ mạnh**`,

  "Đốt cháy hoàn toàn $0,1\\text{ mol}$ một ester no, đơn chức, mạch hở X thu được $7,437\\text{ lít } CO_2$ ở điều kiện chuẩn (đkc). Công thức phân tử của X là:":
    `**Phương trình phản ứng & Các bước giải:**
$$C_nH_{2n}O_2 + \\frac{3n-2}{2} O_2 \\xrightarrow{t^\\circ} n CO_2 + n H_2O$$
- $n_{CO_2} = \\frac{7,437}{24,79} = 0,3\\text{ mol}$.
- Số C = $\\frac{n_{CO_2}}{n_X} = \\frac{0,3}{0,1} = 3 \\Rightarrow$ CTPT là $C_3H_6O_2$.
- **Đáp án đúng:** **$C_3H_6O_2$**`,

  "Đốt cháy hoàn toàn $0,1\\text{ mol}$ ester no đơn chức mạch hở X thu được $0,3\\text{ mol } CO_2$. Công thức phân tử của X là:":
    `**Phương trình phản ứng & Các bước giải:**
$$C_nH_{2n}O_2 + \\frac{3n-2}{2} O_2 \\xrightarrow{t^\\circ} n CO_2 + n H_2O$$
- Số C = $\\frac{n_{CO_2}}{n_X} = \\frac{0,3}{0,1} = 3$.
- Với ester no, đơn chức, mạch hở có 3 C $\\Rightarrow$ CTPT là $C_3H_6O_2$.
- **Đáp án đúng:** **$C_3H_6O_2$**`,

  "Cho $8,8\\text{ gam}$ ethyl acetate phản ứng hoàn toàn với $150\\text{ ml}$ dung dịch $NaOH\\ 1M$. Cô cạn dung dịch sau phản ứng, khối lượng chất rắn khan thu được là:":
    `**Phương trình phản ứng & Các bước giải:**
$$CH_3COOC_2H_5 + NaOH \\xrightarrow{t^\\circ} CH_3COONa + C_2H_5OH$$
- $n_{\\text{ester}} = \\frac{8,8}{88} = 0,1\\text{ mol}$.
- $n_{NaOH} = 0,15 \\times 1 = 0,15\\text{ mol} \\Rightarrow NaOH\\text{ dư } 0,05\\text{ mol}$.
- $m_{\\text{rắn}} = m_{CH_3COONa} + m_{NaOH\\text{ dư}} = 0,1 \\times 82 + 0,05 \\times 40 = 8,2 + 2,0 = 10,2\\text{ gam}$.
- **Đáp án đúng:** **$10,2\\text{ gam}$**`,

  "Cho $8,8\\text{ gam}$ ethyl acetate tác dụng hoàn toàn với $150\\text{ ml}$ dung dịch $NaOH\\ 1M$. Cô cạn dung dịch thu được bao nhiêu gam rắn khan?":
    `**Phương trình phản ứng & Các bước giải:**
$$CH_3COOC_2H_5 + NaOH \\xrightarrow{t^\\circ} CH_3COONa + C_2H_5OH$$
- $n_{\\text{ester}} = \\frac{8,8}{88} = 0,1\\text{ mol}$.
- $n_{NaOH} = 0,15\\text{ mol} \\Rightarrow NaOH\\text{ dư } 0,05\\text{ mol}$.
- $m_{\\text{rắn}} = 0,1 \\times 82 + 0,05 \\times 40 = 10,2\\text{ gam}$.
- **Đáp án đúng:** **10,2 gam**`,

  "Thủy phân hoàn toàn $8,8\\text{ gam}$ ester X có công thức phân tử $C_4H_8O_2$ bằng dung dịch $NaOH$ dư thu được $8,2\\text{ gam}$ muối $RCOONa$. Tên gọi IUPAC của ester X là:":
    `**Phương trình phản ứng & Các bước giải:**
$$RCOOR' + NaOH \\xrightarrow{t^\\circ} RCOONa + R'OH$$
- $n_{\\text{ester}} = \\frac{8,8}{88} = 0,1\\text{ mol} \\Rightarrow n_{RCOONa} = 0,1\\text{ mol}$.
- $M_{RCOONa} = \\frac{8,2}{0,1} = 82 \\Rightarrow R + 67 = 82 \\Rightarrow R = 15\\ (-CH_3)$.
- Ester là $CH_3COOC_2H_5$ (ethyl acetate).
- **Đáp án đúng:** **ethyl acetate**`,

  "Thủy phân hoàn toàn $8,8\\text{ gam}$ ester no đơn chức X bằng dung dịch $NaOH$ vừa đủ thu được $8,2\\text{ gam}$ muối sodium acetate. Tên gọi của X là:":
    `**Phương trình phản ứng & Các bước giải:**
$$CH_3COOR' + NaOH \\xrightarrow{t^\\circ} CH_3COONa + R'OH$$
- $n_{\\text{muối}} = \\frac{8,2}{82} = 0,1\\text{ mol} \\Rightarrow n_{\\text{ester}} = 0,1\\text{ mol}$.
- $M_{\\text{ester}} = \\frac{8,8}{0,1} = 88\\text{ g/mol} \\Rightarrow 59 + R' = 88 \\Rightarrow R' = 29\\ (-C_2H_5)$.
- Ester là $CH_3COOC_2H_5$ (ethyl acetate).
- **Đáp án đúng:** **ethyl acetate**`,

  "Cho $17,6\\text{ gam}$ hỗn hợp hai ester đơn chức no đồng phân cấu tạo của nhau phản ứng vừa đủ với $200\\text{ ml}$ dung dịch $NaOH\\ 1M$. Công thức phân tử chung của hai ester là:":
    `**Phương trình phản ứng & Các bước giải:**
$$C_nH_{2n}O_2 + NaOH \\xrightarrow{t^\\circ} C_nH_{2n-1}O_2Na + R'OH$$
- $n_{\\text{ester}} = n_{NaOH} = 0,2 \\times 1 = 0,2\\text{ mol}$.
- $M_{\\text{ester}} = \\frac{17,6}{0,2} = 88\\text{ g/mol} \\Rightarrow 14n + 32 = 88 \\Rightarrow n = 4$.
- CTPT của hai ester là $C_4H_8O_2$.
- **Đáp án đúng:** **$C_4H_8O_2$**`,

  "Xà phòng hóa hoàn toàn $89\\text{ gam}$ tristearin bằng dung dịch $NaOH$ dư đun nóng. Khối lượng glycerol thu được là:":
    `**Phương trình phản ứng & Các bước giải:**
$$(C_{17}H_{35}COO)_3C_3H_5 + 3NaOH \\xrightarrow{t^\\circ} 3C_{17}H_{35}COONa + C_3H_5(OH)_3$$
- $n_{\\text{tristearin}} = \\frac{89}{890} = 0,1\\text{ mol}$.
- $n_{\\text{glycerol}} = n_{\\text{tristearin}} = 0,1\\text{ mol} \\Rightarrow m_{\\text{glycerol}} = 0,1 \\times 92 = 9,2\\text{ gam}$.
- **Đáp án đúng:** **$9,2\\text{ gam}$**`,

  "Cho $0,1\\text{ mol}$ một ester đơn chức thơm X phản ứng vừa đủ với $200\\text{ ml}$ dung dịch $NaOH\\ 1M$. Cô cạn hoàn toàn dung dịch sau phản ứng thu được hỗn hợp hai muối có tổng khối lượng $18,4\\text{ gam}$. Công thức cấu tạo của X là:":
    `**Phương trình phản ứng & Các bước giải:**
$$HCOOC_6H_5 + 2NaOH \\xrightarrow{t^\\circ} HCOONa + C_6H_5ONa + H_2O$$
- $n_{NaOH} / n_X = 2 \\Rightarrow X$ là ester của phenol có dạng $RCOOC_6H_5$.
- $m_{\\text{2 muối}} = 0,1 \\times (R + 67) + 0,1 \\times 116 = 18,4 \\Rightarrow R = 1\\ (-H)$.
- Công thức cấu tạo của X là $HCOOC_6H_5$.
- **Đáp án đúng:** **$HCOOC_6H_5$**`,

  "Thủy phân một triacylglycerol X cần vừa đủ $0,3\\text{ mol } NaOH$, thu được $9,2\\text{ gam}$ glycerol và hỗn hợp hai muối của oleic acid và palmitic acid theo tỉ lệ mol tương ứng là $2:1$. Tên gọi IUPAC hợp lý của X là:":
    `**Phương trình phản ứng & Các bước giải:**
$$(C_{17}H_{33}COO)_2(C_{15}H_{31}COO)C_3H_5 + 3NaOH \\xrightarrow{t^\\circ} 2C_{17}H_{33}COONa + C_{15}H_{31}COONa + C_3H_5(OH)_3$$
- $n_{\\text{glycerol}} = \\frac{9,2}{92} = 0,1\\text{ mol}$.
- Tỉ lệ gốc oleate : palmitate = $2 : 1 \\Rightarrow$ Triacylglycerol chứa 2 gốc oleoyl và 1 gốc palmitoyl. Tên gọi là dioleoylpalmitoylglycerol.
- **Đáp án đúng:** **dioleoylpalmitoylglycerol**`,

  // Bài 2: Xà phòng và chất giặt rửa
  "Thành phần chính của xà phòng thông thường là muối sodium hoặc potassium của chất nào?":
    `**Giải thích khái niệm:**
Theo định nghĩa, xà phòng là hỗn hợp các muối sodium hoặc potassium của acid béo (thường là $C_{17}H_{35}COONa$, $C_{15}H_{31}COONa$, $C_{17}H_{33}COONa$).
- **Đáp án đúng:** **acid béo**`,

  "Chất giặt rửa tổng hợp thường chứa muối sodium của chất nào sau đây làm tác nhân chính?":
    `**Giải thích khái niệm:**
Chất giặt rửa tổng hợp chứa các muối sodium alkylsulfate ($R-O-SO_3Na$) hoặc sodium alkylbenzenesulfonate ($R-C_6H_4-SO_3Na$).
- **Đáp án đúng:** **alkylsulfate hoặc alkylbenzenesulfonate**`,

  "Phát biểu nào sau đây đúng về cấu tạo của phân tử xà phòng?":
    `**Cấu tạo phân tử xà phòng:**
Phân tử xà phòng gồm 2 phần:
1. Đuôi hydrocarbon dài kị nước (ưa dầu mỡ).
2. Đầu carboxylate ($-COO^-Na^+$ hoặc $-COO^-K^+$) phân cực ưa nước.
- **Đáp án đúng:** **Gồm một đầu phân cực ưa nước và một đuôi hydrocarbon kị nước**`,

  "Chất nào sau đây không được dùng làm nguyên liệu trực tiếp để sản xuất xà phòng?":
    `**Giải thích:**
Xà phòng được sản xuất bằng cách xà phòng hóa chất béo (triacylglycerol) như tristearin, tripalmitin, mỡ lợn với kiềm. Methyl acetate không phải là chất béo nên không dùng làm nguyên liệu sản xuất xà phòng.
- **Đáp án đúng:** **methyl acetate**`,

  "Xà phòng có thể được sản xuất từ nguồn nguyên liệu thiên nhiên nào sau đây?":
    `**Giải thích:**
Chất béo thiên nhiên như dầu dừa, dầu cọ, mỡ lợn, mỡ bò được đun với $NaOH/KOH$ để sản xuất xà phòng.
- **Đáp án đúng:** **dầu dừa hoặc mỡ động vật**`,

  "Phần ưa nước trong phân tử xà phòng thường là nhóm chức nào?":
    `**Giải thích cấu tạo:**
Đầu ưa nước của xà phòng là nhóm ionic phân cực $-COO^-Na^+$ hoặc $-COO^-K^+$.
- **Đáp án đúng:** **$-COO^-Na^+$ hoặc $-COO^-K^+$**`,

  "Tác nhân chính gây ra tính tẩy rửa của xà phòng và chất giặt rửa là do khả năng:":
    `**Cơ chế tẩy rửa:**
Xà phòng làm giảm sức căng bề mặt của nước và nhũ tương hóa các hạt dầu mỡ bẩn vào trong nước để rửa trôi đi.
- **Đáp án đúng:** **hạ sức căng bề mặt và nhũ tương hóa chất béo**`,

  "Chất giặt rửa tổng hợp được sản xuất chủ yếu từ nguồn nguyên liệu nào?":
    `**Giải thích nguồn gốc:**
Chất giặt rửa tổng hợp được chế hóa từ các sản phẩm của ngành công nghiệp chế biến dầu mỏ (gốc hydrocarbon).
- **Đáp án đúng:** **sản phẩm của công nghiệp dầu mỏ**`,

  "Tại sao không nên dùng xà phòng để giặt rửa trong nước cứng?":
    `**Phương trình phản ứng minh họa:**
$$2C_{17}H_{35}COONa + Ca^{2+} \\to (C_{17}H_{35}COO)_2Ca\\downarrow + 2Na^+$$
$$2C_{17}H_{35}COONa + Mg^{2+} \\to (C_{17}H_{35}COO)_2Mg\\downarrow + 2Na^+$$
- Nước cứng chứa các ion $Ca^{2+}$ và $Mg^{2+}$. Các ion này phản ứng với gốc acid béo tạo kết tủa không tan bám vào vải làm mất tác dụng tẩy rửa và làm hỏng vải.
- **Đáp án đúng:** **Muối $Ca^{2+}$ và $Mg^{2+}$ kết tủa với gốc acid béo làm mất tác dụng giặt rửa**`,

  "Ưu điểm nổi bật của chất giặt rửa tổng hợp so với xà phòng thông thường là:":
    `**Giải thích:**
Các muối alkylsulfate hay alkylbenzenesulfonate của $Ca^{2+}$ và $Mg^{2+}$ đều tan tốt trong nước, do đó chất giặt rửa tổng hợp có thể dùng hiệu quả ngay cả trong nước cứng mà không bị mất tác dụng.
- **Đáp án đúng:** **Có thể dùng để giặt rửa hiệu quả ngay cả trong nước cứng**`,

  "Cơ chế tẩy rửa của xà phòng dựa trên hoạt động của các hạt mixen (micelle). Đầu phân cực của hạt mixen sẽ:":
    `**Cơ chế hạt mixen:**
Khi phân tử xà phòng phân tán trong nước, đuôi kị nước quay vào trong bám lấy vết dầu mỡ, còn đầu phân cực ưa nước **quay ra phía ngoài, liên kết với các phân tử nước** để kéo hạt dầu lơ lửng vào nước.
- **Đáp án đúng:** **Quay ra phía ngoài, liên kết với các phân tử nước**`,

  "Đuôi kị nước của phân tử xà phòng bám vào vết bẩn hữu cơ vì:":
    `**Giải thích tương tác:**
Đuôi hydrocarbon của xà phòng và các vết bẩn dầu mỡ hữu cơ **đều là các cấu trúc không phân cực** nên dễ dàng hòa tan và bám chặt vào nhau.
- **Đáp án đúng:** **Chúng đều là các cấu trúc không phân cực**`,

  "Tại sao dung dịch xà phòng có môi trường kiềm yếu (pH > 7)?":
    `**Phương trình phản ứng minh họa:**
$$C_{17}H_{35}COO^- + H_2O \\rightleftharpoons C_{17}H_{35}COOH + OH^-$$
- Gốc carboxylate ($RCOO^-$) của acid béo yếu là một base liên hợp yếu. Khi tan trong nước, nó bị thủy phân giải phóng ion $OH^-$ làm cho dung dịch có môi trường kiềm yếu ($pH > 7$).
- **Đáp án đúng:** **Vì gốc carboxylate của acid béo là base liên hợp yếu bị thủy phân trong nước**`,

  "Ưu điểm của việc sử dụng xà phòng so với chất giặt rửa tổng hợp là gì?":
    `**So sánh môi trường:**
Gốc acid béo trong xà phòng có nguồn gốc thiên nhiên (mạch carbon không phân nhánh) nên dễ bị vi sinh vật phân hủy sinh học trong tự nhiên, thân thiện với môi trường hơn hẳn chất giặt rửa tổng hợp.
- **Đáp án đúng:** **Xà phòng dễ bị vi sinh vật phân hủy sinh học, thân thiện với môi trường hơn**`,

  "Hiện tượng xảy ra khi nhỏ vài giọt dung dịch nước chanh (acid) vào bát đựng nước xà phòng là gì?":
    `**Phương trình phản ứng xảy ra:**
$$C_{17}H_{35}COONa + H^+ \\to C_{17}H_{35}COOH\\downarrow + Na^+$$
- Nước chanh chứa citric acid ($H^+$). $H^+$ đẩy acid béo tự do ($C_{17}H_{35}COOH$) không tan trong nước ra khỏi muối, tạo thành kết tủa đục lơ lửng.
- **Đáp án đúng:** **Xuất hiện kết tủa đục do acid béo tự do bị giải phóng**`,

  "Tại sao chất giặt rửa tổng hợp chứa nhánh hydrocarbon trong mạch đuôi kị nước bị hạn chế sử dụng?":
    `**Giải thích:**
Các đuôi hydrocarbon có nhánh phân nhánh cồng kềnh rất khó bị các vi sinh vật trong nước phân hủy sinh học, gây hiện tượng tích tụ bọt xà phòng kéo dài và ô nhiễm môi trường nước.
- **Đáp án đúng:** **Vì chúng khó bị vi sinh vật phân hủy, gây ô nhiễm nguồn nước**`,

  "Khi giặt quần áo bằng xà phòng trong nước giếng khoan chứa nhiều muối sắt ($Fe^{2+}$, $Fe^{3+}$), quần áo dễ bị:":
    `**Phương trình phản ứng xảy ra:**
$$2C_{17}H_{35}COONa + Fe^{2+} \\to (C_{17}H_{35}COO)_2Fe\\downarrow + 2Na^+$$
- Muối sắt kết tủa với gốc acid béo thành hợp chất sắt màu nâu/ố vàng bám dính chặt lên sợi vải làm quần áo bị ố vàng.
- **Đáp án đúng:** **ố vàng do kết tủa của muối sắt với acid béo bám lên vải**`,

  "Tác dụng chính của việc vò, chà sát quần áo hoặc quay lồng máy giặt là gì?":
    `**Giải thích cơ học:**
Tác dụng cơ học (vò, xát, quay) hỗ trợ phân chia giọt dầu mỡ thành các hạt cực nhỏ, giúp các hạt mixen bọc lấy và kéo vết dầu mỡ lơ lửng vào trong nước dễ dàng hơn.
- **Đáp án đúng:** **Giúp các hạt mixen kéo vết dầu mỡ lơ lửng vào nước dễ dàng hơn**`,

  "Xà phòng hóa hoàn toàn $17,8\\text{ gam}$ tristearin ($M=890$) bằng dung dịch $NaOH$ dư. Khối lượng sodium stearate ($M=306$) thu được là:":
    `**Phương trình phản ứng & Các bước giải:**
$$(C_{17}H_{35}COO)_3C_3H_5 + 3NaOH \\xrightarrow{t^\\circ} 3C_{17}H_{35}COONa + C_3H_5(OH)_3$$
- $n_{\\text{tristearin}} = \\frac{17,8}{890} = 0,02\\text{ mol}$.
- Theo PTHH: $n_{\\text{sodium stearate}} = 3 \\times n_{\\text{tristearin}} = 3 \\times 0,02 = 0,06\\text{ mol}$.
- $m_{\\text{sodium stearate}} = 0,06 \\times 306 = 18,36\\text{ gam}$.
- **Đáp án đúng:** **18,36 gam**`,

  "Để phản ứng xà phòng hóa vừa đủ với $8,06\\text{ kg}$ tripalmitin ($M=806$) cần dùng vừa đủ bao nhiêu gam $NaOH$?":
    `**Phương trình phản ứng & Các bước giải:**
$$(C_{15}H_{31}COO)_3C_3H_5 + 3NaOH \\xrightarrow{t^\\circ} 3C_{15}H_{31}COONa + C_3H_5(OH)_3$$
- $n_{\\text{tripalmitin}} = \\frac{8060\\text{ g}}{806} = 10\\text{ mol}$.
- $n_{NaOH} = 3 \\times n_{\\text{tripalmitin}} = 3 \\times 10 = 30\\text{ mol}$.
- $m_{NaOH} = 30 \\times 40 = 1200\\text{ gam}$.
- **Đáp án đúng:** **1200 gam**`,

  "Đun nóng chất béo chứa $89\%$ tristearin còn lại là tạp chất không phản ứng với $NaOH$. Khối lượng glycerol thu được từ $100\\text{ gam}$ chất béo trên là:":
    `**Phương trình phản ứng & Các bước giải:**
$$(C_{17}H_{35}COO)_3C_3H_5 + 3NaOH \\xrightarrow{t^\\circ} 3C_{17}H_{35}COONa + C_3H_5(OH)_3$$
- $m_{\\text{tristearin}} = 100 \\times 89\\% = 89\\text{ gam} \\Rightarrow n_{\\text{tristearin}} = \\frac{89}{890} = 0,1\\text{ mol}$.
- $n_{\\text{glycerol}} = n_{\\text{tristearin}} = 0,1\\text{ mol} \\Rightarrow m_{\\text{glycerol}} = 0,1 \\times 92 = 9,2\\text{ gam}$.
- **Đáp án đúng:** **9,2 gam**`,

  "Xà phòng hóa hoàn toàn $44,5\\text{ gam}$ một chất béo trung tính cần dùng vừa đủ $6,0\\text{ gam } NaOH$. Khối lượng muối thu được sau khi cô cạn dung dịch là:":
    `**Phương trình phản ứng & Các bước giải:**
$$\\text{Chất béo} + 3NaOH \\xrightarrow{t^\\circ} \\text{Muối} + \\text{Glycerol}$$
- $n_{NaOH} = \\frac{6,0}{40} = 0,15\\text{ mol} \\Rightarrow n_{\\text{glycerol}} = \\frac{0,15}{3} = 0,05\\text{ mol}$.
- $m_{\\text{glycerol}} = 0,05 \\times 92 = 4,6\\text{ gam}$.
- Bảo toàn khối lượng: $m_{\\text{muối}} = m_{\\text{chất béo}} + m_{NaOH} - m_{\\text{glycerol}} = 44,5 + 6,0 - 4,6 = 45,9\\text{ gam}$.
- **Đáp án đúng:** **45,9 gam**`,

  "Từ $1\\text{ tấn}$ chất béo chứa $80\%$ triolein ($M=884$), tính khối lượng sodium oleate ($M=304$) tối đa thu được (hiệu suất phản ứng đạt $90\%$):":
    `**Phương trình phản ứng & Các bước giải:**
$$(C_{17}H_{33}COO)_3C_3H_5 + 3NaOH \\xrightarrow{t^\\circ} 3C_{17}H_{33}COONa + C_3H_5(OH)_3$$
- $m_{\\text{triolein}} = 1000 \\times 80\\% = 800\\text{ kg} \\Rightarrow n_{\\text{triolein}} = \\frac{800}{884}\\text{ kmol}$.
- $n_{\\text{sodium oleate LT}} = 3 \\times \\frac{800}{884}\\text{ kmol}$.
- $m_{\\text{sodium oleate LT}} = 3 \\times \\frac{800}{884} \\times 304 = 825,338\\text{ kg}$.
- $m_{\\text{thực tế (H=90\\%)}} = 825,338 \\times 90\\% = 744,3\\text{ kg}$.
- **Đáp án đúng:** **744,3 kg**`,

  "Một nguồn nước cứng chứa $0,005\\text{ mol } Ca^{2+}$. Khối lượng sodium stearate ($M=306$) tối đa bị kết tủa mất hoạt tính tẩy rửa là:":
    `**Phương trình phản ứng & Các bước giải:**
$$2C_{17}H_{35}COONa + Ca^{2+} \\to (C_{17}H_{35}COO)_2Ca\\downarrow + 2Na^+$$
- $n_{\\text{sodium stearate}} = 2 \\times n_{Ca^{2+}} = 2 \\times 0,005 = 0,01\\text{ mol}$.
- $m_{\\text{sodium stearate}} = 0,01 \\times 306 = 3,06\\text{ gam}$.
- **Đáp án đúng:** **3,06 gam**`,

  "Để xà phòng hóa $44,2\\text{ gam}$ chất béo trung tính cần dùng vừa đủ $150\\text{ ml}$ dung dịch $NaOH\\ 1M$. Sau khi phản ứng hoàn thành, cô cạn thu được muối có khối lượng là:":
    `**Phương trình phản ứng & Các bước giải:**
$$\\text{Chất béo} + 3NaOH \\xrightarrow{t^\\circ} \\text{Muối} + \\text{Glycerol}$$
- $n_{NaOH} = 0,15 \\times 1 = 0,15\\text{ mol} \\Rightarrow n_{\\text{glycerol}} = \\frac{0,15}{3} = 0,05\\text{ mol}$.
- $m_{NaOH} = 0,15 \\times 40 = 6,0\\text{ gam}$; $m_{\\text{glycerol}} = 0,05 \\times 92 = 4,6\\text{ gam}$.
- Bảo toàn khối lượng: $m_{\\text{muối}} = 44,2 + 6,0 - 4,6 = 45,6\\text{ gam}$.
- **Đáp án đúng:** **45,6 gam**`,

  // Bài 3: Ôn tập chương 1 thêm các câu ôn tập
  "Ester no, đơn chức, mạch hở có công thức phân tử tổng quát là gì?":
    `**Giải thích:**
Ester no, đơn chức, mạch hở chứa 1 nhóm $-COO-$ và gốc hydrocarbon no. Công thức tổng quát là $C_nH_{2n}O_2$ với $n \\ge 2$.
- **Đáp án đúng:** **$C_nH_{2n}O_2\\ (n \\ge 2)$**`,

  "Alcohol nào tạo nên cấu trúc chất béo?":
    `**Giải thích:**
Chất béo là triester của glycerol ($C_3H_5(OH)_3$) với các acid béo.
- **Đáp án đúng:** **glycerol**`,

  "Cặp chất nào tham gia phản ứng ester hóa tạo ethyl acetate?":
    `**Phương trình phản ứng xảy ra:**
$$CH_3COOH + C_2H_5OH \\stackrel{H_2SO_4\\text{ đặc}, t^\\circ}{\\rightleftharpoons} CH_3COOC_2H_5 + H_2O$$
- Để tạo ra ethyl acetate ($CH_3COOC_2H_5$), cần đun acetic acid ($CH_3COOH$) với ethyl alcohol ($C_2H_5OH$).
- **Đáp án đúng:** **$CH_3COOH$ và $C_2H_5OH$**`,

  "Nhiệt độ sôi của ester so với alcohol có cùng phân tử khối thường như thế nào?":
    `**Giải thích:**
Ester không tạo được liên kết hydrogen liên phân tử, trong khi alcohol tạo được liên kết hydrogen mạnh. Do đó nhiệt độ sôi của ester thấp hơn đáng kể.
- **Đáp án đúng:** **Thấp hơn đáng kể**`,

  "Bản chất của phản ứng xà phòng hóa trong dung dịch kiềm là:":
    `**Phương trình phản ứng minh họa:**
$$CH_3COOC_2H_5 + NaOH \\xrightarrow{t^\\circ} CH_3COONa + C_2H_5OH$$
- Phản ứng thủy phân ester trong môi trường kiềm đun nóng xảy ra hoàn toàn một chiều.
- **Đáp án đúng:** **Phản ứng một chiều**`,

  "Chất béo lỏng chứa chủ yếu gốc acid béo nào sau đây?":
    `**Giải thích:**
Chất béo lỏng (dầu thực vật) chứa chủ yếu các gốc acid béo không bão hòa như oleic acid ($C_{17}H_{33}COOH$).
- **Đáp án đúng:** **oleic acid**`,

  "Công thức cấu tạo thu gọn của palmitic acid là gì?":
    `**Giải thích:**
Palmitic acid là acid béo no chứa 16 C: $C_{15}H_{31}COOH$.
- **Đáp án đúng:** **$C_{15}H_{31}COOH$**`,

  "Cho sơ đồ chuyển hóa: triolein $\\xrightarrow{+H_2\\ (Ni, t^\\circ)} X \\xrightarrow{+NaOH} Y$. Muối Y là gì?":
    `**Phương trình phản ứng xảy ra:**
1. $(C_{17}H_{33}COO)_3C_3H_5 + 3H_2 \\xrightarrow{Ni, t^\\circ} (C_{17}H_{35}COO)_3C_3H_5$ (Tristearin X).
2. $(C_{17}H_{35}COO)_3C_3H_5 + 3NaOH \\xrightarrow{t^\\circ} 3C_{17}H_{35}COONa + C_3H_5(OH)_3$.
- Muối Y thu được là sodium stearate ($C_{17}H_{35}COONa$).
- **Đáp án đúng:** **$C_{17}H_{35}COONa$**`,

  "So sánh khả năng tan trong nước của ester với alcohol và carboxylic acid cùng phân tử khối?":
    `**Giải thích:**
Ester không tạo được liên kết hydrogen với các phân tử nước, do đó ester rất ít tan trong nước.
- **Đáp án đúng:** **Ester rất ít tan trong nước**`,

  "Thủy phân hoàn toàn ester đơn chức X thu được hai sản phẩm đều có phản ứng tráng bạc. Công thức cấu tạo phù hợp của X là:":
    `**Phương trình phản ứng xảy ra:**
$$HCOOCH=CH_2 + H_2O \\xrightarrow{H^+, t^\\circ} HCOOH + CH_3CHO$$
- $HCOOH$ (formic acid) và $CH_3CHO$ (acetaldehyde) đều chứa nhóm $-CHO$ nên cả hai sản phẩm sinh ra đều tham gia phản ứng tráng bạc với $AgNO_3/NH_3$.
- Ester phù hợp là $HCOOCH=CH_2$ (vinyl formate).
- **Đáp án đúng:** **$HCOOCH=CH_2$**`,

  "Tại sao dầu mỡ động thực vật để lâu ngày trong không khí bị ôi thiu?":
    `**Giải thích:**
Các liên kết đôi $C=C$ không bão hòa trong chất béo bị oxy không khí oxy hóa chậm tạo ra các hợp chất peroxide, sau đó phân hủy thành các aldehyde và acid mạch ngắn có mùi hôi thối khó chịu (hiện tượng ôi mỡ).
- **Đáp án đúng:** **Do liên kết đôi $C=C$ của chất béo bị oxi hóa chậm bởi oxygen không khí tạo thành peroxide rồi phân hủy thành các aldehyde có mùi khó chịu**`,

  "Phản ứng ester hóa giữa carboxylic acid và alcohol có đặc điểm gì?":
    `**Phương trình phản ứng minh họa:**
$$CH_3COOH + C_2H_5OH \\stackrel{H_2SO_4\\text{ đặc}, t^\\circ}{\\rightleftharpoons} CH_3COOC_2H_5 + H_2O$$
- Phản ứng ester hóa là phản ứng thuận nghịch, diễn ra chậm và cần xúc tác acid mạnh ($H_2SO_4$ đặc) đun nóng.
- **Đáp án đúng:** **Là phản ứng thuận nghịch, có xúc tác acid mạnh ($H_2SO_4$ đặc) và đun nóng**`,

  "Tại sao dầu mỡ bôi trơn máy móc không thể dùng làm xà phòng?":
    `**Giải thích:**
Dầu mỡ bôi trơn máy móc là các alkane/hydrocarbon mạch dài thu được từ chưng cất dầu mỏ, không phải là chất béo (triester của glycerol) nên không có phản ứng xà phòng hóa với kiềm.
- **Đáp án đúng:** **Vì dầu mỡ bôi trơn là hỗn hợp hydrocarbon, không phải triester của glycerol**`,

  "Thủy phân hoàn toàn $13,2\\text{ gam}$ ester đơn chức X bằng dung dịch $KOH$ dư thu được $9,2\\text{ gam}$ alcohol đơn chức Y. Tên gọi của X là:":
    `**Phương trình phản ứng & Các bước giải:**
$$RCOOR' + KOH \\xrightarrow{t^\\circ} RCOOK + R'OH$$
- $n_{\\text{ester}} = n_{\\text{alcohol}} = a\\text{ mol}$.
- $M_{\\text{ester}} = \\frac{13,2}{a}$; $M_{\\text{alcohol}} = \\frac{9,2}{a} \\Rightarrow \\frac{M_{\\text{ester}}}{M_{\\text{alcohol}}} = \\frac{13,2}{9,2} = \\frac{33}{23}$.
- Nếu Y là $C_2H_5OH$ ($M=46$) $\\Rightarrow a = 0,2\\text{ mol} \\Rightarrow M_{\\text{ester}} = \\frac{13,2}{0,2} = 66$ (không thỏa mãn).
- Với $a = 0,2\\text{ mol}$, $M_{\\text{ester}} = 88$ ($CH_3COOC_2H_5$) $\\Rightarrow n = 0,15\\text{ mol} \\Rightarrow M_{\\text{alcohol}} = \\frac{9,2}{0,2} = 46\\ (C_2H_5OH)$.
- Ester X là $CH_3COOC_2H_5$ (ethyl acetate).
- **Đáp án đúng:** **ethyl acetate**`,

  "Cho $14,8\\text{ gam}$ hỗn hợp hai ester đồng phân đơn chức no tác dụng vừa đủ với $200\\text{ ml}$ dung dịch $NaOH\\ 1M$. Công thức phân tử chung của hai ester là:":
    `**Phương trình phản ứng & Các bước giải:**
$$C_nH_{2n}O_2 + NaOH \\xrightarrow{t^\\circ} C_nH_{2n-1}O_2Na + R'OH$$
- $n_{\\text{ester}} = n_{NaOH} = 0,2 \\times 1 = 0,2\\text{ mol}$.
- $M_{\\text{ester}} = \\frac{14,8}{0,2} = 74\\text{ g/mol} \\Rightarrow 14n + 32 = 74 \\Rightarrow 14n = 42 \\Rightarrow n = 3$.
- CTPT của hai ester là $C_3H_6O_2$.
- **Đáp án đúng:** **$C_3H_6O_2$**`,

  "Đốt cháy hoàn toàn một lượng ester no đơn chức mạch hở X cần dùng $0,35\\text{ mol } O_2$ thu được $0,3\\text{ mol } CO_2$. Công thức phân tử của X là:":
    `**Phương trình phản ứng & Các bước giải:**
$$C_nH_{2n}O_2 + \\frac{3n-2}{2} O_2 \\xrightarrow{t^\\circ} n CO_2 + n H_2O$$
- Đốt cháy ester no đơn chức mạch hở: $n_{CO_2} = n_{H_2O} = 0,3\\text{ mol}$.
- Bảo toàn nguyên tố O: $2n_X + 2n_{O_2} = 2n_{CO_2} + n_{H_2O} \\Rightarrow 2n_X + 2(0,35) = 2(0,3) + 0,3 = 0,9 \\Rightarrow 2n_X = 0,2 \\Rightarrow n_X = 0,1\\text{ mol}$.
- Số C = $\\frac{n_{CO_2}}{n_X} = \\frac{0,3}{0,1} = 3 \\Rightarrow$ CTPT là $C_3H_6O_2$.
- **Đáp án đúng:** **$C_3H_6O_2$**`,

  "Xà phòng hóa hoàn toàn m gam triolein bằng dung dịch $NaOH$ dư thu được $9,2\\text{ gam}$ glycerol. Giá trị của m là:":
    `**Phương trình phản ứng & Các bước giải:**
$$(C_{17}H_{33}COO)_3C_3H_5 + 3NaOH \\xrightarrow{t^\\circ} 3C_{17}H_{33}COONa + C_3H_5(OH)_3$$
- $n_{\\text{glycerol}} = \\frac{9,2}{92} = 0,1\\text{ mol}$.
- $n_{\\text{triolein}} = n_{\\text{glycerol}} = 0,1\\text{ mol}$.
- $m = 0,1 \\times 884 = 88,4\\text{ gam}$.
- **Đáp án đúng:** **88,4 gam**`
};

writeModule(path.join(process.cwd(), 'src/data/explanations_ch1.ts'), 'ch1Explanations', ch1Map);
