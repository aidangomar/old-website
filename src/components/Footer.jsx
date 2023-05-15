import myresume from './../aidan-gomar-resume.pdf';

const top = 
`
|-------------------------------------|
|                                     |
`

const bottom = 
`
|                                     |
|-------------------------------------|
`

// create var called resume that links to google
const resumeLink =  <a href = {myresume} target = "_blank">resume</a>
const githubLink =  <a href="https://github.com/susuwatarii">github</a>
// make var valled emailLink with mail to aidangomar@gmail.com
const emailLink = <a href="mailto:aidangomar@gmail.com">email</a>


const resume = () => {
  return (
    <div>
        {top}
      |              {resumeLink}                 |
        {bottom}
    </div>
  )
}

const github = () => {
  return (
    <div>
        {top}
      |              {githubLink}                 |
        {bottom}
    </div>
  )
}

const email = () => {
  return (
    <div>
        {top}
      |              {emailLink}                  |
        {bottom}
    </div>
  )
}



export default function Footer() {
  return (
    <div>
      {/* make the div style float left and have padding 20px */}
      <div style={{ float: 'left'}}>
        <pre style={{ fontFamily: 'monospace' }}>
          {resume()}
        </pre>
      </div>
      <div style={{ float: 'left' }}>
        <pre style={{ fontFamily: 'monospace' }}>
          {github()}
        </pre>
      </div>
      <div style={{ float: 'left' }}>
        <pre style={{ fontFamily: 'monospace' }}>
          {email()}
        </pre>
      </div>
    </div>
  )
}
