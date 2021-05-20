import React from "react";
import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";
import styled from "styled-components";

const Face = styled(Facebook)`
  fill: ${props => props.theme.primaryHoverColor};

  &:hover {
    fill: #fff;
  }
`

const Insta = styled(Instagram)`
  fill: ${props => props.theme.primaryHoverColor};
  &:hover {
    fill: #fff;
  }
`
const SocialWrapper = styled.div`
  margin: 1em auto;
`
const IconLink = styled.a`
  display: inline-block;
`

export function SocialList({ }) {
  return (
    <SocialWrapper>
      <IconLink
        title="Facebook"
        href={`https://facebook.com/institutooca`}
        target="_blank"
        rel="noopener"
      >
        <Face width={36} height={36} />
      </IconLink>
      <IconLink
        title="Instagram"
        href={`https://instagram.com/institutooca`}
        target="_blank"
        rel="noopener"
      >
        <Insta width={36} height={36} />
      </IconLink>
    </SocialWrapper>
  );
}
