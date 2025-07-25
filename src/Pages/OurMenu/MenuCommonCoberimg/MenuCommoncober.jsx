import Tilt from 'react-parallax-tilt'

const MenuCommoncober = ({ img, Heading, pragraph }) => {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.4}
      scale={1.02}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
    >
      <div
        className="hero min-h-[50vh]"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-overlay bg-black/40"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">{Heading}</h1>
            <p className="mb-5 uppercase">{pragraph}</p>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default MenuCommoncober;
