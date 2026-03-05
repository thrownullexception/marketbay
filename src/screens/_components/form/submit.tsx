import { Button } from "@/ui/button";
import { useFormContext } from "./context";
import { LucideIcon } from "lucide-solid";

export function SubmitButton({
  label,
  Icon,
}: {
  label: string;
  Icon: LucideIcon;
}) {
  const form = useFormContext();
  return (
    <form.Subscribe
      selector={(state) => ({
        canSubmit: state.canSubmit,
        isSubmitting: state.isSubmitting,
      })}
    >
      {(state) => (
        <Button
          label={state().isSubmitting ? "..." : label}
          type="submit"
          Icon={Icon}
          variant="primary"
          fullWidth
          disabled={!state().canSubmit}
        />
      )}
    </form.Subscribe>
  );
}
