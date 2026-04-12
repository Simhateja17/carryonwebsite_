"use client";

import { useEffect } from "react";

/** Replaces inline script from riders.html for vehicle type toggles. */
export function RidersVehicleTabs() {
  useEffect(() => {
    const group = document.querySelector(".r-pricing__vehicles");
    if (!group) return;

    const buttons = group.querySelectorAll<HTMLElement>(".r-pricing__vtype");

    const onClick = (e: Event) => {
      const btn = e.currentTarget as HTMLElement;
      buttons.forEach((b) => b.classList.remove("r-pricing__vtype--active"));
      btn.classList.add("r-pricing__vtype--active");
    };

    buttons.forEach((btn) => btn.addEventListener("click", onClick));
    return () => buttons.forEach((btn) => btn.removeEventListener("click", onClick));
  }, []);

  return null;
}
