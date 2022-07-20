import React from 'react'
import styled from 'styled-components'
import { darken, lighten } from 'polished'

import { RowBetween } from '../Row'
import { ChevronDown } from 'react-feather'
import { Button as RebassButton, ButtonProps } from 'rebass/styled-components'

const Base = styled(RebassButton)<{
  padding?: string
  width?: string
  borderRadius?: string
  altDisabledStyle?: boolean
}>`
  padding: ${({ padding }) => (padding ? padding : '18px')};
  width: ${({ width }) => (width ? width : '100%')};
  font-weight: 500;
  text-align: center;
  border-radius: 8px;
  border-radius: ${({ borderRadius }) => borderRadius && borderRadius};
  outline: none;
  border: 1px solid transparent;
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 1;
  &:disabled {
    cursor: auto;
  }

  > * {
    user-select: none;
  }
`

export const ButtonPrimary = styled(Base)`
  background-color: #E44B05;
  color: white;
  &:focus {
    box-shadow: 0 0 0 1pt #E44B05;
    background-color: #E44B05;
  }
  &:hover {
    background-color: #E44B05;
  }
  &:active {
    box-shadow: 0 0 0 1pt #E44B05;
    background-color: #E44B05;
  }
  &:disabled {
    background-color: ${({ altDisabledStyle }) => (altDisabledStyle ? '#E44B05' : 'rgba(97, 97, 97, 1)')};
    color: ${({ altDisabledStyle }) => (altDisabledStyle ? 'white' : '#888D9B')};
    cursor: auto;
    box-shadow: none;
    border: 1px solid transparent;
    outline: none;
    opacity: ${({ altDisabledStyle }) => (altDisabledStyle ? '0.7' : '1')};
    
    @media (max-width: 500px) {
      color: rgba(255, 255, 255, 0.3);
      background-color: rgba(97, 97, 97, 0.7);
    }
  }
`

export const ButtonLight = styled(Base)`
  background-color: rgba(228, 75, 5, 1);
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 500;
  &:focus {
    box-shadow: 0 0 0 1pt ${({ disabled }) => !disabled && '#E3E6EC'};
    background-color: ${({ disabled }) => !disabled && '#E3E6EC'};
  }
  &:hover {
    background-color: ${({ disabled }) => !disabled && '#E3E6EC'};
  }
  &:active {
    box-shadow: 0 0 0 1pt ${({ disabled }) => !disabled && '#E3E6EC'};
    background-color: ${({ disabled }) => !disabled && '#E3E6EC'};
  }
  :disabled {
    opacity: 0.4;
    :hover {
      cursor: auto;
      background-color: rgba(228, 75, 5, 1);
      box-shadow: none;
      border: 1px solid transparent;
      outline: none;
    }
  }
`

export const ButtonGray = styled(Base)`
  background-color: rgba(97, 97, 97, 1);
  color: #bbbbbb;
  font-size: 16px;
  font-weight: 500;
  &:focus {
    box-shadow: 0 0 0 1pt ${({ disabled }) => !disabled && 'rgba(37,37,37,1)'};
    background-color: ${({ disabled }) => !disabled && 'rgba(37,37,37,1)'};
  }
  &:hover {
    background-color: ${({ disabled }) => !disabled && 'rgba(37,37,37,1)'};
  }
  &:active {
    box-shadow: 0 0 0 1pt ${({ disabled }) => !disabled && 'rgba(37,37,37,1)'};
    background-color: ${({ disabled }) => !disabled && 'rgba(37,37,37,1)'};
  }
`

export const ButtonSecondary = styled(Base)`
  border: 1px solid #F6DDE8;
  color: #E44B05;
  background-color: transparent;
  font-size: 16px;
  border-radius: 8px;
  padding: ${({ padding }) => (padding ? padding : '10px')};

  &:focus {
    box-shadow: 0 0 0 1pt #F6DDE8;
    border: 1px solid rgba(228, 75, 5, 1);
  }
  &:hover {
    border: 1px solid rgba(228, 75, 5, 1);
  }
  &:active {
    box-shadow: 0 0 0 1pt #F6DDE8;
    border: 1px solid rgba(228, 75, 5, 1);
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
  a:hover {
    text-decoration: none;
  }
`

