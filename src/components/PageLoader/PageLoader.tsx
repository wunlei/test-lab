import Loader from "@/components/Loader";
import s from "./PageLoader.module.scss";

function PageLoader() {
  return (
    <div className={s.container}>
      <Loader />
    </div>
  );
}

export default PageLoader;
