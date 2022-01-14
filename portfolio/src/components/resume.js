import ResumePdf from '../assets/Resume.pdf';
import { Document } from 'react-pdf';
import './resume.css';

const Resume = () => {


  return (
    <div>
    <h1 className="resumeHeader">Resume</h1>

      <object data={ResumePdf} className="resumePdf" height="400" width="70%"></object>
    </div>
  )
}

export default Resume;