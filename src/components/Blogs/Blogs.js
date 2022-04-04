import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-lg-5 mx-2 py-4'>
            <h3 className='fw-bold'> Difference between inline and inline-block?</h3>
            <p><span className='fw-bold'>Inline:</span> does not respect the width, height, padding and margin of the object, in other words, if you specify width, it may overlap with neighbor elements. <br />

                 <span className='fw-bold'>Inline-block:</span> supports sizing (will shift surrounding elements) supports padding and margins. <br />

               <span className='fw-bold'>  Example:</span> we use Inline-block for  element when we want to change the style of A to looks like a regular button.</p>
               <h3 className='fw-bold'> 
                 What does the context API does?
               </h3>
            <p>
            This means that the component with that data has another child component, again in that child component we usually send data from one component to another in the reaction. In that case the data of one component has to be sent to another child component as props. Often there is a situation where the child component is much lower than our main component where your data is.That means that data component has another child component, again that child component has another child component. There may be many children doing this. Now we are the main component or what we call top levelIf we want to take the data from the component to a child component below many levels, then we have to take the help of the parent of that child component and the parent of that parent in the data component or up to the top level component to pass the data. It can be said to be like digging up data.
            .But we can send data directly through context op without repeatedly props down.Context provide a way to pass data through the component tree without having to pass props down manually at every level.
            </p>
        </div>
    );
};

export default Blogs;