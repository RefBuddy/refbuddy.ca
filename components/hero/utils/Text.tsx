export const FirstText: React.FC<{ opacity: number }> = ({ opacity }) => (
  <div
    className="text-white text-3xl font-bold fade-in select-none"
    style={{ opacity }}
  >
    Better Refs.
  </div>
);

export const SecondText: React.FC<{ opacity: number }> = ({ opacity }) => (
  <div
    className="text-white text-3xl font-bold fade-in pt-1 select-none"
    style={{ opacity }}
  >
    Better Hockey.
  </div>
);
