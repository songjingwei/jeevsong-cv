import Logo from '../Logo'

interface ILinkText {
  level: 1 | 2 | 3 | 4
  content: string
  id?: string
  href: string
}

const LinkText = (props: ILinkText) => {
  const { level, id, content, href } = props
  const fontSize = Math.max(36 * (5 - level) / 4, 18)
  if (level === 1) {
    return (
      <h1 style={{ fontSize }} id={id}>
        <LinkContent href={href} content={content} />
      </h1>
    )
  } else if (level === 2) {
    return (
      <h2 style={{ fontSize }} id={id}>
        <LinkContent href={href} content={content} />
      </h2>
    )
  } else if (level === 3) {
    return (
      <div className='flex items-center gap-4'>
        <div>
          <Logo size={fontSize} />
        </div>
        <h3 style={{ fontSize }} id={id}>
          <LinkContent href={href} content={content} />
        </h3>
      </div>
    )
  } else if (level === 4) {
    return (
      <div className='flex items-center gap-2'>
        <div>
          <Logo size={fontSize} />
        </div>
        <h4 style={{ fontSize }} id={id}>
          <LinkContent href={href} content={content} />
        </h4>
      </div>
    )
  }
}

export default LinkText

interface ILinkContent {
  href: string
  content: string
}

function LinkContent(props: ILinkContent) {
  const { href, content } = props

  return (
    <a href={href} className="underline decoration-3 [text-decoration-color:#73c936] 
      transition-[text-decoration-color] duration-200 underline-offset-8 
        hover:[text-decoration-color:#eee] active:[text-decoration-color:#eee]">
      {content}
    </a>
  )
}
