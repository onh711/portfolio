import { Introduction } from "../components/Introduction";
import { Menu } from "../components/Menu";
import { SlideContent } from "../components/SlideContent";
import { SnsLink } from "../components/SnsLink";
import { StoreInformation } from "../components/StoreInformation";
import { Topics } from "../components/Topics";

export const Top = () => {
  return (
    <>
      <SlideContent />
      <Introduction />
      <Topics />
      <Menu />
      <StoreInformation />
      <SnsLink />
    </>
  );
};
