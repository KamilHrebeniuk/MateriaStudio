import { useTranslation } from "next-export-i18n";

export default function __(id) {
  const { t } = useTranslation();

  // console.log("=====================")
  // console.log(id)
  // console.log(t(id))
  // console.log("=====================")

  return t(id);
}
