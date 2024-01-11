import SikharjiItems, {
  SikharjiImageParallax,
  SikharjiIntro,
} from "../sikharji/SikharjiItems";
import SikharjiPage from "../sikharji/SikharjiPage";
import "./Style/Sikharji.css";

export default function Sikharji() {
  return (
    <>
      <SikharjiIntro />
      <SikharjiPage />
      <SikharjiImageParallax />
      <SikharjiItems />
    </>
  );
}
