import InlineSvgIcon from "./InlineSvgIcon";
import minimizeSvg from "../../assets/window/Minimize Icon.svg?raw";
import maximizeSvg from "../../assets/window/Maximize Icon.svg?raw";
import closeSvg from "../../assets/window/Close Icon.svg?raw";

export function MinimizeIcon({ className = "w-8 h-8", ...rest }) {
  return <InlineSvgIcon rawSvg={minimizeSvg} className={className} {...rest} />;
}

export function MaximizeIcon({ className = "w-8 h-8", ...rest }) {
  return <InlineSvgIcon rawSvg={maximizeSvg} className={className} {...rest} />;
}

export function CloseIcon({ className = "w-8 h-8", ...rest }) {
  return <InlineSvgIcon rawSvg={closeSvg} className={className} {...rest} />;
}