export const ButtonPink = styled(Base)`
  background-color: #E44B05;
  color: white;

  &:focus {
    box-shadow: 0 0 0 1pt #E44B05;
    background-color: #E44B05;
  }
  &:hover {
    background-color: #E44B05;
  }
  &:active {
    box-shadow: 0 0 0 1pt #E44B05;
    background-color: #E44B05;
  }
  &:disabled {
    background-color: #E44B05;
    opacity: 50%;
    cursor: auto;
  }
`

export const ButtonUNIGradient = styled(ButtonPrimary)`
  color: white;
  padding: 4px 8px;
  height: 36px;
  font-weight: 500;
  background-color: rgba(97, 97, 97, 1);
  background: radial-gradient(174.47% 188.91% at 1.84% 0%, #ff007a 0%, #2172e5 100%), #edeef2;
  width: fit-content;
  position: relative;
  cursor: pointer;
  border: none;
  white-space: no-wrap;
  :hover {
    opacity: 0.8;
  }
  :active {
    opacity: 0.9;
  }
`

export const ButtonOutlined = styled(Base)`
  border: 1px solid rgba(37,37,37,1);
  background-color: transparent;
  color: #FFFFFF;

  &:focus {
    box-shadow: 0 0 0 1px #CED0D9;
  }
  &:hover {
    box-shadow: 0 0 0 1px #CED0D9;
  }
  &:active {
    box-shadow: 0 0 0 1px #CED0D9;
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
`

export const ButtonEmpty = styled(Base)`
  background-color: transparent;
  color: #E44B05;
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    text-decoration: underline;
  }
  &:hover {
    text-decoration: underline;
  }
  &:active {
    text-decoration: underline;
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
`

export const ButtonWhite = styled(Base)`
  border: 1px solid #edeef2;
  background-color: rgba(47, 47, 47, 1);
  color: black;

  &:focus {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    box-shadow: 0 0 0 1pt #edeef2;
  }
  &:hover {
    box-shadow: 0 0 0 1pt #edeef2;
  }
  &:active {
    box-shadow: 0 0 0 1pt #edeef2;
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
`

const ButtonConfirmedStyle = styled(Base)`
  background-color: #fadbcd;
  color: #E44B05;
  border: 1px solid #E44B05;

  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
`

const ButtonErrorStyle = styled(Base)`
  background-color: #FF6871;
  border: 1px solid #FF6871;

  &:focus {
    box-shadow: 0 0 0 1pt #FF6871;
    background-color: #FF6871;
  }
  &:hover {
    background-color: #FF6871;
  }
  &:active {
    box-shadow: 0 0 0 1pt #FF6871;
    background-color: #FF6871;
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
    box-shadow: none;
    background-color: #FF6871;
    border: 1px solid #FF6871;
  }
`

export function ButtonConfirmed({
  confirmed,
  altDisabledStyle,
  ...rest
}: { confirmed?: boolean; altDisabledStyle?: boolean } & ButtonProps) {
  if (confirmed) {
    return <ButtonConfirmedStyle {...rest} />
  } else {
    return <ButtonPrimary {...rest} altDisabledStyle={altDisabledStyle} />
  }
}

export function ButtonError({ error, ...rest }: { error?: boolean } & ButtonProps) {
  if (error) {
    return <ButtonErrorStyle {...rest} />
  } else {
    return <ButtonPrimary {...rest} />
  }
}

export function ButtonDropdown({ disabled = false, children, ...rest }: 
  { disabled?: boolean, children?: React.ReactNode } & ButtonProps) {
  return (
    <ButtonPrimary {...rest} disabled={disabled}>
      <RowBetween>
        <div style={{ display: 'flex', alignItems: 'center' }}>{children}</div>
        <ChevronDown size={24} />
      </RowBetween>
    </ButtonPrimary>
  )
}

export function ButtonDropdownLight({ disabled = false, children, ...rest }: 
  { disabled?: boolean, children?: React.ReactNode } & ButtonProps) {
  return (
    <ButtonOutlined {...rest} disabled={disabled}>
      <RowBetween>
        <div style={{ display: 'flex', alignItems: 'center' }}>{children}</div>
        <ChevronDown size={24} />
      </RowBetween>
    </ButtonOutlined>
  )
}

export function ButtonRadio({ active, ...rest }: { active?: boolean } & ButtonProps) {
  if (!active) {
    return <ButtonWhite {...rest} />
  } else {
    return <ButtonPrimary {...rest} />
  }
}
