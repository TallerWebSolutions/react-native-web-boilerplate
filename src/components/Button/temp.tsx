import React from "react"
import * as t from "prop-types"
import styled, { css } from "styled-components"
import { switchProp, ifProp, prop, theme } from "styled-tools"

import { query } from "../media"

const variants = {
  primary: css`
    color: ${theme("colors.white")};
    background: ${theme("colors.pacificBlue")};
  `,
  secondary: css`
    color: ${theme("colors.white")};
    background: ${theme("colors.gray")};
  `
}

const radiuses = {
  rounded: css`
    border-radius: 3px;
  `,
  squared: css`
    border-radius: 0px;
  `
}

const sizes = {
  small: css`
    font-size: ${theme("typography.micro")};
    padding: 7px 10px;
  `,
  normal: css`
    font-size: ${theme("typography.h5")};
    padding: 10px 15px;
  `
}

const Button = styled.button`
  border: none;
  cursor: pointer;
  font-weight: ${theme("typography.bold")};
  font-family: ${theme("typography.fontNormal")};

  ${switchProp(prop("variant", "primary"), variants)}
  ${switchProp(prop("radius", "rounded"), radiuses)}
  ${switchProp(prop("size", "normal"), sizes)}

  ${ifProp(
    "block",
    css`
      display: block;
      width: 100%;
    `
  )}

  ${ifProp(
    "smallOnMobile",
    css`
      ${query.max.md`
        font-size: ${theme("typography.micro")};
        padding: 7px 10px;
      `}
    `
  )}

  &:hover {
    opacity: 0.8;
  }
`
const ButtonComponent = props => <Button {...props} />

ButtonComponent.propTypes = {
  variant: t.oneOf(Object.keys(variants)),
  radius: t.oneOf(Object.keys(radiuses)),
  size: t.oneOf(Object.keys(sizes)),
  smallOnMobile: t.bool
}

export default ButtonComponent
