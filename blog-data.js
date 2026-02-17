
// ==================== BLOG DETAIL PAGE DYNAMIC CONTENT ====================
document.addEventListener('DOMContentLoaded', function () {
    // URL'den ID parametresini al
    const urlParams = new URLSearchParams(window.location.search);
    const kararId = urlParams.get('id');

    // Karar verileri
    const kararlar = {
        1: {
            baslik: "Resen Araştırılması Gereken Bir Konuda Davalının Eksik Bilgi ve Belgeler Üzerinden Verilmiş Bilirkişi Raporuna İtiraz Etmemesi Karşı Taraf Lehine Kazanılmış Hak Doğurmaz",
            kategori: "SİGORTA HUKUKU",
            kategoriRenk: "#0891b2", // Turkuaz
            tarih: "28 Mayıs 2025",
            okumaSuresi: "12 dk okuma",
            mahkeme: "Hukuk Genel Kurulu",
            esasNo: "2024/250",
            kararNo: "2025/354",
            kararTarihi: "28.05.2025",
            icerik: `
                <div class="karar-giris">
                    <p><strong>T.C. YARGITAY HUKUK GENEL KURULU</strong><br>
                    <strong>Esas No:</strong> 2024/250<br>
                    <strong>Karar No:</strong> 2025/354<br>
                    <strong>Karar Tarihi:</strong> 28.05.2025</p>
                    <p><strong>İÇTİHAT METNİ</strong><br>
                    <strong>MAHKEMESİ:</strong> Ankara Bölge Adliye Mahkemesi 23. Hukuk Dairesi<br>
                    <strong>SAYISI:</strong> 2023/1420 E., 2023/1594 K.<br>
                    <strong>ÖZEL DAİRE KARARI:</strong> Yargıtay 11. Hukuk Dairesinin 28.03.2023 tarihli ve 2021/7840 Esas, 2023/1884 Karar sayılı BOZMA kararı</p>
                </div>

                <p>Taraflar arasındaki rücuen tazminat davasından dolayı yapılan yargılama sonunda İlk Derece Mahkemesince davanın kısmen kabulüne karar verilmiştir.</p>
                <p>Kararın davacı vekili ve davalı vekili tarafından istinaf edilmesi üzerine, Bölge Adliye Mahkemesince davalı vekilinin istinaf başvurusunun esastan reddine, davacı vekilinin başvurusunun kısmen kabulü ile İlk Derece Mahkemesi kararı kaldırılarak davanın yabancı para cinsi üzerinden kısmen kabulüne karar verilmiştir.</p>
                <p>Bölge Adliye Mahkemesi kararı davacı vekili ve davalı vekili tarafından temyiz edilmesi üzerine Yargıtay 11. Hukuk Dairesince yapılan inceleme sonunda bozulmuş, Bölge Adliye Mahkemesi tarafından Özel Daire bozma kararına karşı direnilmiştir.</p>
                <p>Direnme kararı davalı vekili ve katılma yoluyla davacı vekili tarafından temyiz edilmekle; kesinlik, süre, temyiz şartı ve diğer usul eksiklikleri yönünden yapılan ön inceleme sonucunda, temyiz dilekçesinin kabulüne karar verildikten sonra Tetkik Hâkimi tarafından hazırlanan gündem ve dosyadaki belgeler incelenip gereği düşünüldü:</p>

                <h2>I. DAVA</h2>
                <p>Davacılar vekili; müvekkili ile davalı ... arasında 05.03.2014 ilâ 31.12.2015 tarihlerini kapsar şekilde sigorta poliçesi düzenlendiğini, müvekkili şirkete ait otel inşaatında 25.11.2014 tarihinde meydana gelen kazada bir işçinin yaralandığını ve sonrasında vefat ettiğini, tedavi ve cenaze masraflarından ayrı olarak müvekkilinin müteveffanın mirasçılarına 200.000,00 TL tazminat ödediğini, bu meblağ ve sair giderler dışında zararları da bulunmakla birlikte taraflar arasındaki poliçede davalının sorumluluğunun ferdi kaza başına 50.000 Euro ile sınırlandırıldığını ileri sürerek 50.000 Euronun aynen döviz cinsinden ödeneceği tarihteki kur karşılığının ve olay tarihinden itibaren işletilecek avans faizinin davalıdan tahsiline karar verilmesini talep etmiştir.</p>

                <h2>II. CEVAP</h2>
                <p>Davalı vekili; söz konusu iş kazasının davanın dayanağı poliçe kapsamında kaldığını, müvekkilinin sorumluluğunun poliçe limiti olan 50.000 Euro ile sınırlı olduğunu, iş kazasıyla ilgili ödemelere ilişkin belgelerin gönderilmesi durumunda gerekli değerlendirmeyi yapabileceklerini, davanın sulhen sonuçlandırılmasının mümkün olduğunu ve sorumluluk kapsamında olduğu anlaşılır ise poliçe limitinin tamamının davacıya ödenebileceğini ancak müvekkilinin faiz sorumluluğunun kaza tarihinden değil ödeme tarihinden itibaren yasal faiz yönünde olduğunu belirterek sulh talebi doğrultusunda işlem yapılmasını istemiştir.</p>

                <h2>III. İLK DERECE MAHKEMESİ KARARI</h2>
                <p>Ankara 3. Asliye Ticaret Mahkemesinin 08.05.2018 tarihli ve 2015/833 Esas, 2018/328 Karar sayılı kararı ile; davalının sigorta poliçesi gereği gerçek zararı ödemekle yükümlü olduğu, poliçe limiti ve bilirkişi incelemesiyle belirlenen muafiyet indirimi dikkate alındığında davacı firmanın rücuen talep edebileceği tazminat miktarının 79.114,86 TL, manevi tazminat miktarının ise 27.700,00 TL olduğu gerekçesiyle toplam 106.814,86 TL'nin ödeme tarihinden itibaren işleyecek avans faiziyle birlikte davalıdan tahsiline karar verilmiştir.</p>

                <h2>IV. İSTİNAF</h2>
                <h3>A. İstinaf Yoluna Başvuranlar</h3>
                <p>İlk Derece Mahkemesinin yukarıda belirtilen kararına karşı süresi içinde her iki taraf vekili istinaf başvurusunda bulunmuştur.</p>

                <h3>B. Gerekçe ve Sonuç</h3>
                <p>Bölge Adliye Mahkemesinin 16.06.2021 tarihli ve 2018/2051 Esas, 2021/924 Karar sayılı kararı ile; Mahkemece maddi tazminat miktarı belirlenirken gerçek zarar hesabı yapılmasında isabetsizlik bulunmadığı, mirasçılara Sosyal Sigortalar Kurumu (SGK) yardımı yapılmışsa bunun tazminattan indirilmesi yönünde davalı vekilinin istinaf itirazı mevcut ise de bilirkişi raporuna bu yönde bir itirazda bulunulmamış olmasının davacı lehine usulî kazanılmış hak doğurduğu gerekçesiyle davalı vekilinin tüm, davacı vekilinin sair itirazlarının reddine, alınan 05.03.2018 tarihli ikinci ek raporda müteveffa mirasçılarının gerçek zarar hesabı ile muafiyet indirimi gözetilip kaza tarihindeki TCMB Euro satış kuru karşılığı esas alınmak suretiyle yapılan hesaplama neticesinde davalı ... şirketinin sorumlu olduğu maddi tazminat tutarının 28.635,76 Euro, manevi tazminatın 10.000,00 Euro olarak belirlendiği, poliçe hükümlerine göre döviz cinsinden tazminat talep edilmesinin mümkün olduğu, dava dilekçesinde de açıkça Euro olarak talepte bulunulduğu gerekçesiyle İlk Derece Mahkemesi kararının kaldırılmasına, davanın kısmen kabulüne, 28.635,76 Euro maddi, 10.000 Euro manevi tazminatın ödeme tarihi olan 03.12.2014 tarihinden itibaren işleyecek 3095 sayılı Kanun'un 4/a maddesi gereğince devlet bankalarının Euro cinsinden bir yıl vadeli mevduat hesabına uygulanan en yüksek faizi ile birlikte davalıdan tahsiline karar verilmiştir.</p>

                <h2>V. BOZMA VE BOZMADAN SONRAKİ YARGILAMA SÜRECİ</h2>
                <h3>A. Bozma Kararı</h3>
                <p>1. Bölge Adliye Mahkemesinin yukarıda belirtilen kararına karşı süresi içinde her iki taraf vekili temyiz isteminde bulunmuştur.</p>
                <p>2. Yargıtay 11. Hukuk Dairesinin yukarıda tarih ve sayısı belirtilen kararı ile; "… 1.Dava, dövize endeksli İnşaat Tüm Riskler Poliçesine dayalı olarak iş yerinde ölen işçinin hak sahiplerine yapılan ödemenin davalı ... şirketinden döviz olarak tahsili istemine ilişkindir. Bölge Adliye Mahkemesince poliçenin döviz bazlı düzenlendiği, davalı ... şirketinin döviz olarak tazminat sorumluluğunun bulunduğu gerekçesi ile davanın kısmen kabulüne karar verilmiştir ancak dava konusu sigorta sözleşmesinde sigortacının sorumluluğu her ne kadar döviz üzerinden kabul edilmiş ise de davacının ölenin hak sahiplerine yaptığı ödeme Türk Lirası üzerinden olup ödenen miktarın döviz olarak talep edilmesi sigortalının sebepsiz zenginleşmesine neden olabilecektir. Bu durumda davacının ödediği Türk Lirası kadar rücu hakkı bulunduğu gözetilerek karar verilmesi gerekirken yazılı gerekçe ile döviz üzerinden tahsile karar verilmesi doğru görülmemiştir.</p>
                <p>2. Davalı ..., poliçedeki 3. şahıs mali sorumluluk teminatının, zarar görenlerin gerçek zararlarının karşılanmasına yönelik olduğunu savunmuştur. Gerçekten de poliçede verilen teminat kişi başı 50.000,00 euro ile sınırlı olmakla rizikonun gerçekleşmesi ile birlikte bu tutarın mutlaka ödeneceği sonucuna ulaşılmamalıdır. Sigorta teminatı oluşan gerçek zararı temine yönelik olduğundan davacı şirketin yaptığı ödemenin, zarar görenin gerçek zararı olup olmadığı belirlenerek sonucuna göre davalı ... şirketin sorumluluğuna karar verilmemiş olması doğru görülmemiş bozmayı gerektirmiştir" şeklindeki gerekçeyle bozma nedenine göre davacı vekilinin tüm, davalı vekilinin sair temyiz itirazları incelenmeksizin karar bozulmuştur.</p>

                <h3>B. Bölge Adliye Mahkemesince Verilen Direnme Kararı</h3>
                <p>Bölge Adliye Mahkemesinin yukarıda tarih ve sayısı belirtilen kararı ile; önceki karar gerekçesinin yanında, yargılama sırasında alınan bilirkişi raporlarında zaten gerçek zarar hesabının yapıldığı, davalı vekili tarafından gerçek zarar miktarı yönünden itiraz edilmemesinin davacı lehine usulî kazanılmış hak doğurduğu, poliçe hükümlerine göre döviz cinsinden tazminat talep edilebileceği ve dava dilekçesindeki talebin de bu yönde olduğu gözetildiğinde, ödemenin döviz cinsinden yapılması durumunda sebepsiz zenginleşmeden bahsedilemeyeceği gerekçesiyle direnme kararı verilmiştir.</p>

                <h2>VI. TEMYİZ</h2>
                <h3>A. Temyiz Yoluna Başvuranlar</h3>
                <p>Direnme kararına karşı süresi içinde davalı vekili ve katılma yoluyla davacı vekili temyiz isteminde bulunmuştur.</p>

                <h3>B. Temyiz Sebepleri</h3>
                <p>1. Davalı vekili temyiz itirazlarında; davacı tarafça müteveffanın yakınlarına TL cinsinden ödeme yapılmasına rağmen ödemenin Euro cinsinden rücû edilmek istenmesinin mesnetsiz ve sebepsiz zenginleşme yaratacak nitelikte olduğunu, davacı tarafça poliçe limiti olan 50.000 Euronun tamamının ödenmesi talep edilmiş olsa da işveren mali mesuliyet sigortası meblağ sigortası olmayıp bir sorumluluk sigortası niteliğinde olduğunu, SGK tarafından davacı lehine, herhangi bir ödeme yapılıp yapılmadığının (rücuya tâbi bir gelir bağlanıp bağlanmadığının) araştırılması gerekirken ilgili araştırma yapılmaksızın karar verilmesinin yerinde olmadığını, poliçe özel şartında düzenlendiği üzere daha öncesinde sayılan teminatlara girmeyen hâllerde her bir hasarda minimum 2.500 Euro olmak üzere, hasarın %10'u oranında tenzili muafiyet uygulanması gerektiğini ileri sürerek kararın bozulmasını istemiştir.</p>
                <p>2. Davacı vekili temyiz itirazlarında; poliçenin teminat sınırının 50.000 Euro olduğunu, davanın bu bedel üzerinden kabulüne karar verilmesi gerektiğini ileri sürerek kararın bozulmasını talep etmiştir.</p>

                <h3>C. Uyuşmazlık</h3>
                <p>Direnme yoluyla Hukuk Genel Kurulu önüne gelen uyuşmazlık; dövize endeksli sigorta poliçesinde sigorta ettiren davacının, poliçe kapsamındaki iş kazası nedeniyle dava dışı kişilere Türk Lirası üzerinden yaptığı maddi ve manevi tazminata ilişkin ödemelerini sözleşmedeki döviz cinsi üzerinden davalı ... şirketine rücû etmek istediği somut olayda, <br>
                1- Sözleşmenin mahiyeti ve davacı tarafından üçüncü kişilere yapılan ödemenin niteliği dikkate alındığında döviz cinsinden talepte bulunulmasının davacının sebepsiz zenginleşmesine neden olacağının kabul edilip edilmeyeceği, <br>
                2- Yargılama sürecinde gerçek zararın tespiti yönünde yapılan bilirkişi incelemelerine karşı davalı tarafça herhangi bir itirazda bulunulmamasının davacı yararına usulî kazanılmış hak doğurup doğurmadığı, burada varılacak sonuca göre gerçek zararın tespiti yönünde yeniden bir değerlendirme yapılmasının mümkün ve gerekli olup olmadığı noktasında toplanmaktadır.</p>

                <h2>D. Gerekçe</h2>
                <h3>1. İlgili Hukuk</h3>
                <ol>
                    <li>6098 sayılı Türk Borçlar Kanunu'nun (TBK) 26, 55 ve 99. maddeleri,</li>
                    <li>6102 sayılı Türk Ticaret Kanunu'nun (TTK) 1459, 1460 ve 1461. maddeleri,</li>
                    <li>5684 sayılı Sigortacılık Kanunu’nun 11. maddesi,</li>
                    <li>6100 sayılı Hukuk Muhakemeleri Kanunu'nun (HMK) 198, 266, 281 ve 282. maddeleri.</li>
                </ol>

                <h3>2. Değerlendirme</h3>
                <h4>(A) Birinci Uyuşmazlık Yönünden Yapılan Değerlendirme</h4>
                <p>1. Sigorta; bir kişinin belirli bir prim karşılığında bir şey veya kendisinin ya da başkasının hayatı üzerindeki menfaatini, gerçekleşmesi muhtemel tehlikelere (rizikolara) karşı güvence altına almasına yönelik bir sözleşme türüdür (Türk Hukuk Lügatı, Türk Hukuk Kurumu, Ankara 2021, C. 1, s. 985)</p>
                <p>2. Türk Ticaret Kanunu'nun 1459. maddesine göre sigortacı sigortalının uğradığı zararı tazmin eder ve 1460. maddeye göre sigorta değeri sigorta olunan menfaatin tam değeridir. Devam eden 1461. maddeye göre, aynen tazmini öngören yeni değer sigortaları hariç, sigortacının sorumluluğu sigorta bedeli ile sınırlı olup bu bedel rizikonun gerçekleştiği andaki sigortalı menfaatin değerini aşsa bile sigortacı uğranılan zarardan fazlasından sorumlu değildir.</p>
                <p>3. 5684 sayılı Sigortacılık Kanunu’nun 11. maddesine göre “Sigorta sözleşmelerinin ana muhtevası, Müsteşarlıkça onaylanan ve sigorta şirketlerince aynı şekilde uygulanacak olan genel şartlara uygun olarak düzenlenir.”</p>
                <p>4. Sigorta sözleşmelerinin önemli bir örneği işveren sigortalarıdır. ... (Devamı)</p>
                <p>30. Bu hâlde söz konusu talep taraflar arasındaki sözleşmeye uygun olduğundan davacının sebepsiz zenginleşeceğinden bahsetmek mümkün değildir.</p>
                <p>31. Dolayısıyla ilk uyuşmazlık bakımından direnme gerekçesi haklı ve yerindedir.</p>

                <h4>(B) İkinci Uyuşmazlık Yönünden Yapılan Değerlendirme</h4>
                <p>32. Bölge Adliye Mahkemesi ve Özel Daire arasındaki ikinci uyuşmazlık; yargılama sürecinde gerçek zararın tespiti yönünde yapılan bilirkişi incelemelerine karşı davalı tarafça herhangi bir itirazda bulunulmamasının davacı yararına usulî kazanılmış hak doğurup doğurmadığı konusunda düğümlenmektedir.</p>
                <p>46. Bu noktada göz ardı edilmemesi gereken en önemli hususlardan biri kamu düzeniyle ilgili olması nedeniyle mahkemenin resen inceleme yapması gereken konularda tarafın bilirkişi raporuna itiraz etmemesinin bir etkisinin bulunmadığıdır. Zira kamu düzeniyle ilgili durumlarda usulî kazanılmış haktan söz edilemez.</p>
                
                <blockquote>
                    "Resen araştırılması gereken bir konuda, eksik bilgi ve belgelere dayalı olarak hazırlanmış bilirkişi raporuna davalı tarafça itiraz edilmemiş olması, karşı taraf lehine usulî kazanılmış hak doğurmaz. Zira maddi gerçeğin ortaya çıkarılması, usulî kuralların şekilci yorumundan üstündür."
                </blockquote>
                
                <p>55. Hâl böyle olunca birinci uyuşmazlık yönünden direnme kararı yerinde olmakla birlikte ikinci uyuşmazlık yönünden direnme kararının Hukuk Genel Kurulunca da benimsenen Özel Daire kararında gösterilen ve yukarıda açıklanan genişletilmiş gerekçe ve nedenlerle bozulmasına karar vermek gerekmiştir.</p>

                <h2>VII. KARAR</h2>
                <p>Açıklanan sebeplerle;</p>
                <p>Birinci uyuşmazlık yönünden direnme uygun olmakla davalı vekilinin bu yöne ilişkin temyiz itirazlarının reddine,</p>
                <p>İkinci uyuşmazlık yönünden direnme kararının yukarıda açıklanan genişletilmiş gerekçe ve nedenlerden dolayı 6100 sayılı Kanun'un 371. maddesi gereğince BOZULMASINA,</p>
                <p>İstek hâlinde temyiz peşin harcının yatırana geri verilmesine,</p>
                <p>Bozma nedenine göre tarafların sair temyiz itirazlarının incelenmesine yer olmadığına,</p>
                <p>Dosyanın 6100 sayılı Kanun'un 373. maddesinin 2. fıkrası uyarınca kararı veren Bölge Adliye Mahkemesine gönderilmesine,</p>
                <p>28.05.2025 tarihinde oy birliğiyle ve kesin olarak karar verildi</p>
            `
        },
        2: {
            baslik: "Kira Sözleşmesi Sırasında Verilen Taahüt ve Geçerliliği",
            kategori: "KİRA HUKUKU",
            kategoriRenk: "#7c3aed", // Mor
            tarih: "18 Haziran 2025",
            okumaSuresi: "10 dk okuma",
            mahkeme: "3. Hukuk Dairesi",
            esasNo: "2024/4396",
            kararNo: "2025/3416",
            kararTarihi: "18.06.2025",
            icerik: `
                <div class="karar-giris">
                    <p><strong>GİRİŞ</strong> Kira sözleşmesi sırasında verilen tahliye taahhüdünün geçerliliği tartışmalı bir konudur. Ancak kiraya verene gönderilen cevabi ihtarname ile değerlendirme yapıldığında taahhüdün serbest irade ile verildiği kabul edilmelidir.</p>
                </div>

                <h2>I. DAVA</h2>
                <p>Davacı vekili; davalı ile aralarında 01.01.2023 başlangıç tarihli kira sözleşmesi bulunduğunu, davalının kira sözleşmesi ile birlikte 31.12.2023 tarihinde taşınmazı tahliye edeceğine dair yazılı taahhütname verdiğini, ancak taahhüt edilen tarihte tahliyenin gerçekleşmediğini ileri sürerek, taahhüt nedeniyle tahliye kararı verilmesini talep etmiştir.</p>

                <h2>II. CEVAP</h2>
                <p>Davalı vekili cevap dilekçesinde; tahliye taahhütnamesinin kira sözleşmesi ile aynı gün ve baskı altında alındığını, taahhüdün tarih kısmının sonradan kiraya veren tarafından doldurulduğunu, Türk Borçlar Kanunu'nun kiracıyı koruyan hükümleri karşısında, sözleşme yapılırken müzayaka halinde verilen taahhüdün geçersiz olduğunu savunarak davanın reddini istemiştir.</p>

                <h2>III. İLK DERECE MAHKEMESİ KARARI</h2>
                <p>İlk derece mahkemesi, taahhütnamenin düzenlenme tarihi ile tahliye tarihi arasında makul bir süre bulunmadığı, kira sözleşmesi ile aynı gün alınan taahhüdün kiracının serbest iradesini yansıtmadığı gerekçesiyle davanın reddine karar vermiştir.</p>

                <h2>IV. BÖLGE ADLİYE MAHKEMESİ KARARI</h2>
                <p>Bölge Adliye Mahkemesi, davacı vekilinin istinaf başvurusunu inceleyerek; taahhütnamenin geçerlilik şartlarını taşıdığını, davalının irade sakatlığı iddiasını ispatlayamadığını, ancak taahhüt tarihinin sözleşme tarihi ile aynı olmasının karine olarak irade sakatlığına işaret ettiğini belirterek istinaf başvurusunu esastan reddetmiştir.</p>
                
                <h2>V. TEMYİZ</h2>
                <p>Davacı vekili, davalının daha sonra keşide ettiği cevabi ihtarnamede taahhüdün varlığını kabul ettiğini, sadece tarihe itiraz ettiğini, bu durumun dahi taahhüdün verildiğini doğruladığını belirterek kararı temyiz etmiştir.</p>

                <h2>VI. KARAR</h2>
                <p>Yargıtay 3. Hukuk Dairesi, dosyadaki belgeleri ve özellikle davalının kiraya verene gönderdiği cevabi ihtarnameyi incelediğinde; davalının taahhüdü kabul ettiği ancak süresine itiraz ettiği görülmüştür. Kira sözleşmesi sırasında verilen taahhüt kural olarak geçersiz kabul edilse de, kiracının sonraki beyanları ile bu taahhüdü benimsediği ve geçerli kıldığı anlaşılmaktadır.</p>
                
                <blockquote>
                    "Kira sözleşmesi sırasında verilen taahüt geçerli değilse de kiraya verene gönderilen cevabi ihtarname ile değerlendirme yapıldığında taahhüdün serbest irade ile verildiğine kanaat getirilmelidir."
                </blockquote>
                
                <p>Sonuç olarak, davalının kendi beyanları ile bağlı olduğu ve taahhüdün geçerli hale geldiği gözetilerek, davanın kabulü gerekirken reddine karar verilmesi usul ve yasaya aykırı bulunmuş ve hüküm BOZULMUŞTUR.</p>
            `
        },
        3: {
            baslik: "Kira Sözleşmesine İtiraz Etmeyen Borçlunun Durumu",
            kategori: "İCRA VE İFLAS HUKUKU",
            kategoriRenk: "#dc2626", // Kırmızı
            tarih: "21 Ocak 2025",
            okumaSuresi: "9 dk okuma",
            mahkeme: "12. Hukuk Dairesi",
            esasNo: "2024/8127",
            kararNo: "2025/357",
            kararTarihi: "21.01.2025",
            icerik: `
                <div class="karar-giris">
                    <p><strong>GİRİŞ</strong> İcra takiplerinde borçlunun itirazlarını süresi içinde ve usulüne uygun olarak ileri sürmesi büyük önem taşır. Bu karar, kira sözleşmesine ve imzaya ayrıca ve açıkça itiraz etmeyen borçlunun, yargılama aşamasındaki savunma sınırlarını çizmektedir.</p>
                </div>

                <h2>I. TAKİP VE İTİRAZ</h2>
                <p>Alacaklı tarafından borçlu aleyhine başlatılan ilamsız icra takibinde, örnek 13 ödeme emri borçluya tebliğ edilmiştir. Borçlu yasal 7 günlük süre içerisinde icra dairesine verdiği dilekçede; "Alacaklıya herhangi bir borcum yoktur, takibe, borca ve faize itiraz ediyorum" şeklinde beyanda bulunmuş, ancak dayanak kira sözleşmesindeki imzayı ayrıca ve açıkça inkar etmemiştir.</p>

                <h2>II. İCRA MAHKEMESİ KARARI</h2>
                <p>Alacaklı, itirazın kaldırılması ve tahliye istemiyle İcra Hukuk Mahkemesi'ne başvurmuştur. Mahkemece, borçlunun duruşmada kira sözleşmesindeki imzayı inkar etmesi üzerine imza incelemesi yapılmış ve imzanın borçluya ait olmadığı kanaatine varılarak davanın reddine karar verilmiştir.</p>

                <h2>III. YARGITAY DEĞERLENDİRMESİ</h2>
                <p>Uyuşmazlık, ödeme emrine itiraz ederken imzaya açıkça itiraz etmeyen borçlunun, sonradan yargılama aşamasında imza inkarında bulunup bulunamayacağı noktasında toplanmaktadır. İcra ve İflas Kanunu'nun 269. maddesi gereğince, borçlu itirazında kira akdini ve varsa mukavelenamedeki imzasını açık ve kesin olarak reddetmezse, akdi kabul etmiş sayılır.</p>
                
                <blockquote>
                   "Kira sözleşmesine itiraz etmeyen borçlu icra mahkemesinde itiraz sebepleri ile bağlıdır ve kira sözleşmesini inkar edemez. İtirazın kaldırılması davasında, borçlu sadece itiraz dilekçesinde bildirdiği sebeplerle bağlı olup, sonradan imza inkarında bulunamaz."
                </blockquote>

                <h2>IV. SONUÇ</h2>
                <p>Somut olayda borçlu, itiraz dilekçesinde imzaya açıkça itiraz etmemiştir. İİK'nun 63. maddesi gereğince itiraz eden borçlu, itirazın kaldırılması duruşmasında, alacaklının dayandığı senet metninden anlaşılanlar dışında itiraz sebeplerini değiştiremez ve genişletemez. Bu nedenle, mahkemece işin esasına girilerek ödeme iddiasının incelenmesi ve sonucuna göre karar verilmesi gerekirken, usulsüz yapılan imza incelemesine dayalı olarak davanın reddi isabetsizdir.</p>
            `
        },
        4: {
            baslik: "Tahliye Taahütnamesine Dayalı İcra Takibi ve Görevli Mahkeme",
            kategori: "İCRA VE İFLAS HUKUKU",
            kategoriRenk: "#dc2626", // Kırmızı
            tarih: "11 Şubat 2025",
            okumaSuresi: "8 dk okuma",
            mahkeme: "3. Hukuk Dairesi",
            esasNo: "2024/3875",
            kararNo: "2025/759",
            kararTarihi: "11.02.2025",
            icerik: `
                <div class="karar-giris">
                    <p><strong>GİRİŞ</strong> Tahliye taahhütnamesine dayalı icra takiplerinde itiraz üzerine açılacak davalarda görevli mahkemenin belirlenmesi, usul ekonomisi ve yargılamanın hızı açısından önem arz etmektedir.</p>
                </div>

                <h2>I. DAVA</h2>
                <p>Davacı, davalı kiracının verdiği yazılı tahliye taahhütnamesine dayanarak icra takibi başlattığını, davalının haksız yere itiraz ettiğini belirterek itirazın iptaline ve tahliyeye karar verilmesini talep etmiştir. Dava, Asliye Hukuk Mahkemesi'nde açılmıştır.</p>

                <h2>II. GÖREV SORUNU</h2>
                <p>Asliye Hukuk Mahkemesi, davanın kira ilişkisinden kaynaklandığını ve Sulh Hukuk Mahkemesi'nin görevli olduğunu belirterek görevsizlik kararı vermiştir. Dosya Sulh Hukuk Mahkemesi'ne gönderilmiştir. Sulh Hukuk Mahkemesi ise davanın icra takibine itirazın iptali niteliğinde olduğunu ve genel mahkemelerin görevli olduğunu belirterek karşı görevsizlik kararı vermiştir.</p>

                <h2>III. YARGITAY KARARI</h2>
                <p>Hukuk Muhakemeleri Kanunu'nun 4. maddesi gereğince, dava konusunun değerine veya tutarına bakılmaksızın; kiralanan taşınmazların, 9/6/1932 tarihli ve 2004 sayılı İcra ve İflas Kanununa göre ilamsız icra yoluyla tahliyesine ilişkin hükümler ayrık olmak üzere, kira ilişkisinden doğan alacak davaları da dâhil olmak üzere tüm uyuşmazlıkları konu alan davalar ile bu davalara karşı açılan davalar Sulh Hukuk Mahkemesi'nin görevine girmektedir.</p>
                
                <blockquote>
                    "Tahliye taahütnamesine dayanan icra takibi nedeniyle açılan itirazın iptali davasında görevli mahkeme sulh hukuk mahkemesidir."
                </blockquote>

                <h2>IV. SONUÇ</h2>
                <p>İtirazın iptali davası, takibe sıkı sıkıya bağlı olsa da, temelindeki ilişki kira sözleşmesidir. Tahliye taahhüdünün geçerliliği ve kira ilişkisinin sona erip ermediği hususları kira hukukunun konusudur ve bu değerlendirmeyi yapacak uzman mahkeme Sulh Hukuk Mahkemesidir. Bu nedenle, uyuşmazlığın çözüm yeri Sulh Hukuk Mahkemesi olduğundan, merci tayini yoluyla Sulh Hukuk Mahkemesi'nin yargı yeri olarak belirlenmesine karar verilmiştir.</p>
            `
        },
        5: {
            baslik: "Satış Bedelinin Ödeme Şekli ve Hayatın Olağan Akışı",
            kategori: "TAŞINMAZ HUKUKU",
            kategoriRenk: "#059669", // Yeşil
            tarih: "25 Ekim 2023",
            okumaSuresi: "15 dk okuma",
            mahkeme: "Hukuk Genel Kurulu",
            esasNo: "2021/482",
            kararNo: "2023/992",
            kararTarihi: "25.10.2023",
            icerik: `
                <div class="karar-giris">
                    <p><strong>GİRİŞ</strong> Taşınmaz satışlarında satış bedelinin ödendiğinin ispatı yükü ve ödeme şeklinin hayatın olağan akışına uygunluğu, özellikle tapu iptal ve tescil davalarında kritik öneme sahiptir.</p>
                </div>

                <h2>I. DAVA VE İDDİALAR</h2>
                <p>Davacı, davalıdan bir taşınmaz satın aldığını, tapuda satış bedelini düşük gösterdiklerini ancak gerçekte 1.500.000 TL ödediğini, bu ödemeyi ise tapu işleminden önce başlayarak elden taksitler halinde ve poşetler içerisinde nakit olarak yaptığını iddia etmiştir. Davacı, tapu devrinden sonra ortaya çıkan ayıplar nedeniyle bedel indirimi veya tazminat talep etmiştir.</p>

                <h2>II. İSPAT YÜKÜ</h2>
                <p>Davalı taraf, satış bedelinin tapuda gösterilen miktar olduğunu, davacının iddia ettiği yüksek bedeli almadığını savunmuştur. Mahkeme, resmi senedin aksi iddia edildiğinden ispat yükünün davacıda olduğuna karar vermiştir.</p>

                <h2>III. YARGITAY DEĞERLENDİRMESİ</h2>
                <p>Yargıtay Hukuk Genel Kurulu, günümüz ekonomik koşullarında ve bankacılık sisteminin yaygınlığı karşısında, yüksek miktardaki paraların elden ve kayıt dışı ödenmesinin hayatın olağan akışına aykırı olduğunu belirtmiştir. Davacı, ödeme iddiasını yazılı delille ispatlayamamıştır.</p>

                <blockquote>
                    "Satış bedelinin tapu işleminden önce başlamak üzere taksitler halinde ve elden paket halinde ödenmesi hayatın olağan akışına aykırılık teşkil eder. Tacir olan veya ticari işleri bilen basiretli bir kişinin, bu denli yüksek meblağları banka kanalıyla veya belge karşılığında ödemesi beklenir."
                </blockquote>

                <h2>IV. SONUÇ</h2>
                <p>Davacının, satış bedelinin yüksek olduğunu ve bunu elden ödediğini ispatlayamadığı, tanık beyanlarının resmi senedin aksini ispata yeterli olmadığı gerekçesiyle davanın reddine karar verilmesi gerektiği sonucuna varılmıştır. Resmi senette yazılı bedel karine teşkil eder ve aksini iddia eden taraf iddiasını kesin delillerle ispatlamak zorundadır.</p>
            `
        },
        6: {
            baslik: "Motorlu Araçlar ZMM Sigortası ve Arabuluculuk",
            kategori: "SİGORTA HUKUKU",
            kategoriRenk: "#0891b2", // Turkuaz
            tarih: "8 Mayıs 2024",
            okumaSuresi: "7 dk okuma",
            mahkeme: "4. Hukuk Dairesi",
            esasNo: "2023/12689",
            kararNo: "2024/4378",
            kararTarihi: "08.05.2024",
            icerik: `
                <div class="karar-giris">
                    <p><strong>GİRİŞ</strong> Ticari davalarda zorunlu arabuluculuk şartının sigorta davalarındaki uygulanma alanı, özellikle uyuşmazlığın tüketici mahkemesinin görevine girdiği haller bakımından netleştirilmiştir.</p>
                </div>

                <h2>I. UYUŞMAZLIĞIN KONUSU</h2>
                <p>Davacı, trafik kazası sonucu aracında meydana gelen değer kaybının tazmini için davalı sigorta şirketine karşı dava açmıştır. Sigorta şirketi, davanın ticari dava olduğunu ve arabuluculuk başvurusunun dava şartı olduğunu, davacının arabulucuya başvurmadan doğrudan dava açtığını belirterek davanın usulden reddini talep etmiştir.</p>

                <h2>II. YEREL MAHKEME KARARI</h2>
                <p>Mahkeme, TTK'nın 4. maddesi uyarınca davanın mutlak ticari dava olduğunu ve TTK'nın 5/A maddesi gereğince arabuluculuğun dava şartı olduğunu belirterek, arabuluculuk yoluna başvurulmadığı gerekçesiyle davanın usulden reddine karar vermiştir.</p>

                <h2>III. YARGITAY 4. HUKUK DAİRESİ KARARI</h2>
                <p>Yargıtay, uyuşmazlığın tüketici işlemi niteliğinde olduğunu ve davanın Tüketici Mahkemesi'nde görülmesi gerektiğini belirtmiştir. 6502 sayılı Tüketicinin Korunması Hakkında Kanun'da (karar tarihinde geçerli olan haliyle) arabuluculuk dava şartı olarak öngörülmemiştir (Daha sonra yapılan değişiklikle tüketici uyuşmazlıklarında da arabuluculuk getirilmiştir ancak somut olay bakımından değerlendirme yapılmıştır).</p>

                <blockquote>
                    "Motorlu araçlar ZMM sigortacısına karşı açılacak davalar arabuluculuk dava şartına tabi değildir. Tüketici mahkemelerinin görev alanına giren bu tür davalarda, dava şartı arabuluculuk hükümlerinin uygulanıp uygulanmayacağı hususu, davanın açıldığı tarihteki yasal düzenlemelere göre belirlenmelidir."
                </blockquote>

                <h2>IV. SONUÇ VE İLKE</h2>
                <p>Dava tarihi itibariyle tüketici mahkemelerinde arabuluculuk şartı bulunmadığından, mahkemenin ticari dava nitelendirmesi ve arabuluculuk yokluğu nedeniyle ret kararı vermesi hatalı bulunmuştur. Sigorta davalarında görevli mahkemenin tespiti ve buna bağlı dava şartlarının doğru uygulanması, hak kaybını önlemek açısından hayati önem taşır.</p>
            `
        }
    };

    // Eğer ID varsa ve geçerliyse içeriği güncelle
    if (kararId && kararlar[kararId]) {
        const karar = kararlar[kararId];

        // Elemanları seç
        const elKategori = document.getElementById('karar-kategori');
        const elBaslik = document.getElementById('karar-baslik');
        const elTarih = document.getElementById('karar-tarih');
        const elOkumaSuresi = document.getElementById('karar-okuma-suresi');
        const elMahkeme = document.getElementById('karar-mahkeme');
        const elEsas = document.getElementById('karar-esas');
        const elKararNo = document.getElementById('karar-no');
        const elKararTarihDetay = document.getElementById('karar-tarih-detay');
        const elIcerik = document.getElementById('karar-icerik');
        const elBilgiKutusu = document.getElementById('bilgilendirme-kutusu');

        // İçeriği güncelle
        if (elKategori) {
            elKategori.textContent = karar.kategori;
            elKategori.style.backgroundColor = karar.kategoriRenk;
        }

        if (elBaslik) {
            elBaslik.textContent = karar.baslik;
            document.title = karar.baslik + " - Güzeler Hukuk";
        }

        if (elTarih) elTarih.innerHTML = `<i class="far fa-calendar-alt"></i> ${karar.tarih}`;
        if (elOkumaSuresi) elOkumaSuresi.innerHTML = `<i class="far fa-clock"></i> ${karar.okumaSuresi}`;

        if (elMahkeme) elMahkeme.textContent = karar.mahkeme;
        if (elEsas) elEsas.textContent = karar.esasNo;
        if (elKararNo) elKararNo.textContent = karar.kararNo;
        if (elKararTarihDetay) elKararTarihDetay.textContent = karar.kararTarihi;

        if (elIcerik) elIcerik.innerHTML = karar.icerik;
    }
});
