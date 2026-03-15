export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  content: ({ type: "subheading"; text: string } | { type: "paragraph"; text: string })[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "bir-fikirden-teknoloji-girisimine-eleythra",
    title: "Bir Fikirden Teknoloji Girişimine: Eleythra Derin Teknoloji Nasıl Doğdu?",
    excerpt:
      "Her teknoloji girişiminin arkasında bir fikir ve bir ihtiyaç vardır. Eleythra'nın hikâyesi misafir deneyimini tek sistemde toplama vizyonuyla başladı.",
    date: "2026",
    readTime: "6 dakika",
    image: "/blog/1.png",
    content: [
      { type: "paragraph", text: "Her teknoloji girişiminin arkasında bir fikir, bir ihtiyaç ve o ihtiyacı çözmeye çalışan bir ekip bulunur. Eleythra Derin Teknoloji'nin hikâyesi de tam olarak böyle başladı. Turizm ve konaklama sektöründe çalışan herkesin yakından bildiği bir sorun vardı: misafir deneyimini yöneten sistemler çoğu zaman parçalı, karmaşık ve verimsizdi." },
      { type: "paragraph", text: "Rezervasyon işlemleri bir yazılımda, restoran rezervasyonları başka bir araçta, spa randevuları ise çoğu zaman manuel yöntemlerle yönetiliyordu. Bu durum hem otel personeli için operasyonel zorluklar yaratıyor hem de misafirler için kesintili bir deneyim ortaya çıkarıyordu." },
      { type: "paragraph", text: "Eleythra'nın çıkış noktası tam olarak bu soruyu sormakla başladı: \"Misafir deneyimi neden tek bir akıllı sistem üzerinden yönetilmesin?\"" },
      { type: "subheading", text: "Bir Problemi Fark Etmek" },
      { type: "paragraph", text: "Turizm sektöründe çalışan veya bu sektörü yakından gözlemleyen birçok kişi, otel operasyonlarının ne kadar karmaşık olabileceğini bilir. Oteller aslında küçük bir şehir gibi çalışır. Resepsiyon, restoran, spa, ulaşım, oda servisi ve teknik ekipler sürekli bir koordinasyon içinde çalışmak zorundadır." },
      { type: "paragraph", text: "Ancak bu operasyonların çoğu zaman farklı sistemler üzerinden yürütülmesi hem veri akışını zorlaştırır hem de süreçleri yavaşlatır. Misafir bir talepte bulunduğunda bu talebin doğru departmana ulaşması ve hızlı şekilde çözülmesi her zaman kolay olmayabilir." },
      { type: "paragraph", text: "Teknolojinin hızla geliştiği bir dünyada bu sorunun daha akıllı bir şekilde çözülebileceği açıktı." },
      { type: "subheading", text: "Eleythra Fikrinin Ortaya Çıkışı" },
      { type: "paragraph", text: "Eleythra'nın temelleri 2024 yılında atıldı. Bu dönemde misafir deneyimini daha akıllı ve bağlantılı hale getirecek bir teknoloji platformu fikri üzerinde çalışılmaya başlandı." },
      { type: "paragraph", text: "Amaç yalnızca bir mobil uygulama geliştirmek değildi. Hedef, otellerdeki farklı sistemleri tek bir dijital ekosistem altında birleştirebilecek bir teknoloji altyapısı oluşturmaktı." },
      { type: "paragraph", text: "Bu süreçte sektör analizleri yapıldı, mevcut çözümler incelendi ve otel operasyonlarının gerçek ihtiyaçları detaylı şekilde değerlendirildi. Böylece ortaya Viona platformunun ilk konsepti çıktı." },
      { type: "subheading", text: "Bir Girişimin Kuruluş Süreci" },
      { type: "paragraph", text: "2025 yılı Eleythra için önemli bir dönüm noktası oldu. TÜBİTAK BİGG 1812 programı kapsamında alınan destekle birlikte Eleythra Derin Teknoloji resmi olarak kuruldu." },
      { type: "paragraph", text: "Bu destek yalnızca finansal bir kaynak değil, aynı zamanda girişimin teknoloji geliştirme sürecini hızlandıran önemli bir ekosistem desteği sağladı." },
      { type: "paragraph", text: "Şirketin kuruluşuyla birlikte Eleythra'nın vizyonu daha net hale geldi: Misafir deneyimini merkezine alan sektörlerde akıllı dijital platformlar geliştirmek. Bu vizyon doğrultusunda Viona platformunun geliştirme süreci hız kazandı." },
      { type: "subheading", text: "Viona Platformu" },
      { type: "paragraph", text: "Eleythra'nın ilk ürünü olan Viona, otellerde misafir deneyimini tek bir dijital platform altında birleştirmeyi amaçlayan bir yazılım altyapısıdır." },
      { type: "paragraph", text: "Viona sayesinde misafirler otel hizmetlerine mobil uygulama üzerinden erişebilir, rezervasyonlarını yönetebilir, oda servisi taleplerini iletebilir, otel hakkında bilgilere ulaşabilir ve otel ile hızlı şekilde iletişim kurabilir." },
      { type: "paragraph", text: "Otel yönetimi ise tüm operasyonları merkezi bir panel üzerinden takip edebilir ve hizmet süreçlerini daha verimli şekilde yönetebilir. Bu yaklaşım otellerin operasyonel verimliliğini artırırken aynı zamanda misafir deneyimini de önemli ölçüde iyileştirmeyi hedefler." },
      { type: "subheading", text: "Gerçek Dünya Testleri" },
      { type: "paragraph", text: "Bir teknoloji ürününün en önemli aşamalarından biri gerçek dünyada test edilmesidir. Eleythra için de bu süreç büyük önem taşıyor." },
      { type: "paragraph", text: "Platformun gerçek bir işletme ortamında uygulanması ve geliştirilmesi için pilot çalışmalar planlandı. Bu süreç sayesinde geliştirilen teknolojinin gerçek operasyon koşullarında nasıl çalıştığı analiz edilebilecek. Bu tür pilot uygulamalar, teknolojinin yalnızca teorik değil aynı zamanda pratik olarak da başarılı olmasını sağlar." },
      { type: "subheading", text: "Gelecek Hedefleri" },
      { type: "paragraph", text: "Eleythra'nın hedefi yalnızca bir otel teknolojisi geliştirmek değildir. Şirketin uzun vadeli vizyonu, misafir deneyiminin olduğu farklı sektörlerde akıllı dijital platformlar geliştirmektir." },
      { type: "paragraph", text: "Konaklama sektörü bu yolculuğun ilk adımıdır. Ancak misafir deneyimi; turizm, etkinlik, sağlık ve hizmet sektörlerinin birçok alanında önemli bir rol oynar. Bu nedenle geliştirilen teknoloji altyapısı farklı sektörlere uyarlanabilecek şekilde tasarlanmaktadır." },
      { type: "subheading", text: "Teknoloji ve İnsan" },
      { type: "paragraph", text: "Eleythra'nın yaklaşımı yalnızca teknoloji geliştirmek üzerine kurulu değildir. Amaç, teknolojiyi insan deneyimini geliştiren bir araç olarak kullanmaktır." },
      { type: "paragraph", text: "Misafir deneyimi aslında insan odaklı bir süreçtir. Teknoloji bu deneyimi daha hızlı, daha akıllı ve daha kişisel hale getirmek için kullanılmalıdır. Bu yaklaşım Eleythra'nın geliştirdiği tüm teknolojilerin temelinde yer alır." },
      { type: "subheading", text: "Kapanış" },
      { type: "paragraph", text: "Her teknoloji girişimi bir fikirle başlar; o fikri gerçeğe dönüştürmek ise sabır, iş birliği ve sürekli öğrenme ister. Eleythra Derin Teknoloji'nin hikâyesi, sektördeki parçalı yapıyı fark etmekle başladı; bugün ise misafir deneyimini tek bir akıllı sistemde toplamayı hedefleyen bir girişime dönüştü." },
      { type: "paragraph", text: "Viona bu yolculuğun ilk somut adımı. Pilot uygulamalarla gerçek ortamda test edilen platform, oteller ve misafirler için daha hızlı, daha bağlantılı ve daha kişisel bir deneyim sunmayı amaçlıyor. Eleythra olarak amacımız yalnızca bir ürün geliştirmek değil; misafirin bulunduğu her alanda teknolojiyi insan deneyimini güçlendiren bir araç olarak konumlamak. Bu yolculuk sürüyor — ve misafir deneyiminin geleceği, birlikte şekillenecek." },
    ],
  },
  {
    slug: "otelcilikte-dijital-donusum-yapay-zeka",
    title: "Otelcilikte Dijital Dönüşüm: Yapay Zekâ Misafir Deneyimini Nasıl Değiştiriyor?",
    excerpt:
      "Yapay zekâ destekli platformlar otellerde misafir deneyimini nasıl dönüştürüyor? Dijitalleşme ve tek platform yaklaşımı.",
    date: "2026",
    readTime: "5 dakika",
    image: "/blog/2.png",
    content: [
      { type: "paragraph", text: "Turizm ve konaklama sektörü son yıllarda hızla değişen teknolojilerle birlikte büyük bir dönüşüm sürecine girdi. Misafir beklentileri artık yalnızca konforlu bir oda veya iyi bir hizmetle sınırlı değil. Modern misafirler hızlı, kişiselleştirilmiş ve dijital olarak erişilebilir bir deneyim bekliyor." },
      { type: "paragraph", text: "Akıllı telefonların yaygınlaşması, mobil uygulamaların gelişmesi ve yapay zekâ teknolojilerinin hızla ilerlemesi, otellerin hizmet sunma biçimini köklü şekilde değiştirmeye başladı. Günümüzde misafirler bir otelde konakladığında yalnızca fiziksel hizmetleri değil aynı zamanda akıllı ve kesintisiz bir dijital deneyimi de bekliyor. Bu dönüşüm, otel işletmeleri için hem büyük fırsatlar hem de önemli zorluklar barındırıyor." },
      { type: "subheading", text: "Otelcilik Sektöründe Dijitalleşme Neden Önemli?" },
      { type: "paragraph", text: "Dünya genelinde turizm sektörü trilyonlarca dolarlık bir ekonomik hacme sahip. Bu kadar büyük bir sektör içerisinde rekabet her geçen yıl daha da artıyor. Oteller yalnızca fiyat veya konum avantajıyla değil, sundukları deneyim kalitesi ile de rekabet etmek zorunda." },
      { type: "paragraph", text: "Geleneksel otel operasyonları genellikle farklı sistemler ve manuel süreçlerle yürütülür. Örneğin birçok otelde check-in işlemleri ayrı bir yazılım üzerinden yapılırken, restoran rezervasyonları farklı bir sistemde tutulur. Spa randevuları veya ulaşım talepleri ise çoğu zaman manuel olarak yönetilir. Bu parçalı yapı hem operasyonel verimliliği düşürür hem de misafir deneyimini olumsuz etkileyebilir." },
      { type: "paragraph", text: "Dijitalleşme ise bu sorunu çözmek için önemli bir fırsat sunar. Merkezi dijital platformlar sayesinde oteller tüm hizmetlerini tek bir sistem üzerinden yönetebilir ve misafirlerine daha hızlı hizmet sunabilir." },
      { type: "subheading", text: "Misafir Beklentileri Nasıl Değişiyor?" },
      { type: "paragraph", text: "Yeni nesil misafirler seyahat deneyimlerinde teknoloji kullanımına büyük önem veriyor. Özellikle genç nesil kullanıcılar, mobil uygulamalar ve dijital hizmetler üzerinden işlem yapmayı tercih ediyor." },
      { type: "paragraph", text: "Bir misafir otelde konaklarken şu işlemleri hızlı ve kolay şekilde gerçekleştirmek ister: otele giriş işlemlerini beklemeden tamamlamak, restoran veya spa rezervasyonu yapmak, oda servisi siparişi vermek, otel hakkında bilgiye hızlıca ulaşmak, otel ile anlık iletişim kurmak. Bu beklentiler karşılanmadığında misafir memnuniyeti düşebilir. Tam tersine bu hizmetler hızlı ve sorunsuz şekilde sunulduğunda misafir deneyimi önemli ölçüde iyileşir. Bu nedenle dijital deneyim artık oteller için bir lüks değil, bir gereklilik haline gelmiştir." },
      { type: "subheading", text: "Yapay Zekâ Otel Operasyonlarını Nasıl Değiştiriyor?" },
      { type: "paragraph", text: "Yapay zekâ teknolojileri son yıllarda birçok sektörde olduğu gibi turizm sektöründe de önemli bir rol oynamaya başladı. Oteller, operasyonlarını daha verimli yönetmek ve misafir deneyimini geliştirmek için yapay zekâ çözümlerinden faydalanıyor." },
      { type: "paragraph", text: "Yapay zekâ destekli sistemler sayesinde misafir talepleri otomatik olarak analiz edilebilir, rezervasyon süreçleri hızlandırılabilir, müşteri davranışları analiz edilebilir, kişiselleştirilmiş öneriler sunulabilir ve operasyonel süreçler daha verimli hale getirilebilir." },
      { type: "paragraph", text: "Örneğin bir misafir uygulama üzerinden bir talepte bulunduğunda yapay zekâ destekli sistemler bu talebi analiz ederek en uygun çözümü hızlı şekilde sunabilir. Bu sayede hem otel personelinin iş yükü azalır hem de misafirler daha hızlı hizmet alabilir." },
      { type: "subheading", text: "Veri Analizi ve Kişiselleştirilmiş Deneyimler" },
      { type: "paragraph", text: "Dijital platformların en büyük avantajlarından biri veri analizi imkânıdır. Oteller misafir davranışlarını analiz ederek daha iyi hizmet sunma fırsatı elde edebilir. Misafirlerin tercih ettiği restoranlar, en sık kullanılan hizmetler, rezervasyon alışkanlıkları ve harcama davranışları gibi veriler analiz edilerek misafirlere daha kişiselleştirilmiş teklifler sunulabilir. Bu yaklaşım yalnızca müşteri memnuniyetini artırmakla kalmaz, aynı zamanda otellerin gelirlerini de artırabilir. Kişiselleştirilmiş hizmetler, modern misafir deneyiminin en önemli parçalarından biri haline gelmiştir." },
      { type: "subheading", text: "Tek Platform Yaklaşımı" },
      { type: "paragraph", text: "Otelcilik sektöründeki en büyük sorunlardan biri hizmetlerin farklı sistemlerde dağınık şekilde yönetilmesidir. Bu durum hem misafirler hem de işletmeler için karmaşık bir yapı oluşturur. Yeni nesil teknoloji platformları bu sorunu çözmek için tüm hizmetleri tek bir sistem altında birleştirmeyi hedefler." },
      { type: "paragraph", text: "Tek platform yaklaşımı sayesinde misafirler tüm hizmetlere tek uygulama üzerinden erişebilir, otel ekipleri operasyonları tek panel üzerinden yönetebilir, veriler merkezi bir sistemde toplanır ve operasyon süreçleri daha hızlı ve verimli hale gelir. Bu yaklaşım geleceğin otel teknolojileri için önemli bir standart haline gelmektedir." },
      { type: "subheading", text: "Eleythra ve Viona Platformu" },
      { type: "paragraph", text: "Eleythra Derin Teknoloji olarak misafir deneyimini daha akıllı ve bağlantılı hale getiren teknolojiler geliştirmeyi hedefliyoruz. Geliştirdiğimiz Viona platformu, otellerde farklı sistemlerde bulunan hizmetleri tek bir dijital ekosistem altında birleştirmeyi amaçlayan bir yazılım altyapısıdır." },
      { type: "paragraph", text: "Viona sayesinde misafirler otel hizmetlerine tek bir platform üzerinden erişebilir, rezervasyon ve hizmet taleplerini kolayca iletebilir, otel ile hızlı iletişim kurabilir ve otel hakkında bilgilere anında ulaşabilir. Otel işletmeleri ise misafir taleplerini merkezi bir yönetim paneli üzerinden takip ederek operasyonlarını daha verimli şekilde yönetebilir. Viona'nın temel amacı yalnızca dijital bir uygulama sunmak değil, misafir deneyimini daha akıllı ve akıcı hale getiren bir teknoloji altyapısı oluşturmaktır." },
      { type: "subheading", text: "Geleceğin Otelleri" },
      { type: "paragraph", text: "Önümüzdeki yıllarda otellerin büyük çoğunluğu dijital platformlar üzerinden hizmet sunmaya başlayacak. Mobil uygulamalar, yapay zekâ destekli asistanlar ve veri analizi araçları sayesinde misafir deneyimi tamamen yeniden şekillenecek." },
      { type: "paragraph", text: "Geleceğin otellerinde misafirler birçok işlemi fiziksel olarak resepsiyona gitmeden gerçekleştirebilecek. Rezervasyonlar, hizmet talepleri ve iletişim süreçleri büyük ölçüde dijital sistemler üzerinden yönetilecek. Bu dönüşüm yalnızca teknolojik bir değişim değil, aynı zamanda hizmet anlayışının yeniden tanımlanması anlamına geliyor." },
      { type: "subheading", text: "Kapanış" },
      { type: "paragraph", text: "Turizm sektörü dijitalleşirken otellerin bu dönüşüme uyum sağlaması artık bir tercih değil, bir zorunluluk. Yapay zekâ ve veri odaklı sistemler, misafir deneyimini daha hızlı, kişisel ve akıllı kılma potansiyelini taşıyor; tek platform yaklaşımı ise hem işletmelere hem misafirlere netlik ve verimlilik sunuyor." },
      { type: "paragraph", text: "Eleythra Derin Teknoloji olarak bu dönüşümün parçası olmayı ve misafir deneyimini merkeze alan teknolojiler geliştirmeyi hedefliyoruz. Viona, bu vizyonun somut bir adımı: otellerdeki hizmetleri tek bir dijital ekosistemde toplayarak hem operasyonel verimliliği hem de misafir memnuniyetini yükseltmeyi amaçlıyor. Misafir deneyiminin geleceği daha bağlantılı, daha akıllı ve tamamen dijital — ve biz bu geleceği birlikte inşa ediyoruz." },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getFeaturedPost(): BlogPost {
  return BLOG_POSTS[0];
}

export function getOtherPosts(): BlogPost[] {
  return BLOG_POSTS.slice(1);
}
