# aws-s3-nodejs
npm install --save aws-sdk

YETKİLENDİRME

AWS Console üzerinden IAM (Identity and Access Management) servisine gidin.
Sol taraftaki menuden Users’a tıklayın
Üst taraftaki mavi butona, Create New Users, tıklayın
Beğendiğiniz bir kullanıcı adı girin (s3_bhdrkn).
Generate Access Key For Each User seçeneği seçili kalsın, sonrasında Create’e tıklayın.
Burada isterseniz Show Credentials diyerek, isterseniz Download Credentials diyerek kullanıcı erişim bilgilerini kaydedin. Bu bilgileri java uygulamasını geliştirirken kullanacağız.
Sonrasında, Close’a tıklayın. Bu sizi kullanıcıların listelendiği sayfaya götürecek. Burada biraz beklerseniz, yeni yarattığınız kullanıcıları görebilirsiniz.
Kullanıcınıza (s3_bhdrkn) tıklayın. Açılan sayfada Permissions sekmesine gelin ve Attach Policy’e tıklayın.
Yeni açılan ekrandaki kutucuğa S3 yazıp filtreleyin. Gelen listeden AmazonS3FullAccess i seçin ve attach policy’e tıklayın.
