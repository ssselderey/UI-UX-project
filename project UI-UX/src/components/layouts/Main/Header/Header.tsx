// Header.tsx
import Link from "next/link";
import React from "react";
import { IoSunny } from "react-icons/io5";
import { BiMoon } from "react-icons/bi/";
import Button from "@/components/common/Button/Button";
import * as Style from "./index.styled";

type HeaderProps = {
  switchTheme: () => void;
  theme: string;
};

const Header: React.FC<HeaderProps> = (props) => {

  return (
    <Style.Header id="header">
      <Style.Content>
        <Style.Logo>
        <Link href="/" passHref>
          <Style.Img src="https://svgur.com/i/11F0.svg"></Style.Img> </Link>
          <Style.Name>Best HD movies</Style.Name>
        </Style.Logo>
          <Style.SearchArea>
          </Style.SearchArea>
          <Style.ButtonSwitchTheme>
          <Button
            name={props.theme === "dark" ? <BiMoon /> : <IoSunny />}
            action={props.switchTheme}
          />
        </Style.ButtonSwitchTheme>
        
      </Style.Content>
    </Style.Header>
  );
};

export default Header;