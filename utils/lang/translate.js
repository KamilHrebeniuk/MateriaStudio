import { useTranslation } from "next-export-i18n";

export default function __(id) {
  const { t } = useTranslation();

  return t(id);
}
