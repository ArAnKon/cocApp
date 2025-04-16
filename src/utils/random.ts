import { useState } from "react";

export default function getRandom(min: number, max: number) {
  return Math.round(Math.random() * (max - min + 1) + min);
}
