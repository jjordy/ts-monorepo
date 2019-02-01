import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    min-height: 100vh;
    box-sizing: border-box;
    background: linear-gradient(20deg, rgb(219, 137, 189), rgb(124, 228, 0));
  }
  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
  }
`

export const AppContainer = styled.div`
  box-sizing: border-box;
`

export const Display = styled.div`
  padding: 1rem;
`

export const Form = styled.form`
  display: block;
  box-sizing: border-box;
`

export const Code = styled.code`
  background: #fff;
  border-radius: 0.4rem;
  font-size: 86%;
  margin: 0 0.4rem;
  padding: 0.2rem 0.5rem;
  white-space: nowrap;
`

export const Pre = styled.pre`
  background: #fff;
  border-left: 0.3rem solid rgb(219, 137, 189);
  overflow-y: hidden;
  & code {
    border-radius: 0;
    display: block;
    padding: 1rem 1.5rem;
    white-space: pre;
  }
`

export const Header = styled.h1`
  font-family: "Permanent Marker", cursive;
  color: #fff;
  text-shadow: 2px 2px 2px #222;
`

export const InputContainer = styled.div`
  margin-bottom: 1rem;
  box-sizing: border-box;
  & .form-error {
    color: #f30;
    font-family: Lato, sans-serif;
    font-weight: bolder;
    text-shadow: 1px 1px 1px #fff;
  }

  & label {
    min-width: 7rem;
  }
`

export const Input = styled.input`
  box-sizing: border-box;
  border: 0;
  flex: 1 1 auto;
  width: 100%;
  font-size: 1.2rem;
  margin-top: 0.5rem;
  box-shadow: 1px 1px 1px #222;
  border-radius: 3px;
  font-family: Lato, sans-serif;
  transition: border 200ms ease-in;
  outline: none;
  height: 2rem;

  &:focus {
    border: 3px solid rgba(124, 228, 0, 0.6);
  }
`

export const Button = styled.button`
  padding: 1rem 2rem 1rem 2rem;
  background: rgb(124, 228, 0);
  border: 0;
  color: #fff;
  border-radius: 3px;
  font-weight: bolder;
  font-family: "Permanent Marker", cursive;
  margin-top: 2rem;
`

export const Label = styled.label`
  color: #fff;
  font-weight: bolder;
  font-family: "Lato", sans-serif;
  text-shadow: 2px 2px 2px #222;
`

export const Select = styled.select`
  width: 100%;
  height: 2.4rem;
  box-sizing: border-box;
  font-family: Lato, sans-serif;
  outline: none;
  margin-top: 0.5rem;
  padding: 0.4rem;
  font-size: 1.2rem;
  border: 0;
  border-radius: 3px;
  box-shadow: 1px 1px 1px #222;

  &:focus {
    border: 3px solid rgba(124, 228, 0, 0.6);
  }
`

export const Checkbox = styled.div`
  margin-bottom: 1rem;
  & label {
    display: flex;
    align-items: center;
  }

  & input {
    margin-left: 1rem;
    width: 18px;
    height: 18px;
    border: 0;
  }
`

const px = (n: any) => (typeof n === "number" ? n + "px" : n)

export interface GridProps {
  width: string | number
  gap?: number
  align?: string
  dontBreakOnMobile?: boolean
}

export const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(calc(${(props) => px(props.width)} - ${(props) => px(props.gap)}), 1fr)
  );
  grid-gap: ${(props) => px(props.gap)};
  align-items: ${(props) => props.align || null};
  grid-column: 1 / span 3;
  ${(props) =>
    !props.dontBreakOnMobile &&
    `@media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
    }`};
`
