import LinkText from '../LinkText'

interface IJobItem {
  company: string
  department: string
  startTime?: string
  endTime?: string
  href: string
  projects: {
    name: string
    href: string
  }[]
}


const JobItem = (props: IJobItem) => {
  const { company, department, startTime, endTime, href, projects, } = props
  return (
    <div className='w-full'>
      <div className="flex items-center gap-10">
        <div className="w-[300px]">
          <LinkText level={3} content={company} id={company} href={href} />
        </div>
        <div className="hidden md:block w-[300px] mt-1 text-2xl">
          {department}
        </div>
        <div className='hidden md:block text-2xl'>
          {startTime || '未知'} — {endTime || '至今'}
        </div>
      </div>
      <div>
        {projects.map((p) => {
          return (
            <div className='mt-4 pl-10'>
              <LinkText key={p.name} level={4} content={p.name} id={p.name} href={p.href} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default JobItem
