"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
// internal
import LogoText from "@/components/common/logo-text";
import icon_1 from "@/assets/images/icon/icon_14.svg";
import icon_2 from "@/assets/images/icon/icon_15.svg";
import menu_data from "@/data/menu-data";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/redux/hook";

const Navbar = ({ logo_white = false }: { logo_white?: boolean }) => {
  const pathname = usePathname();
  const cart_products = useAppSelector((state) => state.cart.cart_products);
  const cartCount = cart_products.reduce(
    (sum, item) => sum + (item.orderQuantity ?? 1),
    0,
  );

  return (
    <ul className="navbar-nav align-items-lg-center">
      <li className="d-block d-lg-none">
        <div className="logo">
          <LogoText white={logo_white} />
        </div>
      </li>
      {menu_data.map((menu) => (
        <li
          key={menu.id}
          className={`nav-item ${menu.dropdown ? "dropdown" : ""} ${
            menu.mega_menu ? "dropdown mega-dropdown-sm" : ""
          }`}
        >
          {menu.dropdown && (
            <>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                {menu.title}
              </a>
              <ul className="dropdown-menu">
                {menu.dropdown_menus?.map((dm, i) => (
                  <li key={i}>
                    <Link
                      href={dm.link}
                      className={`dropdown-item ${pathname === dm.link ? "active" : ""}`}
                    >
                      <span>{dm.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
          {menu.mega_menu && (
            <>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                {menu.title}
              </a>
              <ul className="dropdown-menu">
                <li className="row gx-1">
                  {menu.mega_menus?.map((mm, i) => (
                    <div key={mm.id} className="col-lg-4">
                      <div className="menu-column">
                        <ul className="style-none mega-dropdown-list">
                          {mm.menus.map((sm, i) => (
                            <li key={i}>
                              <Link
                                href={sm.link}
                                className={`dropdown-item ${pathname === sm.link ? "active" : ""}`}
                              >
                                <span>{sm.title}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </li>
              </ul>
            </>
          )}
          {!menu.dropdown &&
            !menu.mega_menu &&
            (menu.link === "/cart" ? (
              <Link
                className="nav-link d-flex align-items-center"
                href={menu.link}
                role="button"
                aria-label={`Cart${cartCount > 0 ? `, ${cartCount} items` : ""}`}
              >
                <span className="position-relative d-inline-block">
                  <i className="bi bi-cart3 fs-5" aria-hidden />
                  {cartCount > 0 && (
                    <span
                      className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary"
                      style={{ fontSize: "0.65rem" }}
                    >
                      {cartCount > 99 ? "99+" : cartCount}
                    </span>
                  )}
                </span>
                <span className="d-none d-lg-inline ms-1">{menu.title}</span>
              </Link>
            ) : (
              <Link className="nav-link" href={menu.link} role="button">
                {menu.title}
              </Link>
            ))}
        </li>
      ))}
      <li className="d-md-none ps-2 pe-2">
        <ul className="style-none contact-info m0 pt-30">
          <li className="d-flex align-items-center p0 mt-15">
            <Image src={icon_1} alt="icon" className="lazy-img icon me-2" />
            <Link href="mailto:Accounts@xavirotech.com" className="fw-500">
              Accounts@xavirotech.com
            </Link>
          </li>
          <li className="d-flex align-items-center p0 mt-15">
            <Image src={icon_2} alt="icon" className="lazy-img icon me-2" />
            <Link href="tel:09096361527" className="fw-500">
              09096361527
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default Navbar;
