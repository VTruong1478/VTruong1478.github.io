import InlineSvgIcon from "./InlineSvgIcon";
import emailSvg from "../../assets/button icons/Email Icon.svg?raw";
import linkedInButtonSvg from "../../assets/button icons/LinkedIn Button Icon.svg?raw";

export function EmailIcon({ className = "w-[18px] h-[18px]", ...rest }) {
  return <InlineSvgIcon rawSvg={emailSvg} className={className} {...rest} />;
}

export function LinkedInButtonIcon({
  className = "w-[18px] h-[18px]",
  ...rest
}) {
  return (
    <InlineSvgIcon rawSvg={linkedInButtonSvg} className={className} {...rest} />
  );
}
