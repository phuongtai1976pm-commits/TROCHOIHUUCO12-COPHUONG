import { Question } from '../types';

function buildQuestion(
  level: "biet" | "hieu" | "vandung",
  question: string,
  correctAnswer: string,
  wrongAnswers: string[]
): Question {
  const options = [correctAnswer, ...wrongAnswers];
  const seed = question.length;
  const shuffledOptions = [...options];
  
  let r = seed;
  for (let i = shuffledOptions.length - 1; i > 0; i--) {
    r = (r * 9301 + 49297) % 233280;
    const j = Math.floor((r / 233280) * (i + 1));
    const temp = shuffledOptions[i];
    shuffledOptions[i] = shuffledOptions[j];
    shuffledOptions[j] = temp;
  }
  
  const correctIndex = shuffledOptions.indexOf(correctAnswer);
  
  return {
    level,
    question,
    options: shuffledOptions,
    correct: correctIndex >= 0 ? correctIndex : 0
  };
}

export const chapter3Questions: Record<string, Question[]> = {
  "Bài 8: Amine": [

    buildQuestion(
      "biet",
      "Hợp chất nào sau đây thuộc loại amine bậc một?",
      "$CH_3NH_2$",
      ["$CH_3-NH-CH_3$", "$(CH_3)_3N$", "$C_6H_5-NH-CH_3$"]
    ),
    buildQuestion(
      "biet",
      "Dimethylamine có công thức cấu tạo thu gọn là chất nào?",
      "$CH_3-NH-CH_3$",
      ["$CH_3-NH_2$", "$(CH_3)_3N$", "$C_2H_5NH_2$"]
    ),
    buildQuestion(
      "biet",
      "Amine thơm tiêu biểu nhất, có công thức phân tử $C_6H_5NH_2$ tên là gì?",
      "aniline",
      ["methylamine", "ethylamine", "benzylamine"]
    ),
    buildQuestion(
      "biet",
      "Ở điều kiện thường, amine nào sau đây tồn tại ở thể khí, có mùi khai độc hại?",
      "methylamine",
      ["aniline", "benzylamine", "diethylamine"]
    ),
    buildQuestion(
      "biet",
      "Phản ứng hóa học đặc trưng của các amine thể hiện tính base là phản ứng với dung dịch chất nào?",
      "dung dịch acid",
      ["dung dịch kiềm", "nước vôi trong dư", "dung dịch muối ăn"]
    ),
    buildQuestion(
      "biet",
      "Aniline phản ứng với nước bromine tạo ra kết tủa có màu gì?",
      "màu trắng",
      ["màu vàng nhạt", "màu xanh lam đậm", "màu đỏ gạch"]
    ),
    buildQuestion(
      "biet",
      "Công thức cấu tạo thu gọn của trimethylamine là chất nào?",
      "$(CH_3)_3N$",
      ["$CH_3NH_2$", "$(CH_3)_2NH$", "$C_3H_7NH_2$"]
    ),
    buildQuestion(
      "biet",
      "Công thức phân tử tổng quát của amine no, đơn chức, mạch hở là:",
      "$C_nH_{2n+3}N$",
      ["$C_nH_{2n+1}N$", "$C_nH_{2n+5}N$", "$C_nH_{2n+1}NO_2$"]
    ),
    buildQuestion(
      "hieu",
      "Tại sao methylamine làm quỳ tím hóa xanh trong khi aniline lại không làm quỳ tím đổi màu?",
      "Vì gốc phenyl ($C_6H_5$) trong aniline hút electron mạnh làm giảm mật độ điện tích âm trên nguyên tử N, tính base cực kỳ yếu",
      ["Vì gốc methyl ($CH_3$) trong methylamine hút electron làm giảm tính acid của amine", "Vì phân tử aniline kị nước hoàn toàn không phân li trong dung môi", "Vì aniline là chất rắn phân nhánh cản trở phản ứng của ion $H^+$"]
    ),
    buildQuestion(
      "hieu",
      "Trật tự sắp xếp lực base tăng dần nào sau đây là chính xác?",
      "aniline < ammonia < methylamine < dimethylamine",
      ["ammonia < aniline < methylamine < dimethylamine", "dimethylamine < methylamine < ammonia < aniline", "methylamine < dimethylamine < ammonia < aniline"]
    ),
    buildQuestion(
      "hieu",
      "Tại sao khi rửa dụng cụ thí nghiệm dính aniline, người ta thường tráng bằng dung dịch acid hydrochloric ($HCl$) rồi mới rửa bằng nước?",
      "Vì aniline tác dụng với $HCl$ tạo muối phenylammonium chloride tan rất tốt trong nước",
      ["Vì $HCl$ phản ứng oxi hóa aniline thành khí carbon dioxide bay đi", "Vì aniline tự hòa tan trong dung môi acid tạo hợp chất dẻo", "Vì $HCl$ làm aniline thăng hoa bay hơi cực nhanh"]
    ),
    buildQuestion(
      "hieu",
      "Hiện tượng xảy ra khi nhỏ vài giọt dung dịch nước bromine vào ống nghiệm chứa aniline là:",
      "Xuất hiện kết tủa màu trắng đục của 2,4,6-tribromoaniline",
      ["Dung dịch từ màu vàng chuyển hoàn toàn sang xanh lam", "Sủi bọt khí không màu sủi mạnh mẽ", "Có lớp bạc sáng bóng bám vào thành ống"]
    ),
    buildQuestion(
      "hieu",
      "Khi để aniline lâu ngày trong không khí, aniline chuyển từ không màu sang màu đen hoặc nâu đen là do:",
      "Aniline bị oxi hóa chậm bởi oxygen không khí tạo sản phẩm phụ có màu",
      ["Aniline phản ứng cộng nước không khí tạo alcohol đa chức", "Aniline tự phân hủy thành carbon và khí hydrogen", "Aniline bị bay hơi một phần tạo tinh thể màu đen"]
    ),
    buildQuestion(
      "hieu",
      "Để nhận biết hai lọ mất nhãn chứa dung dịch aniline và dung dịch methylamine, ta dùng thuốc thử đơn giản nào?",
      "quỳ tím hoặc nước bromine",
      ["dung dịch muối ăn $NaCl$", "dung dịch $Cu(OH)_2$ ở nhiệt độ thường", "dung dịch phenol thơm"]
    ),
    buildQuestion(
      "hieu",
      "Phát biểu nào sau đây đúng về tính chất vật lý của các amine?",
      "Các amine khí có mùi khai khó chịu, độc và tan rất tốt trong nước",
      ["Mọi amine đều là chất lỏng sánh không tan trong nước", "Aniline có mùi thơm dịu của hoa quả chín tự nhiên", "Amine có nhiệt độ sôi cao hơn hẳn carboxylic acid đồng phân"]
    ),
    buildQuestion(
      "hieu",
      "Bản chất cấu tạo hóa học giúp amine thể hiện tính base là gì?",
      "Nguyên tử nitrogen trong phân tử còn cặp electron tự do có khả năng nhận proton $H^+$",
      ["Do phân tử amine chứa nhóm chức carboxyl mang tính kiềm", "Do liên kết giữa nitrogen và carbon cực kỳ kém bền dễ đứt", "Do nhóm amino phân li hoàn toàn thành ion $OH^-$ tự do trong nước"]
    ),
    buildQuestion(
      "hieu",
      "Giải thích tại sao khi ăn cá tanh (chứa các amine khí như trimethylamine), người ta thường dùng chanh hoặc giấm khi sơ chế hoặc nấu kèm?",
      "Vì acid hữu cơ trong chanh/giấm phản ứng trung hòa các amine tạo muối không bay hơi, làm mất mùi tanh",
      ["Vì nước chanh làm bay hơi hoàn toàn gốc carbon của amine", "Vì giấm ăn oxi hóa các amine thành khí không mùi độc đáo", "Vì chanh làm đông tụ hoàn toàn các hạt mỡ cá bám dính"]
    ),
    buildQuestion(
      "hieu",
      "Sản phẩm sinh ra khi phản ứng hoàn toàn giữa ethylamine ($C_2H_5NH_2$) và nitric acid ($HNO_3$) là chất nào?",
      "ethylammonium nitrate",
      ["ethyl nitrate và khí ammonia", "nitroethane và nước", "ethylammonium chloride"]
    ),
    buildQuestion(
      "hieu",
      "Cho $9,3\\text{ gam}$ aniline ($M=93$) tác dụng hoàn toàn với dung dịch $HCl$ dư. Khối lượng muối khan thu được là:",
      "12,95 gam",
      ["11,12 gam", "14,50 gam", "13,85 gam"]
    ),
    buildQuestion(
      "hieu",
      "Cho $4,5\\text{ gam}$ một amine no đơn chức mạch hở tác dụng vừa đủ với $100\\text{ ml}$ dung dịch $HCl\\ 1M$. Công thức phân tử của amine là:",
      "$C_2H_7N$",
      ["$CH_5N$", "$C_3H_9N$", "$C_4H_{11}N$"]
    ),
    buildQuestion(
      "vandung",
      "Để trung hòa hoàn toàn hỗn hợp gồm methylamine và dimethylamine cần vừa đủ $200\\text{ ml}$ dung dịch $HCl\\ 1M$. Tổng số mol của hai amine trong hỗn hợp là:",
      "0,2 mol",
      ["0,1 mol", "0,3 mol", "0,4 mol"]
    ),
    buildQuestion(
      "vandung",
      "Cho m gam aniline tác dụng hoàn toàn với dung dịch nước bromine dư thu được $33,0\\text{ gam}$ kết tủa trắng 2,4,6-tribromoaniline ($M=330$). Giá trị của m là:",
      "9,3 gam",
      ["4,65 gam", "18,6 gam", "13,95 gam"]
    ),
    buildQuestion(
      "vandung",
      "Đốt cháy hoàn toàn $0,1\\text{ mol}$ một amine đơn chức no mạch hở thu được $7,437\\text{ lít } CO_2$ ở điều kiện chuẩn (đkc). Công thức phân tử của amine đó là:",
      "$C_3H_9N$",
      ["$C_2H_7N$", "$CH_5N$", "$C_4H_{11}N$"]
    ),
    buildQuestion(
      "vandung",
      "Cho $15,0\\text{ gam}$ hỗn hợp gồm aniline và ethylamine phản ứng hoàn toàn với dung dịch $HCl$ dư, cô cạn dung dịch thu được $22,3\\text{ gam}$ muối. Phần trăm khối lượng của aniline trong hỗn hợp ban đầu là:",
      "62,0%",
      ["38,0%", "50,0%", "45,5%"]
    ),
    buildQuestion(
      "vandung",
      "Thể tích khí methylamine ở điều kiện chuẩn (đkc) cần để phản ứng vừa đủ với $150\\text{ ml}$ dung dịch $H_2SO_4\\ 0,5M$ là:",
      "3,719 lít",
      ["1,859 lít", "2,479 lít", "4,958 lít"]
    )
  
  ],
  "Bài 9: Amino acid và peptide": [

    buildQuestion(
      "biet",
      "Amino acid là loại hợp chất hữu cơ tạp chức chứa đồng thời những nhóm chức nào?",
      "amino ($-NH_2$) và carboxyl ($-COOH$)",
      ["amino ($-NH_2$) và hydroxyl ($-OH$)", "carboxyl ($-COOH$) và carbonyl ($-CO-$)", "amino ($-NH_2$) và ester ($-COO-$)"]
    ),
    buildQuestion(
      "biet",
      "Amino acid đơn giản nhất có công thức cấu tạo $H_2N-CH_2-COOH$ tên gọi IUPAC thông dụng là gì?",
      "glycine",
      ["alanine", "valine", "lysine"]
    ),
    buildQuestion(
      "biet",
      "Alanine có công thức cấu tạo thu gọn là chất nào?",
      "$CH_3-CH(NH_2)-COOH$",
      ["$H_2N-CH_2-COOH$", "$(CH_3)_2CH-CH(NH_2)-COOH$", "$H_2N-(CH_2)_4-CH(NH_2)-COOH$"]
    ),
    buildQuestion(
      "biet",
      "Trong phân tử peptide, liên kết peptide là liên kết giữa các nhóm nào?",
      "nhóm $-CO-$ và nhóm $-NH-$ của các gốc alpha-amino acid kề nhau",
      ["nhóm $-COO-$ và nhóm $-NH-$ của các gốc amino acid mạch nhánh", "nhóm $-CO-$ và nhóm $-O-$ của hai gốc monosaccharide", "nhóm $-NH_2-$ và nhóm $-COOH-$ của mạch carbon thơm"]
    ),
    buildQuestion(
      "biet",
      "Hợp chất chứa hai gốc alpha-amino acid liên kết với nhau bằng liên kết peptide gọi là gì?",
      "dipeptide",
      ["tripeptide", "polypeptide", "oligopeptide"]
    ),
    buildQuestion(
      "biet",
      "Amino acid nào sau đây có chứa hai nhóm carboxyl ($-COOH$) trong phân tử?",
      "glutamic acid",
      ["glycine", "alanine", "lysine"]
    ),
    buildQuestion(
      "biet",
      "Trạng thái vật lý tự nhiên của các amino acid ở điều kiện thường là:",
      "chất rắn kết tinh, dễ tan trong nước, nhiệt độ nóng chảy cao",
      ["chất lỏng sánh dẻo, kị nước, không màu", "chất bột mềm, màu vàng nhạt, dễ thăng hoa", "chất khí không màu có mùi thơm nồng nặc"]
    ),
    buildQuestion(
      "biet",
      "Peptide nào sau đây có phản ứng màu biure đặc trưng tạo phức màu tím với $Cu(OH)_2/NaOH$?",
      "tripeptide trở lên (có từ 2 liên kết peptide trở lên)",
      ["dipeptide đơn giản nhất", "mọi peptide mạch hở", "chỉ có polypeptide bậc cao"]
    ),
    buildQuestion(
      "hieu",
      "Tại sao các amino acid ở điều kiện thường lại là các chất rắn kết tinh, có nhiệt độ nóng chảy cao và tan tốt trong nước?",
      "Vì chúng tồn tại chủ yếu dưới dạng cấu trúc ion lưỡng cực có lực hút tĩnh điện mạnh",
      ["Vì phân tử khối của chúng cực kỳ lớn tạo cấu trúc mạng lưới", "Vì chúng tạo liên kết cộng hóa trị bền vững với các khoáng chất", "Vì phân tử amino acid chứa nhiều liên kết đôi mạch thẳng dẻo"]
    ),
    buildQuestion(
      "hieu",
      "Tại sao amino acid có tính chất lưỡng tính (vừa phản ứng với acid vừa phản ứng với base)?",
      "Vì phân tử chứa đồng thời nhóm chức base ($-NH_2$) và nhóm chức acid ($-COOH$)",
      ["Vì chúng có khả năng tự oxi hóa hoàn toàn trong nước", "Vì phân tử dễ dàng bị thủy phân tạo ra cation và anion", "Vì chúng chứa liên kết peptide kém bền với nhiệt độ nóng"]
    ),
    buildQuestion(
      "hieu",
      "Dung dịch của glutamic acid làm quỳ tím chuyển sang màu gì?",
      "màu hồng hoặc đỏ nhạt",
      ["màu xanh đậm", "màu vàng tươi", "không làm đổi màu quỳ tím"]
    ),
    buildQuestion(
      "hieu",
      "Dung dịch lysine làm quỳ tím chuyển sang màu gì, tại sao?",
      "màu xanh, vì phân tử chứa hai nhóm amino ($-NH_2$) và một nhóm carboxyl ($-COOH$)",
      ["màu đỏ, vì phân tử chứa hai nhóm carboxyl ($-COOH$) và một nhóm amino ($-NH_2$)", "không đổi màu, vì số nhóm carboxyl và amino bằng nhau", "màu tím biure, vì phản ứng tạo phức màu đặc trưng"]
    ),
    buildQuestion(
      "hieu",
      "Thủy phân không hoàn toàn tripeptide mạch hở Gly-Ala-Val thu được các loại dipeptide nào sau đây?",
      "Gly-Ala và Ala-Val",
      ["Gly-Ala và Gly-Val", "Ala-Val và Gly-Val", "Gly-Ala, Ala-Val và Gly-Val"]
    ),
    buildQuestion(
      "hieu",
      "Tại sao dipeptide không tham gia phản ứng màu biure với dung dịch $Cu(OH)_2/NaOH$?",
      "Vì dipeptide chỉ chứa một liên kết peptide, không đủ điều kiện tối thiểu để tạo phức chelate màu tím với ion đồng",
      ["Vì dipeptide bị phân hủy ngay lập tức trong môi trường kiềm loãng", "Vì hai đầu amino acid triệt tiêu hoạt động của đồng hydroxit", "Vì dipeptide không tan trong dung môi nước kiềm tạo phức"]
    ),
    buildQuestion(
      "hieu",
      "Sản phẩm sinh ra khi trùng ngưng hoàn toàn các alpha-amino acid mạch thẳng là gì?",
      "polypeptide hoặc polyamide",
      ["polyester mạch vòng", "polyethylene bão hòa", "cao su tổng hợp đàn hồi"]
    ),
    buildQuestion(
      "hieu",
      "Amino acid X tác dụng với dung dịch $HCl$ tạo muối Y. Cho Y tác dụng với dung dịch $NaOH$ dư, sản phẩm hữu cơ thu được là gì?",
      "muối sodium của amino acid X",
      ["muối chloride của amino acid X", "amino acid X tự do tinh khiết", "ester đơn chức chứa nhóm amino"]
    ),
    buildQuestion(
      "hieu",
      "Đặc điểm cấu tạo chung của các amino acid thiên nhiên cấu thành nên protein của cơ thể sống là:",
      "Đều là các alpha-amino acid",
      ["Đều là các beta-amino acid mạch nhánh cực lớn", "Đều là các gamma-amino acid thơm phân nhánh", "Đều chứa đúng hai nhóm amino và hai nhóm carboxyl"]
    ),
    buildQuestion(
      "hieu",
      "Khi viết công thức cấu tạo ion lưỡng cực của glycine, ta viết chính xác là:",
      "$H_3N^+-CH_2-COO^-$",
      ["$H_2N-CH_2-COOH$", "$H_3N^+-CH_2-COOH$", "$H_2N^+-CH_2-COO^-$"]
    ),
    buildQuestion(
      "hieu",
      "Thủy phân hoàn toàn $14,6\\text{ gam}$ dipeptide Gly-Ala ($M=146$) thu được tổng khối lượng các amino acid sau phản ứng (H = 100%) là:",
      "16,4 gam",
      ["15,5 gam", "18,2 gam", "13,8 gam"]
    ),
    buildQuestion(
      "hieu",
      "Cho $7,5\\text{ gam}$ glycine tác dụng hoàn toàn với dung dịch $HCl$ dư. Khối lượng muối khan thu được sau khi cô cạn dung dịch là:",
      "11,15 gam",
      ["10,25 gam", "12,45 gam", "9,85 gam"]
    ),
    buildQuestion(
      "vandung",
      "Cho $8,9\\text{ gam}$ alanine tác dụng vừa đủ với dung dịch $NaOH$. Khối lượng muối thu được là:",
      "11,1 gam",
      ["10,5 gam", "12,2 gam", "9,8 gam"]
    ),
    buildQuestion(
      "vandung",
      "Một amino acid chứa một nhóm $-NH_2$ và một nhóm $-COOH$. Cho $15,0\\text{ gam}$ amino acid này phản ứng vừa đủ với $200\\text{ ml}$ dung dịch $NaOH\\ 1M$. Công thức cấu tạo của amino acid là:",
      "$H_2N-CH_2-COOH$",
      ["$CH_3-CH(NH_2)-COOH$", "$C_2H_5-CH(NH_2)-COOH$", "$H_2N-(CH_2)_2-COOH$"]
    ),
    buildQuestion(
      "vandung",
      "Cho $0,1\\text{ mol}$ glycine phản ứng hoàn toàn với dung dịch $HCl$ dư được dung dịch X. Cho X phản ứng với dung dịch $NaOH$ dư. Số mol $NaOH$ tối thiểu đã tham gia phản ứng với X là:",
      "0,2 mol",
      ["0,1 mol", "0,3 mol", "0,15 mol"]
    ),
    buildQuestion(
      "vandung",
      "Thủy phân hoàn toàn $1$ mol tripeptide Ala-Gly-Ala cần dùng vừa đủ bao nhiêu mol $NaOH$ đun nóng (coi sản phẩm chỉ chứa muối sodium của amino acid)?",
      "3 mol",
      ["2 mol", "4 mol", "1 mol"]
    ),
    buildQuestion(
      "vandung",
      "Đốt cháy hoàn toàn $0,1\\text{ mol}$ glycine thu được thể tích khí $N_2$ ở điều kiện chuẩn (đkc) là bao nhiêu?",
      "1,240 lít",
      ["2,479 lít", "0,620 lít", "3,719 lít"]
    )
  
  ],
  "Bài 10: Protein và enzyme": [

    buildQuestion(
      "biet",
      "Protein là những đại phân tử sinh học được cấu tạo từ nhiều gốc nào liên kết với nhau?",
      "alpha-amino acid",
      ["beta-glucose", "acid béo bão hòa", "ester của vinyl alcohol"]
    ),
    buildQuestion(
      "biet",
      "Phản ứng màu biure dùng để nhận biết protein xảy ra khi cho protein tác dụng với chất nào trong dung dịch?",
      "$Cu(OH)_2$ trong môi trường kiềm loãng",
      ["dung dịch $HNO_3$ đặc nóng", "nước bromine dư đỏ cam", "dung dịch $AgNO_3/NH_3$ đun nóng"]
    ),
    buildQuestion(
      "biet",
      "Sự đông tụ protein xảy ra khi đun nóng hoặc thêm acid/base/muối vô cơ gọi là hiện tượng gì?",
      "Đông tụ vật lý",
      ["Sự trùng ngưng hóa học", "Phản ứng thủy phân bão hòa", "Hiện tượng khuếch tán thẩm thấu"]
    ),
    buildQuestion(
      "biet",
      "Enzyme là chất có bản chất là gì, đóng vai trò gì trong cơ thể sinh vật sống?",
      "Chất xúc tác sinh học có bản chất chủ yếu là protein",
      ["Hợp chất carbohydrate cung cấp năng lượng tế bào", "Muối khoáng vô cơ hòa tan điều hòa huyết áp", "Dung môi hữu cơ hòa tan các vitamin có hại"]
    ),
    buildQuestion(
      "biet",
      "Tên gọi của protein cấu tạo nên tóc, móng của con người là gì?",
      "keratin",
      ["collagen", "fibroin", "albumin"]
    ),
    buildQuestion(
      "biet",
      "Protein dạng sợi (như collagen, fibroin tơ tằm) có đặc điểm vật lý tiêu biểu là:",
      "hoàn toàn không tan trong nước",
      ["tan vô hạn trong nước lạnh tạo gel", "dễ nóng chảy hóa lỏng ở nhiệt độ thường", "dễ bay hơi khi gặp không khí ẩm"]
    ),
    buildQuestion(
      "biet",
      "Protein dạng cầu (như albumin lòng trắng trứng, hemoglobin trong máu) có đặc điểm vật lý là:",
      "tan trong nước tạo thành dung dịch keo",
      ["không tan trong bất kỳ dung môi nào", "dễ bị đông tụ tạo chất rắn màu đen", "có tính đàn hồi cực cao giống cao su"]
    ),
    buildQuestion(
      "biet",
      "Để nhận biết sự có mặt của protein trong dung dịch, người ta nhỏ vài giọt nitric acid đặc ($HNO_3$) thấy xuất hiện kết tủa màu gì?",
      "màu vàng",
      ["màu xanh lam đậm", "màu đỏ gạch đục", "màu tím biure nhạt"]
    ),
    buildQuestion(
      "hieu",
      "Giải thích hiện tượng đông tụ lòng trắng trứng khi đun nóng hoặc làm đậu phụ từ sữa đậu nành:",
      "Nhiệt độ hoặc môi trường ion điện li phá vỡ cấu trúc không gian bậc cao của protein làm chúng đông tụ lại",
      ["Xảy ra phản ứng trùng ngưng các phân tử nhỏ thành phân tử polymer lớn", "Nước bay hơi hoàn toàn làm protein khan tụ lại", "Enzyme tiêu hóa tự phân hủy chuỗi peptide thành tro"]
    ),
    buildQuestion(
      "hieu",
      "Tại sao enzyme có tính xúc tác chọn lọc (đặc hiệu) cực kỳ cao đối với cơ chất?",
      "Vì trung tâm hoạt động của enzyme chỉ có cấu trúc không gian khớp với cơ chất như chìa khóa và ổ khóa",
      ["Vì phân tử enzyme có nhiệt độ nóng chảy cực cao thích hợp mọi phản ứng", "Vì enzyme chỉ hoạt động trong môi trường có nồng độ muối bão hòa", "Vì enzyme có khả năng tự oxi hóa chọn lọc mọi liên kết hóa học"]
    ),
    buildQuestion(
      "hieu",
      "Bản chất của quá trình thủy phân protein bằng hệ enzyme trong dạ dày và ruột non của động vật là:",
      "Cắt đứt dần các liên kết peptide để giải phóng các alpha-amino acid tự do dồi dào dinh dưỡng",
      ["Khử hoàn toàn protein thành các hydrocarbon không phân cực dễ tan", "Trùng hợp các gốc protein đơn giản thành đại phân tử keo dính", "Oxi hóa amino acid thành khí carbon dioxide cung cấp năng lượng"]
    ),
    buildQuestion(
      "hieu",
      "Tại sao khi nhỏ nitric acid đặc ($HNO_3$) vào dung dịch lòng trắng trứng lại có kết tủa màu vàng xuất hiện?",
      "Do phản ứng thế nitro vào vòng benzene của các gốc amino acid thơm (như tyrosine) có trong protein",
      ["Do phản ứng thủy phân liên kết peptide tạo ra acid amin màu vàng", "Do protein phản ứng trung hòa trực tiếp giải phóng khí $NO_2$", "Do nitric acid hòa tan lớp vỏ nước bao quanh hạt keo protein"]
    ),
    buildQuestion(
      "hieu",
      "Điểm khác biệt lớn nhất về vai trò xúc tác giữa enzyme và chất xúc tác vô cơ thông thường là gì?",
      "Enzyme có hoạt tính xúc tác mạnh hơn gấp triệu lần ở điều kiện sinh lý êm dịu nhiệt độ cơ thể",
      ["Enzyme chỉ hoạt động hiệu quả ở nhiệt độ cực kỳ cao trên $100^\\circ C$", "Enzyme không bị biến tính hay ảnh hưởng bởi môi trường pH của dung dịch", "Chất xúc tác vô cơ có độ đặc hiệu cao hơn gấp trăm lần so với enzyme"]
    ),
    buildQuestion(
      "hieu",
      "Trình bày cấu trúc không gian bậc 1 của phân tử protein là gì?",
      "Là trình tự sắp xếp các gốc alpha-amino acid trong chuỗi polypeptide tạo mạch thẳng",
      ["Là cấu trúc xoắn alpha hoặc gấp nếp beta nhờ liên kết hydrogen", "Là dạng cuộn tròn không gian ba chiều của chuỗi polypeptide", "Là sự kết hợp nhiều chuỗi polypeptide với nhau tạo khối"]
    ),
    buildQuestion(
      "hieu",
      "Tại sao người ta không giặt quần áo bằng sợi len, tơ tằm bằng các loại xà phòng có độ kiềm cao?",
      "Vì môi trường kiềm mạnh dễ thủy phân liên kết peptide làm mục và hỏng sợi tơ tằm, sợi len",
      ["Vì kiềm làm sọc màu sợi vải từ không màu sang đen kịt", "Vì xà phòng hòa tan hoàn toàn các sắc tố tự nhiên tạo màu len", "Vì sợi len phản ứng cộng trực tiếp với kiềm sinh khí khai"]
    ),
    buildQuestion(
      "hieu",
      "Tại sao khi bị ong hoặc kiến lửa đốt gây đau buốt, người ta thường bôi nước vôi trong hoặc xà phòng kiềm nhẹ vào vết thương?",
      "Để phản ứng trung hòa các acid có sẵn trong nọc độc và làm giảm hoạt tính của các enzyme gây sưng viêm",
      ["Để đông tụ hoàn toàn các hạt hồng cầu tránh mất máu vết thương", "Để oxi hóa các chất độc thành chất dẻo không bám dính vào da", "Để hòa tan trực tiếp tế bào sừng giúp da mau lành"]
    ),
    buildQuestion(
      "hieu",
      "Sự phân biệt giữa protein đơn giản và protein phức tạp dựa trên:",
      "Thành phần sản phẩm khi thủy phân hoàn toàn protein (chỉ có alpha-amino acid hay có thêm thành phần phi protein)",
      ["Phân tử khối trung bình và hình dạng không gian của đại phân tử", "Số lượng liên kết peptide có trong cấu trúc phân tử bậc một", "Khả năng phản ứng tạo phức màu đặc trưng với đồng hydroxit"]
    ),
    buildQuestion(
      "hieu",
      "Giải thích tại sao thức ăn chứa protein (như thịt, cá) khi nấu chín lại dễ tiêu hóa hơn rất nhiều so với khi ăn sống?",
      "Vì nhiệt độ làm biến tính protein, duỗi mạch polypeptide giúp các enzyme tiêu hóa dễ tiếp cận và thủy phân liên kết peptide",
      ["Vì nấu chín biến đổi hoàn toàn protein thành đường glucose ngọt ngào", "Vì khi đun nóng, liên kết hydrogen tự biến đổi thành liên kết cộng hóa trị", "Vì đun nóng làm tăng hàm lượng nước giúp protein bão hòa tan tốt hơn"]
    ),
    buildQuestion(
      "hieu",
      "Thủy phân hoàn toàn một chuỗi polypeptide chứa $100$ gốc glycine thu được $15,0\\text{ gam}$ glycine. Số mol polypeptide ban đầu đã phản ứng hoàn toàn là:",
      "0,002 mol",
      ["0,010 mol", "0,005 mol", "0,020 mol"]
    ),
    buildQuestion(
      "hieu",
      "Đốt cháy hoàn toàn một lượng protein thu được $4,958\\text{ lít } CO_2$ và $1,240\\text{ lít } N_2$ ở điều kiện chuẩn (đkc). Tỉ lệ số nguyên tử $C : N$ trong mẫu protein đó là:",
      "4 : 1",
      ["2 : 1", "3 : 1", "5 : 1"]
    ),
    buildQuestion(
      "vandung",
      "Thủy phân hoàn toàn $0,1\\text{ mol}$ một oligopeptide X thu được $0,2\\text{ mol}$ glycine và $0,1\\text{ mol}$ alanine. Oligopeptide X thuộc loại nào?",
      "tripeptide",
      ["dipeptide", "tetrapeptide", "pentapeptide"]
    ),
    buildQuestion(
      "vandung",
      "Thủy phân hoàn toàn $0,05\\text{ mol}$ dipeptide Gly-Gly ($M=132$) thu được m gam glycine. Giá trị của m là:",
      "7,5 gam",
      ["15,0 gam", "3,75 gam", "10,0 gam"]
    ),
    buildQuestion(
      "vandung",
      "Đốt cháy hoàn toàn m gam một tripeptide mạch hở tạo thành từ glycine ($C_6H_{11}N_3O_4$, $M=189$) thu được $7,437\\text{ lít}$ khí $CO_2$ ở điều kiện chuẩn (đkc). Giá trị của m là:",
      "9,45 gam",
      ["6,30 gam", "18,90 gam", "12,60 gam"]
    ),
    buildQuestion(
      "vandung",
      "Một mẫu sữa bột dành cho trẻ em chứa $16\\%$ chất đạm (protein) về khối lượng. Để cung cấp đủ $8\\text{ gam}$ chất đạm cho trẻ, cần cân chính xác bao nhiêu gam bột sữa trên để pha?",
      "50 gam",
      ["40 gam", "60 gam", "80 gam"]
    ),
    buildQuestion(
      "vandung",
      "Thủy phân hoàn toàn $15\\text{ gam}$ hỗn hợp gồm hai peptide Gly-Gly và Ala-Gly thu được $16,8\\text{ gam}$ hỗn hợp các amino acid đơn giản. Khối lượng nước đã tham gia vào phản ứng thủy phân là:",
      "1,8 gam",
      ["3,6 gam", "0,9 gam", "2,7 gam"]
    )
  
  ],
  "Bài 11: Ôn tập chương 3": [

    buildQuestion(
      "biet",
      "Hợp chất hữu cơ nào sau đây vừa tác dụng với dung dịch $HCl$ vừa tác dụng với dung dịch $NaOH$?",
      "glycine",
      ["ethyl acetate", "aniline", "ethanol"]
    ),
    buildQuestion(
      "biet",
      "Dung dịch chất nào sau đây làm quỳ tím hóa xanh đậm màu nhất?",
      "lysine",
      ["glycine", "alanine", "glutamic acid"]
    ),
    buildQuestion(
      "biet",
      "Số nhóm carboxyl ($-COOH$) có trong phân tử glutamic acid là bao nhiêu?",
      "2",
      ["1", "3", "4"]
    ),
    buildQuestion(
      "biet",
      "Amino acid nào sau đây có công thức phân tử là $C_3H_7NO_2$?",
      "alanine",
      ["glycine", "valine", "glutamic acid"]
    ),
    buildQuestion(
      "biet",
      "Liên kết nối giữa hai mắt xích alpha-amino acid trong peptide gọi là liên kết gì?",
      "liên kết peptide",
      ["liên kết ester", "liên kết hydrogen", "liên kết glycoside"]
    ),
    buildQuestion(
      "biet",
      "Amine thơm tiêu biểu nhất aniline có công thức cấu tạo là gì?",
      "$C_6H_5NH_2$",
      ["$C_6H_5CH_2NH_2$", "$C_6H_5NHCH_3$", "$(C_6H_5)_3N$"]
    ),
    buildQuestion(
      "biet",
      "Chất nào sau đây là amine khí, có mùi khai độc hại bám dính?",
      "methylamine",
      ["aniline", "phenol", "glycerol"]
    ),
    buildQuestion(
      "biet",
      "Để nhận biết dung dịch peptide có từ 2 liên kết peptide trở lên, ta dùng phản ứng màu nào?",
      "phản ứng màu biure với $Cu(OH)_2$ trong kiềm loãng",
      ["phản ứng tráng bạc bằng bạc nitrat", "phản ứng thế màu với nước bromine", "phản ứng hóa than của acid sulfuric"]
    ),
    buildQuestion(
      "hieu",
      "Tại sao aniline tác dụng được với dung dịch acid $HCl$ nhưng không làm quỳ tím ẩm đổi màu?",
      "Vì aniline có tính base cực kỳ yếu do ảnh hưởng hút electron của vòng benzene cồng kềnh",
      ["Vì muối của aniline sinh ra làm quỳ tím hóa xanh trở lại ngay", "Vì aniline hoàn toàn không tan trong dung dịch acid loãng", "Vì quỳ tím bị phân hủy bởi cấu trúc thơm của aniline"]
    ),
    buildQuestion(
      "hieu",
      "Sắp xếp lực base tăng dần của các chất sau: (1) aniline, (2) ammonia, (3) ethylamine, (4) diethylamine.",
      "(1) < (2) < (3) < (4)",
      ["(2) < (1) < (3) < (4)", "(4) < (3) < (2) < (1)", "(1) < (3) < (2) < (4)"]
    ),
    buildQuestion(
      "hieu",
      "Tại sao trong môi trường kiềm loãng nóng, protein dễ bị phân hủy thành các amino acid đơn giản?",
      "Vì liên kết peptide bị thủy phân cắt đứt bởi sự tấn công của ion $OH^-$ vào nhóm carbonyl",
      ["Vì kiềm loãng đóng vai trò oxi hóa hoàn toàn mạch carbon thành khí", "Vì liên kết hydrogen liên phân tử bị bẻ gãy tạo ester vòng", "Vì dung dịch kiềm hòa tan vỏ bọc sừng bảo vệ protein"]
    ),
    buildQuestion(
      "hieu",
      "Để phân biệt nhanh ba dung dịch alanine, lysine và glutamic acid đựng trong các lọ mất nhãn, ta dùng thuốc thử duy nhất là:",
      "quỳ tím",
      ["nước bromine dư", "dung dịch $Cu(OH)_2$", "dung dịch $AgNO_3/NH_3$"]
    ),
    buildQuestion(
      "hieu",
      "Phản ứng của glycine tác dụng với ethanol khi có mặt khí $HCl$ khan dẫn tới sản phẩm hữu cơ chính là gì?",
      "ethyl glycinate hydrochloride ($Cl^-H_3N^+-CH_2-COOC_2H_5$)",
      ["ethyl glycinate tự do tinh khiết", "glycylglycine dipeptide vòng", "chloromethyl acetate thơm"]
    ),
    buildQuestion(
      "hieu",
      "Tại sao các amino acid tồn tại ở dạng ion lưỡng cực nhưng lại là chất rắn kết tinh khó nóng chảy ở điều kiện thường?",
      "Vì giữa các ion lưỡng cực có lực hút tĩnh điện liên phân tử rất mạnh dạng liên kết ion",
      ["Vì chúng có phân tử khối khổng lồ tự kết tinh dẻo", "Vì liên kết cộng hóa trị phân cực chiếm ưu thế tuyệt đối", "Vì các nhóm hydroxyl liên kết hydrogen siêu bền vững"]
    ),
    buildQuestion(
      "hieu",
      "Số đồng phân cấu tạo amine ứng với công thức phân tử $C_3H_9N$ là bao nhiêu?",
      "4",
      ["3", "5", "2"]
    ),
    buildQuestion(
      "hieu",
      "Hiện tượng xảy ra khi cho dung dịch acid $HCl$ vào ống nghiệm chứa dung dịch muối sodium của glycine ($H_2N-CH_2-COONa$) là gì?",
      "Tạo lại glycine lưỡng cực rồi chuyển thành muối tan glycine hydrochloride",
      ["Xuất hiện kết tủa màu vàng rực sủi bọt khí", "Dung dịch sủi bọt khí không màu mùi khai", "Không xảy ra bất kỳ hiện tượng phản ứng nào"]
    ),
    buildQuestion(
      "hieu",
      "Giải thích tại sao protein bị đông tụ (tách lớp chất rắn) khi bổ sung dung dịch muối ăn ($NaCl$) nồng độ cao?",
      "Do ion muối cạnh tranh dung môi nước làm mất lớp hydrat hóa bảo vệ quanh keo protein",
      ["Do phản ứng trao đổi ion bẻ gãy liên kết peptide", "Do muối ăn oxi hóa hoàn toàn chuỗi polypeptide", "Do protein tác dụng trực tiếp tạo phức chất không tan với ion natri"]
    ),
    buildQuestion(
      "hieu",
      "Peptide X có công thức Gly-Ala-Gly. Khi thủy phân không hoàn toàn X, thu được tối đa bao nhiêu loại dipeptide khác nhau?",
      "2 loại: Gly-Ala và Ala-Gly",
      ["1 loại: Gly-Ala duy nhất", "3 loại: Gly-Ala, Ala-Gly và Gly-Gly", "2 loại: Gly-Gly và Ala-Ala"]
    ),
    buildQuestion(
      "hieu",
      "Cho $7,5\\text{ gam}$ glycine tác dụng vừa đủ với dung dịch $NaOH\\ 1M$. Thể tích dung dịch $NaOH$ đã dùng phản ứng là:",
      "100 ml",
      ["50 ml", "200 ml", "150 ml"]
    ),
    buildQuestion(
      "hieu",
      "Cho $0,1\\text{ mol}$ một amine đơn chức X tác dụng hoàn toàn với dung dịch $HCl$ thu được $9,55\\text{ gam}$ muối khan. X là chất nào?",
      "methylamine",
      ["ethylamine", "dimethylamine", "aniline"]
    ),
    buildQuestion(
      "vandung",
      "Đốt cháy hoàn toàn một lượng glycine thu được $7,437\\text{ lít } CO_2$ ở điều kiện chuẩn (đkc). Thể tích khí $N_2$ ở điều kiện chuẩn (đkc) thu được sau phản ứng đốt cháy trên là:",
      "1,859 lít",
      ["3,719 lít", "0,929 lít", "5,578 lít"]
    ),
    buildQuestion(
      "vandung",
      "Cho $15,0\\text{ gam}$ một amino acid X (chứa một nhóm $-NH_2$ và một nhóm $-COOH$) tác dụng hoàn toàn với dung dịch $HCl$ dư thu được $22,3\\text{ gam}$ muối. Công thức cấu tạo phù hợp của X là:",
      "$H_2N-CH_2-COOH$",
      ["$CH_3-CH(NH_2)-COOH$", "$C_2H_5-CH(NH_2)-COOH$", "$H_2N-(CH_2)_2-COOH$"]
    ),
    buildQuestion(
      "vandung",
      "Trung hòa hoàn toàn hỗn hợp gồm $0,1\\text{ mol}$ ethylamine và $0,1\\text{ mol}$ aniline cần dùng vừa đủ bao nhiêu ml dung dịch $HCl\\ 1M$?",
      "200 ml",
      ["100 ml", "300 ml", "150 ml"]
    ),
    buildQuestion(
      "vandung",
      "Thủy phân hoàn toàn $20,3\\text{ gam}$ một tripeptide Gly-Gly-Gly ($M=203$) bằng dung dịch $NaOH$ dư, đun nóng. Khối lượng muối thu được sau khi cô cạn khan dung dịch là:",
      "29,1 gam",
      ["27,5 gam", "31,2 gam", "24,8 gam"]
    ),
    buildQuestion(
      "vandung",
      "Cho $18,9\\text{ gam}$ một dipeptide Ala-Gly tác dụng vừa đủ với $200\\text{ ml}$ dung dịch $HCl\\ 1M$, đun nóng. Cô cạn dung dịch sau phản ứng thu được bao nhiêu gam muối khan chất rắn?",
      "26,2 gam",
      ["24,5 gam", "28,8 gam", "22,15 gam"]
    )
  ]
};
  