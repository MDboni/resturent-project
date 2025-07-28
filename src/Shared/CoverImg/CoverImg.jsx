
const CoverImg = ({img,Heading,pragraph}) => {
  return (
    <div
        className="hero h-[80vh]"
        style={{
            backgroundImage:
            `url(${img})`,
        }}
        >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center  md:w-[700px] md:h-[230px] bg-black/40" >
            <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">{Heading}</h1>
            <p className="mb-5 uppercase">
               {pragraph}
            </p>
            </div>
        </div>
         
</div>
  )
}

export default CoverImg