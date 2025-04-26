interface ILogo {
  size: number
}

const Logo = (props: ILogo) => {
  const { size } = props
  return (
    <button className="border-0 bg-[#73c936] 
        rounded-none transition-all duration-200 
        hover:rounded-full active:rounded-none active:rotate-45 active:bg-[#f43841] logo" style={{ width: size, height: size }}>
    </button >
  )
}

export default Logo
