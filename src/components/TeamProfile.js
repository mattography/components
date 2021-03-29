import React from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

const useStyles = createUseStyles({
    person: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        width: 280,
      },
      container: {
        borderRadius: '50%',
        height: 312,
        webkitTapHighlightColor: 'transparent',
        transform: 'scale(0.48)',
        transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
        width: 400,
        '&:hover': {
          transform: 'scale(0.54)',
          '& img':{
            transform: 'scale(1)',
          },
          '&  $profile':{
              transform: 'translateY(-100px) scale(1.5)'
          }
        }
      },
      containerInner: {
        clipPath: "path('M 390,400 C 390,504.9341 304.9341,590 200,590 95.065898,590 10,504.9341 10,400 V 10 H 200 390 Z')",
        position: 'relative',
        transformOrigin: '50%',
        top: '-200px',
      },
      circle: {
        backgroundColor: '#fee7d3',
        borderRadius: '50%',
        cursor: 'pointer',
        height: 380,
        left: 10,
        pointerEvents: 'none',
        position: 'absolute',
        top: 210,
        width: 380,
      },
      img: {
        pointerEvents: 'none',
        position: 'relative',
        transform: 'translateY(20px) scale(1.15)',
        transformOrigin: '50% bottom',
        transition: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)'
      },
      profile: {
        top: 164,
        transform: 'scale(1.3)',
        '-webkit-backface-visibility': 'hidden',
        '-webkit-transform-style': 'preserve-3d'
      },
      divider: {
        backgroundColor: '#ca6060',
        height: 1,
        width: 160,
      },
      name: {
        color: '#404245',
        fontSize: 36,
        fontWeight: 600,
        marginTop: 16,
        textAlign: 'center',
      },
      title: {
        color: '#6e6e6e',
        fontFamily: 'arial',
        fontSize: 14,
        fontStyle: 'italic',
        marginTop: 4,
      }
    });

      
      const TeamProfile = (props) => {
        const classes = useStyles()
        return (
            <div className={classes.person}>
              <div className={classes.container}>
                <div className={classes.containerInner}>
                  <img
                  alt="background"
                    className={classes.circle}
                    src={props.background}
                  />
                  <img
                  alt="profile"
                    className={classnames(classes.img, classes.profile)}
                    src={props.profile}
                  />
                </div>
              </div>
              <div className={classes.divider}></div>
              <div className={classes.name}>{props.first} {props.last}</div>
              <div className={classes.title}>Developer</div>
          </div>
         
          )
      }


export default TeamProfile;