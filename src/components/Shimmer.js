const Shimmer = () => {
  return (
    <div data-testid="shimmer" className='flex flex-wrap m-4'>
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={'shimmer' + index} className='w-52 h-48 ml-2 mr-2 bg-gray-200 shadow-xl'></div>
        ))}
    </div>
  )
}

export default Shimmer;