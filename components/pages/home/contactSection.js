import styles from "../../../styles/pages/home/contactSection.module.css";
import StandardHeader from "../../elements/standardHeader";
import FormInputText from "../../elements/formInputText";
import FormInputSelect from "../../elements/formInputSelect";
import FormInputCheckbox from "../../elements/formInputCheckbox";
import __ from "/utils/lang/translate";
import { useContext, useState } from "react";
import AppContext from "/context/AppContext";
import Button from "/components/elements/button";

export default function ContactSection() {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [offerAgreement, setOfferAgreement] = useState();
  const [rulesAgreement, setRulesAgreement] = useState();
  const appContext = useContext(AppContext);

  const submitContact = (event) => {
    event.preventDefault();

    setOfferAgreement("on");
    setRulesAgreement("on");

    fetch("http://qfgcdwu.cluster027.hosting.ovh.net/api/contact.php", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        phone: phone,
        offer_agreement: offerAgreement,
        rules_agreement: rulesAgreement,
        token: appContext.token,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          switch (result.status) {
            case "Ok":
              alert(
                "Dziękujemy za Twoje zgłoszenie! Nasz zespół skontaktuje się z Tobą telefonicznie w ciągu 24h."
              );
              break;
            case "Too quick":
              alert(
                "Błąd - zbyt wiele wypełnień formularza w zbyt krótkim czasie."
              );
              break;
            case "Too many actions":
              alert("Błąd - zbyt wiele wypełnień formularza.");
              break;
            case "Old session":
              alert("Błąd - odśwież stronę i spróbuj ponownie.");
              break;
          }
        },
        (error) => {
          console.log(error);
          alert(__("pages.universal.form.oldSession"));
        }
      );
  };

  return (
    <div className={styles.container} id="contact">
      <div className={styles.content}>
        <div className={styles.contactFormContainer}>
          <StandardHeader
            subTitle={"pages.home.contactSection.subTitle"}
            title={"pages.home.contactSection.title"}
          />
          <form
            className={styles.contactFormFormContainer}
            onSubmit={submitContact}
          >
            <FormInputText
              elementName={"name"}
              labelId={"pages.universal.form.label.name"}
              placeholderId={"pages.universal.form.placeholder.name"}
              isRequired={true}
              type={"text"}
              eventHandler={setName}
            />
            <FormInputText
              elementName={"phone"}
              labelId={"pages.universal.form.label.phone"}
              placeholderId={"pages.universal.form.placeholder.phone"}
              isRequired={true}
              type={"phone"}
              eventHandler={setPhone}
            />
            <FormInputSelect
              elementName={"topic"}
              labelId={"pages.universal.form.label.topic"}
              placeholderId={"pages.universal.form.placeholder.topic"}
              optionsIds={[
                "pages.universal.form.options.topic.1",
                "pages.universal.form.options.topic.2",
                "pages.universal.form.options.topic.3",
                "pages.universal.form.options.topic.4",
                "pages.universal.form.options.topic.5",
              ]}
              isRequired={true}
            />
            {/*<FormInputSelect*/}
            {/*  elementName={"variant"}*/}
            {/*  labelId={"pages.universal.form.label.variant"}*/}
            {/*  placeholderId={"pages.universal.form.placeholder.variant"}*/}
            {/*  optionsIds={[*/}
            {/*    "pages.universal.form.options.variant.1",*/}
            {/*    "pages.universal.form.options.variant.2",*/}
            {/*    "pages.universal.form.options.variant.3",*/}
            {/*  ]}*/}
            {/*  isRequired={true}*/}
            {/*/>*/}
            <FormInputCheckbox
              elementName={"agreement"}
              labelId={"pages.universal.form.label.agreement"}
              isRequired={true}
            />
            <div className={styles.contactFormSubmit}>
              <Button
                textId={"pages.universal.form.inputSubmit"}
                url={"#"}
                styleType={"purpleAccent"}
                type={"small"}
                isSubmit
              />
            </div>
            {/*<button type={"submit"} className={styles.contactFormSubmit}>*/}
            {/*  {__("pages.home.contactSection.button")}*/}
            {/*</button>*/}
          </form>
        </div>
        <div className={styles.contactContactContainer}></div>
      </div>
    </div>
  );
}
