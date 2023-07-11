const Rank = ({ name, entries }) => {
  return(
    <>
      <div className="text-center my-4">
        <p>{`${name}, your current entry count is`}</p>
        <p className="text-2xl font-semibold">{entries}</p>
      </div>
    </>
  )
}

export default Rank