import { useIntl } from "react-intl";

export default function __(id) {
  const intl = useIntl();

  return intl.formatMessage({
    id: id,
  });
}
