import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    card: {
        width: 280,
        display: 'block',
        margin: '60px auto',
        boxShadow: '0px 0px 2px 0px #000',
        transition: '.25s',
        '&:hover': {
          boxShadow: '0px 0px 4px 0px #000',
          transform: 'translateY(5px)'
        }
      },
      cardHeading: {
        height: 150,
        padding: 15,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        color: '#fff',
        '& h4':{
            textTransform: 'uppercase',
            margin: 0,
        }
      },
      cardBody: {
        backgroundColor: '#fff'
      },
      date: {
        fontSize: 11,
        fontWeight: 600,
        color: 'grey',
      },
      bodyContent: {
        paddingBottom: 40,
        fontSize: 13,
        lineHeight: 1.8,
      },
      buttonPrimary: {
        border: '1px solid #000',
        padding: 10,
        fontFamily: 'inherit',
        backgroundColor: '#fff',
        color: '#000',
        fontSize: 15,
        transition: '.25s',
        margin: '0 0 20px',
        borderRadius: 3,
        cursor: 'pointer',
        bottom: 20,
        position: 'relative',
        textDecoration: 'none'
      },
      designerLink: {
        color: '#fff',
        textAlign: 'center',
        fonSize: 12,
        textDecoration: 'none',
        display: 'block',
      }
    });

    const CardHeader = ({classes, image}) => {
          const style = { 
              backgroundImage: `url(${image})`,
          };
          return (
            <header style={style} className={classes.cardHeading}>
              <h4>News</h4>
            </header>
          )
      }

      const Button = ({classes, link}) => (
            <a href={link} className={classes.buttonPrimary}>
              Find out more
            </a>   
      )
      
      const CardBody = ({classes, date, title, text, link}) => {
          return classes && Object.keys(classes).length > 0 ? (
            <div className={classes.cardBody}>
              <p className={classes.date}>{date}</p>
              <h2>{title}</h2>
              <p className={classes.bodyContent}>{text}</p>
              <Button classes={classes} link={link}/>
            </div>) : null
      }
      
      const CaseStudyCard = (props) => {
        const classes = useStyles()
        return (
            <div className={classes.card}>
              <CardHeader classes={classes} image={props.image}/>
              <CardBody 
                classes={classes} 
                title={props.title} 
                date={props.date}
                location={props.location}
                industry={props.industry}
                link={props.link}
                text={props.text}
              />
            </div>
          )
      }


export default CaseStudyCard;