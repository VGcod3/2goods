export const BlurredEffects = ({ className }: { className?: string }) => (
  <div className={className}>
    <div className="absolute top-36 right-10 -z-40 w-72 h-20 bg-land-yellow"></div>
    <div className="absolute top-2/4 right-10 -z-40 w-96 h-20 bg-land-yellow"></div>
    <div className="absolute top-72 left-10 -z-40 w-72 h-14 bg-land-yellow"></div>
    <div className="absolute top-56 right-36 -z-40 w-72 h-32 bg-land-primary"></div>
    <div className="absolute top-2/5 left-24 -z-40 w-72 h-12 bg-land-primary"></div>
  </div>
);
