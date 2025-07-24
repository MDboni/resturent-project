
const SectionTitle = ({subTitle,maintitle}) => {
  return (
    <div className="md:w-1/5 w-2/5 text-center  mx-auto">
        <p className="text-yellow-500 my-3">{subTitle}</p>
        <h2 className="text-2xl font-semibold border-y-2 mb-4  py-2">{maintitle}</h2>
    </div>
  )
}

export default SectionTitle


