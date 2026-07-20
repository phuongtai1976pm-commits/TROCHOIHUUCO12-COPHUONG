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

export const chapter1Questions: Record<string, Question[]> = {
  "Bài 1: Ester – Lipid": [

    buildQuestion(
      "biet",
      "Công thức phân tử tổng quát của ester no, đơn chức, mạch hở là:",
      "$C_nH_{2n}O_2\\ (n \\ge 2)$",
      ["$C_nH_{2n+2}O_2\\ (n \\ge 2)$", "$C_nH_{2n-2}O_2\\ (n \\ge 2)$", "$C_nH_{2n}O\\ (n \\ge 2)$"]
    ),
    buildQuestion(
      "biet",
      "Công thức phân tử của triolein là chất nào sau đây?",
      "$C_{57}H_{104}O_6$",
      ["$C_{57}H_{110}O_6$", "$C_{51}H_{98}O_6$", "$C_{57}H_{98}O_6$"]
    ),
    buildQuestion(
      "biet",
      "Chất béo (lipid) là triester của alcohol nào sau đây với các acid béo?",
      "glycerol",
      ["ethylene glycol", "ethanol", "methanol"]
    ),
    buildQuestion(
      "biet",
      "Tên gọi thay thế (tên IUPAC) của ester có công thức cấu tạo $CH_3COOCH_3$ là:",
      "methyl acetate",
      ["ethyl acetate", "methyl formate", "propyl acetate"]
    ),
    buildQuestion(
      "biet",
      "Công thức cấu tạo thu gọn của ethyl acetate là:",
      "$CH_3COOC_2H_5$",
      ["$HCOOCH_3$", "$CH_3COOCH_3$", "$C_2H_5COOCH_3$"]
    ),
    buildQuestion(
      "biet",
      "Acid béo nào sau đây là acid béo bão hòa (no)?",
      "stearic acid",
      ["oleic acid", "linoleic acid", "linolenic acid"]
    ),
    buildQuestion(
      "biet",
      "Phản ứng thủy phân ester trong môi trường kiềm ($NaOH$, $KOH$) đun nóng được gọi là phản ứng gì?",
      "Phản ứng xà phòng hóa",
      ["Phản ứng ester hóa", "Phản ứng trùng hợp", "Phản ứng hydrogen hóa"]
    ),
    buildQuestion(
      "biet",
      "Nhiệt độ sôi của các ester thường thấp hơn hẳn so với alcohol và carboxylic acid có cùng phân tử khối vì:",
      "Giữa các phân tử ester không tạo được liên kết hydrogen liên phân tử",
      ["Phân tử ester phân cực mạnh hơn carboxylic acid", "Ester không tan trong nước và nhẹ hơn nước", "Ester dễ phản ứng với nước tạo hệ phân lớp"]
    ),
    buildQuestion(
      "hieu",
      "Khi thủy phân hoàn toàn phenyl acetate trong dung dịch $NaOH$ dư, sản phẩm thu được cuối cùng gồm những chất nào?",
      "$CH_3COONa$, $C_6H_5ONa$ và $H_2O$",
      ["$CH_3COONa$ và $C_6H_5OH$", "$CH_3COOH$ và $C_6H_5ONa$", "$CH_3COONa$, $C_6H_5OH$ và $H_2O$"]
    ),
    buildQuestion(
      "hieu",
      "Thủy phân hoàn toàn ethyl formate bằng dung dịch $NaOH$ đun nóng, sản phẩm hữu cơ thu được gồm:",
      "$HCOONa$ và $C_2H_5OH$",
      ["$CH_3COONa$ và $CH_3OH$", "$HCOONa$ và $CH_3OH$", "$CH_3COONa$ và $C_2H_5OH$"]
    ),
    buildQuestion(
      "hieu",
      "Đun nóng triolein với dung dịch $NaOH$ dư, cô cạn dung dịch sau phản ứng thu được muối nào sau đây?",
      "$C_{17}H_{33}COONa$",
      ["$C_{17}H_{35}COONa$", "$C_{15}H_{31}COONa$", "$C_{17}H_{31}COONa$"]
    ),
    buildQuestion(
      "hieu",
      "Cho sơ đồ phản ứng sau: chất béo lỏng + $H_2\\ (t^\\circ, Ni, p) \\to$ bơ nhân tạo (chất béo rắn). Phát biểu nào sau đây đúng về quá trình này?",
      "Đây là phản ứng hydrogen hóa chất béo chứa gốc acid béo không bão hòa để tạo chất béo bão hòa",
      ["Đây là phản ứng thủy phân chất béo trong môi trường acid có xúc tác nhiệt độ", "Đây là quá trình xà phòng hóa các gốc triacylglycerol mạch hở", "Đây là quá trình trùng hợp để tổng hợp vật liệu polymer từ ester thơm"]
    ),
    buildQuestion(
      "hieu",
      "Ester nào sau đây có khả năng tham gia phản ứng tráng bạc với dung dịch $AgNO_3$ trong $NH_3$, đun nóng?",
      "methyl formate",
      ["methyl acetate", "ethyl acetate", "propyl acetate"]
    ),
    buildQuestion(
      "hieu",
      "Đun nóng ester ethyl acetate ($CH_3COOCH_2CH_3$) với dung dịch $H_2SO_4$ loãng (phản ứng thuận nghịch) tạo ra sản phẩm gồm:",
      "$CH_3COOH$ và $C_2H_5OH$",
      ["$HCOOH$ và $C_3H_7OH$", "$CH_3COOH$ và $CH_3OH$", "$C_2H_5COOH$ và $CH_3OH$"]
    ),
    buildQuestion(
      "hieu",
      "Các chất béo bão hòa (chứa gốc acid béo no như stearic acid, palmitic acid) thường tồn tại ở trạng thái nào ở điều kiện thường?",
      "Trạng thái rắn",
      ["Trạng thái lỏng", "Trạng thái khí", "Trạng thái keo dẻo"]
    ),
    buildQuestion(
      "hieu",
      "Số đồng phân cấu tạo ester ứng với công thức phân tử $C_3H_6O_2$ là bao nhiêu?",
      "2",
      ["3", "4", "1"]
    ),
    buildQuestion(
      "hieu",
      "Thủy phân hoàn toàn hợp chất hữu cơ X mạch hở có công thức cấu tạo $CH_3COOCH=CH_2$ trong môi trường acid thu được sản phẩm gồm:",
      "$CH_3COOH$ và $CH_3CHO$",
      ["$CH_3COOH$ và $CH_2=CHOH$", "$CH_3COOH$ và $C_2H_5OH$", "$HCOOH$ và $CH_3COCH_3$"]
    ),
    buildQuestion(
      "hieu",
      "Phát biểu nào sau đây KHÔNG đúng khi nói về lipid và chất béo?",
      "Chất béo là triester của glycerol với các acid vô cơ mạnh",
      ["Lipid bao gồm chất béo, sáp, steroid, phospholipid...", "Chất béo không tan trong nước và nhẹ hơn nước", "Dầu thực vật chứa chủ yếu các triacylglycerol không bão hòa"]
    ),
    buildQuestion(
      "hieu",
      "Đốt cháy hoàn toàn $0,1\\text{ mol}$ một ester no, đơn chức, mạch hở X thu được $7,437\\text{ lít } CO_2$ ở điều kiện chuẩn (đkc). Công thức phân tử của X là:",
      "$C_3H_6O_2$",
      ["$C_2H_4O_2$", "$C_4H_8O_2$", "$C_5H_{10}O_2$"]
    ),
    buildQuestion(
      "hieu",
      "Cho $8,8\\text{ gam}$ ethyl acetate phản ứng hoàn toàn với $150\\text{ ml}$ dung dịch $NaOH\\ 1M$. Cô cạn dung dịch sau phản ứng, khối lượng chất rắn khan thu được là:",
      "$10,2\\text{ gam}$",
      ["$8,2\\text{ gam}$", "$12,2\\text{ gam}$", "$14,2\\text{ gam}$"]
    ),
    buildQuestion(
      "vandung",
      "Thủy phân hoàn toàn $8,8\\text{ gam}$ ester X có công thức phân tử $C_4H_8O_2$ bằng dung dịch $NaOH$ dư thu được $8,2\\text{ gam}$ muối $RCOONa$. Tên gọi IUPAC của ester X là:",
      "ethyl acetate",
      ["methyl propionate", "propyl formate", "isopropyl formate"]
    ),
    buildQuestion(
      "vandung",
      "Cho $17,6\\text{ gam}$ hỗn hợp hai ester đơn chức no đồng phân cấu tạo của nhau phản ứng vừa đủ với $200\\text{ ml}$ dung dịch $NaOH\\ 1M$. Công thức phân tử chung của hai ester là:",
      "$C_4H_8O_2$",
      ["$C_3H_6O_2$", "$C_2H_4O_2$", "$C_5H_{10}O_2$"]
    ),
    buildQuestion(
      "vandung",
      "Xà phòng hóa hoàn toàn $89\\text{ gam}$ tristearin bằng dung dịch $NaOH$ dư đun nóng. Khối lượng glycerol thu được là:",
      "$9,2\\text{ gam}$",
      ["$4,6\\text{ gam}$", "$18,4\\text{ gam}$", "$27,6\\text{ gam}$"]
    ),
    buildQuestion(
      "vandung",
      "Cho $0,1\\text{ mol}$ một ester đơn chức thơm X phản ứng vừa đủ với $200\\text{ ml}$ dung dịch $NaOH\\ 1M$. Cô cạn hoàn toàn dung dịch sau phản ứng thu được hỗn hợp hai muối có tổng khối lượng $18,4\\text{ gam}$. Công thức cấu tạo của X là:",
      "$HCOOC_6H_5$",
      ["$CH_3COOC_6H_5$", "$CH_3COOCH_2C_6H_5$", "$C_6H_5COOCH_3$"]
    ),
    buildQuestion(
      "vandung",
      "Thủy phân một triacylglycerol X cần vừa đủ $0,3\\text{ mol } NaOH$, thu được $9,2\\text{ gam}$ glycerol và hỗn hợp hai muối của oleic acid và palmitic acid theo tỉ lệ mol tương ứng là $2:1$. Tên gọi IUPAC hợp lý của X là:",
      "dioleoylpalmitoylglycerol",
      ["dipalmitoyloleoylglycerol", "triolein", "tripalmitin"]
    )
  
  ],
  "Bài 2: Xà phòng và chất giặt rửa": [

    buildQuestion(
      "biet",
      "Thành phần chính của xà phòng thông thường là muối sodium hoặc potassium của chất nào?",
      "acid béo",
      ["acid vô cơ mạnh", "carboxylic acid mạch ngắn", "sulfonic acid thơm"]
    ),
    buildQuestion(
      "biet",
      "Chất giặt rửa tổng hợp thường chứa muối sodium của chất nào sau đây làm tác nhân chính?",
      "alkylsulfate hoặc alkylbenzenesulfonate",
      ["stearic acid", "palmitic acid", "acetic acid"]
    ),
    buildQuestion(
      "biet",
      "Phát biểu nào sau đây đúng về cấu tạo của phân tử xà phòng?",
      "Gồm một đầu phân cực ưa nước và một đuôi hydrocarbon kị nước",
      ["Gồm hai đầu phân cực ưa nước nối liền", "Gồm hai gốc hydrocarbon kị nước liên kết chéo", "Hoàn toàn không có phần phân cực ưa nước"]
    ),
    buildQuestion(
      "biet",
      "Chất nào sau đây không được dùng làm nguyên liệu trực tiếp để sản xuất xà phòng?",
      "methyl acetate",
      ["tristearin", "tripalmitin", "mỡ lợn"]
    ),
    buildQuestion(
      "biet",
      "Xà phòng có thể được sản xuất từ nguồn nguyên liệu thiên nhiên nào sau đây?",
      "dầu dừa hoặc mỡ động vật",
      ["dầu mỏ", "than đá", "khí thiên nhiên"]
    ),
    buildQuestion(
      "biet",
      "Phần ưa nước trong phân tử xà phòng thường là nhóm chức nào?",
      "$-COO^-Na^+$ hoặc $-COO^-K^+$",
      ["$-OH$", "$-NH_2$", "$-SO_3^-Na^+$"]
    ),
    buildQuestion(
      "biet",
      "Tác nhân chính gây ra tính tẩy rửa của xà phòng và chất giặt rửa là do khả năng:",
      "hạ sức căng bề mặt và nhũ tương hóa chất béo",
      ["phân hủy hoàn toàn chất vải thành glucose", "oxi hóa mạnh các vết bẩn hữu cơ", "tạo kết tủa màu trắng bám vào sợi vải"]
    ),
    buildQuestion(
      "biet",
      "Chất giặt rửa tổng hợp được sản xuất chủ yếu từ nguồn nguyên liệu nào?",
      "sản phẩm của công nghiệp dầu mỏ",
      ["mỡ động vật thiên nhiên", "sáp ong", "nhựa cây rừng"]
    ),
    buildQuestion(
      "hieu",
      "Tại sao không nên dùng xà phòng để giặt rửa trong nước cứng?",
      "Muối $Ca^{2+}$ và $Mg^{2+}$ kết tủa với gốc acid béo làm mất tác dụng giặt rửa",
      ["Xà phòng phản ứng mạnh tạo khí độc hại", "Nước cứng làm phân hủy hoàn toàn xà phòng thành alcohol", "Nước cứng làm tăng độ pH của xà phòng gây hỏng vải"]
    ),
    buildQuestion(
      "hieu",
      "Ưu điểm nổi bật của chất giặt rửa tổng hợp so với xà phòng thông thường là:",
      "Có thể dùng để giặt rửa hiệu quả ngay cả trong nước cứng",
      ["Thân thiện hơn hoàn toàn với môi trường tự nhiên", "Có nguồn gốc trực tiếp từ mỡ động vật thiên nhiên", "Giá thành luôn rẻ hơn gấp nhiều lần"]
    ),
    buildQuestion(
      "hieu",
      "Cơ chế tẩy rửa của xà phòng dựa trên hoạt động của các hạt mixen (micelle). Đầu phân cực của hạt mixen sẽ:",
      "Quay ra phía ngoài, liên kết với các phân tử nước",
      ["Quay vào phía trong bám chặt lấy vết dầu mỡ kị nước", "Bị phân hủy giải phóng khí carbon dioxide", "Tạo liên kết cộng hóa trị bền vững với sợi vải"]
    ),
    buildQuestion(
      "hieu",
      "Đuôi kị nước của phân tử xà phòng bám vào vết bẩn hữu cơ vì:",
      "Chúng đều là các cấu trúc không phân cực",
      ["Chúng tạo liên kết hydrogen bền vững với nhau", "Chúng có cùng kích thước phân tử", "Chúng dễ dàng bị oxi hóa ở nhiệt độ thường"]
    ),
    buildQuestion(
      "hieu",
      "Tại sao dung dịch xà phòng có môi trường kiềm yếu (pH > 7)?",
      "Vì gốc carboxylate của acid béo là base liên hợp yếu bị thủy phân trong nước",
      ["Vì trong xà phòng luôn lẫn một lượng cực lớn $NaOH$ dư", "Vì gốc sodium liên kết trực tiếp với phân tử nước", "Vì acid béo giải phóng ion $H^+$ làm tăng pH"]
    ),
    buildQuestion(
      "hieu",
      "Ưu điểm của việc sử dụng xà phòng so với chất giặt rửa tổng hợp là gì?",
      "Xà phòng dễ bị vi sinh vật phân hủy sinh học, thân thiện với môi trường hơn",
      ["Xà phòng có khả năng tẩy rửa mạnh hơn trong nước cứng", "Xà phòng không bị ảnh hưởng bởi môi trường acid", "Xà phòng tan tốt hơn chất giặt rửa trong nước lạnh"]
    ),
    buildQuestion(
      "hieu",
      "Hiện tượng xảy ra khi nhỏ vài giọt dung dịch nước chanh (acid) vào bát đựng nước xà phòng là gì?",
      "Xuất hiện kết tủa đục do acid béo tự do bị giải phóng",
      ["Dung dịch sủi bọt khí mạnh mẽ", "Dung dịch chuyển sang màu xanh lam đậm", "Không có hiện tượng gì xảy ra"]
    ),
    buildQuestion(
      "hieu",
      "Tại sao chất giặt rửa tổng hợp chứa nhánh hydrocarbon trong mạch đuôi kị nước bị hạn chế sử dụng?",
      "Vì chúng khó bị vi sinh vật phân hủy, gây ô nhiễm nguồn nước",
      ["Vì chúng dễ bay hơi gây hại cho đường hô hấp", "Vì chúng có khả năng ăn mòn kim loại cực mạnh", "Vì chúng làm mục nát quần áo bằng len dạ"]
    ),
    buildQuestion(
      "hieu",
      "Khi giặt quần áo bằng xà phòng trong nước giếng khoan chứa nhiều muối sắt ($Fe^{2+}$, $Fe^{3+}$), quần áo dễ bị:",
      "ố vàng do kết tủa của muối sắt với acid béo bám lên vải",
      ["mục nát cực nhanh do phản ứng trùng hợp", "hóa đen do muối sắt bị khử thành kim loại sắt", "mềm mại hơn bình thường"]
    ),
    buildQuestion(
      "hieu",
      "Tác dụng chính của việc vò, chà sát quần áo hoặc quay lồng máy giặt là gì?",
      "Giúp các hạt mixen kéo vết dầu mỡ lơ lửng vào nước dễ dàng hơn",
      ["Để tăng nhiệt độ dung dịch giúp phản ứng xảy ra nhanh", "Để phân hủy sợi vải giúp chất giặt rửa ngấm sâu", "Để kích thích phản ứng ester hóa tạo hương thơm"]
    ),
    buildQuestion(
      "hieu",
      "Xà phòng hóa hoàn toàn $17,8\\text{ gam}$ tristearin ($M=890$) bằng dung dịch $NaOH$ dư. Khối lượng sodium stearate ($M=306$) thu được là:",
      "18,36 gam",
      ["15,24 gam", "20,12 gam", "16,84 gam"]
    ),
    buildQuestion(
      "hieu",
      "Để phản ứng xà phòng hóa vừa đủ với $8,06\\text{ kg}$ tripalmitin ($M=806$) cần dùng vừa đủ bao nhiêu gam $NaOH$?",
      "1200 gam",
      ["800 gam", "400 gam", "1600 gam"]
    ),
    buildQuestion(
      "vandung",
      "Đun nóng chất béo chứa $89\\%$ tristearin còn lại là tạp chất không phản ứng với $NaOH$. Khối lượng glycerol thu được từ $100\\text{ gam}$ chất béo trên là:",
      "9,2 gam",
      ["10,3 gam", "8,2 gam", "18,4 gam"]
    ),
    buildQuestion(
      "vandung",
      "Xà phòng hóa hoàn toàn $44,5\\text{ gam}$ một chất béo trung tính cần dùng vừa đủ $6,0\\text{ gam } NaOH$. Khối lượng muối thu được sau khi cô cạn dung dịch là:",
      "45,9 gam",
      ["48,2 gam", "42,5 gam", "50,3 gam"]
    ),
    buildQuestion(
      "vandung",
      "Từ $1\\text{ tấn}$ chất béo chứa $80\\%$ triolein ($M=884$), tính khối lượng sodium oleate ($M=304$) tối đa thu được (hiệu suất phản ứng đạt $90\\%$):",
      "744,3 kg",
      ["827,1 kg", "680,2 kg", "923,5 kg"]
    ),
    buildQuestion(
      "vandung",
      "Một nguồn nước cứng chứa $0,005\\text{ mol } Ca^{2+}$. Khối lượng sodium stearate ($M=306$) tối đa bị kết tủa mất hoạt tính tẩy rửa là:",
      "3,06 gam",
      ["1,53 gam", "6,12 gam", "4,59 gam"]
    ),
    buildQuestion(
      "vandung",
      "Để xà phòng hóa $44,2\\text{ gam}$ chất béo trung tính cần dùng vừa đủ $150\\text{ ml}$ dung dịch $NaOH\\ 1M$. Sau khi phản ứng hoàn thành, cô cạn thu được muối có khối lượng là:",
      "45,6 gam",
      ["47,2 gam", "42,8 gam", "49,0 gam"]
    )
  
  ],
  "Bài 3: Ôn tập chương 1": [

    buildQuestion(
      "biet",
      "Ester no, đơn chức, mạch hở có công thức phân tử tổng quát là gì?",
      "$C_nH_{2n}O_2\\ (n \\ge 2)$",
      ["$C_nH_{2n+2}O_2\\ (n \\ge 2)$", "$C_nH_{2n-2}O_2\\ (n \\ge 2)$", "$C_nH_{2n}O\\ (n \\ge 2)$"]
    ),
    buildQuestion(
      "biet",
      "Alcohol nào tạo nên cấu trúc chất béo?",
      "glycerol",
      ["ethylene glycol", "ethanol", "methanol"]
    ),
    buildQuestion(
      "biet",
      "Cặp chất nào tham gia phản ứng ester hóa tạo ethyl acetate?",
      "$CH_3COOH$ và $C_2H_5OH$",
      ["$HCOOCH_3$ và $NaOH$", "$CH_3COOH$ và $CH_3OH$", "$HCOOH$ và $C_2H_5OH$"]
    ),
    buildQuestion(
      "biet",
      "Nhiệt độ sôi của ester so với alcohol có cùng phân tử khối thường như thế nào?",
      "Thấp hơn đáng kể",
      ["Cao hơn đáng kể", "Xấp xỉ bằng nhau", "Cao gấp hai lần"]
    ),
    buildQuestion(
      "biet",
      "Bản chất của phản ứng xà phòng hóa trong dung dịch kiềm là:",
      "Phản ứng một chiều",
      ["Phản ứng thuận nghịch", "Phản ứng thế gốc tự do", "Phản ứng oxi hóa khử hoàn toàn"]
    ),
    buildQuestion(
      "biet",
      "Chất béo lỏng chứa chủ yếu gốc acid béo nào sau đây?",
      "oleic acid",
      ["stearic acid", "palmitic acid", "acetic acid"]
    ),
    buildQuestion(
      "biet",
      "Công thức cấu tạo thu gọn của palmitic acid là gì?",
      "$C_{15}H_{31}COOH$",
      ["$C_{17}H_{35}COOH$", "$C_{17}H_{33}COOH$", "$C_{17}H_{31}COOH$"]
    ),
    buildQuestion(
      "biet",
      "Chất nào sau đây là acid béo bão hòa (no)?",
      "stearic acid",
      ["oleic acid", "linoleic acid", "linolenic acid"]
    ),
    buildQuestion(
      "hieu",
      "Phản ứng nào dùng để chuyển hóa chất béo lỏng thành chất béo rắn trong công nghiệp?",
      "Hydrogen hóa (cộng $H_2$ vào liên kết đôi)",
      ["Xà phòng hóa bằng $NaOH$", "Thủy phân trong môi trường acid", "Đốt cháy hoàn toàn trong oxy"]
    ),
    buildQuestion(
      "hieu",
      "Thủy phân phenyl acetate trong dung dịch $NaOH$ dư tạo sản phẩm gì?",
      "$CH_3COONa$, $C_6H_5ONa$ và $H_2O$",
      ["$CH_3COONa$ và $C_6H_5OH$", "$CH_3COOH$ và $C_6H_5ONa$", "$CH_3COONa$, $C_6H_5OH$ và $H_2O$"]
    ),
    buildQuestion(
      "hieu",
      "Cho sơ đồ chuyển hóa: triolein $\\xrightarrow{+H_2\\ (Ni, t^\\circ)} X \\xrightarrow{+NaOH} Y$. Muối Y là gì?",
      "$C_{17}H_{35}COONa$",
      ["$C_{17}H_{33}COONa$", "$C_{15}H_{31}COONa$", "$C_{17}H_{31}COONa$"]
    ),
    buildQuestion(
      "hieu",
      "So sánh khả năng tan trong nước của ester với alcohol và carboxylic acid cùng phân tử khối?",
      "Ester rất ít tan trong nước",
      ["Ester tan tốt hơn alcohol", "Ester tan vô hạn trong nước", "Ester có độ tan xấp xỉ carboxylic acid"]
    ),
    buildQuestion(
      "hieu",
      "Thủy phân ester $CH_3COOCH=CH_2$ trong môi trường acid đun nóng thu được sản phẩm gì?",
      "$CH_3COOH$ và $CH_3CHO$",
      ["$CH_3COOH$ và $CH_2=CHOH$", "$CH_3COOH$ và $C_2H_5OH$", "$HCOOH$ và $CH_3COCH_3$"]
    ),
    buildQuestion(
      "hieu",
      "Số đồng phân cấu tạo ester ứng với công thức $C_3H_6O_2$ là:",
      "2",
      ["3", "4", "1"]
    ),
    buildQuestion(
      "hieu",
      "Thủy phân hoàn toàn ester đơn chức X thu được hai sản phẩm đều có phản ứng tráng bạc. Công thức cấu tạo phù hợp của X là:",
      "$HCOOCH=CH_2$",
      ["$CH_3COOCH=CH_2$", "$HCOOCH_2CH_3$", "$CH_3COOCH_3$"]
    ),
    buildQuestion(
      "hieu",
      "Tại sao dầu mỡ động thực vật để lâu ngày trong không khí bị ôi thiu?",
      "Do liên kết đôi $C=C$ của chất béo bị oxi hóa chậm bởi oxygen không khí tạo thành peroxide rồi phân hủy thành các aldehyde có mùi khó chịu",
      ["Do chất béo phản ứng tự phân hủy giải phóng khí hydrogen thơm", "Do vi khuẩn thủy phân hoàn toàn gốc chất béo thành xà phòng và glycerol", "Do độ ẩm không khí hòa tan hết các liên kết hydrogen liên phân tử"]
    ),
    buildQuestion(
      "hieu",
      "Phản ứng ester hóa giữa carboxylic acid và alcohol có đặc điểm gì?",
      "Là phản ứng thuận nghịch, có xúc tác acid mạnh ($H_2SO_4$ đặc) và đun nóng",
      ["Là phản ứng một chiều xảy ra cực kỳ mãnh liệt ở nhiệt độ phòng", "Là phản ứng oxi hóa khử có giải phóng khí hydro sinh ra", "Là phản ứng trùng ngưng hoàn toàn không sinh ra nước"]
    ),
    buildQuestion(
      "hieu",
      "Tại sao dầu mỡ bôi trơn máy móc không thể dùng làm xà phòng?",
      "Vì dầu mỡ bôi trơn là hỗn hợp hydrocarbon, không phải triester của glycerol",
      ["Vì dầu bôi trơn có phân tử khối quá nhỏ không phản ứng với kiềm", "Vì dầu bôi trơn tan vô hạn trong nước nên không rửa sạch được chất bẩn", "Vì dầu bôi trơn chỉ chứa gốc acid no có mạch carbon phân nhánh cực lớn"]
    ),
    buildQuestion(
      "hieu",
      "Đốt cháy hoàn toàn $0,1\\text{ mol}$ ester no đơn chức mạch hở X thu được $0,3\\text{ mol } CO_2$. Công thức phân tử của X là:",
      "$C_3H_6O_2$",
      ["$C_2H_4O_2$", "$C_4H_8O_2$", "$C_5H_{10}O_2$"]
    ),
    buildQuestion(
      "hieu",
      "Cho $8,8\\text{ gam}$ ethyl acetate tác dụng hoàn toàn với $150\\text{ ml}$ dung dịch $NaOH\\ 1M$. Cô cạn dung dịch thu được bao nhiêu gam rắn khan?",
      "10,2 gam",
      ["8,2 gam", "12,2 gam", "14,2 gam"]
    ),
    buildQuestion(
      "vandung",
      "Thủy phân hoàn toàn $8,8\\text{ gam}$ ester no đơn chức X bằng dung dịch $NaOH$ vừa đủ thu được $8,2\\text{ gam}$ muối sodium acetate. Tên gọi của X là:",
      "ethyl acetate",
      ["methyl propionate", "propyl formate", "isopropyl formate"]
    ),
    buildQuestion(
      "vandung",
      "Cho $14,8\\text{ gam}$ hỗn hợp hai ester đồng phân đơn chức no tác dụng vừa đủ với $200\\text{ ml}$ dung dịch $NaOH\\ 1M$. Công thức phân tử chung của hai ester là:",
      "$C_3H_6O_2$",
      ["$C_4H_8O_2$", "$C_2H_4O_2$", "$C_5H_{10}O_2$"]
    ),
    buildQuestion(
      "vandung",
      "Đốt cháy hoàn toàn một lượng ester no đơn chức mạch hở X cần dùng $0,35\\text{ mol } O_2$ thu được $0,3\\text{ mol } CO_2$. Công thức phân tử của X là:",
      "$C_3H_6O_2$",
      ["$C_2H_4O_2$", "$C_4H_8O_2$", "$C_5H_{10}O_2$"]
    ),
    buildQuestion(
      "vandung",
      "Thủy phân hoàn toàn $13,2\\text{ gam}$ ester đơn chức X bằng dung dịch $KOH$ dư thu được $9,2\\text{ gam}$ alcohol đơn chức Y. Tên gọi của X là:",
      "ethyl acetate",
      ["methyl propionate", "propyl formate", "isopropyl formate"]
    ),
    buildQuestion(
      "vandung",
      "Xà phòng hóa hoàn toàn m gam triolein bằng dung dịch $NaOH$ dư thu được $9,2\\text{ gam}$ glycerol. Giá trị của m là:",
      "88,4 gam",
      ["44,2 gam", "176,8 gam", "132,6 gam"]
    )
  ]
};
  