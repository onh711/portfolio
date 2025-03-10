import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { formItems } from "../data/formItems";

export const ContactFormPage = () => {
  const [formData, setFormData] = useState({
    contactName: "",
    mailAddress: "",
    phoneNumber: "",
    contactDetail: "",
  });

  const [errors, setErrors] = useState({
    contactName: "",
    mailAddress: "",
    phoneNumber: "",
    contactDetail: "",
  });

  //input要素にフォーカスを当てたかどうかを管理する
  const [isFirstTouch, setIsFirstTouch] = useState({
    contactName: false,
    mailAddress: false,
    phoneNumber: false,
    contactDetail: false,
  });
  // チェックボックスは初期状態でオフにする
  const [isCheck, setIsCheck] = useState(false);
  // フォーム全体の有効性を状態として管理
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    const item = formItems.find((item) => item.id === name);
    if (item && !item.validation(value)) {
      setErrors((prev) => ({ ...prev, [name]: item.errorMessage }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  //フォーカスを外したときにエラーメッセージを表示する
  const handleBlur = (e) => {
    const { name, value } = e.target;
    const item = formItems.find((item) => item.id === name);
    //blurでフォーカスを外した時にfistTouchをtrueにする
    setIsFirstTouch((prev) => ({ ...prev, [name]: true }));
    if (item && !item.validation(value)) {
      setErrors((prev) => ({ ...prev, [name]: item.errorMessage }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // チェックボックスのハンドラー
  const handleClick = () => {
    setIsCheck((prev) => !prev);
  };

  // 入力値やエラー状態、チェックボックスの状態の変化を監視して、フォーム全体の有効性を更新する
  useEffect(() => {
    const valid = formItems.every((item) => item.validation(formData[item.id])) && isCheck;
    setIsFormValid(valid);
  }, [formData, isCheck]);

  return (
    <ContentWrapper>
      <Title>お問い合わせ</Title>
      <Subtitle>ご連絡の際には、下記の必須項目を全て記入の上「次へ」進んでください。</Subtitle>
      <FormContainer>
        {formItems.map((form, id) => (
          <FormContent key={id}>
            <LabelContainer>
              <Label htmlFor={form.id}>{form.item}</Label>
              {form.required && <Required>※必須</Required>}
            </LabelContainer>
            {form.type === "textarea" ? (
              <ContactTextArea
                value={formData[form.id]}
                name={form.id}
                id={form.id}
                onChange={handleInput}
                onBlur={handleBlur}
                $errors={errors[form.id]}
                $value={formData[form.id]}
                $isFirstInput={isFirstTouch[form.id]}
              />
            ) : (
              <FormInput
                value={formData[form.id]}
                type={form.type}
                name={form.id}
                id={form.id}
                onChange={handleInput}
                onBlur={handleBlur}
                $errors={errors[form.id]}
                $value={formData[form.id]}
                $isFirstInput={isFirstTouch[form.id]}
              />
            )}
            <ErrorComment isFirstInput={isFirstTouch[form.id]}>
              {isFirstTouch[form.id] === true ? errors[form.id] : ""}
            </ErrorComment>
          </FormContent>
        ))}

        <CheckBoxContent>
          <CheckBox type="checkbox" checked={isCheck} onChange={handleClick} />
          <PersonalInformation>個人情報の取り扱いに同意いただけますか</PersonalInformation>
        </CheckBoxContent>
        <CheckBoxRequired>※必須</CheckBoxRequired>
        <SendButtonContainer>
          {isFormValid ? (
            <Link //全ての要素を満たさなければリンクなしのボタンを活性化させる
              to={"/confirm"}
              state={formData} //keyとvalueをConfirmPageに渡す
            >
              <SendButton>次へ</SendButton>
            </Link>
          ) : (
            <SendButton disabled>次へ</SendButton>
          )}
        </SendButtonContainer>
      </FormContainer>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  margin: 70px auto;
  justify-content: center;
  max-width: 1300px;
`;
const FormContainer = styled.div`
  margin: 50px;
  padding: 30px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
const Title = styled.h2`
  margin: 0 auto;
  text-align: center;
  padding-top: 100px;
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: 1.5rem;
`;

const Subtitle = styled.div`
  margin: 0 30px;
  text-align: center;
  padding-top: 50px;
  font-size: 2rem;
`;

const FormContent = styled.div`
  margin: 20px 0;
`;
const LabelContainer = styled.div`
  margin-bottom: 8px;
`;
const Label = styled.label`
  font-size: 1.8rem;
`;
const Required = styled.span`
  color: red;
  font-size: 1.3rem;
  margin-left: 5px;
  margin-top: 5px;
`;
const CheckBoxRequired = styled.span`
  color: red;
  font-size: 1.3rem;
  width: 95%;
  display: block;
  margin: 0 auto;
  text-align: center;
`;
const FormInput = styled.input`
  font-size: 1.8rem;
  height: 40px;
  width: 65%;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
  transition: 0.3s;
  border-color: ${({ $value, $errors, $isFirstInput }) =>
    $isFirstInput ? ($errors ? "red" : $value === "" ? "#ccc" : "#16d135") : "#ccc"};

  &:focus {
    outline: none;
  }
`;
const ContactTextArea = styled.textarea`
  font-size: 1.5rem;
  width: 95%;
  height: 200px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
  border-color: ${({ $value, $errors, $isFirstInput }) =>
    $isFirstInput ? ($errors ? "red" : $value === "" ? "#ccc" : "#16d135") : "#ccc"};

  &:focus {
    outline: none;
  }
`;

const ErrorComment = styled.div`
  color: red;
  font-size: 1.6rem;
  font-weight: 400;
`;

const CheckBoxContent = styled.div`
  display: flex;
  justify-content: center;
`;
const CheckBox = styled.input`
  transform: scale(2);
  margin-top: 5px;
  margin-right: 10px;
`;
const PersonalInformation = styled.div`
  font-size: 1.7rem;
`;
const SendButtonContainer = styled.div`
  text-align: center;
`;
const SendButton = styled.button`
  line-height: 50px;
  font-size: 1.6rem;
  min-width: 40%;
  height: 50px;
  background-color: ${({ disabled }) => (disabled ? "grey" : "black")};
  color: white;
  transition: 0.3s;
  margin-top: 25px;
  margin-bottom: 25px;
  border: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;
