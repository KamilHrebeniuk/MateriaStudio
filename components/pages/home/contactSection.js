import styles from "../../../styles/pages/home/contactSection.module.css";
import StandardHeader from "../../elements/standardHeader";
import FormInputText from "../../elements/formInputText";
import FormInputSelect from "../../elements/formInputSelect";
import FormInputCheckbox from "../../elements/formInputCheckbox";
import __ from "/utils/lang/translate";

export default function ContactSection() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contactFormContainer}>
          <StandardHeader
            subTitle={"pages.home.contactSection.subTitle"}
            title={"pages.home.contactSection.title"}
          />
          <form
            className={styles.contactFormFormContainer}
            action={"http://qfgcdwu.cluster027.hosting.ovh.net/api/contact.php"}
            method={"post"}
          >
            <FormInputText
              elementName={"name"}
              labelId={"pages.universal.form.label.name"}
              placeholderId={"pages.universal.form.placeholder.name"}
              isRequired={true}
            />
            <FormInputText
              elementName={"email"}
              labelId={"pages.universal.form.label.email"}
              placeholderId={"pages.universal.form.placeholder.email"}
              isRequired={true}
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
            <button type={"submit"} className={styles.contactFormSubmit}>
              {__("pages.home.contactSection.button")}
            </button>
          </form>
        </div>
        <div className={styles.contactContactContainer}></div>
      </div>
    </div>
  );
}
