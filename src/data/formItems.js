export const formItems = [
  //ConfirmPage.jsx、ContactFormPage.jsxへエクスポート
  {
    id: "contactName",
    item: "お名前",
    type: "text",
    required: true,
    validation: (value) => value.trim().length > 0,
    errorMessage: "名前を入力してください",
  },
  {
    id: "mailAddress",
    item: "メールアドレス",
    type: "email",
    required: true,
    validation: (value) => value.match(/.+@.+\..+/),
    errorMessage: "正しいメールアドレスの形式で入力してください",
  },
  {
    id: "phoneNumber",
    item: "電話番号",
    type: "tel",
    required: true,
    validation: (value) =>
      value.match(
        /^(0[5-9]0[-]?[0-9]{4}[-]?[0-9]{4}|0120[-]?[0-9]{1,3}[-]?[0-9]{4}|050[-]?[0-9]{4}[-]?[0-9]{4}|0[1-9][-]?[0-9]{1,4}[-]?[0-9]{1,4}[-]?[0-9]{4})$/
      ),
    errorMessage: "正しい電話番号を入力してください",
  },
  {
    id: "contactDetail",
    item: "お問い合わせ内容",
    type: "textarea",
    required: true,
    validation: (value) => value.trim().length >= 10,
    errorMessage: "お問い合わせ内容は10文字以上入力してください",
  },
];
