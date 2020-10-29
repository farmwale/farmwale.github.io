function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "rtcmalegaon@gmail.com",
    Password: "Office230677@",
    To: "rtcmalegaon@gmail.com, dharmeshdesai31@gmail.com",
    From: "rtcmalegaon@gmail.com",
    Subject: "From RTC website",
    Body: "Test",
  }).then((message) => alert("mail sent successfully"));
}
