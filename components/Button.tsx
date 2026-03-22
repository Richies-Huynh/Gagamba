import { JSX } from "react";

export default function Button({ label }: { label: string }): JSX.Element {
  return <button type="submit" className="cursor-pointer">{label}</button>;
}