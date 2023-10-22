export const Logo: React.FC<{
  scale: number;
  onClick: () => void;
  logoRef: any;
}> = ({ scale, onClick, logoRef }) => (
  <div
    className="mt-8 slide-up logo-container cursor-pointer"
    onClick={onClick}
    ref={logoRef}
  >
    <div className="logo-shine"></div>
    <img src="/logo.png" alt="Logo" style={{ transform: `scale(${scale})` }} />
  </div>
);
