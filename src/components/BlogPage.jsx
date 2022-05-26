import React from "react";
import "./BlogPage.css";
import ArticleImgOnePass from "../images/article-1-img-pass.jpg";
import ArticleImgOTwoWork from "../images/article-2-img-work.jpg";
import ArticleImgThreeContainer from "../images/article-3-img-container.jpg";

const BlogPage = () => {
  return (
    <div className="container">
      <h3 className="working-zone-header">
        <div className="working-zone-headers-line"></div> Blog Yazılarımız
      </h3>
      <div className="blog-container-page">
        <div className="article-container-page">
          <img src={ArticleImgOTwoWork} />
          <div className="article-body-page">
            <h5 className="article-title-page">
              Küçük ve Orta Büyüklükteki İşletmelerin Tanımı, Nitelikleri ve
              Sınıflandırılması Hakkında Yönetmelikte Değişiklik Yapılmasına
              Dair Yönetmelik yayınlandı.
            </h5>
            <p className="article-text-page">
              8.03.2022 tarihli ve 31782 sayılı Resmi Gazete’de “Küçük ve Orta
              Büyüklükteki İşletmelerin Tanımı, Nitelikleri ve Sınıflandırılması
              Hakkında Yönetmelikte Değişiklik Yapılmasına Dair Yönetmelik
              (“Yönetmelik”)” yayınlanmış ve aynı tarihte yürürlüğe girmiştir.
              <br />
              <br />
              Yapılan Yönetmelik değişikliğiyle; küçük ve orta büyüklükte
              işletme (“KOBİ”) tanımında aranan yıllık net satış hasılatı veya
              mali bilançosundan herhangi birinin 125.000.000 Türk Lirası
              (yüzyirmibeş milyon Türk Lirası)’nı aşmaması şartı, 250.000.000
              Türk Lirası (ikiyüzelli milyon Türk Lirası) olarak
              güncellenmiştir.
              <br />
              <br />
              KOBİ’lerin sınıflandırılmasında ise net satış hasılatı veya mali
              bilanço limiti;
              <br />
              <br />
              <ul>
                <li>
                  Mikro işletmeler için 3.000.000 Türk Lirası (üç milyon Türk
                  Lirası)’ndan 5.000.000 Türk Lirası (beş milyon Türk Lirası)’na
                </li>
                <li>
                  Küçük işletmeler için 25.000.000 Türk Lirası (yirmi beş milyon
                  Türk Lirası)’ndan 50.000.000 Türk Lirası (elli milyon Türk
                  Lirası)’na
                </li>
                <li>
                  Orta büyüklükteki işletmeler için 125.000.000 Türk Lirası (yüz
                  yirmi beş milyon Türk Lirası)’ndan 250.000.000 Türk Lirası
                  (ikiyüzelli milyon Türk Lirası)’na yükseltilmiştir.
                </li>
              </ul>
            </p>
            <p className="muted-page">
              <small>10 Nisan 2022</small>
            </p>
          </div>
        </div>
        <hr />
      </div>

      <div className="blog-container-page">
        <div className="article-container-page">
          <img src={ArticleImgOnePass} />
          <div className="article-body-page">
            <h5 className="article-title-page">
              Yatırım Yoluyla İstisnai Türk Vatandaşlığı Kazanımı
            </h5>

            <h5 />
            <p className="article-text-page">
              8.03.2022 tarihli ve 31782 sayılı Resmi Gazete’de “Küçük ve Orta
              Büyüklükteki İşletmelerin Tanımı, Nitelikleri ve Sınıflandırılması
              Hakkında Yönetmelikte Değişiklik Yapılmasına Dair Yönetmelik
              (“Yönetmelik”)” yayınlanmış ve aynı tarihte yürürlüğe girmiştir.
              <br />
              <br />
              <ul>
                <li>
                  En az 500.000 Amerikan Doları veya karşılığı döviz tutarında
                  sabit sermaye yatırımı gerçekleştirdiği Sanayi ve Teknoloji
                  Bakanlığınca tespit edilen.
                </li>
                <li>
                  En az 250.000 Amerikan Doları veya karşılığı döviz tutarındaki
                  taşınmazı tapu kayıtlarına üç yıl satılmaması şerhi koyulmak
                  şartıyla satın aldığı veya kat mülkiyeti ya da kat irtifakı
                  kurulmuş, en az 250.000 Amerikan Doları veya karşılığı döviz
                  tutarı peşin olarak yatırılan ve tapu siciline üç yıl süreyle
                  devir ve terkini yapılmayacağı taahhüdü şerh edilmek şartıyla
                  noterde düzenlenmiş sözleşme ile taşınmazın satışının vaat
                  edildiği Çevre, Şehircilik ve İklim Değişikliği Bakanlığınca
                  tespit edilen.
                </li>
                <li>
                  En az 50 kişilik istihdam oluşturduğu Çalışma ve Sosyal
                  Güvenlik Bakanlığınca tespit edilen.
                </li>
                <li>
                  En az 500.000 Amerikan Doları veya karşılığı döviz tutarında
                  mevduatı üç yıl tutma şartıyla Türkiye’de faaliyet gösteren
                  bankalara yatırdığı Bankacılık Düzenleme ve Denetleme
                  Kurumunca tespit edilen.
                </li>
                <li>
                  En az 500.000 Amerikan Doları veya karşılığı döviz tutarında
                  Devlet borçlanma araçlarını üç yıl tutmak şartıyla satın
                  aldığı Hazine ve Maliye Bakanlığınca tespit edilen.
                </li>
                <li>
                  En az 500.000 Amerikan Doları veya karşılığı döviz tutarında
                  gayrimenkul yatırım fonu katılma payı veya girişim sermayesi
                  yatırım fonu katılma payını en az üç yıl elinde tutma şartıyla
                  satın aldığı Sermaye Piyasası Kurulunca tespit edilen.
                </li>
              </ul>
              <br />
              Önemle belirtmek gerekir ki, yabancı yatırımcının eşi ve ergin
              olmayan çocuklarının da yatırımcı ile birlikte Türk vatandaşlığını
              kazanabilmektedir. Yatırımcının ya da ailesinin Türkiye’de
              bulunması zorunlu değildir.
              <br />
              <br />
              Yapılacak yatırım sonrasında yatırım türüne göre yetkili merci
              tarafından verilecek uygunluk belgesinin ardından başvuru
              yapılabilmektedir. Başvurular İstanbul ve Ankara için Göç
              İdaresi'nin özel ortak ofislerinde; diğer iller için İl Nüfus ve
              Vatandaşlık Müdürlüğü'nde yapılmaktadır. Başvurular, ilgili
              Bakanlıkların oluşturduğu komisyon tarafından değerlendirilir ve
              Cumhurbaşkanının onayına sunulur. Başvurunun onaylanması ya da
              reddi Cumhurbaşkanı’nın takdirindedir. Başvuru sonucu 3 ila 6 ay
              gibi kısa bir sürede alınmaktadır.
            </p>
            <p className="muted-page">
              <small>7 Nisan 2022</small>
            </p>
          </div>
        </div>
        <hr />
      </div>
      <div className="blog-container-page">
        <div className="article-container-page">
          <img src={ArticleImgThreeContainer} />
          <div className="article-body-page">
            <h5 className="article-title-page">
              Gümrük Kanunu’nun Bazı Maddelerinin Uygulanması Hakkında Kararda
              Değişiklik Yapılmasına Dair 5303 Sayılı Cumhurbaşkanı Kararı Resmî
              Gazete'de yayınlandı.
            </h5>
            <p className="article-text-page">
              “4488 sayılı Gümrük Kanunu’nun Bazı Maddelerinin Uygulanması
              Hakkında Kararda Değişiklik Yapılmasına Dair 5303 Sayılı
              Cumhurbaşkanı Kararı (“Karar”)” 15.03.2022 tarihli ve 31779 sayılı
              Resmî Gazete’de yayınlanmıştır.
              <br />
              <br />
              İşbu düzenlemeyle, internet üzerinden yapılan, ticari mahiyet arz
              etmeyen ve posta veya hızlı kargo taşımacılığı yoluyla gerçek
              kişiye teslim edilen alışverişlerde; eşyanın değeri üzerinden
              hesaplanması suretiyle:
              <br />
              <br />
              <ul>
                <li>AB ülkelerinden doğrudan gelmesi halinde %18,</li>
                <li>
                  Diğer ülkelerden (ABD, Çin, Hindistan vb.) gelmesi halinde ise
                  %30,
                </li>
                <li>
                  3. Özel tüketim vergisine tabi cep telefonu vb. cihazlardan
                  gümrük vergisine ek olarak %20 ÖTV
                </li>
              </ul>
              <br />
              oranında gümrük vergisi tahsil edilmesi kararlaştırılmıştır.
              Yapılan bu yenilik ile ABD, Çin, Hindistan vb. diğer ülkelerden
              gelen ürünlere uygulanan gümrük vergisi oranı %20’den %30’a
              çıkarılmıştır.
              <br />
              <br />
              Alışverişe konu eşyanın kıymeti bakımından da değişiklik yoluna
              gidilmiş olup, alışveriş limiti gerçek kişiler için 1500 Euro’dan
              150 Euro’ya düşürülmüştür. İlaçlar için ise bu limit yine 1500
              Euro olarak kararlaştırılmıştır. Tüzel kişiler için ise bu limit
              22 Euro olarak belirlenmiştir. İşbu limitlerin aşılması halinde,
              ithalat vergilerine ilişkin oranların uygulanması gerekmektedir.
            </p>
            <p className="muted-page">
              <small>14 Nisan 2022</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
