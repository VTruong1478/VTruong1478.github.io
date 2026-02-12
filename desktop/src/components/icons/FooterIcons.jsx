import InlineSvgIcon from "./InlineSvgIcon";
import cardinalSvg from "../../assets/footer/Cardinal.svg?raw";
import linkedInSvg from "../../assets/footer/LinkedIn Icon.svg?raw";
import linkedInDarkSvg from "../../assets/footer/LinkedIn Icon - Dark.svg?raw";
import downloadSvg from "../../assets/footer/Download Icon.svg?raw";
import downloadDarkSvg from "../../assets/footer/Download Icon - Dark.svg?raw";
import githubSvg from "../../assets/footer/Github Icon.svg?raw";
import githubDarkSvg from "../../assets/footer/Github Icon - Dark.svg?raw";
import volumeSvg from "../../assets/footer/Volume Icon.svg?raw";
import volumeDarkSvg from "../../assets/footer/Volume Icon - Dark.svg?raw";
import upCaretSvg from "../../assets/footer/Up Caret Icon.svg?raw";
import upCaretDarkSvg from "../../assets/footer/Up Caret Icon - Dark.svg?raw";
import downCaretSvg from "../../assets/footer/Down Caret Icon.svg?raw";
import downCaretDarkSvg from "../../assets/footer/Down Caret Icon - Dark.svg?raw";
import profileSvg from "../../assets/desktop/about.svg?raw";

export function CardinalIcon({ className = "w-8 h-8", ...rest }) {
  return <InlineSvgIcon rawSvg={cardinalSvg} className={className} {...rest} />;
}

export function LinkedInIcon({ className = "w-8 h-8", ...rest }) {
  return (
    <>
      <InlineSvgIcon rawSvg={linkedInSvg} className={`${className} dark:hidden`} {...rest} />
      <InlineSvgIcon rawSvg={linkedInDarkSvg} className={`${className} hidden dark:block`} {...rest} />
    </>
  );
}

export function DownloadIcon({ className = "w-8 h-8", ...rest }) {
  return (
    <>
      <InlineSvgIcon rawSvg={downloadSvg} className={`${className} dark:hidden`} {...rest} />
      <InlineSvgIcon rawSvg={downloadDarkSvg} className={`${className} hidden dark:block`} {...rest} />
    </>
  );
}

export function GithubIcon({ className = "w-8 h-8", ...rest }) {
  return (
    <>
      <InlineSvgIcon rawSvg={githubSvg} className={`${className} dark:hidden`} {...rest} />
      <InlineSvgIcon rawSvg={githubDarkSvg} className={`${className} hidden dark:block`} {...rest} />
    </>
  );
}

export function VolumeIcon({ className = "w-8 h-8", ...rest }) {
  return (
    <>
      <InlineSvgIcon rawSvg={volumeSvg} className={`${className} dark:hidden`} {...rest} />
      <InlineSvgIcon rawSvg={volumeDarkSvg} className={`${className} hidden dark:block`} {...rest} />
    </>
  );
}

export function UpCaretIcon({ className = "w-8 h-8", ...rest }) {
  return (
    <>
      <InlineSvgIcon rawSvg={upCaretSvg} className={`${className} dark:hidden`} {...rest} />
      <InlineSvgIcon rawSvg={upCaretDarkSvg} className={`${className} hidden dark:block`} {...rest} />
    </>
  );
}

export function DownCaretIcon({ className = "w-8 h-8", ...rest }) {
  return (
    <>
      <InlineSvgIcon rawSvg={downCaretSvg} className={`${className} dark:hidden`} {...rest} />
      <InlineSvgIcon rawSvg={downCaretDarkSvg} className={`${className} hidden dark:block`} {...rest} />
    </>
  );
}

export function ProfileIcon({ className = "w-8 h-8", ...rest }) {
  return <InlineSvgIcon rawSvg={profileSvg} className={className} {...rest} />;
}
