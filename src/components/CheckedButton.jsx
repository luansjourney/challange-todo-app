import {motion, useMotionValue, useTransform} from 'framer-motion';


const boxVariants = {
    checked: {
        background: 'var(--primaryPurple)',
        transition: {
            duration: .1
        },
    },
    unchecked: {
        background: 'var(--gray-1)',
        transition: {
            duration: .1
        },
    }
}

const checkVariants = {
    initial: {
        color: '#fff',
    },
    checked: {
        pathLength: 1,
    },
    unchecked: {
        pathLength: 0,
    },
}


function CheckedButton( {checked, handleCheck }) {
    const pathLength = useMotionValue(0);
    const opacity = useTransform(pathLength, [.05, .15], [0,1]);

  return (
    <motion.div className='svgBox' 
        variants={boxVariants}
        animate={checked ? 'checked' : 'unchecked'} 
        onClick={handleCheck}
    >
        <motion.svg
         className='svg'
         viewBox='0 0 53 38'
         fill='none'
         xmlns="http://www.w3.org/2000/svg">
            <motion.path
                variants={checkVariants}
                animate={checked ? 'checked' : 'unchecked'}
                style={{pathLength, opacity}}
                fill="none"
                strokeMiterlimit="10"
                strokeWidth="6"
                d="M1.5 22L16 36.5L51.5 1"
                strokeLinejoin="round"
                strokeLinecap="Round" />
         </motion.svg>
    </motion.div>
  )
}

export default CheckedButton