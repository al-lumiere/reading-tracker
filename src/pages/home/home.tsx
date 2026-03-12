import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { HeaderUI } from "@/components/header";

export const HomeLayout = () => (
  <>
    <HeaderUI
      searchValue=""
      onSearchChange={() => {}}
      onSearchClear={() => {}}
    />
    <main>
      <Suspense fallback="Загружаем...">
        <Outlet />
      </Suspense>
    </main>
  </>
);
