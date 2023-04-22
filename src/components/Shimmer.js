const Shimmer = () => {
  return (
    <div data-testid="shimmer" style={{ display: "flex", flexWrap: "wrap" }}>
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={'shimmer' + index} style={{ width: '200px', height: '200px', backgroundColor: 'gray' }}></div>
        ))}
    </div>
  )
}

export default Shimmer;