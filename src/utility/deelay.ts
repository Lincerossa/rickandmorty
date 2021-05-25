const deelay : (timer: number) => void = (timer)  => new Promise(r => {
  setTimeout(() => {
    r(true)
  }, timer)
})

export default deelay