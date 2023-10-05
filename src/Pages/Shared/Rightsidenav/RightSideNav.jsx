import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const RightSideNav = () => {
    return (
        <div>
            <div className='mb-3'>
                <h2 className="text-2xl mb-3">Login with</h2>
                <button className="btn btn-outline">
                    <FaGoogle></FaGoogle>
                   Log In with Google
                 
                </button>

                <button className="btn btn-outline">
                    <FaGithub></FaGithub>
                    Log In with Github
                 
                </button>

                
            </div>

            <div className='mb-3 mt-5'>
                <h2 className="text-2xl mb-3">Find On Us</h2>
            
               <a href='' className='p-4 flex gap-4'>
                <FaFacebook></FaFacebook>Facebook
               </a>

               <a href='' className='p-4 flex gap-4'>
                
              <FaTwitter></FaTwitter> Twitter
               </a>

               <a href='' className='p-4 flex gap-4'>
               <FaInstagram></FaInstagram> Instagram
               </a>
            </div>

            <div>
                <h2 className='text-2xl font-bold text-center'>Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
           
                
               
            
        </div>
    );
};

export default RightSideNav;