export const HeroTitle = ({ children }) => {
  return <h1 className="my-6 text-5xl">{children}</h1>;
};

export const HeroSubtitle = ({ children }) => {
  return <p className="mb-12 text-lg">{children}</p>;
};

export const Hero = ({ children }) => {
  return <div className="text-center">{children}</div>;
};
