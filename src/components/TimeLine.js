import React from 'react'
import { createUseStyles } from 'react-jss';
import classnames from 'classnames'

const useStyles = createUseStyles({
  timeline: {
    position: 'relative',
    maxWidth: 1200,
    margin: '0 auto',
    '&:after': {
        content: '""',
        position: 'absolute',
        width: 2,
        backgroundColor: '#000',
        top: 0,
        bottom: 0,
        left: '50%',
        marginLeft: '-3px'
    }
  },
  container: {
    padding: '10px 40px',
    position: 'relative',
    backgroundColor: 'inherit',
    width: '50%',
    boxSizing: 'border-box',
    '&::after': {
        content: '""',
        position: 'absolute',
        width: 10,
        height: 10,
        right: '-7px',
        backgroundColor: '#000',
        border: '4px solid #FF9F55',
        top: 22,
        borderRadius: '50%',
        zIndex: 1,
      }
  },
  left: {
    left: 0,
    '&:before': {
        content: '""',
        height: 0,
        position: 'absolute',
        top: 22,
        width: 0,
        zIndex: 1,
        right: 30,
        border: 'medium solid white',
        borderWidth: '10px 0 10px 10px',
        borderColor: '#fff #fff #fff #333',
      }
  },
  right: {
    left: '50%',
    '&:before': {
        content: '""',
        height: 0,
        position: 'absolute',
        top: 22,
        width: 0,
        zIndex: 1,
        left: 30,
        border: 'medium solid white',
        borderWidth: '10px 10px 10px 0',
        borderColor: '#fff #333 #fff #fff',
      },
      '&:after': {
        left: '-11px',
      }
  },
  content: {
    padding: '20px 30px',
    backgroundColor: 'white',
    position: 'relative',
    borderRadius: 6,
    border: '1px solid #242526'
  }, 
  '@media screen and (max-width: 600px)': {
    timeline:{
        '&:after': {
            left: 20,
        }
    },
    container: {
        width: '100%',
        paddingLeft: 70,
        paddingRight: 25,
        '&:before': {
            left: 60,
            border: 'medium solid black',
            borderWidth: '10px 10px 10px 0',
            borderColor: '#fff #333 #fff #fff',
        }
    },
    left:{
        '&:after':{
            left: 9
        }
    },
    right:{
        left: '0%',
        '&:after':{
            left: 9
        }
    }
  }
});

const events = [
    {
        date: "03 Mar 2021 02:33:00 EST",
        details: "Something happened here."
    },
    {
        date: "05 Mar 2021 04:33:00 EST",
        details: "Another event happened."
    },
    {
        date: "06 Mar 2021 01:33:00 EST",
        details: "Something big happened here to announce."
    }
];
const Timeline = () => {
    const classes = useStyles()
    return (
        <div className={classes.timeline}>
        {events.map((item, i) => (
                <div className={classnames(classes.container, i % 2 === 0 ? classes.left : classes.right)}>
                    <div className={classes.content}>
                    <h2>{new Date(item.date).toLocaleDateString("en-US")}</h2>
                    <p>{item.details}</p>
                    </div>
                </div>
        ))}
        </div>
    )
}

export default Timeline;