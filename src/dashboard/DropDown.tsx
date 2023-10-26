"use client";

import { Dropdown } from "flowbite-react";

export default function InlineDropdown() {
  return (
    <Dropdown label="Dropdown" inline>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
  );
}


