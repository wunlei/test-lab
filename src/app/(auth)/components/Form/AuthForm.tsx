import { AuthFromProps } from "@/app/(auth)/components/Form/types";
import Alert from "@/components/Alert";
import Button from "@/components/Button";
import Loader from "@/components/Loader";
import Typography from "@/components/Typography";
import s from "./AuthForm.module.scss";

function AuthForm({
  formTitle,
  submitBtnText = "Submit",
  submitDisabled,
  footer,
  isLoading,
  errorMsg,
  onSubmit,
  children,
}: AuthFromProps) {
  return (
    <div className={s.container}>
      <form className={s.form} onSubmit={onSubmit}>
        {formTitle && (
          <Typography align="center" size="xl" weight="medium">
            {formTitle}
          </Typography>
        )}
        {isLoading && <Loader size="m" className={s.loader} />}
        {errorMsg && <Alert type="error">{errorMsg}</Alert>}

        {children}

        <Button disabled={submitDisabled} size="l" type="submit">
          {submitBtnText}
        </Button>

        {footer}
      </form>
    </div>
  );
}

export default AuthForm;
