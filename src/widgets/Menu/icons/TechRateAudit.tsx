import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface TechRateAuditProps extends SvgProps {
  isDark: boolean;
}

const TechRateAudit: React.FC<TechRateAuditProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 369 120" {...props}>
      <image width="369" height="120" href={isDark ? '/images/egg/TechRateAuditDark.png' : '/images/egg/TechRateAuditWhite.png'}/>
    </Svg>
  )
};

export default TechRateAudit;
