import React from 'react';
import '../App.css';
import sponcer from '../images/sponcer 2023-04-23 152357.png';
import profile from '../images/community.jpg';
import binarytree from '../images/binarytree-1.png';
import code from '../images/code-1.png';
import contender from '../images/contenders.png';

const Body = () => {
    const margin={
        marginBottom:"30px",
    }
  return (
    <div className='App'>
        <div className='title'>
        Skills speak louder <br></br>than words
        </div>
        <div className='description'>We help companies develop the strongest tech teams around. We help<br></br>
            candidates sharpen their tech skills and pursue job opportunities.</div>
            <div className='button'>
                <div className='signup'>sign up</div>
                <div className='demo'>request demo</div>
            </div>
            <div style={margin}>Over 40% of developers worldwide and 3,000 companies use HackerRank</div>
            <div><img src={sponcer} alt='sponcer'></img></div>

            <div className='pipeline'>
                It&#x2019;s not a pipeline problem.<br></br>
                <span>It&#x2019;s a spotlight problem.</span>
            </div>
            <div>
            Tech hiring needs a reset. From prepping for jobs and practicing coding to running a<br></br>
             world-class technical interview, give developers the tools they need to showcase their<br></br>
             skills, passion, and potential.
            </div>
            <div className='buttons'>
                <div className='a'>prep</div>
                <div className='a'>screen</div>
                <div className='a'>interview</div>
            </div>
            <div className='buttoned'>
                <div className='text'>
                <div>:: Coding practice ::</div>
                <div className='desc'>Explore and expand your skills.</div>
                <div>Every idea has a first line of code. Prep for jobs and <br></br>
                sharpen your skills alongside a global community of <br></br>
                developers. Access the content you need to <br></br>
                develop new skills &#x2013; and land the job you&#x2019;ve dreamed of.</div>
                <div className='signin'>Sign up and practice</div>
                </div>
                <div><img className='imgs' src={profile} alt="profile" /></div>
            </div>
            <div className='binarytree'>
            <div className='tree'>
            <div className='titled'>Leave the binary tree behind.</div>
            <div className='descb'>Build coding questions using our library of dev-friendly <br></br>
            content that challenges them to solve <br></br>
            the problems they&#x2019;d actually tackle on the job.</div>
            <div className='link'>Start free trial </div>
            </div>
            <div><img className='binary' src={binarytree} alt="binarytree" /></div>
            </div>
            <div className='binarytree'>
            <div className='tree'>
            <div className='titled'>Focus on what really <br></br>matters: the code.</div>
            <div className='descb'>Build skills-based coding tests with tech <br>
            </br>problems a developer would encounter on the job — and <br></br>
                hire the team behind your next big idea.</div>
            <div className='link'>Start free trial </div>
            </div>
            <div><img className='binary' src={code} alt="binarytree" /></div>
            </div>
            <div className='binarytree'>
            <div className='tree'>
            <div className='titled'>Identify top contenders</div>
            <div className='descb'>Identify top contenders and invite them to meet <br></br>
            your team using data-driven decisions that help level <br></br>
            the playing field for developers everywhere.</div>
            <div className='link'>Start free trial </div>
            </div>
            <div><img className='binary' src={contender} alt="binarytree" /></div>
            </div>
            <div>
            <div className='pipeline'>
            Interview like it&#x2019;s <span>2023</span>
            </div>
            <div>Ditch out of reach and out of touch interview questions about golf balls and 747s — <br></br>
            and turn off your clunky screen share for good. Code, create, and collaborate with an <br></br>
            IDE built to showcase real-world skills in a real-world environment.</div>
            
            <div className='button'>
                <div className='signup'>learn more</div>
            </div>
            </div>
    </div>
  )
}

export default Body;