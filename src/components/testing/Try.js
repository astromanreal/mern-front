import UserPage from "../user/UserPage";
import ProductPage from "./ProductPage";
import TempleData from "./TempleData";
import Faq from "./Faq";
import Benifit from "./Benifit";
import PaperBlog from "./PaperBlog";
import Pooja from "./Pooja";

export default function Try() {
  return (
    <>
      <Pooja />
      <Benifit />
      <PaperBlog />

      <Faq />

      <UserPage />

      <ProductPage />

      <TempleData />
    </>
  );
}
