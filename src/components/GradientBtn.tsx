import { Button } from "./ui/button";

export const GradientBtn = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="gradient-border">
      <Button asChild size="square" variant={"gradient"}>
        {children}
      </Button>
    </div>
  );
};
