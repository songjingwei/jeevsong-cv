import Logo from './components/Logo'
import LinkText from './components/LinkText'
import JobItem from './components/JobItem'
import LikeBtn from '@/components/LikeBtn'

import './cv.css'

const jobs = [
  {
    company: '上海合合信息',
    department: '扫描全能王-蜜蜂教育',
    startTime: '2024/06',
    endTime: undefined,
    href: 'https://www.intsig.com/',
    projects: [
      {
        name: '蜜蜂家校',
        href: 'https://xy.mifengjiaoyu.com/',
      }
    ]
  },
  {
    company: '宁波力显智能',
    department: '软件开发部',
    startTime: '2022/07',
    endTime: '2024/06',
    href: 'https://www.inview-tech.com/',
    projects: [
      {
        name: 'iSTORM 超分辨显微镜',
        href: 'http://nj.gzwhir.com/nblxzn202207062421/Products/info.aspx?itemid=371&lcid=59',
      },
      {
        name: '赛乐微AF-100',
        href: 'https://www.inview-tech.com/Products/info.aspx?itemid=1014&lcid=58',
      }
    ]
  },
  {
    company: '上海微盟',
    department: '数据中台-BI',
    startTime: '2021/07',
    endTime: '2022/05',
    href: 'https://weimob.com/',
    projects: [
      {
        name: 'BI 平台',
        href: 'https://www.weimob.com/wos',
      }
    ],
  }
]


const CV = () => {

  return (
    <div className="w-full h-full px-8 py-4 bg-[#181818] text-[#eee] text-xl cv-container overflow-auto">
      <div className="lg:w-[1000px] m-auto">
        <div className='flex items-center gap-6 mb-10'>
          <div className="relative top-2">
            <Logo size={45} />
          </div>
          <LinkText level={1} content="宋玉坤" id="title" href="https://github.com/songjingwei" />
        </div>
        <p className="mb-10">
          大家好，我叫宋玉坤，目前从事软件开发的工作。<br />
          出生于 1996 年 04 月 04 日，江苏泰州人，身高 66.93 英寸，体重 154.32 磅。<br />
          <p className='mt-2'>
            喜欢的语言：JavaScript、Python、C++ <br />
            喜欢的编辑器：Neovim、VsCode、VS  <br />
            喜欢的框架：React、Nestjs、Qt、Electron <br />
          </p>
          <p className="mt-2">欢迎大家内推我！</p>
        </p>
        <div>
          <LinkText level={2} content="工作经历" id="experience" href="#experience" />
          <ul>
            {
              jobs.map((job, index) => {
                return (
                  <li className='mt-6'>
                    <JobItem
                      key={index}
                      company={job.company}
                      department={job.department}
                      startTime={job.startTime}
                      endTime={job.endTime}
                      href={job.href}
                      projects={job.projects}
                    />
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className='w-full mt-4 md:mt-14 flex justify-center' >
          <LikeBtn />
        </div>
      </div>
    </div>
  )
}

export default CV
