import Container from './container'
import Link from 'next/link'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-black">
      <Container>
        <div className="py-10 lg:py-16 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-4">
            <img width={"237px"} height={"76px"} src="/Images/careerkarts black.png" alt="Company Logo"></img>
          </div>
          <div className="flex lg:flex-row  justify-center items-center" style={{width:'500px'}} >
            <div className="text-2xl text-white mx-8">Follow&nbsp;Us&nbsp;:</div>
            <div className="flex gap-6">
              <Link href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                <img src="Images/facebook.png" alt="Facebook" style={{ backgroundColor: 'white' }}></img>
              </Link>
              <Link href="https://www.twitter.com/yourpage" target="_blank" rel="noopener noreferrer">
                <img src="Images/twitter.png" alt="Twitter" style={{ backgroundColor: 'white' }}></img>
              </Link>
              <Link href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
                <img src="Images/instagram.png" alt="Instagram" style={{ backgroundColor: 'white' }}></img>
              </Link>
              <Link href="https://www.pinterest.com/yourpage" target="_blank" rel="noopener noreferrer">
                <img src="Images/pinterest.png" alt="Pinterest" style={{ backgroundColor: 'white' }}></img>
              </Link>
              <Link href="https://www.youtube.com/yourpage" target="_blank" rel="noopener noreferrer">
                <img src="Images/youtube.png" alt="YouTube" style={{ backgroundColor: 'white' }}></img>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}


