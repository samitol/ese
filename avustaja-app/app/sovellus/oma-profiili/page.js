"use client";

import { UserCircleIcon } from "@heroicons/react/24/outline";
import Profiili from "./profiili";
import Asetukset from "./asetukset";
import { useState } from "react";
import React from "react";

export default function Page() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  return (
    <div
      id="main-content"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div className="header-and-tabs">
        <div
          className="header-container"
          style={{ display: "flex", alignItems: "center", marginTop: "100px" }}
        >
          <UserCircleIcon className="h-20 w-20" color="#007bff" />
          <h1 className="py-15 font-bold text-2xl">Oma profiili</h1>
        </div>
        <Tabs onTabChange={setSelectedTabIndex} />
      </div>
      <div style={{ flexGrow: 1 }}>
        {selectedTabIndex === 0 && (
          <Profiili style={{ width: "100%", justifySelf: "center" }} />
        )}
        {selectedTabIndex === 1 && (
          <Asetukset
            selectedTabIndex={selectedTabIndex}
            style={{ width: "100%", justifySelf: "center" }}
          />
        )}
      </div>
    </div>
  );
}

function Tabs({ onTabChange }) {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const handleTabClick = (index) => {
    setSelectedTabIndex(index);
    onTabChange && onTabChange(index);
  };

  return (
    <div className="mb-8">
      <ul
        className="flex flex-wrap -mb-px text-sm font-medium text-center"
        role="tablist"
      >
        <li className="me-2" role="presentation">
          <button
            className={`inline-block p-4 border-b-2 rounded-t-lg ${
              selectedTabIndex === 0
                ? "text-blue-600 border-blue-600 dark:text-gray-900 dark:border-blue-500"
                : ""
            }`}
            data-tabs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected={selectedTabIndex === 0}
            onClick={() => handleTabClick(0)}
          >
            Profiili
          </button>
        </li>
        <li className="me-2" role="presentation">
          <button
            className={`inline-block p-4 border-b-2 rounded-t-lg ${
              selectedTabIndex === 1
                ? "text-blue-600 border-blue-600 dark:text-gray-900 dark:border-blue-500"
                : ""
            }`}
            data-tabs-target="#settings"
            type="button"
            role="tab"
            aria-controls="settings"
            aria-selected={selectedTabIndex === 1}
            onClick={() => handleTabClick(1)}
          >
            Asetukset
          </button>
        </li>
      </ul>
    </div>
  );
}
