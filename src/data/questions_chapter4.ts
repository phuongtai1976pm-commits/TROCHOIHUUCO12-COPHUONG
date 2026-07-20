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

export const chapter4Questions: Record<string, Question[]> = {
  "Bài 12: Đại cương về polymer": [

    buildQuestion(
      "biet",
      "Polymer là những hợp chất có đặc điểm khối lượng phân tử như thế nào?",
      "Rất lớn, do nhiều mắt xích đơn giản liên kết với nhau tạo thành",
      ["Rất nhỏ, dễ dàng bay hơi ở nhiệt độ phòng", "Trung bình, luôn dưới 100 đvC bão hòa", "Không xác định, tồn tại dạng khí nhẹ"]
    ),
    buildQuestion(
      "biet",
      "Phản ứng điều chế polymer từ các monomer bằng cách kết hợp nhiều phân tử nhỏ thành phân tử lớn đồng thời giải phóng phân tử nhỏ khác (như nước) gọi là:",
      "phản ứng trùng ngưng",
      ["phản ứng trùng hợp", "phản ứng ester hóa", "phản ứng xà phòng hóa"]
    ),
    buildQuestion(
      "biet",
      "Mắt xích cấu tạo đơn giản của polyethylene (PE) là gốc nào?",
      "$-CH_2-CH_2-$",
      ["$-CH_2-CH(Cl)-$", "$-CH_2-CH(CH_3)-$", "$-CF_2-CF_2-$"]
    ),
    buildQuestion(
      "biet",
      "Polymer nào sau đây thuộc loại polymer thiên nhiên có sẵn?",
      "cellulose",
      ["polyethylene", "nylon-6,6", "polyvinyl chloride"]
    ),
    buildQuestion(
      "biet",
      "Hệ số trùng hợp (hay độ mạch polime) thường được ký hiệu bằng chữ cái nào?",
      "n",
      ["m", "k", "p"]
    ),
    buildQuestion(
      "biet",
      "Polyvinyl chloride (PVC) được điều chế trực tiếp từ monomer nào sau đây?",
      "vinyl chloride ($CH_2=CHCl$)",
      ["ethylene ($CH_2=CH_2$)", "propylene ($CH_2=CH-CH_3$)", "styrene ($C_6H_5CH=CH_2$)"]
    ),
    buildQuestion(
      "biet",
      "Tơ bán tổng hợp (tơ nhân tạo) tiêu biểu nhất được điều chế từ cellulose là loại tơ nào?",
      "tơ visco",
      ["tơ tằm", "tơ nylon-6,6", "tơ capron"]
    ),
    buildQuestion(
      "biet",
      "Polymer nào sau đây có cấu trúc mạch phân nhánh sườn rộng?",
      "amylopectin",
      ["polyethylene", "cellulose", "nylon-6"]
    ),
    buildQuestion(
      "hieu",
      "Điểm khác biệt lớn nhất giữa phản ứng trùng hợp và phản ứng trùng ngưng là gì?",
      "Trùng hợp kết hợp monomer chứa liên kết bội/vòng kém bền không giải phóng chất phụ; trùng ngưng giải phóng phân tử nhỏ như nước",
      ["Trùng hợp chỉ dùng xúc tác kiềm; trùng ngưng chỉ cần nhiệt độ đun sôi", "Trùng hợp tạo ra polyester thơm; trùng ngưng chỉ tạo PE bão hòa", "Trùng hợp là phản ứng thuận nghịch; trùng ngưng là phản ứng một chiều"]
    ),
    buildQuestion(
      "hieu",
      "Tại sao tơ tằm, sợi len tự nhiên có thành phần là protein không bền trong môi trường kiềm hoặc acid mạnh?",
      "Vì chúng chứa liên kết peptide kém bền dễ bị thủy phân bởi ion $H^+$ và $OH^-$",
      ["Vì chúng bị oxi hóa hoàn toàn tạo khí carbon dioxide bay mất", "Vì chúng phản ứng trùng hợp ngược tạo monomer khí mùi khai", "Vì kiềm hòa tan lớp sáp bảo vệ kị nước bên ngoài"]
    ),
    buildQuestion(
      "hieu",
      "Giải thích tính dẻo của một số polymer dẻo như PE, PP khi gia công đun nóng:",
      "Khi đun nóng, mạch polymer có thể trượt lên nhau giúp dễ tạo hình, khi nguội lại liên kết chặt giữ nguyên hình dạng",
      ["Nhiệt độ cao làm bẻ gãy hoàn toàn các mạch carbon thành monomer lỏng", "Polyme tác dụng với oxy không khí tạo chất lỏng bôi trơn dẻo", "Mạch polymer tự xoắn lại lò xo co giãn đàn hồi cực mạnh"]
    ),
    buildQuestion(
      "hieu",
      "Cấu trúc mạng lưới không gian ba chiều của nhựa bakelite đem lại đặc điểm vật lý gì nổi bật?",
      "Rất cứng, chịu nhiệt tốt, không nóng chảy mà bị phân hủy ở nhiệt độ cao",
      ["Cực kỳ mềm mại, dễ dàng kéo thành sợi tơ dệt vải", "Độ đàn hồi cao vượt trội giống như cao su thiên nhiên", "Tan vô hạn trong nước tạo dung dịch keo dính"]
    ),
    buildQuestion(
      "hieu",
      "Tại sao cao su lại có tính đàn hồi vượt trội so với các loại polymer dẻo thông thường?",
      "Vì các mạch polymer có cấu trúc cuộn gập ngẫu nhiên dẻo dai, dễ duỗi thẳng ra khi kéo căng và co lại khi buông",
      ["Vì cao su chứa rất nhiều liên kết ba bền vững bám chặt vào nhau", "Vì cao su chứa ion kim loại dẫn điện và đàn hồi lực", "Vì mạch phân tử cao su phân nhánh cụm tròn xốp nhẹ"]
    ),
    buildQuestion(
      "hieu",
      "Loại monomer nào sau đây có khả năng tham gia phản ứng trùng hợp?",
      "Phân tử phải chứa liên kết đôi carbon-carbon hoặc vòng kém bền",
      ["Phân tử phải chứa ít nhất hai nhóm chức khác nhau có khả năng tách nước", "Phân tử phải là acid béo bão hòa có mạch carbon thẳng dài", "Phân tử phải chứa vòng thơm benzene có nhóm amino bám dính"]
    ),
    buildQuestion(
      "hieu",
      "Loại monomer nào sau đây có khả năng tham gia phản ứng trùng ngưng tạo polymer?",
      "Phân tử chứa ít nhất hai nhóm chức phản ứng được với nhau (như $-NH_2$ và $-COOH$)",
      ["Phân tử chứa liên kết đôi $C=C$ hoạt động tự do", "Phân tử chỉ chứa một nhóm hydroxyl duy nhất ở đầu mạch", "Phân tử là hydrocarbon no đơn giản mạch hở"]
    ),
    buildQuestion(
      "hieu",
      "Tại sao hầu hết polymer không có nhiệt độ nóng chảy xác định mà nóng chảy ở một khoảng nhiệt độ khá rộng?",
      "Vì polymer là hỗn hợp các phân tử có độ dài mạch (hệ số trùng hợp n) khác nhau khá lớn",
      ["Vì polymer chứa lẫn nhiều tạp chất kim loại nặng khó phân tách", "Vì polymer tự phân hủy tạo thành các hợp chất dẻo khác ở nhiệt nóng", "Vì lực tương tác tĩnh điện giữa các mắt xích luôn thay đổi liên tục"]
    ),
    buildQuestion(
      "hieu",
      "Giải thích tại sao nhiều đồ dùng bằng nhựa PVC không nên tự tiện đốt bỏ ở nơi công cộng?",
      "Vì khi cháy sinh ra khí hydro chloride ($HCl$) độc hại ăn mòn phổi và các chất hữu cơ chứa clo cực độc như dioxin",
      ["Vì PVC bùng cháy mãnh liệt gây nổ áp suất cực lớn", "Vì đám cháy giải phóng lượng lớn ion bạc làm ô nhiễm đất", "Vì nhiệt lượng tỏa ra làm chảy nền đường nhựa cản trở giao thông"]
    ),
    buildQuestion(
      "hieu",
      "Trình bày cấu trúc mạch polymer của cao su lưu hóa là gì?",
      "Các mạch polymer dài thẳng được nối chéo chéo với nhau bằng các cầu nối disulfide ($-S-S-$) tạo mạng lưới không gian bền vững",
      ["Các chuỗi polypeptide xoắn chặt với nhau tạo sợi bó cứng cáp", "Hỗn hợp các hạt cao su bám quanh lõi lưu huỳnh vô cơ", "Mạch polymer thẳng hoàn toàn không có tương tác liên phân tử"]
    ),
    buildQuestion(
      "hieu",
      "Trùng hợp hoàn toàn $5,6\\text{ kg}$ ethylene ($CH_2=CH_2$) thu được khối lượng polyethylene (PE) thực tế (H = 100%) là bao nhiêu?",
      "5,6 kg",
      ["2,8 kg", "11,2 kg", "8,4 kg"]
    ),
    buildQuestion(
      "hieu",
      "Một mẫu polymer PVC có phân tử khối trung bình là $250000$. Hệ số trùng hợp trung bình của mẫu polymer đó là:",
      "4000",
      ["2000", "5000", "3000"]
    ),
    buildQuestion(
      "vandung",
      "Trùng ngưng $6,0\\text{ gam}$ glycine thu được polymer và nước với hiệu suất đạt $80\\%$. Khối lượng nước giải phóng ra thực tế là:",
      "1,152 gam",
      ["1,440 gam", "0,921 gam", "1,250 gam"]
    ),
    buildQuestion(
      "vandung",
      "Đốt cháy hoàn toàn một lượng polymer PE thu được $8,8\\text{ gam } CO_2$. Khối lượng nước thu được sau phản ứng đốt cháy trên là:",
      "3,6 gam",
      ["1,8 gam", "5,4 gam", "4,5 gam"]
    ),
    buildQuestion(
      "vandung",
      "Để tổng hợp được $1\\text{ tấn}$ PVC từ vinyl chloride cần dùng bao nhiêu tấn monomer vinyl chloride (biết hiệu suất phản ứng trùng hợp đạt $90\\%$)?",
      "1,11 tấn",
      ["1,00 tấn", "0,90 tấn", "1,25 tấn"]
    ),
    buildQuestion(
      "vandung",
      "Clo hóa PVC thu được tơ clorin chứa $66,7\\%$ clo về khối lượng. Trung bình có bao nhiêu mắt xích PVC phản ứng được với một phân tử khí clo $Cl_2$?",
      "2",
      ["1", "3", "4"]
    ),
    buildQuestion(
      "vandung",
      "Cứ $2,8\\text{ gam}$ butadiene-1,3 trùng hợp thu được cao su buna. Nếu hiệu suất phản ứng đạt $75\\%$, khối lượng cao su buna thực tế thu được là:",
      "2,1 gam",
      ["2,8 gam", "1,5 gam", "2,5 gam"]
    )
  
  ],
  "Bài 13: Vật liệu polymer": [

    buildQuestion(
      "biet",
      "Vật liệu polymer nào sau đây được dùng để chế tạo màng bọc thực phẩm dẻo dai?",
      "polyethylene (PE)",
      ["polyvinyl chloride (PVC)", "nylon-6,6", "poly(methyl methacrylate)"]
    ),
    buildQuestion(
      "biet",
      "Cao su thiên nhiên có thành phần chính là polymer của chất nào?",
      "isoprene ($CH_2=C(CH_3)-CH=CH_2$)",
      ["butadiene-1,3 ($CH_2=CH-CH=CH_2$)", "chloroprene ($CH_2=C(Cl)-CH=CH_2$)", "styrene ($C_6H_5CH=CH_2$)"]
    ),
    buildQuestion(
      "biet",
      "Nylon-6,6 thuộc loại tơ nào xét theo thành phần hóa học và nhóm chức?",
      "tơ polyamide chứa liên kết amide ($-CO-NH-$)",
      ["tơ polyester chứa liên kết ester ($-COO-$)", "tơ vinylic chứa nhóm halogen", "tơ acetate chứa gốc carbohydrate"]
    ),
    buildQuestion(
      "biet",
      "Chất dẻo có độ trong suốt cao, truyền sáng cực tốt dùng làm kính máy bay, kính bảo hộ là:",
      "poly(methyl methacrylate) - thủy tinh hữu cơ plexiglas",
      ["polyethylene - nhựa mềm dẻo", "polystyrene - nhựa xốp nhẹ", "polyvinyl chloride - nhựa cứng PVC"]
    ),
    buildQuestion(
      "biet",
      "Tơ nào sau đây là tơ hoàn toàn thiên nhiên?",
      "tơ tằm",
      ["tơ visco", "tơ nylon-6", "tơ lapsan"]
    ),
    buildQuestion(
      "biet",
      "Vật liệu polymer nào được dùng để làm lốp xe, nệm nhờ tính đàn hồi cao vượt trội?",
      "cao su lưu hóa",
      ["chất dẻo PVC", "keo dán siêu dính", "tơ nylon-6,6"]
    ),
    buildQuestion(
      "biet",
      "Nhựa teflon (poly(tetrafluoroethylene)) nổi tiếng với ứng dụng nào trong đời sống hàng ngày?",
      "tráng bề mặt chống dính của chảo, nồi nấu ăn",
      ["làm vỏ bọc dây cáp điện cao thế chịu nước", "làm kính chống đạn cho ô tô cao cấp", "dệt sợi vải may trang phục chống cháy"]
    ),
    buildQuestion(
      "biet",
      "Tơ nitron (hay tơ olon) dai bền, giữ nhiệt tốt được tổng hợp từ monomer nào sau đây?",
      "acrylonitrile hay vinyl cyanide ($CH_2=CH-CN$)",
      ["methyl methacrylate", "adipic acid và hexamethylenediamine", "vinyl chloride"]
    ),
    buildQuestion(
      "hieu",
      "Tại sao cao su lưu hóa có tính đàn hồi, chịu nhiệt tốt và bền cơ học hơn cao su thiên nhiên chưa lưu hóa?",
      "Do có các cầu nối lưu huỳnh disulfide ($-S-S-$) liên kết chéo các mạch polymer thành mạng ba chiều vững chắc",
      ["Do lưu huỳnh phản ứng oxi hóa hết các liên kết đôi kém bền của cao su", "Do cao su lưu hóa có mạch carbon phân nhánh cực ngắn kị nước", "Do khối lượng phân tử tăng gấp ngàn lần nhờ các ion kim loại nặng"]
    ),
    buildQuestion(
      "hieu",
      "Tại sao tơ tằm tự nhiên và tơ nylon lại có cảm giác dệt mát, dai nhưng dễ bị mục khi giặt bằng xà phòng kiềm mạnh?",
      "Do chứa liên kết peptit hoặc amide dễ bị thủy phân cắt mạch trong môi trường kiềm loãng nóng",
      ["Do xà phòng kiềm tác dụng làm thăng hoa phân tử polymer", "Do sợi vải phản ứng tự phân hủy tạo xơ than đen", "Do gốc sừng bị oxi hóa mạnh bởi không khí ẩm bám dính"]
    ),
    buildQuestion(
      "hieu",
      "Để tổng hợp tơ nylon-6,6 người ta tiến hành phản ứng trùng ngưng giữa hai loại monomer nào?",
      "hexamethylenediamine ($H_2N-(CH_2)_6-NH_2$) và adipic acid ($HOOC-(CH_2)_4-COOH$)",
      ["ethylene glycol và terephthalic acid", "caprolactam mạch vòng bão hòa", "vinyl acetate và alcohol monohydric"]
    ),
    buildQuestion(
      "hieu",
      "Sự khác biệt cơ bản về đặc tính gia công giữa chất dẻo nhiệt (như PE, PVC) và chất dẻo nhiệt rắn (như nhựa bakelite) là:",
      "Chất dẻo nhiệt nóng chảy lại để tái chế; chất dẻo nhiệt rắn có mạng lưới ba chiều không nóng chảy lại mà bị phân hủy khi đun nóng",
      ["Chất dẻo nhiệt có khả năng tự phát sáng; chất dẻo nhiệt rắn kị nước hoàn toàn", "Chất dẻo nhiệt cực kỳ dai dẻo; chất dẻo nhiệt rắn giòn tan ở nhiệt phòng", "Chất dẻo nhiệt chỉ điều chế bằng trùng ngưng; chất dẻo nhiệt rắn chỉ trùng hợp"]
    ),
    buildQuestion(
      "hieu",
      "Keo dán polymer (như keo epoxy, keo 502) hoạt động dựa trên nguyên lý cơ bản nào?",
      "Quá trình polymer hóa nhanh chóng ngay tại chỗ tạo mạch polymer bám chặt vào bề mặt liên kết vật lý",
      ["Sự bay hơi của dung môi nước làm đông đặc muối khoáng bám dính", "Phản ứng oxi hóa khử ăn mòn bề mặt tạo gai bám bền vững", "Sự đông tụ của protein lòng trắng trứng lẫn sẵn trong keo"]
    ),
    buildQuestion(
      "hieu",
      "Tại sao tơ nitron (olon) được dùng phổ biến để dệt vải may áo len ấm, chăn bông đắp?",
      "Vì tơ nitron giữ nhiệt tốt nhất, dai, bền với nhiệt và ánh sáng mặt trời",
      ["Vì tơ nitron tan tốt trong dung môi hữu cơ dễ nhuộm màu lấp lánh", "Vì tơ nitron có tính sát khuẩn tự nhiên cực kỳ cao bảo vệ da", "Vì tơ nitron tự động co giãn theo nhiệt độ của cơ thể người"]
    ),
    buildQuestion(
      "hieu",
      "Vai trò của chất hóa dẻo khi phối trộn thêm vào hạt nhựa chế tạo đồ dùng là gì?",
      "Làm giảm nhiệt độ thủy tinh hóa, tăng tính dẻo mềm giúp dễ gia công định hình hơn",
      ["Tăng độ cứng cáp và nâng cao nhiệt độ nóng chảy của polymer", "Ngăn cản hoàn toàn polymer bị cháy hoặc phân hủy khi gặp tia lửa", "Tạo mùi thơm quyến rũ cho đồ dùng nhựa gia dụng"]
    ),
    buildQuestion(
      "hieu",
      "Hãy sắp xếp độ bền cơ học dai chắc giảm dần của các sợi tơ sau: nylon-6,6, tơ tằm tự nhiên, sợi bông.",
      "nylon-6,6 > tơ tằm > sợi bông",
      ["sợi bông > tơ tằm > nylon-6,6", "tơ tằm > nylon-6,6 > sợi bông", "nylon-6,6 > sợi bông > tơ tằm"]
    ),
    buildQuestion(
      "hieu",
      "Giải thích tại sao ống nước làm bằng nhựa PVC lại cứng hơn nhiều so với màng bọc làm bằng PE?",
      "Vì phân tử PVC chứa nguyên tử clo cồng kềnh phân cực tạo lực tương tác liên phân tử mạnh mẽ hơn hẳn PE",
      ["Vì màng bọc PE được bổ sung rất nhiều chất hóa cứng cản trở tương tác", "Vì ống PVC có mạch polymer phân nhánh nhiều nhánh đan xen", "Vì PVC chứa liên kết ba carbon-carbon bền vững bão hòa khí"]
    ),
    buildQuestion(
      "hieu",
      "Sự khác nhau về cấu trúc mắt xích giữa cao su buna và cao su buna-S là gì?",
      "Cao su buna trùng hợp chỉ từ butadiene-1,3; cao su buna-S đồng trùng hợp giữa butadiene-1,3 và styrene",
      ["Cao su buna chứa lưu huỳnh; cao su buna-S chứa muối natri", "Cao su buna dẻo hơn; cao su buna-S giòn tan kị nước lạnh", "Cao su buna mạch phân nhánh rộng; cao su buna-S mạch vòng khép kín"]
    ),
    buildQuestion(
      "hieu",
      "Để tổng hợp được $100\\text{ kg}$ cao su buna từ butadiene-1,3 với hiệu suất phản ứng đạt $80\\%$, khối lượng monomer cần dùng tối thiểu là:",
      "125 kg",
      ["120 kg", "100 kg", "150 kg"]
    ),
    buildQuestion(
      "hieu",
      "Trùng ngưng m gam adipic acid và hexamethylenediamine thu được $11,3\\text{ kg}$ nylon-6,6 ($M=226$ của một mắt xích). Biết hiệu suất phản ứng đạt $100\\%$. Số mol mỗi monomer đã phản ứng là:",
      "50 mol",
      ["100 mol", "25 mol", "75 mol"]
    ),
    buildQuestion(
      "vandung",
      "Đốt cháy hoàn toàn $0,1\\text{ mol}$ mắt xích cao su isoprene ($C_5H_8$) cần dùng vừa đủ bao nhiêu lít khí oxygen ở điều kiện chuẩn (đkc)?",
      "17,353 lít",
      ["12,395 lít", "24,790 lít", "14,874 lít"]
    ),
    buildQuestion(
      "vandung",
      "Một loại tơ capron chứa $12,39\\%$ nitơ về khối lượng. Phân tử khối mắt xích của tơ capron đó là:",
      "113",
      ["131", "125", "115"]
    ),
    buildQuestion(
      "vandung",
      "Để sản xuất $100\\text{ kg}$ thủy tinh hữu cơ PMM ($M=100$) từ methyl methacrylate cần bao nhiêu kg monomer nếu hiệu suất phản ứng đạt $90\\%$?",
      "111,1 kg",
      ["110,0 kg", "100,0 kg", "121,5 kg"]
    ),
    buildQuestion(
      "vandung",
      "Clo hóa cao su thiên nhiên thu được polymer chứa $64,39\\%$ clo về khối lượng. Trung bình có bao nhiêu mắt xích isoprene phản ứng được với một phân tử clo $Cl_2$?",
      "1",
      ["2", "3", "4"]
    ),
    buildQuestion(
      "vandung",
      "Trùng hợp $10,4\\text{ kg}$ styrene thu được polystyrene (PS) với hiệu suất phản ứng đạt $85\\%$. Khối lượng PS thực tế thu được là:",
      "8,84 kg",
      ["10,40 kg", "7,50 kg", "9,24 kg"]
    )
  
  ],
  "Bài 14: Ôn tập chương 4": [

    buildQuestion(
      "biet",
      "Loại tơ nào sau đây là tơ bán tổng hợp (tơ nhân tạo) phổ biến?",
      "tơ visco",
      ["tơ tằm tự nhiên", "tơ nylon-6,6", "tơ lapsan dai bền"]
    ),
    buildQuestion(
      "biet",
      "Vật liệu polymer nào được dùng để sản xuất lốp xe quân sự nhờ tính đàn hồi dẻo dai và chịu lực cao?",
      "cao su lưu hóa",
      ["chất dẻo PE dẻo", "keo dán acrylic cứng", "tơ nylon-6,6 mềm"]
    ),
    buildQuestion(
      "biet",
      "Monomer nào dùng để trùng hợp tạo ra nhựa polystyrene (PS) xốp cách nhiệt?",
      "styrene ($C_6H_5CH=CH_2$)",
      ["ethylene ($CH_2=CH_2$)", "vinyl chloride ($CH_2=CHCl$)", "propylene ($CH_2=CH-CH_3$)"]
    ),
    buildQuestion(
      "biet",
      "Tơ capron (nylon-6) thuộc loại tơ nào xét theo cấu trúc liên kết mắt xích?",
      "tơ polyamide chứa liên kết $-CO-NH-$",
      ["tơ polyester chứa liên kết $-COO-$", "tơ tằm chứa liên kết cellulose", "tơ vinylic chứa nguyên tử halogen"]
    ),
    buildQuestion(
      "biet",
      "Nhựa dẻo thông dụng PE được điều chế trực tiếp bằng phản ứng trùng hợp chất nào?",
      "ethylene",
      ["propylene", "vinyl chloride", "tetrafluoroethylene"]
    ),
    buildQuestion(
      "biet",
      "Polymer nào sau đây có cấu trúc mạng lưới không gian ba chiều?",
      "nhựa bakelite",
      ["amylose của tinh bột", "polyethylene", "nylon-6,6"]
    ),
    buildQuestion(
      "biet",
      "Tơ nylon-6,6 dai bền bóng mượt được điều chế từ hai monomer hữu cơ nào?",
      "adipic acid và hexamethylenediamine",
      ["terephthalic acid và ethylene glycol", "vinyl acetate và methyl acrylate", "vinyl chloride và styrene thơm"]
    ),
    buildQuestion(
      "biet",
      "Bản chất liên kết cấu tạo của tơ lapsan là loại tơ nào?",
      "tơ polyester chứa liên kết $-COO-$",
      ["tơ polyamide chứa liên kết amide", "tơ nhân tạo chứa carbohydrate vòng", "tơ vinylic dai bền mạch thẳng"]
    ),
    buildQuestion(
      "hieu",
      "Phản ứng đồng trùng hợp giữa butadiene-1,3 và styrene với xúc tác sodium đun nóng tạo ra sản phẩm gì?",
      "cao su buna-S đàn hồi dẻo dai làm lốp xe",
      ["nhựa polystyrene xốp cách điện tốt", "cao su buna-N kháng dầu mỡ cực cao", "tơ nitron bền bỉ giữ ấm"]
    ),
    buildQuestion(
      "hieu",
      "Tại sao tơ tằm tự nhiên lại dẻo dai và có độ bóng óng ánh lấp lánh rất đẹp?",
      "Do cấu trúc protein dạng sợi xếp song song, phản xạ ánh sáng tốt ở bề mặt sợi phẳng",
      ["Do tơ tằm chứa hạt kim loại vàng óng bám quanh sợi", "Do sợi tơ chứa nhiều liên kết glycoside mạch xoắn lò xo", "Do lớp sáp béo bão hòa bao phủ dày đặc lấp lánh"]
    ),
    buildQuestion(
      "hieu",
      "Điểm giống nhau cơ bản về tính chất hóa học giữa nylon-6 và nylon-6,6 là gì?",
      "Đều thuộc loại tơ polyamide chứa liên kết $-CO-NH-$ kém bền, dễ bị thủy phân trong cả môi trường kiềm loãng và acid",
      ["Đều có cấu trúc mạch vòng thơm chịu lực cực tốt không nóng chảy", "Đều được điều chế bằng phản ứng đồng trùng hợp gốc tự do", "Đều tan tốt trong dung môi nước muối ăn loãng nóng"]
    ),
    buildQuestion(
      "hieu",
      "Giải thích tại sao chất dẻo làm bằng nhựa PP chịu nhiệt và cứng cáp hơn nhựa PE?",
      "Vì nhựa PP có chứa nhóm methyl ($-CH_3$) cồng kềnh giúp hạn chế sự trượt mạch tự do khi gặp nhiệt độ nóng",
      ["Vì phân tử PP có khối lượng phân tử nhỏ hơn gấp trăm lần PE", "Vì PP chứa nguyên tử clo phân cực liên kết chặt chẽ", "Vì PP được tổng hợp bằng phản ứng trùng ngưng giải phóng nước"]
    ),
    buildQuestion(
      "hieu",
      "Sự khác biệt lớn nhất giữa cao su buna-N và cao su buna-S trong ứng dụng thực tiễn là:",
      "Cao su buna-N chứa gốc nitril kháng dầu mỡ dung môi cực tốt; cao su buna-S đàn hồi dai thích hợp làm lốp xe",
      ["Cao su buna-N tan tốt trong nước; cao su buna-S kị nước hoàn toàn", "Cao su buna-N siêu mềm dẻo; cao su buna-S cực kỳ cứng giòn", "Cao su buna-N điều chế bằng trùng ngưng; cao su buna-S bằng trùng hợp"]
    ),
    buildQuestion(
      "hieu",
      "Bản chất hóa học của phản ứng lưu hóa cao su thiên nhiên là gì?",
      "Tạo ra các cầu nối disulfide ($-S-S-$) liên kết các chuỗi hydrocarbon không bão hòa thành mạng lưới không gian vững chắc",
      ["Khử sạch hoàn toàn các liên kết đôi carbon-carbon thành liên kết đơn", "Trùng ngưng các mắt xích cao su giải phóng phân tử khí hydro sulfide", "Oxi hóa cao su bằng lưu huỳnh tạo ra sáp cứng dẻo dai"]
    ),
    buildQuestion(
      "hieu",
      "Tại sao tơ visco có nguồn gốc từ cellulose thiên nhiên nhưng lại được xếp vào nhóm tơ bán tổng hợp?",
      "Vì cellulose thiên nhiên được hòa tan trong dung môi hóa chất hóa học rồi mới kéo thành sợi tơ nhân tạo",
      ["Vì sợi tơ được dệt xen kẽ một sợi tơ tằm, một sợi polyester", "Vì tơ tự phân hủy một nửa khi gặp vi sinh vật môi trường ẩm", "Vì tơ có nhiệt độ nóng chảy thấp hơn một nửa so với cellulose"]
    ),
    buildQuestion(
      "hieu",
      "Để chứng minh tơ tằm có bản chất là sợi protein đơn giản, ta tiến hành thí nghiệm đơn giản nào?",
      "Đốt sợi tơ tằm thấy sủi bọt phồng lên và có mùi khét lẹt đặc trưng như tóc cháy",
      ["Nhỏ nước bromine thấy dung dịch chuyển ngay sang màu tím biure đậm", "Hòa tan sợi tơ trong nước chanh thấy sủi bọt khí hydro mạnh mẽ", "Cho sợi tơ tác dụng với dung dịch $NaCl$ thấy tan rã hoàn toàn"]
    ),
    buildQuestion(
      "hieu",
      "Đặc điểm cấu tạo hóa học chung của các monomer tham gia phản ứng trùng hợp tạo chất dẻo dẻo dai là:",
      "Phải chứa liên kết đôi carbon-carbon linh động hoặc vòng kém bền dễ mở vòng",
      ["Phải chứa đồng thời nhóm amino và nhóm carboxylic acid kề nhau", "Phải là carboxylic acid no đơn chức mạch carbon thẳng dài", "Phải là hợp chất thơm có chứa ion kim loại mạnh kiềm hóa"]
    ),
    buildQuestion(
      "hieu",
      "Tại sao tơ lapsan (polyester) rất được ưa chuộng để dệt vải may áo thể thao, ít nhăn và nhanh khô?",
      "Vì lapsan không chứa liên kết peptit dễ thủy phân, cấu trúc mạch cứng dẻo dai kị nước hạn chế ngấm nước",
      ["Vì lapsan có tính giữ nhiệt siêu đẳng thích hợp mặc trời nóng bức", "Vì lapsan chứa gốc carbohydrate thu hút ẩm từ không khí dào dạt", "Vì lapsan tự phân hủy sinh học nhanh chóng khi bám dính mồ hôi"]
    ),
    buildQuestion(
      "hieu",
      "Đốt cháy hoàn toàn một lượng polymer polyethylene (PE) thu được $4,4\\text{ gam } CO_2$. Khối lượng nước thu được sau phản ứng là:",
      "1,8 gam",
      ["1,5 gam", "2,2 gam", "3,6 gam"]
    ),
    buildQuestion(
      "hieu",
      "Để tổng hợp được $1\\text{ tấn}$ nylon-6 từ caprolactam với hiệu suất phản ứng trùng hợp đạt $90\\%$, khối lượng monomer cần dùng tối thiểu là:",
      "1,11 tấn",
      ["1,00 tấn", "0,90 tấn", "1,25 tấn"]
    ),
    buildQuestion(
      "vandung",
      "Cho m gam cao su buna-S tác dụng hoàn toàn với nước bromine dư thấy phản ứng vừa đủ với $16\\text{ gam } Br_2$. Biết tỉ lệ mắt xích butadiene và styrene trong cao su là $1:1$. Khối lượng mẫu cao su đã dùng là:",
      "15,8 gam",
      ["16,2 gam", "14,5 gam", "18,0 gam"]
    ),
    buildQuestion(
      "vandung",
      "Clo hóa PVC thu được tơ clorin chứa $63,96\\%$ clo về khối lượng. Trung bình có bao nhiêu mắt xích PVC phản ứng với một phân tử khí clo $Cl_2$?",
      "3",
      ["2", "1", "4"]
    ),
    buildQuestion(
      "vandung",
      "Đốt cháy hoàn toàn $1\\text{ mol}$ mắt xích của cao su buna ($C_4H_6$) cần dùng vừa đủ bao nhiêu mol khí oxygen?",
      "5,5 mol",
      ["4,5 mol", "6,0 mol", "5,0 mol"]
    ),
    buildQuestion(
      "vandung",
      "Trùng ngưng $13,1\\text{ gam}$ aminocaproic acid ($M=131$) thu được nylon-6 và nước với hiệu suất phản ứng đạt $90\\%$. Khối lượng polymer thu được thực tế là:",
      "10,17 gam",
      ["11,30 gam", "9,24 gam", "8,50 gam"]
    ),
    buildQuestion(
      "vandung",
      "Một loại cao su buna-N được tổng hợp từ butadiene và acrylonitrile với tỉ lệ mắt xích tương ứng là $2:1$. Phần trăm khối lượng của nguyên tố nitơ trong cao su buna-N đó là:",
      "8,7%",
      ["7,8%", "9,5%", "6,9%"]
    )
  ]
};
  