"use client";
import React, { useEffect, useRef, useState } from "react";
import Logo from "@/component/icon/icon-logo";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import IconMenuChallenge from "./icon/icon-menu-challenge";
import IconCommonMenu from "./icon/icon-common-menu";
import IconMenuRecord from "./icon/icon-menu-record";
import IconMenuNotification from "./icon/icon-menu-notification";
import IconCommonClose from "./icon/icon-common-close";
import { ButtonToTop } from "./button";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const t = useTranslations();
  const router = useRouter();
  const [isOpenSubmenu, setIsOpenSubmenu] = useState<boolean>(false);
  const submenuRef = useRef<HTMLDivElement>(null);
  const menuItems = [
    {
      label: t("record"),
      path: "/record",
      icon: <IconMenuRecord />,
    },
    {
      label: t("challenge"),
      path: "/challenge",
      icon: <IconMenuChallenge />,
    },
    {
      label: t("notification"),
      path: "/notification",
      icon: <IconMenuNotification />,
    },
  ];
  const submenuItems = [
    {
      label: t("record"),
      path: "/record",
    },
    {
      label: t("weightGraph"),
      path: "/weight-graph",
    },
    {
      label: t("goal"),
      path: "/goal",
    },
    {
      label: t("selectedCourse"),
      path: "/selected-course",
    },
    {
      label: t("column"),
      path: "/column",
    },
    {
      label: t("settings"),
      path: "/settings",
    },
  ];
  const footerMenuItems = [
    {
      label: t("register"),
      path: "/register",
    },
    {
      label: t("company"),
      path: "/company",
    },
    {
      label: t("termsOfUse"),
      path: "/terms-of-use",
    },
    {
      label: t("privacyPolicy"),
      path: "/privacy-policy",
    },
    {
      label: t("legalNotice"),
      path: "/legal-notice",
    },
    {
      label: t("contact"),
      path: "/contact",
    },
  ];

  const handleMenuClick = (path: string) => {
    router.push(path);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        submenuRef.current &&
        !submenuRef.current.contains(event.target as Node)
      ) {
        setIsOpenSubmenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className="main-layout-header flex justify-center w-full bg-dark-500 text-white py-4">
        <div className="px-40 w-full ">
          <div className="flex items-center justify-between">
            <Logo className="cursor-pointer" onClick={() => router.push("/")} />
            <div className="flex items-center">
              {menuItems.map(({ path, icon, label }, index) => (
                <div
                  key={index}
                  onClick={() => handleMenuClick(path)}
                  className="cursor-pointer flex items-center gap-2 w-[160px] p-2"
                >
                  {icon}
                  {label}
                </div>
              ))}
              <div className="relative" ref={submenuRef}>
                {isOpenSubmenu ? (
                  <IconCommonClose
                    className="cursor-pointer"
                    onClick={() => setIsOpenSubmenu(false)}
                  />
                ) : (
                  <IconCommonMenu
                    className="cursor-pointer"
                    onClick={() => setIsOpenSubmenu(true)}
                  />
                )}
                {isOpenSubmenu && (
                  <div className="absolute top-full right-0 w-[280px] bg-dark-400 z-50">
                    {submenuItems.map(({ path, label }, index) => (
                      <div
                        key={index}
                        onClick={() => handleMenuClick(path)}
                        className="cursor-pointer h-[72px] px-8 flex items-center border-y border-b-[#6A6A6A] border-t-[#8A8A8A]"
                      >
                        {label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {children}
      <div className="flex justify-center w-full bg-dark-500 text-white h-32">
        <div className="px-40 w-full flex gap-[45px]">
          {footerMenuItems.map(({ path, label }, index) => (
            <div
              key={index}
              onClick={() => handleMenuClick(path)}
              className="cursor-pointer flex items-center"
            >
              {label}
            </div>
          ))}
        </div>
      </div>
      <ButtonToTop />
    </>
  );
};

export default MainLayout;
