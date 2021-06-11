import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Profile } from "./types";
import TechRateAudit from "./icons/TechRateAudit";

interface AuditProps {
  auditLink: string;
  isDark: boolean;
}

const StyledAudit = styled.div`
  margin-bottom: 5px;

  img {
    border-radius: 50%;
  }
`;

const AuditButton: React.FC<AuditProps> = ({ auditLink, isDark }) => {
  return (
    <StyledAudit>
      <a href={auditLink} aria-label="AuditLink" target="_blank">
        <TechRateAudit isDark={isDark} />
      </a>
    </StyledAudit>
    )
};

export default AuditButton;
