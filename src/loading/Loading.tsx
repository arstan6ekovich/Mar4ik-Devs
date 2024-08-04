import scss from "./Loading.module.scss";
import { FC } from "react";

const PreLoaderDevX: FC = () => {
  return (
    <>
      <div className={scss.preLoader}>
        <p className={scss.title_loader}>
          Dev<span>X</span>
        </p>
        <span className={scss.loader}></span>
      </div>
    </>
  );
};
export default PreLoaderDevX;
