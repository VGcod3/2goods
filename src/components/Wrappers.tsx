import { cn } from "@/lib/utils";
import { BlurredEffects } from "./BlurredEffects";

export const ScreenWrapper = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "w-full min-h-screen flex flex-col gap-20 p-4 items-center justify-center relative",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const BlurredWrapper = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <>
      <div
        className={cn(
          "absolute top-0 -z-50 w-full h-5/6 bg-land-violet",
          className
        )}
      ></div>
      <BlurredEffects className={className} />

      <div
        className="absolute top-0 left-0 -z-40 w-full h-full backdrop-blur-3xl"
        style={{
          WebkitBackdropFilter: "blur(64px)",
        }}
      ></div>
      {children}
    </>
  );
};
