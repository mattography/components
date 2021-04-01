import React from 'react';
import { createUseStyles } from 'react-jss';


const cardSize = props => {
 // eslint-disable-next-line default-case
 switch(props){
  case 'small': 
    return '900px'
  case 'large': 
    return '1200px'
 }
};

const cardDirection = props => {
  // eslint-disable-next-line default-case
  switch(props){
    case 'rtl':
      return 'row'
    case 'ltr':
      return 'row-reverse'
  }
}

const useStyles = createUseStyles({
      card: props => ({
        justifyContent: 'center',
        maxWidth: cardSize(props.cardSize),
        margin: '0 auto 20px'
      }),
      cardBody: props => ({
        display: 'flex',
        justifyContent: 'space-around',
        flexFlow: 'wrap',
        flexDirection: cardDirection(props.cardDirection)
      }),
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
      productFeatures: {
        maxWidth: '50%'
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
      '@media (max-width: 800px)': {
        productFeatures: {
          textAlign: 'center'
        }
      }
    });


      const Button = ({classes, link}) => (
            <a href={link} className={classes.buttonPrimary}>
              Find out more
            </a>   
      )
      
      const CalloutBody = ({classes, title, text, link, productImage}) => {
          return (
            <div className={classes.cardBody}>
              <div className={classes.productFeatures}>
                <h2>{title}</h2>
                <p className={classes.bodyContent}>{text}</p>
                <Button classes={classes} link={link}/>
              </div>
              <div className={classes.productImage}>
                <div style={{
                  backgroundImage: `url(${productImage})`, 
                  height: 300, 
                  width: 400, 
                  backgroundSize: 'cover'
                  }}/>
              </div>
            </div>
            )
      }
      
      const CalloutCard = (props) => {
        const classes = useStyles({...props})
        return (
            <div className={classes.card}>
              <CalloutBody 
                classes={classes} 
                title={props.title} 
                date={props.date}
                location={props.location}
                industry={props.industry}
                link={props.link}
                text={props.text}
                productImage={props.productImage}
              />
            </div>
          )
      }


export default CalloutCard;