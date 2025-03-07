import { Introduction } from "./Top/components/Introduction";
import { Menu } from "./Top/components/Menu";
import { SlideContent } from "./Top/components/SlideContent";
import { SnsLink } from "./Top/components/SnsLink";
import { StoreInformation } from "./Top/components/StoreInformation";
import { Topics } from "./Top/components/Topics";

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
