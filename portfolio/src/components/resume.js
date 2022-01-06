import ResumePdf from '../assets/Resume.pdf';
import { Document } from 'react-pdf';


const Resume = () => {


  return (
    <div>
    <h1>Resume</h1>

      <object data={ResumePdf} className="resumePdf" height="400" width="70%"></object>
    </div>
  )
}

export default Resume;