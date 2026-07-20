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

export const chapter2Questions: Record<string, Question[]> = {
  "Bài 4: Giới thiệu về carbohydrate. Glucose và fructose": [

    buildQuestion(
      "biet",
      "Carbohydrate là những hợp chất hữu cơ tạp chức, thường có công thức chung là:",
      "$C_n(H_2O)_m$",
      ["$C_nH_{2n+2}O$", "$C_nH_{2n}O_2$", "$C_n(H_2O)_n$"]
    ),
    buildQuestion(
      "biet",
      "Glucose thuộc loại carbohydrate nào sau đây?",
      "monosaccharide",
      ["disaccharide", "polysaccharide", "oligosaccharide"]
    ),
    buildQuestion(
      "biet",
      "Công thức phân tử của glucose và fructose là:",
      "$C_6H_{12}O_6$",
      ["$C_{12}H_{22}O_{11}$", "$(C_6H_{10}O_5)_n$", "$C_5H_{10}O_5$"]
    ),
    buildQuestion(
      "biet",
      "Carbohydrate có độ ngọt cao, chiếm khoảng $40\\%$ trong mật ong và được gọi là đường mật là:",
      "fructose",
      ["glucose", "saccharose", "maltose"]
    ),
    buildQuestion(
      "biet",
      "Trong y học, glucose được dùng làm gì?",
      "thuốc tăng lực và truyền dịch trực tiếp cho bệnh nhân",
      ["dung dịch sát trùng vết thương hở", "thuốc trị bệnh thiếu máu", "dung môi hòa tan vitamin"]
    ),
    buildQuestion(
      "biet",
      "Fructose thuộc loại monosaccharide chứa nhóm chức nào trong phân tử mạch hở?",
      "nhóm ketone và các nhóm hydroxyl ($-OH$)",
      ["nhóm aldehyde và các nhóm hydroxyl ($-OH$)", "nhóm carboxyl và các nhóm hydroxyl ($-OH$)", "nhóm ester thơm và các nhóm hydroxyl ($-OH$)"]
    ),
    buildQuestion(
      "biet",
      "Trạng thái tự nhiên và độ tan của glucose ở nhiệt độ phòng là gì?",
      "chất rắn kết tinh, không màu, dễ tan trong nước",
      ["chất lỏng sánh, màu vàng nhạt, tan ít trong nước lạnh", "chất rắn vô định hình, xốp, không tan trong nước", "chất khí không màu, không mùi, tan vô hạn trong nước"]
    ),
    buildQuestion(
      "biet",
      "Trong phân tử glucose ở dạng mạch hở có bao nhiêu nhóm hydroxyl ($-OH$)?",
      "5 nhóm",
      ["4 nhóm", "6 nhóm", "3 nhóm"]
    ),
    buildQuestion(
      "hieu",
      "Tại sao cả glucose và fructose đều tham gia phản ứng tráng bạc?",
      "Vì trong môi trường kiềm chứa dung dịch $NH_3$, fructose chuyển hóa thành glucose",
      ["Vì cả hai chất đều chứa nhóm chức aldehyde tự do ở dạng mạch hở", "Vì fructose phản ứng oxi hóa nhóm ketone thành nhóm carboxyl", "Vì phân tử fructose có khả năng tự mở vòng tạo nhóm aldehyde $HCOO-$"]
    ),
    buildQuestion(
      "hieu",
      "Hiện tượng xảy ra khi cho dung dịch glucose tác dụng với $Cu(OH)_2$ ở nhiệt độ thường là:",
      "Tạo dung dịch phức màu xanh lam đậm đặc trưng",
      ["Tạo kết tủa đỏ gạch bền vững", "Dung dịch bị mất màu hoàn toàn", "Giải phóng khí không màu mùi hắc"]
    ),
    buildQuestion(
      "hieu",
      "Hiện tượng xảy ra khi đun nóng glucose với dung dịch $Cu(OH)_2$ trong môi trường kiềm dư là:",
      "Xuất hiện kết tủa màu đỏ gạch của $Cu_2O$",
      ["Tạo dung dịch phức chất màu tím hồng", "Tạo chất rắn kết tủa màu đen tuyền", "Sủi bọt khí không màu mãnh liệt"]
    ),
    buildQuestion(
      "hieu",
      "Khử hoàn toàn glucose bằng khí $H_2$ với xúc tác $Ni$, đun nóng thu được sản phẩm hữu cơ là:",
      "sorbitol",
      ["gluconic acid", "fructose", "ethanol"]
    ),
    buildQuestion(
      "hieu",
      "Trong dung dịch nước, glucose tồn tại chủ yếu ở dạng cấu trúc nào?",
      "dạng mạch vòng alpha-glucose và beta-glucose",
      ["dạng mạch hở có chứa nhóm aldehyde $-CHO$", "dạng mạch phân nhánh phức tạp", "dạng mạch xoắn lò xo tự nhiên"]
    ),
    buildQuestion(
      "hieu",
      "Tại sao glucose còn được gọi là đường nho?",
      "Vì glucose có nhiều nhất trong quả nho chín",
      ["Vì glucose được chiết xuất lần đầu từ cây nho rừng", "Vì phân tử glucose có dạng chùm giống chùm nho", "Vì glucose chỉ được tổng hợp từ quả nho xanh"]
    ),
    buildQuestion(
      "hieu",
      "Sự khác biệt lớn nhất về cấu tạo hóa học giữa glucose và fructose ở dạng mạch hở là:",
      "Glucose chứa nhóm chức aldehyde ($-CHO$), fructose chứa nhóm chức ketone ($-CO-$)",
      ["Glucose có mạch carbon phân nhánh, fructose có mạch carbon thẳng", "Glucose chứa 5 nhóm hydroxyl, fructose chứa 6 nhóm hydroxyl", "Glucose là monosaccharide, fructose là disaccharide đồng phân"]
    ),
    buildQuestion(
      "hieu",
      "Khi lên men glucose với xúc tác enzyme ở nhiệt độ thích hợp ($30-35^\\circ C$), sản phẩm hữu cơ thu được là:",
      "ethanol và khí carbon dioxide",
      ["acetic acid và nước", "glycerol và khí hydrogen", "methanol và hơi nước"]
    ),
    buildQuestion(
      "hieu",
      "Giải thích tại sao người bị bệnh đái tháo đường (tiểu đường) cần hạn chế ăn thực phẩm giàu glucose?",
      "Vì cơ thể họ thiếu insulin để điều hòa, ăn nhiều glucose làm nồng độ đường trong máu tăng vượt mức an toàn",
      ["Vì glucose phản ứng với hồng cầu làm tắc nghẽn mạch máu", "Vì glucose chuyển hóa hoàn toàn thành acid độc gây loét dạ dày", "Vì glucose làm phân hủy protein cơ bắp giải phóng độc tố"]
    ),
    buildQuestion(
      "hieu",
      "Sản phẩm sinh ra khi tác dụng hoàn toàn glucose với nước bromine ($Br_2$) là chất nào?",
      "gluconic acid",
      ["sorbitol", "saccharic acid", "fructose"]
    ),
    buildQuestion(
      "hieu",
      "Lên men hoàn toàn $18\\text{ gam}$ glucose thành ethanol, thể tích khí $CO_2$ ở điều kiện chuẩn (đkc) thu được là:",
      "4,958 lít",
      ["2,479 lít", "9,916 lít", "1,240 lít"]
    ),
    buildQuestion(
      "hieu",
      "Cho $18\\text{ gam}$ glucose phản ứng hoàn toàn với dung dịch $AgNO_3/NH_3$ dư, đun nóng. Khối lượng bạc thu được là:",
      "21,6 gam",
      ["10,8 gam", "43,2 gam", "32,4 gam"]
    ),
    buildQuestion(
      "vandung",
      "Đun nóng m gam glucose với dung dịch $Cu(OH)_2$ trong kiềm dư thu được $7,2\\text{ gam}$ kết tủa đỏ gạch. Giá trị của m là:",
      "9,0 gam",
      ["18,0 gam", "4,5 gam", "13,5 gam"]
    ),
    buildQuestion(
      "vandung",
      "Tính thể tích dung dịch glucose $5\\%$ ($d = 1\\text{ g/ml}$) tối thiểu cần truyền vào cơ thể để cung cấp $15\\text{ gam}$ glucose:",
      "300 ml",
      ["150 ml", "600 ml", "450 ml"]
    ),
    buildQuestion(
      "vandung",
      "Cho $30\\text{ gam}$ hỗn hợp glucose và saccharose tác dụng hoàn toàn với dung dịch $AgNO_3/NH_3$ dư thu được $21,6\\text{ gam}$ bạc. Thành phần phần trăm khối lượng của glucose trong hỗn hợp là:",
      "60%",
      ["40%", "50%", "30%"]
    ),
    buildQuestion(
      "vandung",
      "Khử m gam glucose bằng khí $H_2$ ($Ni, t^\\circ$) thu được $18,2\\text{ gam}$ sorbitol. Hiệu suất phản ứng đạt $80\\%$. Giá trị của m là:",
      "22,5 gam",
      ["18,0 gam", "25,0 gam", "20,0 gam"]
    ),
    buildQuestion(
      "vandung",
      "Lên men m gam glucose thành ethanol. Hấp thụ toàn bộ khí $CO_2$ sinh ra vào dung dịch nước vôi trong dư thu được $30\\text{ gam}$ kết tủa. Biết hiệu suất phản ứng đạt $90\\%$. Giá trị của m là:",
      "30,0 gam",
      ["27,0 gam", "33,3 gam", "15,0 gam"]
    )
  
  ],
  "Bài 5: Saccharose và maltose": [

    buildQuestion(
      "biet",
      "Công thức phân tử của saccharose là chất nào?",
      "$C_{12}H_{22}O_{11}$",
      ["$C_6H_{12}O_6$", "$(C_6H_{10}O_5)_n$", "$C_5H_{10}O_5$"]
    ),
    buildQuestion(
      "biet",
      "Saccharose được cấu tạo từ các gốc monosaccharide nào?",
      "một gốc alpha-glucose và một gốc beta-fructose",
      ["hai gốc alpha-glucose liên kết 1,4", "một gốc alpha-glucose và một gốc beta-galactose", "hai gốc beta-fructose liên kết chéo"]
    ),
    buildQuestion(
      "biet",
      "Nguồn cung cấp đường saccharose chủ yếu trong công nghiệp đường là:",
      "cây mía và củ cải đường",
      ["quả chín thiên nhiên", "hạt gạo nếp dẻo", "mật ong rừng sâu"]
    ),
    buildQuestion(
      "biet",
      "Liên kết hóa học nối giữa hai gốc monosaccharide trong saccharose là loại liên kết nào?",
      "liên kết glycoside",
      ["liên kết peptide", "liên kết hydrogen liên phân tử", "liên kết ester mạch vòng"]
    ),
    buildQuestion(
      "biet",
      "Maltose là đồng phân của saccharose, được cấu tạo từ các gốc nào?",
      "hai gốc alpha-glucose",
      ["một gốc alpha-glucose và một gốc beta-fructose", "hai gốc beta-fructose", "một gốc beta-glucose và một gốc alpha-galactose"]
    ),
    buildQuestion(
      "biet",
      "Trạng thái vật lý và độ tan của đường saccharose ở điều kiện thường là:",
      "chất rắn kết tinh, không màu, tan tốt trong nước",
      ["chất lỏng sánh, không màu, tan ít trong nước", "chất rắn vô định hình, xốp nhẹ, không tan", "chất bột mịn màu trắng dẻo thơm"]
    ),
    buildQuestion(
      "biet",
      "Maltose còn được gọi là loại đường gì trong đời sống thực tiễn?",
      "đường mạch nha",
      ["đường mía trắng", "đường nho quả chín", "đường phèn tinh khiết"]
    ),
    buildQuestion(
      "biet",
      "Trong đời sống, đường saccharose được dùng làm gì?",
      "sản xuất bánh kẹo, nước giải khát, bảo quản thực phẩm",
      ["làm nguyên liệu dệt tơ nhân tạo mềm mại", "chế tạo thuốc súng không khói cực mạnh", "làm chất sát trùng y tế thông dụng"]
    ),
    buildQuestion(
      "hieu",
      "Tại sao saccharose không tham gia phản ứng tráng bạc?",
      "Vì trong phân tử không chứa nhóm hemiacetal hoặc hemiketal tự do để có thể mở vòng tạo nhóm chức aldehyde",
      ["Vì saccharose thuộc loại disaccharide mạch polymer xoắn kín", "Vì phân tử chứa liên kết glycoside quá bền không bị bẻ gãy", "Vì các gốc glucose và fructose triệt tiêu tính khử của nhau"]
    ),
    buildQuestion(
      "hieu",
      "Phản ứng thủy phân saccharose trong môi trường acid loãng, đun nóng tạo ra sản phẩm gồm những chất nào?",
      "glucose và fructose",
      ["hai phân tử glucose no", "hai phân tử fructose", "sorbitol và acetic acid"]
    ),
    buildQuestion(
      "hieu",
      "Phản ứng đặc trưng của saccharose với dung dịch $Cu(OH)_2$ ở nhiệt độ thường tạo ra:",
      "dung dịch phức chất màu xanh lam đậm đặc trưng",
      ["kết tủa đỏ gạch của copper oxide", "dung dịch keo màu tím biure độc đáo", "kết tủa màu xanh lục sẫm"]
    ),
    buildQuestion(
      "hieu",
      "Maltose có tham gia phản ứng tráng bạc không, tại sao?",
      "Có, vì trong dung dịch mạch vòng maltose còn nhóm hemiacetal tự do có khả năng mở vòng tạo nhóm chức aldehyde",
      ["Không, vì maltose là disaccharide giống saccharose", "Có, vì khi hòa tan trong nước maltose tự biến đổi hoàn toàn thành fructose", "Không, vì các nhóm hydroxyl cản trở phản ứng của ion bạc"]
    ),
    buildQuestion(
      "hieu",
      "Tại sao trong quá trình sản xuất đường mía, người ta dùng sữa vôi ($Ca(OH)_2$) cho vào nước ép mía?",
      "Để kết tủa loại bỏ các acid hữu cơ có sẵn trong mía giúp làm trong nước đường",
      ["Để chuyển hóa hoàn toàn saccharose thành glucose", "Để tăng độ ngọt đậm đà tự nhiên cho mẻ đường", "Để sát trùng tiêu diệt toàn bộ vi sinh vật bám dính"]
    ),
    buildQuestion(
      "hieu",
      "Để chứng minh phân tử saccharose có nhiều nhóm hydroxyl kề nhau, người ta cho dung dịch saccharose tác dụng với:",
      "dung dịch $Cu(OH)_2$ ở nhiệt độ thường",
      ["nước bromine dư ở nhiệt độ phòng", "dung dịch $AgNO_3/NH_3$ đun nóng", "dung dịch acid $HCl$ loãng"]
    ),
    buildQuestion(
      "hieu",
      "Hiện tượng xảy ra khi nhỏ vài giọt dung dịch $H_2SO_4$ đặc vào cốc đựng đường saccharose khan là:",
      "Đường hóa than đen kịt, sủi bọt khí mạnh mẽ dâng cao khỏi miệng cốc",
      ["Đường tan tạo dung dịch không màu trong suốt", "Đường phát sáng lấp lánh rồi biến mất không dấu vết", "Xuất hiện kết tủa màu đỏ gạch bám quanh cốc"]
    ),
    buildQuestion(
      "hieu",
      "Vai trò sinh học chính của saccharose đối với cơ thể người là gì?",
      "Cung cấp năng lượng nhanh chóng cho các hoạt động của cơ thể",
      ["Xây dựng cấu trúc màng tế bào thần kinh", "Xúc tác sinh học cho các phản ứng tiêu hóa", "Là thành phần cấu tạo nên gen di truyền DNA"]
    ),
    buildQuestion(
      "hieu",
      "Tại sao sau khi đun nóng dung dịch saccharose với dung dịch acid loãng, dung dịch sau phản ứng lại có khả năng tráng gương?",
      "Vì phản ứng thủy phân giải phóng glucose và fructose đều có tính khử mạnh",
      ["Vì dung dịch acid đã khử saccharose thành kim loại bạc", "Vì saccharose tự oxi hóa thành aldehyde acetic bay hơi", "Vì gốc glucozơ tự tách ra tác dụng trực tiếp với ion hydroxit"]
    ),
    buildQuestion(
      "hieu",
      "Điểm giống nhau cơ bản giữa saccharose và maltose là:",
      "Đều là disaccharide và có khả năng tham gia phản ứng thủy phân",
      ["Đều tham gia phản ứng tráng gương ở điều kiện thường", "Đều được cấu tạo từ một gốc glucose và một gốc fructose", "Đều không làm mất màu nước bromine khi đun nóng"]
    ),
    buildQuestion(
      "hieu",
      "Thủy phân hoàn toàn $34,2\\text{ gam}$ saccharose rồi cho sản phẩm tác dụng với dung dịch $AgNO_3/NH_3$ dư, đun nóng. Khối lượng bạc thu được là:",
      "43,2 gam",
      ["21,6 gam", "10,8 gam", "32,4 gam"]
    ),
    buildQuestion(
      "hieu",
      "Khối lượng glucose thu được khi thủy phân hoàn toàn $171\\text{ gam}$ saccharose với hiệu suất phản ứng đạt $80\\%$ là:",
      "72,0 gam",
      ["90,0 gam", "81,0 gam", "64,0 gam"]
    ),
    buildQuestion(
      "vandung",
      "Thủy phân hoàn toàn m gam saccharose thu được dung dịch X. Cho X tác dụng hoàn toàn với $Cu(OH)_2$ trong kiềm nóng dư thu được $28,8\\text{ gam}$ kết tủa đỏ gạch. Giá trị của m là:",
      "34,2 gam",
      ["68,4 gam", "17,1 gam", "51,3 gam"]
    ),
    buildQuestion(
      "vandung",
      "Đốt cháy hoàn toàn $0,01\\text{ mol}$ saccharose cần dùng vừa đủ bao nhiêu lít khí oxygen ở điều kiện chuẩn (đkc)?",
      "2,975 lít",
      ["1,487 lít", "3,966 lít", "4,462 lít"]
    ),
    buildQuestion(
      "vandung",
      "Thủy phân hoàn toàn $68,4\\text{ gam}$ maltose với hiệu suất $90\\%$, sau đó cho toàn bộ sản phẩm tham gia phản ứng tráng bạc. Khối lượng bạc thu được là:",
      "77,76 gam",
      ["86,40 gam", "43,20 gam", "38,88 gam"]
    ),
    buildQuestion(
      "vandung",
      "Cần bao nhiêu kg mía chứa $16\\%$ saccharose để sản xuất được $400\\text{ kg}$ đường kính trắng chứa $98\\%$ saccharose (hao hụt trong quá trình chế biến là $10\\%$)?",
      "2722,2 kg",
      ["2450,0 kg", "2950,5 kg", "3120,8 kg"]
    ),
    buildQuestion(
      "vandung",
      "Hỗn hợp X gồm glucose và saccharose. Cho m gam X tác dụng với $AgNO_3/NH_3$ dư đun nóng thu được $10,8\\text{ gam}$ bạc. Mặt khác, nếu thủy phân hoàn toàn m gam X rồi tráng bạc hoàn toàn thu được $54,0\\text{ gam}$ bạc. Khối lượng saccharose có trong m gam X là:",
      "34,2 gam",
      ["17,1 gam", "68,4 gam", "51,3 gam"]
    )
  
  ],
  "Bài 6: Tinh bột và cellulose": [

    buildQuestion(
      "biet",
      "Tinh bột được cấu tạo từ hai thành phần polymer chính nào?",
      "amylose và amylopectin",
      ["cellulose và glycogen", "saccharose và maltose", "fructose và glucose"]
    ),
    buildQuestion(
      "biet",
      "Cellulose là thành phần cấu tạo chính của bộ phận nào ở tế bào thực vật?",
      "màng tế bào, thớ sợi của tre, nứa, bông",
      ["nhân tế bào thực vật mềm", "vỏ quả chín ngọt nước", "chất diệp lục xanh hữu cơ"]
    ),
    buildQuestion(
      "biet",
      "Gốc monosaccharide cấu tạo nên mạch phân tử cellulose là gốc nào?",
      "beta-glucose",
      ["alpha-glucose", "beta-fructose", "alpha-galactose"]
    ),
    buildQuestion(
      "biet",
      "Tinh bột được tổng hợp trong cây xanh chủ yếu qua quá trình sinh học nào?",
      "quang hợp dưới ánh sáng mặt trời",
      ["hô hấp tế bào thực vật đêm", "trao đổi khoáng đất tự nhiên", "hấp thụ sương muối buổi sớm"]
    ),
    buildQuestion(
      "biet",
      "Liên kết nối giữa các gốc alpha-glucose trong mạch amylose của tinh bột là:",
      "liên kết alpha-1,4-glycoside",
      ["liên kết beta-1,4-glycoside", "liên kết alpha-1,6-glycoside", "liên kết peptide bão hòa"]
    ),
    buildQuestion(
      "biet",
      "Cellulose có cấu trúc mạch phân tử dạng nào?",
      "mạch thẳng không phân nhánh",
      ["mạch phân nhánh nhiều nhánh cụm", "mạng lưới không gian đa chiều", "mạch xoắn vòng kín lo xo"]
    ),
    buildQuestion(
      "biet",
      "Thuốc thử đặc trưng để nhận biết hồ tinh bột ở nhiệt độ thường là chất nào?",
      "dung dịch iodine ($I_2$)",
      ["dung dịch $Cu(OH)_2$ tươi", "nước bromine đỏ cam", "dung dịch $AgNO_3/NH_3$ dư"]
    ),
    buildQuestion(
      "biet",
      "Polymer nào trong tinh bột có cấu trúc mạch phân nhánh sườn rộng?",
      "amylopectin",
      ["amylose", "cellulose", "glycogen thực vật"]
    ),
    buildQuestion(
      "hieu",
      "Tại sao tinh bột có phản ứng màu xanh tím với dung dịch iodine ở nhiệt độ thường?",
      "Do phân tử amylose cấu trúc xoắn lò xo có lỗ rỗng giữ phân tử iodine tạo hấp phụ màu đặc trưng",
      ["Do phản ứng oxi hóa hóa học của iodine vào liên kết glycoside", "Do tinh bột chuyển hóa thành glucose phản ứng sinh màu với iodine", "Do dung dịch iodine phản ứng kết tủa xốp nhẹ với tinh bột"]
    ),
    buildQuestion(
      "hieu",
      "Tại sao con người và động vật ăn thịt không tiêu hóa được cellulose trong khi động vật ăn cỏ lại tiêu hóa tốt?",
      "Vì trong hệ tiêu hóa của người không có hệ enzyme cellulase để thủy phân liên kết beta-1,4-glycoside của cellulose",
      ["Vì cơ thể người có thân nhiệt quá cao làm cháy phân tử cellulose", "Vì phân tử cellulose quá dài làm tắc nghẽn hoàn toàn ruột người", "Vì dạ dày người có môi trường acid cực mạnh hủy hoại cellulose"]
    ),
    buildQuestion(
      "hieu",
      "Thủy phân tinh bột hoặc cellulose đến cùng trong môi trường acid nóng thu được sản phẩm hữu cơ duy nhất là chất nào?",
      "glucose",
      ["fructose", "saccharose", "maltose"]
    ),
    buildQuestion(
      "hieu",
      "Phản ứng của cellulose với nitric acid đặc ($HNO_3/H_2SO_4$ đặc) dùng để sản xuất loại vật liệu đặc biệt nào?",
      "thuốc súng không khói (cellulose trinitrate)",
      ["tơ nhân tạo acetate mềm mượt", "chất dẻo PVC chống ẩm", "keo dán siêu dính đa dụng"]
    ),
    buildQuestion(
      "hieu",
      "Tại sao khi đun nóng dung dịch hồ tinh bột đã hóa xanh với iodine, màu xanh tím biến mất và xuất hiện lại khi để nguội?",
      "Khi nóng, mạch xoắn tinh bột duỗi ra giải phóng iodine; khi nguội, mạch lại xoắn lại giữ chặt phân tử iodine",
      ["Khi nóng, iodine bị thăng hoa bay mất hoàn toàn khỏi dung dịch", "Khi nóng xảy ra phản ứng oxi hóa hoàn toàn tinh bột thành khí", "Nhiệt độ cao làm phân tử tinh bột tự biến tính không màu vĩnh viễn"]
    ),
    buildQuestion(
      "hieu",
      "Điểm khác biệt lớn nhất về cấu trúc phân tử giữa amylose và amylopectin là gì?",
      "Amylose mạch thẳng không phân nhánh; amylopectin mạch phân nhánh có chứa thêm liên kết alpha-1,6-glycoside",
      ["Amylose chứa các gốc glucose, amylopectin chứa các gốc fructose", "Amylose tan tốt trong nước lạnh, amylopectin hoàn toàn kị nước", "Amylose có phân tử khối lớn hơn gấp trăm lần so với amylopectin"]
    ),
    buildQuestion(
      "hieu",
      "Cellulose tan được trong dung dịch đặc biệt nào sau đây?",
      "nước Schweizer (phức đồng amoniac $[Cu(NH_3)_4](OH)_2$)",
      ["dung dịch acid hydrochloric loãng nóng", "dung dịch kiềm $NaOH$ đậm đặc lạnh", "nước muối ăn bão hòa ở nhiệt độ sôi"]
    ),
    buildQuestion(
      "hieu",
      "Phát biểu nào sau đây đúng về đặc điểm hóa học của phân tử cellulose?",
      "Mỗi mắt xích cellulose chứa 3 nhóm hydroxyl tự do, có thể viết là $[C_6H_7O_2(OH)_3]_n$",
      ["Cellulose có khả năng phản ứng tráng bạc ở điều kiện thường", "Cellulose có cấu trúc mạch xoắn giống như amylose của tinh bột", "Cellulose bị thủy phân dễ dàng trong môi trường kiềm loãng"]
    ),
    buildQuestion(
      "hieu",
      "Phản ứng thủy phân tinh bột trong cơ thể người nhờ hệ enzyme amylase trong nước bọt diễn ra theo sơ đồ đúng nào?",
      "tinh bột $\\to$ dextrin $\\to$ maltose $\\to$ glucose",
      ["tinh bột $\\to$ glucose $\\to$ dextrin $\\to$ glycogen", "tinh bột $\\to$ saccharose $\\to$ fructose $\\to$ glucose", "tinh bột $\\to$ cellulose $\\to$ maltose $\\to$ glucose"]
    ),
    buildQuestion(
      "hieu",
      "Tại sao tơ visco và tơ acetate được gọi là tơ bán tổng hợp (tơ nhân tạo)?",
      "Vì chúng được sản xuất bằng cách biến đổi hóa học một phần nguồn cellulose thiên nhiên có sẵn",
      ["Vì chúng được tổng hợp hoàn toàn từ sản phẩm chưng cất dầu mỏ", "Vì chúng chứa một nửa thành phần tơ tằm, một nửa nylon", "Vì chúng chỉ có khả năng tự phân hủy một nửa ngoài môi trường"]
    ),
    buildQuestion(
      "hieu",
      "Thủy phân hoàn toàn $162\\text{ gam}$ tinh bột với hiệu suất $80\\%$. Khối lượng glucose thu được sau phản ứng là:",
      "144,0 gam",
      ["180,0 gam", "120,0 gam", "162,0 gam"]
    ),
    buildQuestion(
      "hieu",
      "Từ $3,24\\text{ tấn}$ cellulose, người ta điều chế được khối lượng thuốc súng không khói cellulose trinitrate là bao nhiêu (biết hiệu suất phản ứng đạt $90\\%$)?",
      "5,346 tấn",
      ["5,940 tấn", "4,812 tấn", "6,115 tấn"]
    ),
    buildQuestion(
      "vandung",
      "Lên men rượu m gam tinh bột thành ethanol với hiệu suất toàn bộ quá trình đạt $70\\%$. Toàn bộ khí $CO_2$ sinh ra hấp thụ vào nước vôi trong dư thu được $50\\text{ gam}$ kết tủa. Giá trị của m là:",
      "57,86 gam",
      ["40,50 gam", "81,00 gam", "32,40 gam"]
    ),
    buildQuestion(
      "vandung",
      "Đốt cháy hoàn toàn một lượng cellulose thu được $13,2\\text{ gam } CO_2$ và m gam nước. Khối lượng m của nước thu được là:",
      "4,5 gam",
      ["5,4 gam", "3,6 gam", "6,3 gam"]
    ),
    buildQuestion(
      "vandung",
      "Để sản xuất $1\\text{ tấn}$ tơ acetate cần dùng bao nhiêu tấn cellulose (biết hiệu suất phản ứng đạt $85\\%$, giả thiết tơ acetate là cellulose triacetate tinh khiết)?",
      "0,66 tấn",
      ["0,56 tấn", "0,75 tấn", "0,88 tấn"]
    ),
    buildQuestion(
      "vandung",
      "Thủy phân hoàn toàn m gam tinh bột thu được dung dịch chứa glucose. Cho toàn bộ dung dịch này tác dụng với $AgNO_3/NH_3$ dư thu được $32,4\\text{ gam}$ bạc. Biết hiệu suất thủy phân là $100\\%$. Giá trị của m là:",
      "24,3 gam",
      ["16,2 gam", "32,4 gam", "40,5 gam"]
    ),
    buildQuestion(
      "vandung",
      "Thể tích dung dịch $HNO_3\\ 63\\%$ ($d = 1,4\\text{ g/ml}$) cần dùng để phản ứng hoàn toàn với $162\\text{ gam}$ cellulose tạo ra cellulose trinitrate là bao nhiêu (hiệu suất đạt $80\\%$)?",
      "214,3 ml",
      ["171,4 ml", "250,5 ml", "300,0 ml"]
    )
  
  ],
  "Bài 7: Ôn tập chương 2": [

    buildQuestion(
      "biet",
      "Hợp chất nào sau đây không thuộc loại carbohydrate?",
      "ethyl acetate",
      ["glucose", "saccharose", "cellulose"]
    ),
    buildQuestion(
      "biet",
      "Monosaccharide phổ biến nhất, có nhiều trong quả nho chín là:",
      "glucose",
      ["fructose", "maltose", "saccharose"]
    ),
    buildQuestion(
      "biet",
      "Disaccharide nào là thành phần chính của đường ăn hàng ngày?",
      "saccharose",
      ["maltose", "glucose", "fructose"]
    ),
    buildQuestion(
      "biet",
      "Thuốc thử nào dùng để nhận biết nhanh hồ tinh bột ở nhiệt độ thường?",
      "dung dịch iodine ($I_2$)",
      ["dung dịch quỳ tím", "nước vôi trong dư", "dung dịch $AgNO_3/NH_3$"]
    ),
    buildQuestion(
      "biet",
      "Chất nào là polysaccharide cấu tạo nên thành tế bào thực vật dai chắc?",
      "cellulose",
      ["tinh bột", "glycogen", "saccharose"]
    ),
    buildQuestion(
      "biet",
      "Cặp đồng phân cấu tạo tiêu biểu nhất trong nhóm carbohydrate là:",
      "glucose và fructose",
      ["saccharose và maltose", "tinh bột và cellulose", "glycogen và amylose"]
    ),
    buildQuestion(
      "biet",
      "Sản phẩm của phản ứng thủy phân hoàn toàn tinh bột thu được là:",
      "glucose",
      ["fructose", "saccharose", "sorbitol"]
    ),
    buildQuestion(
      "biet",
      "Carbohydrate nào có độ ngọt cao nhất, có nhiều trong mật ong?",
      "fructose",
      ["saccharose", "glucose", "maltose"]
    ),
    buildQuestion(
      "hieu",
      "Điểm chung về tính chất hóa học giữa glucose, fructose và saccharose là:",
      "Đều phản ứng với $Cu(OH)_2$ ở nhiệt độ thường tạo phức màu xanh lam đậm",
      ["Đều tham gia phản ứng tráng bạc với $AgNO_3/NH_3$", "Đều có phản ứng thủy phân trong môi trường acid nóng", "Đều làm mất màu nước bromine nhanh chóng"]
    ),
    buildQuestion(
      "hieu",
      "Tại sao xenlulozơ không phản ứng với dung dịch iodine tạo màu xanh tím?",
      "Vì cellulose có cấu trúc mạch thẳng duỗi, không xoắn rỗng như tinh bột để hấp phụ iodine",
      ["Vì cellulose là chất rắn phân nhánh rất nhiều nhánh cản trở", "Vì cellulose tác dụng làm phân hủy phân tử iodine thành muối vô cơ", "Vì phân tử cellulose có liên kết glycoside không tan trong nước"]
    ),
    buildQuestion(
      "hieu",
      "Phát biểu nào sau đây đúng về các carbohydrate đã học?",
      "Glucose và fructose đều có khả năng bị khử bởi hydrogen tạo sorbitol",
      ["Tinh bột và cellulose có cùng hệ số polyme hóa n nên là đồng phân", "Saccharose có cấu trúc mạch vòng chứa nhóm chức aldehyde tự do", "Maltose hoàn toàn không có tính chất khử và không tráng bạc"]
    ),
    buildQuestion(
      "hieu",
      "Thủy phân hoàn toàn hỗn hợp gồm saccharose và tinh bột thu được sản phẩm gồm những monosaccharide nào?",
      "glucose và fructose",
      ["chỉ có glucose duy nhất", "chỉ có fructose duy nhất", "glucose, fructose và galactose"]
    ),
    buildQuestion(
      "hieu",
      "Phản ứng tráng gương của glucose chứng minh trong phân tử có nhóm chức nào?",
      "nhóm chức aldehyde ($-CHO$)",
      ["nhóm chức hydroxyl kề nhau", "nhóm chức ketone ($-CO-$)", "liên kết glycoside mạch hở"]
    ),
    buildQuestion(
      "hieu",
      "Tại sao gạo nếp lại dẻo hơn gạo tẻ rất nhiều khi nấu chín?",
      "Vì trong tinh bột của gạo nếp chứa tỉ lệ amylopectin cao hơn nhiều so với gạo tẻ",
      ["Vì phân tử amylose trong gạo nếp có mạch dẻo hơn gạo tẻ", "Vì gạo nếp có lượng đường saccharose tự do bám dính cao", "Vì gạo nếp dễ hấp thụ nước vôi trong hơn gạo tẻ"]
    ),
    buildQuestion(
      "hieu",
      "Khi cho dung dịch saccharose đun nóng với dung dịch acid loãng, sau đó kiềm hóa rồi thêm $AgNO_3/NH_3$, hiện tượng xảy ra là gì?",
      "Có lớp bạc sáng bóng bám lên thành ống nghiệm do sản phẩm thủy phân có tính khử",
      ["Có kết tủa màu đỏ gạch của đồng oxide xuất hiện", "Dung dịch sủi bọt khí mạnh mẽ không màu mùi thơm", "Xuất hiện kết tủa trắng tinh khiết bám thành ống"]
    ),
    buildQuestion(
      "hieu",
      "Ứng dụng nào sau đây không phải của glucose trong đời sống thực tiễn?",
      "nguyên liệu sản xuất thuốc súng không khói",
      ["làm thuốc tăng lực và truyền dịch trong y học", "nguyên liệu tráng gương, tráng ruột phích", "nguyên liệu lên men sản xuất rượu ethanol"]
    ),
    buildQuestion(
      "hieu",
      "Công thức cấu tạo thu gọn của xenlulozơ trinitrat dùng làm thuốc súng là:",
      "$[C_6H_7O_2(ONO_2)_3]_n$",
      ["$[C_6H_7O_2(NO_2)_3]_n$", "$[C_6H_7O_2(OH)_2(ONO_2)]_n$", "$[C_6H_7O_2(OH)(ONO_2)_2]_n$"]
    ),
    buildQuestion(
      "hieu",
      "Sự chuyển hóa tinh bột trong cơ thể động vật diễn ra thế nào để cung cấp năng lượng?",
      "Tinh bột thủy phân thành glucose hấp thụ vào máu; lượng dư thừa chuyển thành glycogen tích lũy ở gan",
      ["Tinh bột tự phân hủy trực tiếp thành carbon và nước sinh nhiệt lượng lớn", "Tinh bột chuyển hóa thành cellulose giúp nhu động ruột hoạt động tốt", "Tinh bột kết hợp với hồng cầu phân bổ khắp tế bào cơ bắp"]
    ),
    buildQuestion(
      "hieu",
      "Thủy phân hoàn toàn $34,2\\text{ gam}$ saccharose và $16,2\\text{ gam}$ tinh bột, khối lượng glucose thu được sau phản ứng (H = 100%) là:",
      "36,0 gam",
      ["18,0 gam", "54,0 gam", "45,0 gam"]
    ),
    buildQuestion(
      "hieu",
      "Đốt cháy hoàn toàn một carbohydrate X thu được $0,12\\text{ mol } CO_2$ và $0,1\\text{ mol } H_2O$. X là chất nào?",
      "saccharose",
      ["glucose", "fructose", "cellulose"]
    ),
    buildQuestion(
      "vandung",
      "Cho $45\\text{ gam}$ dung dịch glucose phản ứng hoàn toàn với dung dịch $AgNO_3/NH_3$ thu được $10,8\\text{ gam}$ bạc. Nồng độ phần trăm của dung dịch glucose ban đầu là:",
      "20%",
      ["10%", "15%", "5%"]
    ),
    buildQuestion(
      "vandung",
      "Từ $10\\text{ tấn}$ vỏ bào chứa $50\\%$ cellulose, người ta sản xuất ethanol với hiệu suất chung đạt $70\\%$. Khối lượng ethanol thu được là:",
      "1,98 tấn",
      ["2,83 tấn", "1,50 tấn", "3,52 tấn"]
    ),
    buildQuestion(
      "vandung",
      "Thủy phân hoàn toàn m gam tinh bột rồi cho toàn bộ glucose thu được tráng bạc hoàn toàn thu được $43,2\\text{ gam } Ag$. Giá trị của m là:",
      "32,4 gam",
      ["16,2 gam", "40,5 gam", "48,6 gam"]
    ),
    buildQuestion(
      "vandung",
      "Oxi hóa m gam glucose bằng dung dịch $AgNO_3/NH_3$ dư thu được $16,2\\text{ gam}$ bạc. Nếu lên men rượu m gam glucose trên với hiệu suất $80\\%$, thể tích khí $CO_2$ ở điều kiện chuẩn (đkc) thu được là:",
      "2,975 lít",
      ["1,487 lít", "3,719 lít", "2,479 lít"]
    ),
    buildQuestion(
      "vandung",
      "Một mẫu mật ong chứa $40\\%$ fructose, $30\\%$ glucose và $30\\%$ nước. Thủy phân và tráng bạc hoàn toàn $10\\text{ gam}$ mẫu mật ong này thu được bao nhiêu gam bạc?",
      "8,4 gam",
      ["9,2 gam", "7,6 gam", "10,8 gam"]
    )
  ]
};
  