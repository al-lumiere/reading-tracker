import type { FC } from "react";
import { useNavigate } from "react-router-dom";

import { LogoUI } from "@/shared/ui/logo";
import { SearchUI } from "@/shared/ui/seacrh";
import { ButtonUI } from "@/shared/ui/button";

import style from "./header.module.css";
import type { HeaderUIProps } from "./types";

export const HeaderUI: FC<HeaderUIProps> = ({
  searchValue,
  onSearchChange,
  onSearchClear,
}) => {
  const navigate = useNavigate();
  return (
    <header className={style.header}>
      <LogoUI onClick={() => navigate("/")} />
      <div className={style.search}>
        <SearchUI
          placeholder=""
          value={searchValue ?? ""}
          onChange={onSearchChange}
          onClear={onSearchClear}
        />
      </div>
      <div className={style.buttonAdd}>
        <ButtonUI onClick={() => {}} text="+ Add book" />
      </div>
    </header>
  );
};
