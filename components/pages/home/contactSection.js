import styles from "../../../styles/pages/home/contactSection.module.css";
import StandardHeader from "../../elements/standardHeader";
import FormInputText from "../../elements/formInputText";
import FormInputSelect from "../../elements/formInputSelect";
import FormInputCheckbox from "../../elements/formInputCheckbox";
import __ from "/utils/lang/translate";
import { useContext, useState } from "react";
import AppContext from "/context/AppContext";
import Button from "/components/elements/button";
import ContactButton from "../../elements/contactButton";
import Image from "next/image";
import Logo_image from "/public/pages/universal/icons/Logo.svg";
import Phone_icon from "../../../public/pages/universal/icons/Phone.svg";
import Mail_icon from "../../../public/pages/universal/icons/Mail.svg";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("");
  const [rulesAgreement, setRulesAgreement] = useState(false);
  const appContext = useContext(AppContext);

  const submitContact = (event) => {
    event.preventDefault();

    fetch("//materiastudio.design/api/contact.php", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        phone: phone,
        type: type,
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
              eventHandler={setType}
            />
            <FormInputCheckbox
              elementName={"agreement"}
              labelId={"pages.universal.form.label.agreement"}
              isRequired={true}
              eventHandler={setRulesAgreement}
            />
            <div className={styles.contactFormSubmit}>
              <Button
                textId={"Połączmy kropki!"}
                url={"#"}
                type={"purpleAccent"}
                size={"small"}
                isSubmit
              />
            </div>
            {/*<button type={"submit"} className={styles.contactFormSubmit}>*/}
            {/*  {__("pages.home.contactSection.button")}*/}
            {/*</button>*/}
          </form>
        </div>
        <div className={styles.contactContactContainer}>
          <div className={styles.contactContactSection1}>
            <Image src={Logo_image} alt={""} />
            <span className={styles.contactContactDescription}>
              {__(
                "Zadzwoń lub napisz, chętnie odpowiem na wszystkie Twoje pytania."
              )}
            </span>
            <div className={styles.contactContactInnerContainer}>
              <a
                href="tel:+48 536 333 658"
                className={styles.contactContactLinkContainer}
              >
                <Image
                  src={Phone_icon}
                  alt={"Tel:"}
                  className={styles.contactContactIcon}
                />
                +48 536 333 658
              </a>
              <a
                href="mailto:kontakt@materiastudio.design"
                className={styles.contactContactLinkContainer}
              >
                <Image
                  src={Mail_icon}
                  alt={"Tel:"}
                  className={styles.contactContactIcon}
                />
                kontakt@materiastudio.design
              </a>
            </div>
          </div>
          <div className={styles.contactContactSection2}>
            <StandardHeader
              subTitle={"Masz pytania?"}
              title={"Porozmawiajmy!"}
            />
            <div className={styles.contactContactButtonsContainer}>
              <ContactButton
                url={"#"}
                textId={"pages.home.quickContactSection.button1"}
              />
              <ContactButton
                url={"#"}
                textId={"pages.home.quickContactSection.button2"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
